class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
    this.image = loadImage("box.png");
    this.visibility= 255

  }

  
  display(){
    console.log(this.body.speed);
    if(this.body.speed<3){
      super.display();
    }
   
    else{
      World.remove(world, this.body)
      push();
      this.visibility= this.visibility-10
      tint(255, this.visibility)
      image(this.image, this.body.position.x, this.body.position.y, 30, 40)
      pop ();
    }
  }
};