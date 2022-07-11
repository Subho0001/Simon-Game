//alert("hello");
var array=["red","blue","green","yellow"];
var gamepattern=[];
var userClickedPattern=[];
//console.log(array[0]);
var level=0;
var started=false;

$(".btn").click(function() {
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkans(userClickedPattern.length-1);
    //console.log(userChosenColour);
});

function checkans(currentlevel)
{
    if(userClickedPattern[currentlevel]===gamepattern[currentlevel]){
    console.log("success");
     if(userClickedPattern.length===gamepattern.length)
    
        setTimeout(function() {
            nextSequence();
        }, 1000);
    }
    else{
    console.log("wrong");
    $("#level-title").text("Game Over ,Press Any Key To Restart");
    playsound("wrong");
    $("body").addClass("game-over");
    setInterval(function() {
        $("body").removeClass("game-over");
    }, 200);
    startover();
    }
}

function startover(){
    level=0;
    gamepattern=[];
    //userClickedPattern=[0];
    started=false;
}


function playsound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setInterval(() => {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}


$(document).keypress(function()
{
    if(!started)
    {
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

function nextSequence(){
    userClickedPattern=[];
      //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);
    var i=Math.floor(Math.random()*4);
    var randomChosenColour = array[i];
  gamepattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}


//console.log(gamepattern);
//console.log(randomColour);