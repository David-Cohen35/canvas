document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas")
  canvasEl.height = 500;
  canvasEl. width = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(20, 150, 150, 100);

  ctx.beginPath();
  ctx.arc(198, 55, 50, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 5;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.moveTo(150, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.strokeStyle = "red";
  ctx.fillStyle = "orange";
  ctx.lineWidth = 8;
  ctx.fill();
});
