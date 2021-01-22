 class Paper {
    constructor(x,y,width,height){
        var options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,25,options);
        this.radius = 25;
        World.add(world,this.body);
        }
        display(){
            fill("red");
            ellipseMode(CENTER);
            ellipse(this.body.position.x,this.body.position.y,this.body.radius);
        }
    }