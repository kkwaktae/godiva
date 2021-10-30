$(function () {

  var mySlider = $("#event_con").bxSlider({
    mode: "horizontal", // 수평방향으로 이동합니다
    speed: 500, // 이동속도(500=0.5초)
    pager: false, // 페이징표시제어 숨김
    moveSlides: 1, // 이동 슬라이드 수
    slideWidth: 750, // 각 슬라이드 폭
    minSlides: 3, // 최소 노출 슬라이드 수
    maxSlides: 3, // 최대 노출 슬라이드 수
    auto: true, // 자동슬라이드 여부 (false 시 자동 x)
    autoHover: true, // 마우스 오버시 자동 정지
    controls: false, // 이전 다음 버튼을 숨긴다
  });


  $(".prev_btn").click(function () {
    mySlider.goToPrevSlide();
    return false;
  });

  $(".next_btn").click(function () {
    mySlider.goToNextSlide();
    return false;
  });
  
});