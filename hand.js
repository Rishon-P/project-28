class hand{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:20
        }
        this.chain = Constraint.create(options)
        this.pointB = pointB
        this.bodyA = bodyA
        World.add(world,this.chain)
    }
    attach(body){
        this.chain.bodyA = body
    }
    fly(){
        this.chain.bodyA = null
    }
    display(){
        if (this.chain.bodyA){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        push()
        stroke(48,22,8)
        strokeWeight(3)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop();
    }
    }
}