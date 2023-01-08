$(function () {
  let bgImg = $(".bg_slide").find(".introBg");
  let btn = $(".slideBtn").find(".slideDot");

  let current = 0;
  let btnIdx = 0;
  let id;
  btn.click(function () {
    btnIdx = $(this).index();
    btn.removeClass("on");
    $(this).addClass("on");
    bgChange();
  });

  function bgChange() {
    current = btnIdx;
    bgImg.removeClass("imgOn");
    bgImg.eq(current).addClass("imgOn");
  }
  timer();
  function timer() {
    id = setInterval(function () {
      let next = current + 1;
      if (next == bgImg.length) {
        next = 0;
      }
      btn.eq(next).trigger("click");
    }, 5000);
  }
  clearAuto();
  function clearAuto() {
    let restart = true;
    $(".dotCtrl").click(function () {
      if (restart) {
        $(".dotCtrl").css({ "background-position-x": "100%"});
        clearInterval(id);
        restart = false;
      } else {
        timer();
        restart = true;
        $(".dotCtrl").css({"background-position":"0 0"});
      }
    });
    btn.mouseenter(function () {
      clearInterval(id);
    });
    btn.mouseleave(function () {
      timer();
    });
  }
});
