class block
{
    constructor(x, y, width, height){
      isStatic:false
    }
    display(){
        if(this.body.speed < 3){
      super.display();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, 50,50);
          pop();
        }
    }
  };

  score()
  {   if(this.visibility < 0 && this.visibility>-105){
            score++;
           }
           block1.score();
           block2.score();
           block3.score();
           block4.score();
           block5.score();
           block6.score();
           block7.score();
           block8.score();
           block9.score();
           block10.score();
           block11.score();
           block12.score();
           block13.score();
           block14.score();
           block15.score();
           block16.score();
}
  
