class Sand {
    constructor(x, y, radius) {
        var options = {
            'density' : 1,
            'friction' : 5,
            'restitution' : 0.3
        };
        this.body = Bodies.circle(x, y, radius, options)
        this.width = radius;
        this.height = radius;
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      ellipseMode(CENTER);
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      fill("red");
      ellipse(0,0,this.width, this.height);
      pop();
    }
}
