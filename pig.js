class Pig {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.1,
          'friction':1,
          'density':6
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push ();
      translate(pos.x,pos.y)
      rotate (angle)
      rectMode(CENTER);
      stroke ("green")
      strokeWeight (4)
      fill(150);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  