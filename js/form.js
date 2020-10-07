class Form{
    constructor() {
    this.title = createElement("h2");
    this.Input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement("h3");
    }
    hide() {
    this.greeting.hide();
    this.Input.hide();
    this.button.hide();
    }
    display() {
        this.title.html("CarRacing Game");
        this.title.position(130, 50);
        this.Input.position(130, 160);
        this.button.position(240, 200);
        this.button.mousePressed(()=>{
            this.Input.hide();
            this.button.hide();
            player.name = this.Input.value();
            playerCount++;
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)  
            this.greeting.html("Hello " + player.name)
            this.greeting.position(130, 160);  
        })
    }
}