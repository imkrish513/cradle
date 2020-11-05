class Bar {
    constructor(x,y,width,height){
    var options = {
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.4
    
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    World.add(world,this.body)
    
    }
    display(){
        var paperpos = this.body.position;
        push()
        translate(paperpos.x,paperpos.y)
        rect(0,0,this.width,this.height)
    rectMode(CENTER)
    pop()
    }
    
    
    
    }