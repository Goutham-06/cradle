  
class bob{
    constructer(x,y,r){
        var options={
            isstatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this,body=Bodies.circle(x,y,r,options)
        this.r=r;
        World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
   push ()
   translate (pos.x,pos.y)

    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
   pop ()    
}
    
    }