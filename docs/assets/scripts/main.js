const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Component(630, 360, 50, 75, "red", ctx);

let game = new Game(ctx, 1280, 720, player);

window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        game.start();
      document.getElementById("game-intro").style.display = "none";
      document.getElementById("game-board").style.display = "block";
    };

};









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



