canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function circle(x,y,color){
	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = 5;
	ctx.arc(x, y, 40, 0, 2*Math.PI);
	ctx.stroke()
}
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();
circle(250,210,"blue");
circle(300,250,"orange");
circle(350,210,"black");
circle(400,250,"green");
circle(450, 210,"red");
