// Konva stage
const stage = new Konva.Stage({
    container: 'konva-holder',
    width: width,
    height: height,
  });


// layers of the stage
const drawLayer = new Konva.Layer();
const uiStaticLayer = new Konva.Layer();
const uiDynamicLayer = new Konva.Layer();

stage.add(drawLayer);
stage.add(uiStaticLayer);
stage.add(uiDynamicLayer);

