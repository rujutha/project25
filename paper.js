class Paper {
    constructor(x, y,radius,r) {
      var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius =radius;
      //this.setCollider("circle",0,0,40);
     //this.width =70;
     //this.height = 70;
      this.r = 60;
     this.image=loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // var angle = this.body.angle;
     
     
     // ellipseMode(RADIUS);
     // ellipse(pos.x,pos.y,this.radius,this.radius);
      //translate(this.body.position.x, this.body.position.y);
     //rotate(angle);
     imageMode(RADIUS);
        image(this.image,pos.x,pos.y, this.r,this.r);
     
      
    }
  };

  /*class Paper {
    constructor(x, y, width, height) {
      var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.image=loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      rectMode(CENTER);
      fill("white");
      rect(pos.x,pos.y, this.width, this.height);
      

      //imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
      
    }
  }
  









  /*class Paper {
    constructor(x, y) {
      var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width =50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };*/
  





















