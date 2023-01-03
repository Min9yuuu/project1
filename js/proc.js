let minNumA = parseInt($(".minNumA").text());
let minNumB = parseInt($(".minNumB").text());
let minNumC = parseInt($(".minNumC").text());
let minNumD = parseInt($(".minNumD").text());

minResult = minNumA + minNumB + minNumC + minNumD;

$(".totalMin").html(minResult);

if (minNumA <= 20) {
  $(".step1 > div").css("background-color", "#589ce4");
} else if (minNumA <= 30) {
  $(".step1 > div").css("background-color", "#62d144");
} else if (minNumA <= 40) {
  $(".step1 > div").css("background-color", "#f98f39");
} else {
  $(".step1 > div").css("background-color", "#d93436");
}

if (minNumB <= 3) {
  $(".step2 > div").css("background-color", "#589ce4");
} else if (minNumB <= 5) {
  $(".step2 > div").css("background-color", "#62d144");
} else if (minNumB <= 7) {
  $(".step2 > div").css("background-color", "#f98f39");
} else {
  $(".step2 > div").css("background-color", "#d93436");
}

if (minNumC <= 20) {
  $(".step3 > div").css("background-color", "#589ce4");
} else if (minNumC <= 30) {
  $(".step3 > div").css("background-color", "#62d144");
} else if (minNumC <= 40) {
  $(".step3 > div").css("background-color", "#f98f39");
} else {
  $(".step3 > div").css("background-color", "#d93436");
}

let humanMove = true;

function moveAni() {
  if (humanMove == true) {
    $(".humen").css("background-position-x", "100%");
    humanMove = false;
  } else {
    $(".humen").css("background-position-x", "0%");
    humanMove = true;
  }
}
setInterval(moveAni, 500);

let date = new Date();
let hours = date.getHours();
let minute = date.getMinutes();
let ampm = hours >= 12 ? "pm" : "am";

$(".std_time > strong").html(`${ampm} ${hours}:${minute}`);

$(".std_type > button").eq(0).addClass("std_on");
$('.std_type > button').click(function(e){
  e.preventDefault();
  let tg = $(this);
  $(".std_type > button").removeClass("std_on");
  tg.addClass("std_on");
});