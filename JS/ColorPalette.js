// This is the order in which colors will be displayed. Colors are initialized on settings.js


function CreateColorTile(x, y, color)
{
    var tile = new Konva.Rect({
        width: tileWidth,
        height: tileHeight,
        fill: color,
        x: x,
        y: y,
        stroke: black,
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