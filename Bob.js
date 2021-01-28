class Bob{
    constructor(x, y, diameter) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.body = Bodies.circle(this.x, this.y, this.diameter/2);
       
        World.add(world, this.body);
   // Matter.Body.setStatic(this.body,true);
   // Matter.Body.setVelocity(this.body, 0);
        
      }
      display(){
       var pos =this.body.position;
       push();
    //translate(pos.x, pos.y);
     rectMode(CENTER);
      fill("blue");
      circle(pos.x, pos.y, this.diameter);
      pop();
      }
}