var mario, bricks, clouds, mountains,enemyMushrooms,pipes,platforms,coins;
var control={
    up:"UP_ARROW",
    left:'LEFT_ARROW',
    right:'RIGHT_ARROW',
    revive:32;
}
var gameConfig={
    status:"start",
    initialLifes:5,
    moveSpeed:5,
    enemyMoveSpeed:1,
    gravity:1,
    gravityEnemy:10,
    jump:-15,
    startingPointX:500,
    startingPointY:0,
    screenX:1240,
    ScreenY:336,
    timeScores:0,
    scores:0
}

noseX="";
noseY="";
Gamestatus="";
function game(){
    instializeInDraw();
    moveEnvironment(mario);
    drawSprits();
    if(gameConfig.status==='start'){
        fill(0,0,0,150);
        rect(0,0,gameConfig.screenX,gameConfig.screenY);
        fill(255, 255, 255);
        textSize(40);
        textAlign(CENTER);
        text("Press Play Button To Start The Game",gameConfig.screeenX/2, gameConfig.screenY/2);
        textSize(40);
        stroke(255);
        strokeWeight(7);
        noFill();
        changeGameStatud();
    }
    if(gameConfing.status==='play'){
        positionOfCharacter(mario);
        enemys(enemyMushrooms);
        checkStatus(mario);
        scores(mario);
        manualControl(mario);
    }
    if(gameConfig.status==='gameover'){
       fill(0,0,0,150);
        rect(0,0,gameConfig.screenX,gameConfig.screenY);
        fill(255, 255, 255);
        textSize(40);
        textAlign(CENTER);
        text("GAME  OVER",gameConfig.screeenX/2, gameConfig.screenY/2+105);
        textSize(15);
        text("Press SPACE to Restart",gameConfig.screeenX/2, gameConfig.screenY/2-+135);
        text(round(gameConfig.scores),gameConfig.screenX/2,gameConfig.screenY/2-35);
        text("points",gameConfig.scrennX/2,gameConfig.screenY/2);
        stroke(255);
        strokeWeight(7);
        noFill();
        ellipse(gameConfig.screenX/2,gameConfig.screenY/2-30,160,160)
        changeGameStatud(mario);
    }
}
funcction startGame(){
    GameStatus="start";
    document.getElementById("status").innerHTML="Game Is Loading";
}
function changeGameStatud(character){
    if(noseX !="" && gameConfig.status==="start" && GameStatus=="start"){
        document.getElementById("status").innerHTML="Game Is Loaded";
        world_start.play();
    initializeCharacterStatus(mario)
    gameConfig.status="play"}
    if(gameConfig.status==="gameover" && keyDown(control.revive)){
        gameConfig.status="start"
    }
}
function instializeInSetup(character){
    frameRate(120);
    character.scale=0.35;
    initializeCharacterStatus(character)
    bricks.displace(bricks);
    platforms.displace(platforms);
    coins.displace(coins);
    coins.collide(pipes);
    coins.displace(bricks);

clouds.forEach(function(element){
    element.scale=random(1,2);
})
}
function initializeCharacterStatus(character){
    character.scale=0.35;
    character["killing"]=0;
    charactercter["kills"]=0;
    character["live"]=true;
    character["livenumber"]=gameConfig.initialLifes;
    charcter["status"]='live';
    character["coins"]=0;
    character["dying"]=0;
    character.position.x=gameConfig.startingPointX
    character.position.y=gameConfig.startingPointY
}