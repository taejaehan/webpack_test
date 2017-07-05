// modu.js
// module.exports = 'MODU AOW';
// require('p5');
// var position = { x : 0, y : 0}; // radian , length
// var velocity = { rad : Math.PI * 0.25, len : 1};

// module.exports = {
//     setup: function() {
//         // createCanvas(500, 500);
//         // noFill();
//         // stroke(0);
//         // console.log('setup');
// 		// createCanvas(window.innerWidth, window.innerHeight);
// 		// createCanvas(500, 500);
//     },
    
//     draw: function() {
//         // background(145);
//         // ellipse(mouseX, mouseY, 100, 100);
//         // console.log('draw');

// 		// if(mouseIsPressed) velocity.rad = Math.random() * Math.PI * 2.0;
// 		// position.x += velocity.len * Math.cos(velocity.rad);
// 		// position.y += velocity.len * Math.sin(velocity.rad);
// 		// ellipse(position.x, position.y, 80, 80);
//     }
// };

// var p5 = require('p5');
module.exports = {
    sketch : function(p) {
        var position = { x : 0, y : 0}; // radian , length
        var velocity = { rad : Math.PI * 0.25, len : 1};
        p.setup = function() {
            // p.createCanvas(p.windowWidth, p.windowHeight);
            // p.background(0);
            p.createCanvas(p.windowWidth, p.windowHeight);
        }

        p.draw = function() {
            // if (p.mouseIsPressed) {
            //     p.fill(0);
            // } else {
            //     p.fill(255);
            // };
            // p.ellipse(p.mouseX, p.mouseY, 80, 80);
            if(p.mouseIsPressed) velocity.rad = Math.random() * Math.PI * 2.0;
            position.x += velocity.len * Math.cos(velocity.rad);
            position.y += velocity.len * Math.sin(velocity.rad);
            p.ellipse(position.x, position.y, 80, 80);
        }
    }
}
