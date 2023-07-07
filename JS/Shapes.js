function CreateShape(shape, x, y)
{
    if(shape == Konva.Circle)
    {
        CreateCircle(shape, x, y)
    }
    else if(shape == Konva.Line)
    {
        CreateLine(shape, x, y)
    }
    else if(shape == Konva.Rect)
    (
        CreateRect(shape, x, y)
    )
}

function CreateRect(shape, x, y)
{
    const rect = new shape({
        x: x,
        y: y,
        width: tileWidth,
        height: tileHeight,
        stroke: shapesIconColor
    }).moveTo(uiStaticLayer);

    rect.cache();

    rect.on("click", () => {
        isDrawingRect = true;
        isDrawingLine = false;
        isDrawingCircle = false;
    })
}

function CreateCircle(shape, x, y)
{
    const circle = new shape({
        x: x + tileWidth / 2,
        y: y + tileWidth / 2,
        radius: tileWidth / 2,
        stroke: shapesIconColor
    }).moveTo(uiStaticLayer);

    circle.on("click", () => {
        isDrawingRect = false;
        isDrawingLine = false;
        isDrawingCircle = true;
    })

    circle.cache();
}

function CreateLine(shape, x, y)
{
    const line = new shape({
        x: x,
        y: y + tileWidth,
        stroke: shapesIconColor,
        strokeWidth: 5,
        lineCap: 'round',
        points: [0, 0, 0, 0, 50, -40]
    }).moveTo(uiStaticLayer);

    line.on("click", () => {
        isDrawingRect = false;
        isDrawingLine = true;
        isDrawingCircle = false;
    })

    line.cache()
}