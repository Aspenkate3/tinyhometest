const SPRITE_WIDTH = 200;
const SPRITE_HEIGHT = 200;
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

var spriteSheetURL = 'imgur.com/min/embed.js';
var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;

var position = spritePositionToImagePosition(1, 0);

image.onload = function() {
    context.drawImage(
        image,
        // LOOK!
        // we use the position from 
        // spritePositionToImagePosition
        // to start at an offset
        // into the spritesheet!
        1,
        1,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        0,
        0,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
};
