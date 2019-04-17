let name, month, live, pets, org;

let nInput, mInput, lInput, pInput, oInput;

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
    
    month = createElement('h3', 'birth month');
    month.position(250, 5);
    month.style('color', 'white');
   
    mInput = createInput();
    mInput.position(250, 50);
    
    live = createElement('h3', 'city, country, or suburbs');
    live.position(450, 5);
    live.style('color', 'white');
    
    lInput = createInput();
    lInput.position(450, 50);
    
    pets = createElement('h3', 'cats, dogs, both, or neither');
    pets.position(700, 5);
    pets.style('color', 'white');
    
    pInput = createInput();
    pInput.position(700, 50);
    
    org = createElement('h3', 'messy or organized');
    org.position(50, 100);
    org.style('color', 'white');
    
    oInput = createInput();
    oInput.position(50, 150);
    
    submit = createButton('submit');
    submit.position(250, 150);
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
    
    shapes((width/2), (height/2));
    
    squareRow((width/2), (height/2));
}

function squareRow(centerX, centerY) {
    let season = mInput.value();
    
    let align = oInput.value();
    
    let rand1;
    let rand2;
    let rand3;
    let rand4;
    let rand5;
    
    if (align == "messy") {
        //randX = random(250, 650);
        rand1 = random(250, 650);
        rand2 = random(250, 650);
        rand3 = random(250, 650);
        rand4 = random(250, 650);
        rand5 = random(250, 650);
    } else {
        rand1 = centerY;
        rand2 = centerY;
        rand3 = centerY;
        rand4 = centerY;
        rand5 = centerY;
    }
    
    
    if (season=="september" || season=="october" || season=="november") {
        drawSquare(centerX+175, rand1, 50, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        drawSquare(centerX-175, rand2, 50, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        
        drawSquare(centerX+100, rand3, 100, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        drawSquare(centerX-100, rand4, 100, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        
        drawSquare(centerX, rand5, 150, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
    }
    
    if (season=="december" || season=="january" || season=="february") {
        drawSquare(centerX+175, rand1, 50, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        drawSquare(centerX-175, rand2, 50, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        
        drawSquare(centerX+100, rand3, 100, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        drawSquare(centerX-100, rand4d, 100, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        
        drawSquare(centerX, rand5, 150, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
    }
    
    if (season=="march" || season=="april" || season=="may") {
        drawSquare(centerX+175, rand1, 50, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        drawSquare(centerX-175, rand2, 50, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        
        drawSquare(centerX+100, rand3, 100, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        drawSquare(centerX-100, rand4, 100, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        
        drawSquare(centerX, rand5, 150, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
    }
    
    if (season=="june" || season=="july" || season=="august") {
        drawSquare(centerX+175, rand1, 50, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        drawSquare(centerX-175, rand2, 50, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        
        drawSquare(centerX+100, rand3, 100, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        drawSquare(centerX-100, rand4, 100, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        
        drawSquare(centerX, rand5, 150, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
    }
}

function shapes(centerX, centerY) {
    let name = nInput.value().length;
    
    let life = lInput.value();
    
    let prox = pInput.value();
    let dist;
    if (prox == "cats") {
        dist = 100;
    } else if (prox == "dogs") {
        dist = -50;
    } else if (prox == "both" || prox == "neither") {
        dist = 0;
    }
    
    stroke(255);
    noFill();
    if (name%2 == 0) {
        console.log('even');
        
        if (life == "country") {
            circle(centerX, centerY-(100+dist), 100); //top
            circle(centerX+(100+dist), centerY, 100); //right
            circle(centerX, centerY+(100+dist), 100); //bottom
            circle(centerX-(100+dist), centerY, 100); //left

            circle(centerX, centerY-(150+dist), 150); //top
            circle(centerX, centerY+(150+dist), 150); //bottom

            circle(centerX, centerY-(250+dist), 250); //top
            circle(centerX, centerY+(250+dist), 250); //bottom

            circle(centerX-(250+dist), centerY, 250); //left
            circle(centerX+(250+dist), centerY, 250); //right
            
        } else if (life == "city") {
            let square1 = 200;
            let square2 = 300;
            let square3 = 500;
            
            rect(centerX-(square1/2), centerY-(square1+dist), square1, square1); //top
            rect(centerX+dist, centerY-(square1/2), square1, square1); //right
            rect(centerX-(square1/2), centerY+dist, square1, square1); //bottom
            rect(centerX-(square1+dist), centerY-(square1/2), square1, square1); //left
            
            rect(centerX-(square2/2), centerY-(square2+dist), square2, square2); //top
            rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
            
            rect(centerX-(square3/2), centerY-(square3+dist), square3, square3); //top
            rect(centerX+dist, centerY-(square3/2), square3, square3); //right
            rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
            rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
            
        } else if (life == "suburbs") {
            polygon(centerX, centerY-(100+dist), 100, 10); //top
            polygon(centerX+(100+dist), centerY, 100, 10); //right
            polygon(centerX, centerY+(100+dist), 100, 10); //bottom
            polygon(centerX-(100+dist), centerY, 100, 10); //left

            polygon(centerX, centerY-(150+dist), 150, 10); //top
            polygon(centerX, centerY+(150+dist), 150, 10); //bottom
            
            polygon(centerX, centerY-(250+dist), 250, 10); //top
            polygon(centerX, centerY+(250+dist), 250, 10); //right
            polygon(centerX-(250+dist), centerY, 250, 10); //bottom
            polygon(centerX+(250+dist), centerY, 250, 10); //left
        }
        
    } else {
        console.log('odd');
        
        if (life == "country") {
            circle(centerX, centerY-(50+dist), 50); //top
            circle(centerX+(100+dist), centerY, 100); //right
            circle(centerX, centerY+(100+dist), 100); //bottom
            circle(centerX-(100+dist), centerY, 100); //left

            circle(centerX, centerY-(75+dist), 75); //top
            circle(centerX, centerY+(150+dist), 150); //bottom

            circle(centerX, centerY-(125+dist), 125); //top
            circle(centerX, centerY+(250+dist), 250); //bottom

            circle(centerX-(250+dist), centerY, 250); //left
            circle(centerX+(250+dist), centerY, 250); //right
            
        } else if (life == "city") {
            let square1 = 200;
            let square1_2 = square1/2;
            let square2 = 300;
            let square2_2 = square2/2;
            let square3 = 500;
            let square3_2 = square3/2;
            
            rect(centerX-(square1_2/2), centerY-(square1_2+dist), square1_2, square1_2); //top
            rect(centerX+dist, centerY-(square1/2), square1, square1); //right
            rect(centerX-(square1/2), centerY+dist, square1, square1); //bottom
            rect(centerX-(square1+dist), centerY-(square1/2), square1, square1); //left
            
            rect(centerX-(square2_2/2), centerY-(square2_2+dist), square2_2, square2_2); //top
            rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
            
            rect(centerX-(square3_2/2), centerY-(square3_2+dist), square3_2, square3_2); //top
            rect(centerX+dist, centerY-(square3/2), square3, square3); //right
            rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
            rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
            
        } else if (life == "suburbs") {
            polygon(centerX, centerY-(50+dist), 50, 10); //top
            polygon(centerX+(100+dist), centerY, 100, 10); //right
            polygon(centerX, centerY+(100+dist), 100, 10); //bottom
            polygon(centerX-(100+dist), centerY, 100, 10); //left

            polygon(centerX, centerY-(75+dist), 75, 10); //top
            polygon(centerX, centerY+(150+dist), 150, 10); //bottom
            
            polygon(centerX, centerY-(125+dist), 125, 10); //top
            polygon(centerX, centerY+(250+dist), 250, 10); //right
            polygon(centerX-(250+dist), centerY, 250, 10); //bottom
            polygon(centerX+(250+dist), centerY, 250, 10); //left
        }
    }
}

function bgSquares() {
    let season = mInput.value();
    
    let range = oInput.value();
    console.log(range);
    
    let rand1;
    let rand2;
    let rand3;
    let rand4;
    let rand5;
    
    if (range == "messy") {
        rand1 = random(250, 650);
        rand2 = random(250, 650);
        rand3 = random(250, 650);
        rand4 = random(250, 650);
        rand5 = random(250, 650);
    } else {
        rand1 = height/2;
        rand2 = height/2;
        rand3 = height/2;
        rand4 = height/2;
        rand5 = height/2;
    }
    
    if (season=="september" || season=="october" || season=="november") {
        drawSquare((width/2)-400, rand1, 600, 45, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
        drawSquare((width/2)-200, rand2, 600, 45, hexWithAlpha(fallR1, 0.7), hexWithAlpha(fallR2, 0.7));
        
        drawSquare((width/2)+400, rand3, 600, 45, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
        drawSquare((width/2)+200, rand4, 600, 45, hexWithAlpha(fallR1, 0.7), hexWithAlpha(fallR2, 0.7));
        drawSquare((width/2), rand5, 600, 45, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {
        drawSquare((width/2)-400, rand1, 600, 45, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
        drawSquare((width/2)-200, rand2, 600, 45, hexWithAlpha(winterB1, 0.7), hexWithAlpha(winterB2, 0.7));
        
        drawSquare((width/2)+400, rand3, 600, 45, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
        drawSquare((width/2)+200, rand4, 600, 45, hexWithAlpha(winterB1, 0.7), hexWithAlpha(winterB2, 0.7));
        drawSquare((width/2), rand5, 600, 45, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {
        drawSquare((width/2)-400, rand1, 600, 45, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
        drawSquare((width/2)-200, rand2, 600, 45, hexWithAlpha(springO1, 0.7), hexWithAlpha(springO2, 0.7));
        
        drawSquare((width/2)+400, rand3, 600, 45, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
        drawSquare((width/2)+200, rand4, 600, 45, hexWithAlpha(springO1, 0.7), hexWithAlpha(springO2, 0.7));
        drawSquare((width/2), rand5, 600, 45, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {
        drawSquare((width/2)-400, rand1, 600, 45, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
        drawSquare((width/2)-200, rand2, 600, 45, hexWithAlpha(summerB1, 0.7), hexWithAlpha(summerB2, 0.7));
        
        drawSquare((width/2)+400, rand3, 600, 45, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
        drawSquare((width/2)+200, rand4, 600, 45, hexWithAlpha(summerB1, 0.7), hexWithAlpha(summerB2, 0.7));
        drawSquare((width/2), rand5, 600, 45, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
    }
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
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