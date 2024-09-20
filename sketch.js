function setup() {
    createCanvas(500, 500);
    background("blue");
  }
  
  function draw() {
    stroke("#E91E63");
    fill("#00BCD4");
    
    
    if(mouseIsPressed) {
    rect(mouseX,mouseY,20,20);
    }
  }