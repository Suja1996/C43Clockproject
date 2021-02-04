function setup() {
  createCanvas(800,800);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
 // drawSprites();
  
  hr = hour();
  min = minute();
  sec = second();
  angleMode(DEGREES)
  secangle=map(sec,0,60,0,360)
  minangle=map(min,0,60,0,360)
  hrangle=map(hr%12,0,12,0,360)
  console.log(hrangle)
  translate(400,400);
  rotate(-90)
  //second hand
  push ()
  rotate(secangle)
  stroke("green");
  strokeWeight(10)
  line(0,0,110,0)
  pop ()

push ()
  rotate(minangle)
  stroke("blue");
  strokeWeight(10)
  line(0,0,100,0)

  pop ()


  rotate(hrangle)
  stroke("red");
  strokeWeight(10)
  line(0,0,60,0)
  
noFill ()
  stroke("green");
    arc(0,0,300,300,0,secangle);
    //Minutes
    stroke("blue");
    arc(0,0,280,280,0,minangle);
    //Hour
    stroke("red");
    arc(0,0,260,260,0,hrangle);

}