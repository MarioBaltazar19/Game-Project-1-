

class Component{
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






        //BOTTOM





    }

newPos() {
    this.x += this.speedX;
    this.y += this.speedY;

}

hitBottom() {

}



draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);


}



top(){
    return this.y;
}

bottom() {
    return this.y + this.h;
}

left() {
    return this.x;
}

right() {
    return this.x + this.w;
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