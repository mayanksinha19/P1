class Plinkos{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.plinkos=[];
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
    }
}