class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles = [];
        this.bgHeight = 720;
        this.frames = 0;
        this.background = new Image();
    } 

    drawBackground() {
        this.background.src = '/docs/assets/images/backgroundGame.jpg';
        this.ctx.drawImage(this.background, 0, this.bgHeight, this.width, -3600);
      }

    start(){
        this.intervalId = setInterval(this.update, 500 / 60);
    } 

    clear(){
        this.ctx.clearRect ( 0, 0, this.width, this.height)
    }

    score() {
        const points = Math.floor(this.frames / 15);
        this.ctx.font = "30px monospace";
        this.ctx.fillStyle = "blue";
        this.ctx.fillText (`Score: ${points}` , 1080, 60);
    }

    update = () => {
        this.frames++;
        this.clear();
        if (this.bgHeight < 3600)
        {this.bgHeight += 1;}
        this.drawBackground();
        this.player.newPos();
        this.player.drawPlayer();
         this.updateObstacles(); 
         this.checkGameOver();
         this.score();

    };

    stop(){
        clearInterval(this.intervalId);
    }

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
            return this.player.crashWith(obstacle);
        });

        if(crashed || player.top() < 0 || player.bottom() > 720){
            this.stop();
        };
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].x -= 1;
          this.obstacles[i].drawEnemy();
        }
    
        if (this.frames % 250 === 0) {
          let x = 1500;
    
          //calculate the height of the columns/obstacles
          let minWidth = 10;
          let maxWidth = 70;
    
          let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    
          //these variables control the size of the gap between obstacles
          let minGap = 190;
          let maxGap = 200;
    
          //GAPS
          let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          let gap2 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          let gap3 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          let gap4 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          let gap5 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    
          //OBSTACLES
          /* this.obstacles.push(new Component(1480, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 30), 55, 55, 'blue', this.ctx)); */

          this.obstacles.push(new Component(1650, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 90), 55, 55, 'blue', this.ctx));

           this.obstacles.push(new Component(1500, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 70), 55, 55, 'blue', this.ctx)); 

           this.obstacles.push(new Component(1250, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 40), 55, 55, 'blue', this.ctx)); 

          this.obstacles.push(new Component(1300, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 120), 55, 55, 'blue', this.ctx));
        }

     /*    
        if (this.frames % 240===0) {
            this.obstacles.push(new Enemys(this.ctx))
        } */

    }

}


/* class Enemys extends Game{
    constructor( ctx);{
    super (ctx); 
    this.ctx = ctx
    this.img = new Image()
    this.img.src = "/docs/assets/images/vermelha.png"



} */