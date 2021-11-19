
let array = []


function setup() {
  createCanvas(1200, 1000);
  background('#DCD1B8');
 
 
}

function draw() {

  if (mouseIsPressed) {
   
    r = map(mouseX, 0, 600, 0, 255);
    g = map(mouseY, 0, 400, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);
  
    fill(r, g, b, 300);
   stroke(0);
    
}
    if (mouseIsPressed) {
        quad(mouseX, mouseY, mouseX + 25, mouseY - 30 , mouseX +5, mouseY );
    }
    
  
  
    stroke(frameCount %360, 75, 100);

   
    x = mouseX;
    y = mouseY;
    px = pmouseX;
    py = pmouseY;
  
  

}


function keyTyped(){

    if (key === 's'){
  //    save this image
    saveCanvas('sketch', 'png');
    }
    else if (key === 'c'){
  //    clear the canvas
  
    clear();
    background('#DCD1B8')
     
    return false;
  
  
    }
}
    
  







