let columSize, rowSize, colum1, colum2, colum3, row1, row2, row3,index,x,y,size,col,thing;

let gridX = [];
let gridY = [];


function setup() {
  createCanvas(600, 600);
  background('#FFFFFF');
  rectMode(CENTER);
  angleMode(DEGREES);
  
  x = 100;
  y = 100;
  size = 100;
  thing = new mySquare(x,y,size);
  
  columSize = width/3;
  rowSize = height/3;
  
  colum1 = 0;
  colum2 = columSize;
  colum3 = columSize*2;
  
  row1 = 0;
  row2 = rowSize;
  row3 = rowSize*2;
  
  index = 0;
  
  gridX = [colum1,colum1,colum1,colum2,colum3,colum3,colum3,colum2];
  gridY = [row1,row2,row3,row3,row3,row2,row1,row1];
   gridX2 = [colum3,colum3,colum3,colum2,colum1,colum1,colum1,colum2];
  gridY2 = [row3,row2,row1,row1,row1,row2,row3,row3];

}

function draw() {
  background(255);
  frameRate(2);
  stroke('black');
  fill('black');
  rect(gridX[index],gridY[index], columSize*1.9, rowSize*1.9);
  stroke('black');
  fill('black');
  rect(gridX2[index],gridY2[index], columSize*1.9, rowSize*1.9);
  index++;
  
  if (index > 7)
    {
      index = 0; 
    }
  
  thing.display();

}