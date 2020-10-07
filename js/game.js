class Game {
    constructor() {
    
    }
    getState() {
        var gameStateref = database.ref("gameState")
        gameStateref.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state) {
        database.ref("/").update({
            gameState:state
        })

    }
    async start() {
      if(gameState===0) {
          player = new Player();
          var playercountref = await database.ref("playerCount").once("value")
          if(playercountref.exists()){
              playerCount = playercountref.val();
              player.getCount()
          }
          player.getCount();
          form = new Form();
          form.display();
      }
    }
    play() {
        form.hide()
        text("Gamestart", 120, 100)
        Player.getplayerinfo();
        if(allplayers!==undefined) {
            var displaypos = 120;
            for (var plr in allplayers) {
                if(plr==="player" + player.index) {
                   fill("red")     
                }
                else
                fill("black")

                displaypos+=20
                text(allplayers[plr].name+" " + allplayers[plr].distance,120,displaypos)
            }
        }
    }
}