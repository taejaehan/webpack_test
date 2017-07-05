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

window.onload = function () {

var canvas = document.getElementById('defaultCanvas0'),
  context = canvas.getContext('2d');

function Circle() {
  var self = this;
  this.init = function() {
    self.pos = [0, 0];
    self.vel = [0, 0];
    self.acc = [0, 0];
    self.wind = [0.1, 0];
    self.gravity = [0 ,0.1];
    self.mass = 1;
    self.radius = 5;
  };
  this.update = function() {
    //4. '힘'을 계산하여 '가속도'에 더해준다.
    //바람 +0.1, 중력 +0.1의 힘을 계속 주고 있다.
    var force = [
      self.wind[0] + self.gravity[0],
      self.wind[1] + self.gravity[1]
    ];
    //A = F / M 이지만 질량은 무시(1로 계산)
    self.acc[0] += force[0] / self.mass;
    self.acc[1] += force[1] / self.mass;
    //3. '속도'는 '가속도'로 매 프레임마다 변화시킨다.
    self.vel[0] += this.acc[0];
    self.vel[1] += this.acc[1];
    //2. '위치'는 '속도'벡터로 매 프레임마다 변화시킨다.
    self.pos[0] += this.vel[0];
    self.pos[1] += this.vel[1];
  };
  this.checkEdges = function(){
    var halfRadius = self.radius / 2;
    if(self.pos[0] > canvas.width - halfRadius){
      self.pos[0] = canvas.width - halfRadius;
      self.vel[0] = -(self.vel[0]);
    }else if(self.pos[0] < halfRadius){
      self.pos[0] = halfRadius;
      self.vel[0] = -(self.vel[0]);
    }
    
    if(self.pos[1] > canvas.height - halfRadius){
      self.pos[1] = canvas.height - halfRadius;
      self.vel[1] = -(self.vel[1]);
    }else if(self.pos[1] < halfRadius){
      self.pos[1] = halfRadius;
      self.vel[1] = -(self.vel[1]);
    }
  };
  this.draw = function() {
    context.beginPath();
    //1. 오브젝트의 '위치'를 매 프레임마다 그려준다.
    context.arc(self.pos[0], self.pos[1], self.radius, 0, Math.PI*2, false); 
    context.closePath();
    context.fill();
    //5. '가속도'를 매 프레임마다 초기화시킨다.
    self.acc = [0,0];
  };
};

var obj = new Circle();
obj.init();
// animation loop
function loop() {
  context.clearRect(0,0,canvas.width,canvas.height);
  obj.update();
  obj.checkEdges();
  obj.draw();
  requestAnimationFrame(loop);
  console.log('loop');
}

// loop();
};

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