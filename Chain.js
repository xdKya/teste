class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stifness: 0.01,
            length:100
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }

    display(){
        var pontoA = this.chain.bodyA.position;
        var pontoB = this.chain.bodyB.position;

        line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
    }
}