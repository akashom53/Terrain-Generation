var w = window.innerWidth;
var h = window.innerHeight;

var rows, cols;
var gridSize = w*2;
var cellSize = 20;


var speed = 0.1;
var flight = 0;

var terrainMap = [];

function setup(){
	createCanvas(w, h, WEBGL);

	rows = gridSize / cellSize;
	cols = (gridSize / 2) / cellSize;

	
}

function draw() {
	var yOff = 0;
	for (var row = 0; row < rows; row++){
		var xOff = flight;
		terrainMap[row] = [];
		for (var col = 0; col < cols; col++){
			terrainMap[row][col] = map(noise(xOff, yOff), 0, 1, -200, 200);
			xOff += 0.1;
		}
		yOff += 0.1;
	}

	flight -= speed;

	translate(-gridSize/2, -h/2, -1000);
	rotateX(PI/2.8);
	background(0, 0, 0);
	// stroke(255);
	// strokeWeight(1);
	// noFill();
	// fill(255,255,255,100);
	// directionalLight (255, 255, 255, -1, 0, 0.25);

  	// pointLight(200, 200, 200, 0, 0, 0);
	// ambientLight(250);
	specularMaterial('green');

	// noStroke();
	for (var col = 0; col < cols; col++){
		beginShape(TRIANGLE_STRIP);
		for (var row = 0; row < rows; row++){
			vertex(row * cellSize, col * cellSize, terrainMap[row][col]);
			vertex(row * cellSize, (col+1) * cellSize, terrainMap[row][col + 1]);
		}
		endShape();
	}
}