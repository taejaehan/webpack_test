// member2.js
// module.exports = 'Hello, TAEJAE';
// console.log('member2');
// var aaa = require('../aow.js');
// console.log(aaa);
// 
// 

function setup(p){

}
function update(p, mover){
	// mover.acceleration.x += p.random(-50, 50);
	// mover.acceleration.y += p.random(-50, 50);
    // Set magnitude of acceleration
    mover.acceleration.setMag(p.random(0, 0.5));
    mover.velocity.add(mover.acceleration);
    mover.velocity.limit(1);
    mover.position.add(mover.velocity);
}
function draw(p, mover){
  // p.background(0);
  p.fill('red');
  p.ellipse(mover.position.x,mover.position.y,10,10);
}

module.exports = {
	setup : setup,
	update : update, 
	draw : draw
};