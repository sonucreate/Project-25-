class Paper{
        constructor(x, y,radius2) {
            var  options={isStatic:false}
          this.body = Matter.Bodies.circle(x, y, radius2,options);
         
          this.body.radius=radius2;
          this.image=loadImage("paper.png")
          World.add(world, this.body);
        }
        display(){
          var angle = this.body.angle;
          
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rotate(angle);
      fill("red");
      image(this.image,0,0,20,20)
      pop();
          
        }
        
    
    
    }

