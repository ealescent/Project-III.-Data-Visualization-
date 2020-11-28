let data;

function preload() {
  data = loadJSON("Artists.json");
}


function setup() {
  createCanvas(1000, 900);
}


function draw() {
  background(240,230,220);
  
  for(let z = -50; z < 1000; z+= 20){
    push()
    stroke(120)
    fill(240,230,220);
    frameRate(2)
    square(z, random(900), 300)
    pop()
  }

  //title
  push()
  textSize(40)
  textFont("Apple Chancery")
  stroke(50)
  text("Nationalities of Artists at MoMA", 250 , 100)
  stroke(0)
  text("Nationalities of Artists at MoMA", 252 , 102)
  pop()

  for (let i = 0; i < data.art.length; i++) {
    let a = data.art[i];
    
    push()
    noStroke()
    fill(70)
    rectMode(CENTER)
    square(a.x + 6, a.y * 1.2 - 94, a.size *1.8)
    pop()

    push()
    noStroke()
    frameRate(.5)
    fill(random(225, 240), random(225, 240), random(225, 240))
    rectMode(CENTER)
    square(a.x - 6, a.y * 1.2 - 105, a.size *1.8)
    pop()

    push()
    let ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(500, 850, 500, 0);

    gradient.addColorStop(0, 'lightsteelblue');
    gradient.addColorStop(1, 'MediumAquaMarine');
    ctx.fillStyle = gradient;

    noStroke()
    rectMode(CENTER)
    square(a.x, a.y * 1.2 - 100, a.size *1.8)
    pop()

    push()
    textAlign(CENTER)
    textFont("Apple Chancery")
    text(a.geography,a.x, a.y * 1.2 - 100)
    textAlign(CENTER)
    textFont("Apple Chancery")
    text(a.percentage,a.x, a.y * 1.2 - 80)


    let gtx = canvas.getContext("2d");
    let gradient2 = ctx.createLinearGradient(100, 100, 1300, 1000);

    gradient.addColorStop(0, 'lightsteelblue');
    gradient.addColorStop(1, 'MediumAquaMarine');
    ctx.fillStyle = gradient;

    noStroke()
    rectMode(CENTER)
    rect(275, 340, 60, 40)
    rect(710, 350, 60, 40)
    rect(500, 770, 53, 10)

    
    fill(0)
    textSize(25)
    text("European", 275, 320)
    text("American", 710, 330)
    text("34%",275, 350)
    text("32%", 710, 360)
    pop()

  }
}
