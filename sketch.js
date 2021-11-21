function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(ball.colors[0])
  circle(ball.x,ball.y,ball.rad);
  ball.x=ball.x+ball.Xspeed;
  ball.y=ball.y+ball.Yspeed;
}

var ball={
x:200,
y:200,
rad:15,
Xspeed:5,
Yspeed:5,
colors:["red","orange","green","blue"]
}