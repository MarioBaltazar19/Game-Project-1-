const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Component(630, 360, 50, 50, "red", ctx);

let game = new Game(ctx, 1280, 720, player);

game.start();





document.addEventListener("keydown", (e) => {
    switch(e.code){
        case "ArrowUp" :
            player.speedY-=3;
            break;
        
        
    }
});


/* 
 document.addEventListener("keyup", (e) => {
    player.speedY = -5;
}); 
 */



