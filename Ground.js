class Ground{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black")
        rect(0,0,this.width,this.height)
        pop();
      }
}