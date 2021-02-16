class Hammer {
    constructor(x, y, width, height) {
        var options = {
            'density' : 2,
            'friction' : 1.0,
            'restitution' : 0.5
        };
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      push()
      rectMode(CENTER);
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      fill("pink");
      rect(0,0,this.width, this.height);
      pop();
    }
}