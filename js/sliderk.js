$(window).on('load', function(){
	$('.slider').slider();
});


/* global jQuery */
(function ($) {
  'use strict'

  var Slider = window.Slider || {}

  Slider = (function () {
    function Slider (el, settings) {
      var _ = this

      _.defaults = {
        speed: 1000,
        delay: 3000,
        autoplay: true,
        pauseonhover: true,
        navigation: true,
        pagination: true,
        initialslide: 1,
        metric: '%',
        width: '100%',
        height: 'auto',
        slidertype: 'slide',
        direction: 'right',
        responsive: true,
        buttons: {
          prev: "<div class='prev slider-buttons'></div>",
          next: "<div class='next slider-buttons'></div>"
        }
      }
      _.markup = {
        $slider: $(el),
        $slidercontainer: null,
        $slides: null,
        $btnprev: null,
        $btnnext: null,
        $dots: [],
        $dotscontainer: null,
        slidewidth: null
      }
      _.options = $.extend({}, _.defaults, settings)
      _.init()
    }

    return Slider
  }())

  Slider.prototype.init = function () {
    var _ = this
    _.setup()

    if (_.options.autoplay === true) {
      _.startSlider()
    }
  }

  Slider.prototype.setup = function () {
    var _ = this

    // create and store slider container
    _.markup.$slider.wrap("<div class='slider-container'></div>")
    _.markup.$slidercontainer = _.markup.$slider.parent()

    // duplicate initial slide for smooth transitions
    _.markup.$slider.append(_.markup.$slider.children('li')[_.options.initialslide - 1].outerHTML)

    // get slides
    _.markup.$slides = _.markup.$slider.children('li')

    // set slider container width
    _.markup.$slidercontainer.width(_.options.width)

    // set slider width
    _.markup.$slider.width(_.markup.$slides.length * 100 + _.options.metric)

    // set slide width
    _.markup.$slides.width(_.markup.$slider.width() / _.markup.$slides.length)

    // set slider container height
    if (_.options.height === 'auto') {
      var minimumHeight = 99999
      _.markup.$slides.each(function () {
        if ($(this).height() < minimumHeight) {
          minimumHeight = $(this).height()
        }
      })
      _.markup.$slidercontainer.height(minimumHeight)
    } else {
      _.markup.$slidercontainer.height(_.options.height)
    }

    // set single slide width
    _.markup.slidewidth = _.markup.$slidercontainer.width()

    // add slider navigation
    if (_.options.navigation === true) {
      _.markup.$slidercontainer.append(_.options.buttons.prev, _.options.buttons.next)
      _.markup.$btnprev = _.markup.$slidercontainer.find('.prev')
      _.markup.$btnnext = _.markup.$slidercontainer.find('.next')
      _.markup.$btnprev.on('click', $.proxy(_.slide, _, true, 'left', null))
      _.markup.$btnnext.on('click', $.proxy(_.slide, _, true, 'right', null))
    }

    // add slider pagination
    if (_.options.pagination === true) {
      for (var i = 1; i < _.markup.$slides.length; i++) {
        _.markup.$dots.push("<li class='dot' data-number='" + i + "'></li>")
      }
      var pagination = ''

      $.each(_.markup.$dots, function () {
        pagination += this
      })

      _.markup.$slidercontainer.append("<ul class='pagination-container'>" + pagination + '</ul>')

      _.markup.$dotscontainer = _.markup.$slidercontainer.find('.pagination-container')

      // set first slide active
      _.markup.$dotscontainer.children('li').eq(0).addClass('active')

      // add click event to pagination dots
      _.markup.$dotscontainer.children('li').on('click', function () {
        var slideNumber = parseInt($(this).attr('data-number'), 10)
        _.slide(true, '', slideNumber)
      })
    }

    if (_.options.responsive === true) {
      _.resizeSlider()
      $(window).on('resize orientationchange', $.proxy(_.responsive, _))
    }
  }

  Slider.prototype.resizeSlider = function () {
    var _ = this
    // if provided pixel width is bigger then window width, make slidercontainer width 100%
    if ($(window).width() <= parseInt(_.options.width, 10)) {
      _.markup.$slidercontainer.width('100%')
    } else {
      _.markup.$slidercontainer.width(_.options.width)
    }
  }

  Slider.prototype.responsive = function () {
    var _ = this
    var minimumHeight = 99999
    _.resizeSlider()
    _.pauseSlider()

    if (_.markup.$slider.is(':animated')) {
      _.markup.$slider.stop(true, true)
    }

    _.markup.$slides.width(_.markup.$slider.width() / _.markup.$slides.length)
    _.markup.slidewidth = _.markup.$slidercontainer.width()

    var slidePoint = _.markup.slidewidth * (_.options.initialslide - 1)

    _.markup.$slider.css({'margin-left': -slidePoint})

    _.markup.$slides.each(function () {
      if ($(this).height() < minimumHeight) {
        minimumHeight = $(this).height()
      }
    })

    if (minimumHeight < parseInt(_.options.height, 10) || _.options.height === 'auto') {
      _.markup.$slidercontainer.height(minimumHeight)
    }

    if (_.options.autoplay === true) {
      _.startSlider()
    }
  }

  Slider.prototype.pauseSlider = function () {
    var _ = this
    clearInterval(_.interval)
  }

  Slider.prototype.startSlider = function () {
    var _ = this
    _.sliderInit()
  }

  Slider.prototype.sliderInit = function () {
    var _ = this
    switch (_.options.slidertype) {
      case 'slide':
        _.slide()
        break
    }
  }

  Slider.prototype.slide = function (immediate, direction, frame) {
    var _ = this
    direction = direction || _.options.direction

    if (immediate === true) {
      if (!_.markup.$slider.is(':animated')) {
        _.pauseSlider()
        _.slideTransition(direction, frame)
      }
    } else {
      _.pauseSlider()
      _.interval = setInterval($.proxy(_.slideTransition, _, direction), _.options.delay)
    }
  }

  Slider.prototype.slideTransition = function (direction, frame) {
    var _ = this
    var slidePos

    if (direction === 'left') {
      slidePos = frame ? '-' + _.markup.slidewidth * (frame - 1) : '+=' + _.markup.slidewidth
      // check if slider is on the first slide - if true, move to last slide
      if (_.options.initialslide === 1) {
        _.markup.$slider.css({'margin-left': '-' + (_.markup.$slides.length - 1) * _.markup.slidewidth + 'px'})
        _.options.initialslide = _.markup.$slides.length
      }
      _.markup.$slider.animate(
        {'margin-left': slidePos + 'px'},
        _.options.speed,
        function () {
          if (frame) {
            _.options.initialslide = frame
          } else {
            _.options.initialslide--
          }
          _.updateDots(_.options.initialslide)
          if (_.options.autoplay === true) {
            _.startSlider()
          }
        }
      )
    } else {
      slidePos = frame ? '-' + _.markup.slidewidth * (frame - 1) : '-=' + _.markup.slidewidth
      // check if slider is on the last slide - if true, move to beginning
      if (_.options.initialslide === _.markup.$slides.length) {
        _.markup.$slider.css({'margin-left': 0})
        _.options.initialslide = 1
      }
      _.markup.$slider.animate(
        {'margin-left': slidePos + 'px'},
        _.options.speed,
        function () {
          if (frame) {
            _.options.initialslide = frame
          } else {
            _.options.initialslide++
          }
          _.updateDots(_.options.initialslide)
          if (_.options.autoplay === true) {
            _.startSlider()
          }
        }
      )
    }
  }

  Slider.prototype.updateDots = function (slideNumber) {
    var _ = this

    if (slideNumber === _.markup.$slides.length) {
      slideNumber = 1
    }

    _.markup.$dotscontainer.children('li.active').removeClass('active')
    _.markup.$dotscontainer.find("[data-number='" + slideNumber + "']").addClass('active')
  }

  $.fn.slider = function (args) {
    this.slider = new Slider(this, args)
  }
})(jQuery)
