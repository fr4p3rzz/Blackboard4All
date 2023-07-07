// Initialize squares with positions
var xPos = 0;
var yPos = 0;

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

    xPos = initialX - (xPositionTranslate * row);
    yPos = initialY + (yPositionTranslate * col);

    CreateColorTile(xPos, yPos, colorPalette[i])
}

var paletteFinalPosY = yPos + 100

for(let i = 0, row = 0, col = 0; i < shapes.length; i++)
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

    xPos = initialX - (xPositionTranslate * row);
    yPos = paletteFinalPosY + (yPositionTranslate * col);

    CreateShape(shapes[i], xPos, yPos);
}