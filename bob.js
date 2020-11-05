class Ball {
    constructor(x,y,r){
    var options = {
        isStatic:false,
        restitution:1.2,
        friction:0,
        density:1.5
    
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body)
    
    }
    display(){
        var paperpos = this.body.position;
        push()
        translate(paperpos.x,paperpos.y)
        circle(0,0,this.r)
    rectMode(CENTER)
    pop()
    }
    
    
    
    }