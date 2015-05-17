var img;

function preload() {
	img = loadImage("img/a.png");
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);

	image(img, 0, 0);
}

function draw() {
	
	
	// ellipse(mouseX, mouseY,10,10);
	
	var color = get(mouseX, mouseY,50,50);
	image(color, mouseX, mouseY);
	
	// fill(color);
	// rect(windowWidth-100,windowHeight-100,50,50);
}