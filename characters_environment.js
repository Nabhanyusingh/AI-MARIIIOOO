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