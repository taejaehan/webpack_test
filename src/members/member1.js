// member1.js
// module.exports = 'Hello, TAEJAE';
// console.log('member1');
// var aaa = require('../aow.js');
// console.log(aaa);
// 
// 
var p5 = require('p5');

function setup(p){

}
function update(p, mover){
	// var mouse = p.createVector(p.mouseX,p.mouseY);
 //    mover.acceleration = p5.Vector.sub(mouse,mover.position);

    // Set magnitude of acceleration
    mover.acceleration.setMag(p.random(0, 0.9));
    mover.velocity.add(mover.acceleration);
    mover.velocity.limit(3);
    mover.position.add(mover.velocity);
}
function draw(p, mover){
  // p.background(0);
  p.fill('green');
  p.ellipse(mover.position.x,mover.position.y,5,5);
}
module.exports = {
	setup : setup,
	update : update, 
	draw : draw
};