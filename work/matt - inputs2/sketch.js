let name, month, day;

let nInput, mInput, dInput;

let submit;

let winterP1 = '#2be7d9';
let winterP2 = '#2e34da';

let winterB1 = '#1ca7fc';
let winterB2 = '#166ffb';

let springY1 = '#fffb37';
let springY2 = '#ae15ff';

let springO1 = '#ffac06';
let springO2 = '#62f962';

let summerB1 = '#4ef9c6';
let summerB2 = '#ff4e4e';

let summerR1 = '#fbff52';
let summerR2 = '#0098ff';

let fallR1 = '#feb313';
let fallR2 = '#be25f4';

let fallP1 = '#ff3911';
let fallP2 = '#760cd8';

function setup() {
  createCanvas(1200, 800);
    
    background(0);
    
    name = createElement('h3', 'name');
    name.position(50, 5);
    name.style('color', 'white');
    
    nInput = createInput();
    nInput.position(50, 50);
    
    name = createElement('h3', 'birth month');
    name.position(250, 5);
    name.style('color', 'white');
   
    mInput = createInput();
    mInput.position(250, 50);
    
    name = createElement('h3', 'morning person or night owl');
    name.position(450, 5);
    name.style('color', 'white');
    
    dInput = createInput();
    dInput.position(450, 50);
    
    submit = createButton('submit');
    submit.position(650, 50);
    submit.mousePressed(show);
}

function draw() {
    
}

// shows results when 'submit' is pressed
function show() {
    console.log('submit');
    
    let season = mInput.value();
    
    if (season=="september" || season=="october" || season=="november") {
        background(hexWithAlpha('#ff3911'));
    }
    if (season=="december" || season=="january" || season=="february") {
        background(hexWithAlpha('#745cfb'));
    }
    if (season=="march" || season=="april" || season=="may") {
        background(hexWithAlpha('#ae15ff'));
    }
    if (season=="june" || season=="july" || season=="august") {
        background(hexWithAlpha('#ff4e4e'));
    }
    
    bgSquares();
    
    circles((width/2), (height/2));
    
    squareRow((width/2), (height/2));
}

function squareRow(centerX, centerY) {
    let season = mInput.value();
    
    
    if (season=="september" || season=="october" || season=="november") {
        drawSquare(centerX+175, centerY, 50, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        drawSquare(centerX-175, centerY, 50, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        
        drawSquare(centerX+100, centerY, 100, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        drawSquare(centerX-100, centerY, 100, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        
        drawSquare(centerX, centerY, 150, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
    }
    
    if (season=="december" || season=="january" || season=="february") {
        drawSquare(centerX+175, centerY, 50, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        drawSquare(centerX-175, centerY, 50, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        
        drawSquare(centerX+100, centerY, 100, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        drawSquare(centerX-100, centerY, 100, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        
        drawSquare(centerX, centerY, 150, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
    }
    
    if (season=="march" || season=="april" || season=="may") {
        drawSquare(centerX+175, centerY, 50, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        drawSquare(centerX-175, centerY, 50, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        
        drawSquare(centerX+100, centerY, 100, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        drawSquare(centerX-100, centerY, 100, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        
        drawSquare(centerX, centerY, 150, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
    }
    
    if (season=="june" || season=="july" || season=="august") {
        drawSquare(centerX+175, centerY, 50, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        drawSquare(centerX-175, centerY, 50, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        
        drawSquare(centerX+100, centerY, 100, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        drawSquare(centerX-100, centerY, 100, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        
        drawSquare(centerX, centerY, 150, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
    }
}

function circles(centerX, centerY) {
    let name = nInput.value().length;
    let circle1 = name*20;
    let circle2 = name*30;
    let circle3 = name*40;
    
    noFill();
    
    let day = dInput.value();
    
    if (day == 'morning person') {
        stroke(255);
    }
    if (day == 'night owl') {
        stroke(0);
    }
    
    circle(centerX, centerY-circle1, circle1);
    circle(centerX+circle1, centerY, circle1);
    circle(centerX, centerY+circle1, circle1);
    circle(centerX-circle1, centerY, circle1);
    
    circle(centerX, centerY-circle2, circle2);
    circle(centerX, centerY+circle2, circle2);
    
    circle(centerX, centerY-circle3, circle3);
    circle(centerX, centerY+circle3, circle3);
    
    circle(centerX-circle3, centerY, circle3);
    circle(centerX+circle3, centerY, circle3);
}

function bgSquares() {
    let season = mInput.value();
    
    if (season=="september" || season=="october" || season=="november") {
        drawSquare((width/2)-400, (height/2), 600, 45, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
        drawSquare((width/2)-200, (height/2), 600, 45, hexWithAlpha(fallR1, 0.7), hexWithAlpha(fallR2, 0.7));
        
        drawSquare((width/2)+400, (height/2), 600, 45, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
        drawSquare((width/2)+200, (height/2), 600, 45, hexWithAlpha(fallR1, 0.7), hexWithAlpha(fallR2, 0.7));
        drawSquare((width/2), (height/2), 600, 45, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {
        drawSquare((width/2)-400, (height/2), 600, 45, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
        drawSquare((width/2)-200, (height/2), 600, 45, hexWithAlpha(winterB1, 0.7), hexWithAlpha(winterB2, 0.7));
        
        drawSquare((width/2)+400, (height/2), 600, 45, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
        drawSquare((width/2)+200, (height/2), 600, 45, hexWithAlpha(winterB1, 0.7), hexWithAlpha(winterB2, 0.7));
        drawSquare((width/2), (height/2), 600, 45, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {
        drawSquare((width/2)-400, (height/2), 600, 45, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
        drawSquare((width/2)-200, (height/2), 600, 45, hexWithAlpha(springO1, 0.7), hexWithAlpha(springO2, 0.7));
        
        drawSquare((width/2)+400, (height/2), 600, 45, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
        drawSquare((width/2)+200, (height/2), 600, 45, hexWithAlpha(springO1, 0.7), hexWithAlpha(springO2, 0.7));
        drawSquare((width/2), (height/2), 600, 45, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {
        drawSquare((width/2)-400, (height/2), 600, 45, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
        drawSquare((width/2)-200, (height/2), 600, 45, hexWithAlpha(summerB1, 0.7), hexWithAlpha(summerB2, 0.7));
        
        drawSquare((width/2)+400, (height/2), 600, 45, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
        drawSquare((width/2)+200, (height/2), 600, 45, hexWithAlpha(summerB1, 0.7), hexWithAlpha(summerB2, 0.7));
        drawSquare((width/2), (height/2), 600, 45, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
    }
}

function drawSquare(xCoord, yCoord, size, rotationAngle, from, to) {
	push();
	translate(xCoord, yCoord);
	angleMode(DEGREES);
	rotate(rotationAngle);
	for(var i = 0; i < size; i++) {
        noStroke();
        fill(lerpColor(color(from), color(to), (i/size)));
        rectMode(CORNER);
        rect(i-(size/2), 0-(size/2), 1, size);
    }
	pop();
}

function hexWithAlpha(hex, alpha) {
	var r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16);

	if(alpha) {
		return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
	} else {
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
}