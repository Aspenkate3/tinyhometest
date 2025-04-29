const SPRITE_WIDTH = 20;
const SPRITE_HEIGHT = 10;
const BORDER_WIDTH = 1;
const SPACING_WIDTH = 1;

function spritePositionToImagePosition(row, col) {
    return {
        x: (
            BORDER_WIDTH +
            col * (SPACING_WIDTH + SPRITE_WIDTH)
        ),
        y: (
            BORDER_WIDTH +
            row * (SPACING_WIDTH + SPRITE_HEIGHT)
        )
    }
}

var canvas = document
            .querySelector('canvas');
var context = canvas
              .getContext('2d');

var spriteSheetURL = "https://i.ibb.co/kgw2qBDB/2025-04-28-13n-Kleki.png";
var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;

var position = spritePositionToImagePosition(1, 0);

image.onload = function() {
    drawtile(450,9);
};

function drawtile(x,y,type){
  context.drawImage(
        image,
        0,
        0,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        x,
        y,
        SPRITE_WIDTH*5,
        SPRITE_HEIGHT*5
    );
  
}
