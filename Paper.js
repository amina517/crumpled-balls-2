class Paper{
    constructor(x, y, radius){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:0.9,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("paper.png")
    }
    display(){
        var paperpos = this.body.position; 
        push(); 
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        fill("white");
        stroke("white")
        ellipse(0, 0, this.radius, this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop(); 
     

    }
}