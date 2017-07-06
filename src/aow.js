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

// var i = 0;
// function requireAll(r) { 
    
//     r.keys().forEach(r); 
// }
// requireAll(require.context('./members/', true, /\.js$/));
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
var modules = requireAll(require.context("./members", true, /^\.\/.*\.js$/));
var moduleLength = modules.length;
console.log('AOW');
console.log(modules);


function Mover(p) {
  this.position = p.createVector(p.random(p.width),p.random(p.height));
  this.velocity = p.createVector();
  this.acceleration = p.createVector();
  this.topspeed = 5;

  this.update = function() {
    var i = 0;
    var that = this;
    // Compute a vector that points from position to mouse
    var mouse = p.createVector(p.mouseX,p.mouseY);
    that.acceleration = p5.Vector.sub(mouse,that.position);
    
    modules.forEach(function(m){
        // console.log(m);
        // console.log(i);
        var minX = p.width/moduleLength * (i);
        var maxX = p.width/moduleLength * (i+1);
        if(minX < that.position.x  && maxX > that.position.x){
            m.update(p, that);
        }
        i++;
    });
    
    // Set magnitude of acceleration
    // this.acceleration.setMag(0.2);

    // this.velocity.add(this.acceleration);
    // this.velocity.limit(this.topspeed);
    // this.position.add(this.velocity);
  };

  this.display = function() {
    var that = this;
    var i = 0;
    modules.forEach(function(m){
        // console.log(m);
        // console.log(i);
        var minX = p.width/moduleLength * (i);
        var maxX = p.width/moduleLength * (i+1);
        if(minX < that.position.x  && maxX > that.position.x){
            m.draw(p, that);
        }
        i++;
    });
    // p.stroke(0);
    // p.strokeWeight(2);
    // p.fill(127);
    // p.ellipse(that.position.x, that.position.y, 48, 48);
  };
}
var movers = [];
var p5 = require('p5');

var sketch = function(p){
    var position = { x : 0, y : 0}; // radian , length
    var velocity = { rad : Math.PI * 0.25, len : 1};
    p.setup = function() {
        // p.createCanvas(p.windowWidth, p.windowHeight);
        // p.background(0);
        p.createCanvas((p.windowWidth), p.windowHeight);
        for (var i = 0; i < 20; i++) {
            movers[i] = new Mover(p); 
        }
        modules.forEach(function(m){
            // p.width = (p.width/moduleLength) * (i+1);
            m.setup(p);
        });
    }

    p.draw = function() {
        // if (p.mouseIsPressed) {
        //     p.fill(0);
        // } else {
        //     p.fill(255);
        // };
        // p.ellipse(p.mouseX, p.mouseY, 80, 80);
        // if(p.mouseIsPressed) velocity.rad = Math.random() * Math.PI * 2.0;
        // position.x += velocity.len * Math.cos(velocity.rad);
        // position.y += velocity.len * Math.sin(velocity.rad);
        // p.ellipse(position.x, position.y, 80, 80);
        // console.log(p.width);
         
        
        // if (p.mouseIsPressed) {
        //     p.fill('orange');
        // } else {
        //     p.fill('gray');
        // }
        // p.ellipse(p.mouseX, p.mouseY, 80, 80);
 
        p.background(51);
        // modules.forEach(function(m){
        //     console.log(m);
        //     console.log(i);
        //     i++
        //     m.draw(p, movers);
        // });
        
        for (var i = 0; i < movers.length; i++) {
            movers[i].update();
            movers[i].display(); 
        }
    }
}
var app = new p5(sketch, document.body);
module.exports = [app];

// export function sketch(p) {
//     var position = { x : 0, y : 0}; // radian , length
//     var velocity = { rad : Math.PI * 0.25, len : 1};
//     p.setup = function() {
//         // p.createCanvas(p.windowWidth, p.windowHeight);
//         // p.background(0);
//         p.createCanvas((p.windowWidth / 5), p.windowHeight);
//     }

//     p.draw = function() {
//         // if (p.mouseIsPressed) {
//         //     p.fill(0);
//         // } else {
//         //     p.fill(255);
//         // };
//         // p.ellipse(p.mouseX, p.mouseY, 80, 80);
//         if(p.mouseIsPressed) velocity.rad = Math.random() * Math.PI * 2.0;
//         position.x += velocity.len * Math.cos(velocity.rad);
//         position.y += velocity.len * Math.sin(velocity.rad);
//         p.ellipse(position.x, position.y, 80, 80);
//         // console.log(p.width);
//     }
// }
