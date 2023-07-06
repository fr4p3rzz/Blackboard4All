
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

var isPaint = false;
var lastPointerPosition;
var mode = 'brush';

// now we need to bind some events
// we need to start drawing on mousedown
// and stop drawing on mouseup
blackboard.on('mousedown touchstart', function () {
  isPaint = true;
  lastPointerPosition = stage.getPointerPosition();
});

// will it be better to listen move/end events on the window?

stage.on('mouseup touchend', function () {
  isPaint = false;
});

// and core function - drawing
stage.on('mousemove touchmove', function () {
  if (!isPaint) {
    return;
  }

  if (mode === 'brush') {
    context.globalCompositeOperation = 'source-over';
  }
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
  // redraw manually
  drawLayer.batchDraw();
});

function UpdateDrawingValues(strokeStyle = white, lineJoin = 'round', lineWidth = strokeDimension, BlackboardColor = black)
{
  context.strokeStyle = strokeColor;
  context.lineJoin = 'round';
  context.lineWidth = lineWidth;   
  blackboard.setAttr('fill', BlackboardColor);   
}

