// taejaehan.js
// module.exports = 'Hello, TAEJAE';
// console.log('taejaehan');
// var aaa = require('../aow.js');
// console.log(aaa);
// window.onload = function () {
//   var canvas = document.getElementById('defaultCanvas0'),
//     context = canvas.getContext('2d');

//   function Circle() {
//     var self = this;
//     this.init = function() {
//       self.pos = [0, 0];
//       self.vel = [0, 0];
//       self.acc = [0, 0];
//       self.wind = [0.1, 0];
//       self.gravity = [0 ,0.1];
//       self.mass = 1;
//       self.radius = 5;
//     };
//     this.update = function() {
//       //4. '힘'을 계산하여 '가속도'에 더해준다.
//       //바람 +0.1, 중력 +0.1의 힘을 계속 주고 있다.
//       var force = [
//         self.wind[0] + self.gravity[0],
//         self.wind[1] + self.gravity[1]
//       ];
//       //A = F / M 이지만 질량은 무시(1로 계산)
//       self.acc[0] += force[0] / self.mass;
//       self.acc[1] += force[1] / self.mass;
//       //3. '속도'는 '가속도'로 매 프레임마다 변화시킨다.
//       self.vel[0] += this.acc[0];
//       self.vel[1] += this.acc[1];
//       //2. '위치'는 '속도'벡터로 매 프레임마다 변화시킨다.
//       self.pos[0] += this.vel[0];
//       self.pos[1] += this.vel[1];
//     };
//     this.checkEdges = function(){
//       var halfRadius = self.radius / 2;
//       if(self.pos[0] > canvas.width - halfRadius){
//         self.pos[0] = canvas.width - halfRadius;
//         self.vel[0] = -(self.vel[0]);
//       }else if(self.pos[0] < halfRadius){
//         self.pos[0] = halfRadius;
//         self.vel[0] = -(self.vel[0]);
//       }
      
//       if(self.pos[1] > canvas.height - halfRadius){
//         self.pos[1] = canvas.height - halfRadius;
//         self.vel[1] = -(self.vel[1]);
//       }else if(self.pos[1] < halfRadius){
//         self.pos[1] = halfRadius;
//         self.vel[1] = -(self.vel[1]);
//       }
//     };
//     this.draw = function() {
//       context.beginPath();
//       //1. 오브젝트의 '위치'를 매 프레임마다 그려준다.
//       context.arc(self.pos[0], self.pos[1], self.radius, 0, Math.PI*2, false); 
//       context.closePath();
//       context.fill();
//       //5. '가속도'를 매 프레임마다 초기화시킨다.
//       self.acc = [0,0];
//     };
//   };

//   var obj = new Circle();
//   obj.init();
//   // animation loop
//   function loop() {
//     // context.clearRect(0,0,canvas.width,canvas.height);
//     obj.update();
//     obj.checkEdges();
//     obj.draw();
//     requestAnimationFrame(loop);
//     console.log('loop');
//   }

//   loop();
// };
// 
// 

// var x = 30; 
// var y = 30;
function setup(p){

}
function update(p, mover){

 //    mover.acceleration.x += p.random(-20, 20);
	// mover.acceleration.y += p.random(-20, 20);
    // Set magnitude of acceleration
    mover.acceleration.setMag(p.random(0, 2));
    mover.velocity.add(mover.acceleration);
    mover.velocity.limit(10);
    mover.position.add(mover.velocity);
}
function draw(p, mover){
  // p.background(0);
  p.fill('yellow');
  p.ellipse(mover.position.x,mover.position.y,20,50);
  console.log('width : ' + p.width);
  console.log('height : ' + p.height);
}

module.exports = {
	setup : setup,
	update : update, 
	draw : draw
};



// var s = function( p ) {

//   var x = 100; 
//   var y = 100;

//   p.setup = function() {
//     p.createCanvas(700, 410);
//   };

//   p.draw = function() {
//     p.background(0);
//     p.fill(255);
//     p.rect(x,y,50,50);
//   };
// };
// var m = new p5(s);


// var myp5 = new p5();
// var x = 100;
// var y = 100;

// myp5.setup = function() {
//   // createCanvas(200,200);
// }

// myp5.draw = function() {
//   background(0);
//   fill(255);
//   ellipse(x,y,300,50);
// }