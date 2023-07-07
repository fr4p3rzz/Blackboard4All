
// Canvas for drawing
var canvas = document.createElement('canvas');
canvas.width = stage.width() / xBoardOffset;
canvas.height = stage.height() / yBoardOffset;
  
// Initialize blackboard
var blackboard = new Konva.Image({
  image: canvas,
  x: 0,
  y: 0,
  fill: backgroundColor
});
drawLayer.add(blackboard);  

// Good. Now we need to get access to context element
var context = canvas.getContext('2d');
context.strokeStyle = strokeColor;
context.lineJoin = 'round';
context.lineWidth = 5;

// Checkers for drawing style
var isDrawing = false;
var isDrawingRect = false;
var isDrawingCircle = false;
var isDrawingLine = true;

var lastPointerPosition;

var rect = null;
var circle = null;

// now we need to bind some events
// we need to start drawing on mousedown
// and stop drawing on mouseup
blackboard.on('mousedown touchstart', function () 
{
  isDrawing = true;
  lastPointerPosition = stage.getPointerPosition();

  if(isDrawingRect)
  {
    rect = new Konva.Rect({
      x: lastPointerPosition.x,
      y: lastPointerPosition.y,
      width: 10,
      height: 10,
      stroke: strokeColor,
    }),

    uiDynamicLayer.add(rect).batchDraw();
    rect.cache();
  }

  if(isDrawingCircle)
  {
    circle = new Konva.Circle({
      x: lastPointerPosition.x,
      y: lastPointerPosition.y,
      radius: 20,
      stroke: strokeColor,
    }),

    uiDynamicLayer.add(circle).batchDraw();
    circle.cache();
  }
});

// will it be better to listen move/end events on the window?

stage.on('mouseup touchend', function () 
{
  isDrawing = false;  
});

// and core function - drawing
stage.on('mousemove touchmove', function () 
{
  if (!isDrawing) 
  {
    return;
  }
  
  if(isDrawingLine)
  {
    context.globalCompositeOperation = 'source-over';
    context.beginPath();
  
    var localPos = {
      x: lastPointerPosition.x - blackboard.x(),
      y: lastPointerPosition.y - blackboard.y(),
    };
  
    context.moveTo(localPos.x, localPos.y);
    var pos = stage.getPointerPosition();
    localPos = {
      x: pos.x - blackboard.x(),
      y: pos.y - blackboard.y(),
    };
  
    context.lineTo(localPos.x, localPos.y);
    context.closePath();
    context.stroke();
  
    lastPointerPosition = pos;

    drawLayer.batchDraw();
  }

  else if(isDrawingRect)
  {
    const newWidth = stage.getPointerPosition().x;
    const newHeight = stage.getPointerPosition().y;

    rect.width(newWidth)
    rect.height(newHeight);
    uiDynamicLayer.batchDraw();
  }

  else if(isDrawingCircle)
  {
    const run = Math.pow(stage.getPointerPosition().x);
    const rise = Math.pow(stage.getPointerPosition().y);
    const newRadius = Math.sqrt(run + rise);

    circle.radius(newRadius);
    uiDynamicLayer.batchDraw();
  }

});

function UpdateDrawingValues(strokeStyle = white, lineJoin = 'round', lineWidth = strokeDimension, BlackboardColor = black)
{
  context.strokeStyle = strokeColor;
  context.lineJoin = 'round';
  context.lineWidth = lineWidth;   
  blackboard.setAttr('fill', BlackboardColor);   
}

