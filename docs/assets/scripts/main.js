const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Component(630, 360, 50, 75, "red", ctx);
const player2 = new Component2(500, 360, 50, 75, "red", ctx);








window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        
      document.getElementById("game-intro").style.display = "none";
      
      document.getElementById("dificulty").style.display = "block";
      /* game.start(); */
    };

    document.getElementById("easy").onclick = () => {
        document.getElementById("dificulty").style.display = "none";
        let game = new GameEasy(ctx, 1280, 720, player, player2);  
        game.start();     
    }

    document.getElementById("normal").onclick = () => {
        document.getElementById("dificulty").style.display = "none";
        let game = new Game(ctx, 1280, 720, player, player2);  
        game.start();    
    }

    document.getElementById("expert").onclick = () => {
        document.getElementById("dificulty").style.display = "none";
        let game = new GameExpert(ctx, 1280, 720, player, player2);  
        game.start();    
    }



 
};


document.addEventListener("keydown", (e) => {
    switch(e.code){
        case "ArrowUp" :
            player.speedY-=3;
            break;

         case "Space" :
            player2.speedY -=3;
            break; 
        
        
    }
});


/* 
 document.addEventListener("keyup", (e) => {
    player.speedY = -5;
}); 
 */



