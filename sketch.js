var hr;
var min;
var sec;
//var scAngle;


function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(0); 
  hr = hour();
  min = minute();
  sec = second();
  console.log(sec);
  angleMode(DEGREES);
  scAngle = map(sec , 0 , 60 , 0 , 360);
  minAngle = map(min , 0 , 60 , 0 , 360);
  hrAngle = map(hr , 0 , 12 , 0 , 360);

//to create the seconds hand
  push();
  translate(400,200);
  angleMode(DEGREES); 
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(2);
  line(0,0,0,-150);
  pop();

//to create the minutes hand
  push();
  translate(400,200);
  angleMode(DEGREES); 
  rotate(minAngle);
  stroke(255,0,0);
  strokeWeight(4);
  line(0,0,0,-150);
  pop();


//to create the hour hand
  push();
  translate(400,200);
  angleMode(DEGREES); 
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(6);
  line(0,0,0,-90);
  pop();

  push();
  translate(400,200);
  rotate(30);
  text("1",0,-150); 
  rotate(30);
  text("2",0,-150); 
  rotate(30);
  text("3",0,-150); 
  rotate(30);
  text("4",0,-150); 
  rotate(30);
  text("5",0,-150);
  rotate(30);
  text("6",0,-150); 
  rotate(30);
  text("7",0,-150);
  rotate(30);
  text("8",0,-150); 
  rotate(30);
  text("9",0,-150); 
  rotate(30);
  text("10",0,-150); 
  rotate(30);
  text("11",0,-150);  
  rotate(30);
  text("12",0,-150); 
  pop();
  
  translate(400,200);
  rotate(-90);
  
  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  arc(0,0,220,220,0,scAngle);
  
  stroke(150,100,255);
  arc(0,0,240,240,0,minAngle);

  stroke(150,255,100);
  arc(0,0,260,260,0,hrAngle);



  drawSprites();

 
}