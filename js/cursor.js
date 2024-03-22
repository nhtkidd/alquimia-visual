document.addEventListener("DOMContentLoaded", function () {
  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.pageX - (-55);
    mouseY = e.pageY - 80;
  });

  setInterval(function () {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;
    document.querySelector("#ball").style.left = xp + "px";
    document.querySelector("#ball").style.top = yp + "px";
  }, 20);
});


