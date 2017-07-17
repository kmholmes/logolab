// Name
// Input
// Code
// Output

function setup() {
    // code block
    createCanvas(2000, 2000)
}

function draw() {
    
    // upper left square
    noStroke();
    fill("#FF3216")
    rect(30, 20, 55, 55);
    
    //upper right square
    noStroke();
    fill("#5AC155")
    rect(90, 20, 55, 55);
    
    //lower right square 
    noStroke();
    fill("#FFD028")
    rect(90, 80, 55, 55);
    
    //lower left square
    noStroke();
    fill("#7ADBFF")
    rect(30, 80, 55, 55);
    
    //big green square
    noStroke();
    fill("#5AC155")
    rect(175, 20, 115, 115);   
    
    //big navy square
    noStroke();
    fill("#15274C")
    rect(325, 20, 115, 115); 
    
    //horizontal red rectangle
    noStroke();
    fill("red")
    rect(550, 20, 30, 115);
    
    //vertical red rectangle
    noStroke();
    fill("red")
    rect(510, 63, 115, 30);
    
    //big blue square
    noStroke();
    fill("#135996")
    rect(675, 20, 115, 115); 
    
    //top red horizontal rectangle
    rect(110)
    
    //small blue box
    noStroke();
    fill("#135996")
    rect(875, 20, 50, 50);
    
}
