$(function () {
  let depA = $(".gnb_depth1 > a");
  let headerH = $("header").outerHeight();
  $(".gnb_depth1").mouseover(function () {
    let i = $(this).index();
    $(".depth2_wrap").css("display", "none");
    $(".depth2_wrap").eq(i).css("display", "block");
    depA.css({ color: "#000" });
    depA.eq(i).css("color", "#00589e");
    $(".gnb_depth1").eq(i).find(".depth_wrap").show();
    $("gnb_depth1").find(".depth2").slideUp();
    $(".gnb_depth1").eq(i).slideDown();
    $(".logo >a >img").attr("src", "images/logoOver.png");
    $("header").addClass("hLine");
    $("header").css({ background: "#fff" });
    $(".top_util").css("background", "#f5f5f5");
    $(".topLogin_btn").css("color", "#666");
    $(".topSitemap_btn").css("color", "#666");
    $(".lang_button").css("color", "#666");
    $(".popup_topClose").css("color", "#666");
    $(".airportMove_btn").css({ color: "#666", "border-color": "#dbdee1" });
    $(".uSearch").css("background-image", "url('images/ico_topSearch_black.png')");
    $(".greenBg").removeClass("highlight");
    let depH = $(".depth2_wrap").eq(i).outerHeight();
    $("header").outerHeight(headerH + depH);
    $(".popup_topClose").addClass("headOver");
  });
  $(".gnb_depth1").mouseleave(function () {
    $(".gnb_depth1").eq(i).find(depA).css("color", "black");
  });
  $("header").mouseleave(function () {
    $(".depth2_wrap").css("display", "none");
    $(".logo >a >img").attr("src", "images/logo.png");
    $("header").css({ background: "rgba(0, 0, 0, 0.15)" });
    $(".top_util").css("background", "rgba(0,0,0,0.35)");
    $(".topLogin_btn").css("color", "#fff");
    $(".topSitemap_btn").css("color", "#fff");
    $(".lang_button").css("color", "#fff");
    $(".popup_topClose").css("color", "#fff");
    $(".airportMove_btn").css({ color: "#fff", "border-color": "#fff" });
    $(".uSearch").css("background-image", "url('images/ico_topSearch_white.png')");
    $(".greenBg").addClass("highlight");
    $("header").removeClass("hLine");
    $("header").outerHeight(headerH);
    depA.css("color", "#fff");
    $(".popup_topClose").removeClass("headOver");
  });
});
