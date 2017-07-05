// entry.js
import p5 from "p5";
// var modu = require('./modu');
// var taejaehan = require('./taejaehan');
// document.write(modu + ', ' + taejaehan + '!');

// var modu = require('./modu.js');

// window.setup = modu.setup;
// window.draw = modu.draw;

// main(window);
// function main(window) {
// 	console.log('main');
//     window.setup = drawing.setup;
//     window.draw  = drawing.draw;
// }
// var position = { x : 0, y : 0}; // radian , length
// var velocity = { rad : Math.PI * 0.25, len : 1};
// function setup() {
// 	console.log('setup');
// 	createCanvas(window.innerWidth, window.innerHeight);
// }
// function draw() {
// 	console.log('draw');
// 	if(mouseIsPressed) velocity.rad = Math.random() * Math.PI * 2.0;
// 	position.x += velocity.len * Math.cos(velocity.rad);
// 	position.y += velocity.len * Math.sin(velocity.rad);
// 	ellipse(position.x, position.y, 80, 80);
// }

// setup();
// update();

// var p5 = require('p5');
var modu = require('./modu.js');
var app = new p5(modu.sketch, document.body);

import * as d3 from 'd3';
const square = d3.selectAll("rect");
square.style("fill", "orange");

// var p5 = require('p5');

// function sketch(p) {
//   p.setup = function() {
//     p.createCanvas(p.windowWidth, p.windowHeight);
//     p.background(0);
//   }

//   p.draw = function() {
// 	  if (p.mouseIsPressed) {
// 	    p.fill(0);
// 	  } else {
// 	    p.fill(255);
// 	  }
//     p.ellipse(p.mouseX, p.mouseY, 80, 80);
//   }
// }

// var app = new p5(sketch, document.body);