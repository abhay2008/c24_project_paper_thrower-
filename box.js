class Box {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true
    }

    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}