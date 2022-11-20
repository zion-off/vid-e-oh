function fadepanel1() {
  $(".panel-1").fadeOut("3000");
  setTimeout(() => {
    $(".panel-2").fadeIn("3000");
    $(".panel-1").css("visibility", "hidden");
  }, 3000)
  $(".panel-2").css("visibility", "visible");
}

function fadepanel2(element) {
  $(".panel-2").fadeOut("3000");
  setTimeout(() => {
    $(".panel-3").fadeIn("3000");
    $(".panel-2").css("visibility", "hidden");
  }, 3000)
  $(".panel-3").css("visibility", "visible");
  $('#step-1').get(0).stopVideo();
}

function fadepanel3() {
  $(".panel-3").fadeOut("3000");
  setTimeout(() => {
    $(".panel-4").fadeIn("3000");
    $(".panel-3").css("visibility", "hidden");
  }, 3000)
  $(".panel-4").css("visibility", "visible");
  $('#step-2').get(0).stopVideo();
}

function fadepanel4() {
  $(".panel-4").fadeOut("3000");
  setTimeout(() => {
    $(".panel-5").fadeIn("3000");
    $(".panel-4").css("visibility", "hidden");
  }, 3000)
  $(".panel-5").css("visibility", "visible");
  $('#step-3').get(0).stopVideo();
}