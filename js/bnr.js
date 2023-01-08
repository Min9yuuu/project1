$(function () {
  let list = $("#banner");
  const total = list.find("li").length;
  // total = li 갯수
  const li_width = list.find("li").eq(0).outerWidth();
  // li_width = li width
  const copyObj = list.find("li").clone();
  // li clone
  list.append(copyObj);
  // li 추가

  let num = 0;
  $(".bnr_next").click(function () {
    if (num == total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num++;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
    return false;
  });
  $(".bnr_prev").click(function () {
    if (num == -total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num--;
    list.stop().animate({ "margin-left": li_width * num }, 500);
    return false;
  });
  function autoPlay() {
    if (num == total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num++;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
  }
  let auto = setInterval(autoPlay, 4000);
  let toggle = true;
  $("button.bnr_ctrl").click(function () {
    if (toggle == true) {
      clearInterval(auto);
      $("button.bnr_ctrl").css({ "background-image": "url(images/ico_cirPlay_white.png)" });
      toggle = false;
    } else {
      auto = setInterval(autoPlay, 4000);
      $("button.bnr_ctrl").css({ "background-image": "url(images/ico_cirPause_white.png)" });
      toggle = true;
    }
  });


  $("button.bnr_close").click(function () {
    if($("#bnr_wrap").css('display')=='block'){
      $("#bnr_wrap").slideUp(200);
      $(".popup_topClose").css({ "background-image": "url(images/ico_cirArrB_red.png)" });
    }

  });


  $(".popup_topClose").click(function(){
    if ($("#bnr_wrap").css("display") == "block") {
      $("#bnr_wrap").slideUp(200);
      $(".popup_topClose").css({ "background-image": "url(images/ico_cirArrB_red.png)" });
    } else {
      $("#bnr_wrap").slideDown(200);
      $(".popup_topClose").css({ "background-image": "url(images/ico_cirArrA.png)" });
    }
  });
});
