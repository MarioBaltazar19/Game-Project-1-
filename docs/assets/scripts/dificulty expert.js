class GameExpert{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.player2 = player2
        this.intervalId = null;
        this.obstacles = [];
        this.bgHeight = 720;
        this.frames = 0;
        this.background = new Image();
    } 

    drawBackground() {
        this.background.style.borderRadius = "10px";
        this.background.src = '/docs/assets/images/backgroundBom.jpg';
        this.ctx.drawImage(this.background, 0, this.bgHeight, this.width, -5800);
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
        this.ctx.fillStyle = "white";
        this.ctx.fillText (`Score: ${points}` , 1080, 60);
    }

    update = () => {
        this.frames++;
        this.clear();
        if (this.bgHeight < 5800)
        {this.bgHeight += 0.5;}
        this.drawBackground();
        this.player.newPos();
        this.player.drawPlayer();
        this.player2.newPos();
        this.player2.drawPlayer();
         this.updateObstacles(); 
         this.checkGameOver();
         this.checkGameOver2();
         this.score();

    };

    stop(){
        clearInterval(this.intervalId);
    }

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
            return this.player.crashWith(obstacle);
        });

        if(crashed || player.top() < 10 || player.bottom() > 710){
            this.stop();
        };
    }

    checkGameOver2() {
        const crashed = this.obstacles.some((obstacle) => {
            return this.player2.crashWith(obstacle);
        });

        if(crashed || player2.top() < 10 || player2.bottom() > 710){
            this.stop();
        };
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].x -= 6;
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