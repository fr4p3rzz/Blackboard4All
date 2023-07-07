// Screen settings
const width = window.innerWidth;
const height = window.innerHeight;
const offsetX = 10;
const offsetY = 10;

// Blackboard settings
var backgroundColor = '#000000';
var strokeColor = '#FFFFFF';
var strokeDimension = 5;
const xBoardOffset = 1.2;
const yBoardOffset = 1.1;

// General UI settings
const tileWidth = 50;
const tileHeight = 50;
const initialX = width - (tileWidth + offsetX);
const initialY = 0;
const shapesIconColor = 'blue';

// Color palette settings
const xPositionTranslate = tileWidth + offsetX;
const yPositionTranslate = tileHeight + offsetY;
const startingOpacity = 0.6;
const onClickOpacity = 1;
const blue = '#002B4D';
const red = '#7C292A';
const green = '#2B5329';
const violet = '#873EF3';
const yellow = '#F3B800';
const orange = '#A34100';
const pink = '#FFC0CB';
const black = '#000000';
const white = '#FFFFFF';
var tiles = [];
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

// Shape icon settings
const shapes = [
    Konva.Rect,
    Konva.Circle,
    Konva.Line,
];