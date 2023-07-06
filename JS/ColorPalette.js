// This is the order in which colors will be displayed. Colors are initialized on settings.js
const colorPalette = [
    white,
    black,
    blue,
    violet,
    green,
    red,
    yellow,
    orange,
    pink   
];

var tiles = [];

// Initialize square with positions
for(let i = 0, row = 0, col = 0; i < colorPalette.length; i++)
{   
    if(i == 0 || i % 3 != 0)
    {
        row++ 
    }
    else
    {
        col++;
        row = 1;
    }

    CreateColorTile(initialX - (xPositionTranslate * row), initialY + (yPositionTranslate * col), colorPalette[i])
}

function CreateColorTile(x, y, color)
{
    var tile = new Konva.Rect({
        width: cPWidth,
        height: cPHeight,
        fill: color,
        x: x,
        y: y,
        opacity: startingOpacity
    }).moveTo(uiStaticLayer);

    tiles.push(tile);

    tile.on("click", () => {
        strokeColor = color;
        UpdateDrawingValues(strokeColor);

        ResetOpacity();
        tile.setAttr('opacity', onClickOpacity);
    });

    tile.cache()
}

function ResetOpacity()
{
    for(let i = 0; i < tiles.length; i++)
    {
        tiles[i].setAttr('opacity', startingOpacity);
    }
}