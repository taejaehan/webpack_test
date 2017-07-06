// entry.js
// import p5 from "p5";
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

// import * as d3 from 'd3';
// const square = d3.selectAll("rect");
// square.style("fill", "orange");
// require('./members/taejaehan.js');
// require('./members/');
// import * as things from './members/';

console.log('ENTRY');
// var p5 = require('p5');
var aow = require('./aow.js');
// window.aow = aow;
// console.log(aow);
// var app = new p5(aow.sketch, document.body);


// function requireAll(r) { 
//   r.keys().forEach(r); 
// }
// requireAll(require.context('./members/', true, /\.js$/));

