class Component3{
    constructor (x, y, w, h, color, ctx){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 0.05;
        this.gravitySpeed = 0;
        this.img = new Image();

        
        //GRAVITY
        this.update = function() {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        this.newPos = function() {
            this.gravitySpeed += this.gravity;
            this.x += this.speedX;
            this.y += this.speedY + this.gravitySpeed;  
        }


    }

newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
}



drawPlayer() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

drawEnemy(){
    this.img.src = "/docs/assets/images/douradaBoa3.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}



top(){
    return this.y+10;
}

bottom() {
    return (this.y - 12) + this.h;
}

left() {
    return this.x + 8;
}

right() {
    return (this.x -10) + this.w;
}

crashWith (obstacle) {
    return !
    (this.bottom() < obstacle.top() || 
    this.top() > obstacle.bottom() ||
    this.right() < obstacle.left() ||
    this.left() > obstacle.right()
    );
    }
    
}



