
var myPiano;
var myTrumpet;
var myDrums;

var myPianoImage;
var myTrumpetImage;
var myDrumsImage;

var analyserPiano;


function preload(){
  myPiano = loadSound('./assets/PIANO.mp3');
  myTrumpet = loadSound('./assets/TRUMPET.mp3');
  myDrums = loadSound('./assets/DRUM.mp3');

  myPianoImage = loadImage('./assets/piano-01.png');
  myTrumpetImage = loadImage('./assets/trumpet-01.png');
  myDrumsImage = loadImage('./assets/drums-01.png');
}

function setup() {

    createCanvas(windowWidth,windowHeight);

    analyserPiano = new p5.Amplitude();
    analyserPiano.setInput(myPiano);

    analyserTrumpet = new p5.Amplitude();
    analyserTrumpet.setInput(myTrumpet);

    analyserDrums = new p5.Amplitude();
    analyserDrums.setInput(myDrums);

}

function draw() {

  background(40);



    //rettangoli
    if ( mouseX > 0 && mouseX < width/3 ) {
      rect(0,0,width/3,height);
      stroke(40);
      strokeWeight(30);
      fill('orange');
    //if ( myPiano.isPlaying() == false ) {
    //myPiano.play(); //loop() to loop the song
    //}
    } else if ( mouseX > width/3 && mouseX < width/3*2) {
      rect(width/3,0,width/3,height);
      stroke(40);
      strokeWeight(30);
      fill('red');
    //if ( myTrumpet.isPlaying() == false ) {
    //  myTrumpet.play(); //loop() to loop the song
    //}
    } else if(mouseX > width/3*2 && mouseX < width) {
      rect(width/3*2,0,width/3,height);
      stroke(40);
      strokeWeight(30);
      fill('brown');
      //if ( myDrums.isPlaying() == false ) {
      //myDrums.play(); //loop() to loop the song
    //}
    };
    push();
    //piano
    /*noStroke();
    fill('grey');
    ellipse(width/6,height/2,40);*/
    var volumePiano = analyserPiano.getLevel();
    volumePiano = map(volumePiano, 0, 1, 50, height);
    /*var myPianoampl = map(mouseX, 0, height, 0, width/6);
    map
    myPiano.amp(myPianoampl);*/
    imageMode(CENTER);
    image(myPianoImage, width/6, height/2, myPianoImage.width*volumePiano/60, myPianoImage.height*volumePiano/60 );


    //trumpet
    /*noStroke();
    fill('grey');
    ellipse(width/2,height/2,40);*/
    var volumeTrumpet = analyserTrumpet.getLevel();
    volumeTrumpet = map(volumeTrumpet, 0, 1, 50, height);
    imageMode(CENTER);
    image(myTrumpetImage,width/2,height/2, myTrumpetImage.width*volumeTrumpet/60, myTrumpetImage.height*volumeTrumpet/60);

    //drums
    /*noStroke();
    fill('grey');
    ellipse(width/6*5,height/2,40);*/
    var volumeDrums = analyserDrums.getLevel();
    volumeDrums = map(volumeDrums, 0, 1, 50, height);
    imageMode(CENTER);
    image(myDrumsImage, width/6*5, height/2, myDrumsImage.width*volumeDrums/60, myDrumsImage.height*volumeDrums/60 );

    pop();


  push();
  var myText01 = 'Your Personal Jazz Trio';
  textFont('Bree Serif');
  textAlign(CENTER);
  textSize(100);
  noStroke();
  fill('#ffffff');
  text(myText01, width/2, 100);
  pop();

  push();
  var myText02 = 'Click on the instruments to play and pause them';
  textFont('Bree Serif');
  textAlign(CENTER);
  textSize(30);
  noStroke();
  fill('#ffffff');
  text(myText02, 840, 150);
  pop();


}

function mousePressed() {

  if(myPiano.isPlaying()==false && mouseX > 0 && mouseX < width/3 ) {
    myPiano.loop(); }
  else if (myPiano.isPlaying() == true && mouseX > 0 && mouseX < width/3 ) {
    myPiano.stop();
  }

  if (myTrumpet.isPlaying()==false && mouseX > width/3 && mouseX < width/3*2) {
    myTrumpet.loop();
  } else if (myTrumpet.isPlaying() == true && mouseX > width/3 && mouseX < width/3*2 ) {
    myTrumpet.stop();
  }

  if (myDrums.isPlaying()==false && mouseX > width/3*2 && mouseX < width) {
    myDrums.loop();
  } else if (myDrums.isPlaying() == true && mouseX > width/3*2 && mouseX < width) {
    myDrums.stop();
  }

}
