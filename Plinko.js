class Plinko{
    constructor(x,y,color){
      var options = {
         isStatic: true
      }
      this.body = Bodies.circle(x,y,20,options);
      this.radius = this.body.circleRadius;
      this.color=color
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}