class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
    } 

     start(){
        this.intervalId = setInterval(this.update, 500 / 60);
    } 

    clear(){
        this.ctx.clearRect ( 0, 0, this.width, this.height)
    }

    score() {
        const points = Math.floor(this.frames / 15);
        this.ctx.font = "22px monospace";
        this.ctx.fillStyle = "black";
        this.ctx.fillText (`Score: ${points}` , 320, 50);
    }

    update = () => {
        this.frames++;
        this.clear();
        this.player.newPos();
        this.player.draw();
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

        if(crashed){
            this.stop();
        }

        
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].x -= 1;
          this.obstacles[i].draw();
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
    
          //this creates the gap
          let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          let gap2 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          let gap3 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          let gap4 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          let gap5 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    
          //add the obstacles to the array
          //top obstacle
          /* this.obstacles.push(new Component(0, 500, 10, width, 'green', this.ctx)); */
    
          //bottom obstacle
          this.obstacles.push(new Component(1480, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 30), 20, x - this.width - gap, 'blue', this.ctx));

          this.obstacles.push(new Component(1650, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 90), 20, x - this.width - gap4, 'blue', this.ctx));

          this.obstacles.push(new Component(1500, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 70), 20, x - this.width - gap2, 'blue', this.ctx));

          this.obstacles.push(new Component(1250, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 40), 20, x - this.width - gap3, 'blue', this.ctx));

          this.obstacles.push(new Component(1300, Math.floor(Math.random() * (canvas.height - 50 + 50 + 1) + 120), 20, x - this.width - gap5, 'blue', this.ctx));
        }

      }

      


    }


