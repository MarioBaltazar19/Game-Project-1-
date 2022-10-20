const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Component(630, 360, 50, 95, "red", ctx);




let audio = new Audio('/docs/assets/sounds/Ducktales Remastered Soundtrack - Moon Theme.mp3');
audio.volume = 0.1;


let gameMode;
let player2
let player3




window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        
      document.getElementById("game-intro").style.display = "none";
      
      document.getElementById("dificulty").style.display = "flex";
      
    };

    document.getElementById("instructions").onclick = () => {
        
        document.getElementById("game-intro").style.display = "none";
        
        document.getElementById("back").style.display = "flex";
        
    };

    document.getElementById("return").onclick = () => {
        
        document.getElementById("back").style.display = "none";

        document.getElementById("game-intro").style.display = "flex";
        
        
        
    };


    document.getElementById("easy").onclick = () => {
        document.getElementById("dificulty").style.display = "none";
        document.getElementById("players").style.display = "flex";
        gameMode = 'easy'
    }

    document.getElementById("normal").onclick = () => {
        document.getElementById("dificulty").style.display = "none";
        document.getElementById("players").style.display = "flex";
        gameMode = 'normal'
    }

    document.getElementById("expert").onclick = () => {
        document.getElementById("dificulty").style.display = "none";
        document.getElementById("players").style.display = "flex";
        gameMode = 'expert' 
    }

    document.getElementById("players1").onclick = () => {
        document.getElementById("players").style.display = "none";
        if (gameMode === 'easy') {
            let game = new GameEasy(ctx, 1280, 720, player); 
            game.start();  
        } else if (gameMode === 'normal'){
            let game = new Game(ctx, 1280, 720, player); 
            game.start();  
        } else if (gameMode === 'expert') {
            let game = new GameExpert(ctx, 1280, 720, player); 
            game.start();  
        }
         
          
    }

    document.getElementById("players2").onclick = () => {
        document.getElementById("players").style.display = "none";
        if (gameMode === 'easy') {
            player2 = new Component2(760, 360, 50, 95, "red", ctx);
            let game = new GameEasy(ctx, 1280, 720, player, player2); 
            game.start();  
        } else if (gameMode === 'normal'){
            player2 = new Component2(760, 360, 50, 95, "red", ctx);
            let game = new Game(ctx, 1280, 720, player, player2); 
            game.start();  
        } else if (gameMode === 'expert') {
            player2 = new Component2(760, 360, 50, 95, "red", ctx);
            let game = new GameExpert(ctx, 1280, 720, player, player2); 
            game.start();  
        }
    }

    document.getElementById("players3").onclick = () => {
        document.getElementById("players").style.display = "none";
        if (gameMode === 'easy') {
            player2 = new Component2(760, 360, 50, 95, "red", ctx);
            player3 = new Component3(500, 360, 50, 95, "red", ctx);
            let game = new GameEasy(ctx, 1280, 720, player, player2, player3); 
            game.start();  
        } else if (gameMode === 'normal'){
            player2 = new Component2(760, 360, 50, 95, "red", ctx);
            player3 = new Component3(500, 360, 50, 95, "red", ctx);
            let game = new Game(ctx, 1280, 720, player, player2, player3); 
            game.start();  
        } else if (gameMode === 'expert') {
            player2 = new Component2(760, 360, 50, 95, "red", ctx);
            player3 = new Component3(500, 360, 50, 95, "red", ctx);
            let game = new GameExpert(ctx, 1280, 720, player, player2, player3); 
            game.start();  
        }
    }


    /* 
    document.getElementById("menu").onclick = () => {
        document.getElementById("game-board").style.display = "none";
        if (stop) {
        document.getElementById("game-intro").style.display = "flex";
        }
    }   */

 
};

document.addEventListener("keydown", (e) => {
    switch(e.code){
        case "Space" :
            player.img.src = '/docs/assets/images/rocket--2.png'
            player.speedY-=2.5;
            break;

         case "ArrowUp" :
            player2.img.src = "/docs/assets/images/rocketredchamamelhor.png"
            player2.speedY -=2.5;
            break; 

         case "KeyW" :
            player3.img.src = "/docs/assets/images/rocketbluechamamelhor.png"
            player3.speedY -=2.5;
            break;
        
        
    }
});

document.addEventListener("keyup", (e) => {
    switch(e.code){
        case "Space" :
            player.img.src = '/docs/assets/images/rocket--1.png'

            break;

         case "ArrowUp" :
            player2.img.src = '/docs/assets/images/rockerredmelhor.png'

            break; 

         case "KeyW" :
            player3.img.src = "/docs/assets/images/rocketbluemelhor.png"
        
            break;
        
        
    }
});




