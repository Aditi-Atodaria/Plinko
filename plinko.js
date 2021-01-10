class Plinko {
    constructor(x,y){
       var options={
           isStatic:true,
           }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display(){
        push()
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,12);
        pop()
    }
}