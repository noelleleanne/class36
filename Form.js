class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(465,0);

        var input = createInput("Name");
        var button = createButton('Play');
        var greeting = createElement('h3');
    
        button.position(540,250);
        input.position(480,210);
    
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount +=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(510,200);
        });
    }
}
