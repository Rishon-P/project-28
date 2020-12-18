class stone {
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        } 
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image1 = loadImage("sprites/stone.png")
        World.add(world,this.body)
    }
    display(){
        image(this.image1, 50,575)
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
    }
}