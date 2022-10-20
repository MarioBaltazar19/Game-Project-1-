class Game{
    constructor(ctx, width, height, player, player2, player3){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.player2 = player2;
        this.player3 = player3;
        this.intervalId = null;
        this.obstacles = [];
        this.bgHeight = 720;
        this.frames = 0;
        this.background = new Image();
        this.points = 0;
        this.playerDied = false;
        this.player2Died = false;
        this.player3Died = false;
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
        this.points = Math.floor(this.frames / 15);
        this.ctx.font = "30px monospace";
        this.ctx.fillStyle = "white";
        this.ctx.fillText (`Score: ${this.points}` , 1080, 60);
    }

    update = () => {
        this.frames++;
        this.clear();
        if (this.bgHeight < 5800)
        {this.bgHeight += 0.5;}
        this.drawBackground();
        if( !this.playerDied)
        {this.player.newPos();
        this.player.drawPlayer();}
        if (this.player2 && !this.player2Died)
        {this.player2.newPos();
        this.player2.drawPlayer();
        this.checkGameOver2();}
        if (this.player3 && !this.player3Died)
        {this.player3.newPos();
        this.player3.drawPlayer();
        this.checkGameOver3();}
        this.updateObstacles(); 
        this.checkGameOver();
        this.score();

    };

    stop(){
        clearInterval(this.intervalId);
       
    }


// copiar
    explode(x,y){
        let explosion = new Image()
        explosion.src= "/docs/assets/images/explosion.png"
        this.ctx.drawImage(explosion,x,y,100,100)

    }

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
            return this.player.crashWith(obstacle);
        });

        if((crashed || player.top() < 10 || player.bottom() > 710) && !this.playerDied ){ // copiar a partir &&
           setInterval(()=>{
               this.playerDied = true; 
           },200)
           this.explode(this.player.x, this.player.y) // copiar
        };

        
        if (this.player && !this.player2 && !this.player3)
        {if (this.playerDied && !this.player2Died && !this.player3Died){ // copiar
            this.stop();
        }}

        
        if (this.player && this.player2 && !this.player3)
        {if (this.playerDied && this.player2Died && !this.player3Died){ // copiar
            this.stop();
        }}




        if (this.player && this.player2 && this.player3)
        {if (this.playerDied && this.player2Died && this.player3Died){ // copiar
            this.stop();
        }}


    }

    checkGameOver2() {
        if (this.player2)
        {const crashed = this.obstacles.some((obstacle) => {
            return this.player2.crashWith(obstacle);
        });

        if(crashed || this.player2.top() < 10 || this.player2.bottom() > 710){
            this.player2Died = true;
        };}
    }

    checkGameOver3() {
        if (this.player3)
        {const crashed = this.obstacles.some((obstacle) => {
            return this.player3.crashWith(obstacle);
        });

        if(crashed || this.player3.top() < 10 || this.player3.bottom() > 710){
            this.player3Died = true;
        };}
    }


    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            if(this.points >= 100 && this.points < 200){
            this.obstacles[i].x -= 2;
          this.obstacles[i].drawEnemy();
        }
        else if(this.points >= 200 && this.points < 300){
          this.obstacles[i].x -= 3;
          this.obstacles[i].drawEnemy();
        }
        else if(this.points >= 300 && this.points < 400){
            this.obstacles[i].x -= 4;
            this.obstacles[i].drawEnemy();
          }
          else if(this.points >= 400 ){
            this.obstacles[i].x -= 5;
            this.obstacles[i].drawEnemy();
          }
          else{
                this.obstacles[i].x -= 1.5;
                this.obstacles[i].drawEnemy();
              }
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

    timer() {
        if (this.frames < 180) {
          const timer2 = 3 - Math.floor(this.frames / 60);
          this.ctx.fillStyle = `rgba(0, 0, 0, 0.25)`;
          this.ctx.fillRect(0, 0, this.width, this.height);
          this.ctx.fillStyle = "#35d32f";
          this.ctx.font = "100px Star Jedi";
          this.ctx.backgroundColor = "#000000";
          this.ctx.fillText(`${timer2}`, 250, 275);
        }
    }

}


/* class Enemys extends Game{
    constructor( ctx);{
    super (ctx); 
    this.ctx = ctx
    this.img = new Image()
    this.img.src = "/docs/assets/images/vermelha.png"



} */