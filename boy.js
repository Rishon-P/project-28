class boy {
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(110,630,20,50,options)
        this.width = 20
        this.height = 50
        World.add(world,this.body)
        this.image = loadImage("sprites/boy.png")
    }
    display(){
        
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        imageMode(CENTER)
        image(this.image,100,630)
    }
}