class Ground {
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);

    }

 show(){
    push();
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.w,this.h);
    stroke(255);
    fill(127);
    
    pop();
   }

}