var gamePattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
userClickedPattern=[];
var level=0;
var index=0;

function addAnimation(k)
{

var activButton=document.querySelector("#"+k);
activButton.classList.add("pressed");
setTimeout(function(){
    activButton.classList.remove("pressed");
},100);

}



function playsound(k)
{
var ch=k;
  switch(ch)
  {
    case "green":var audio1=new Audio("sounds\\green.mp3");
                audio1.play();
                 break;
    case "blue":var audio2=new Audio("sounds\\blue.mp3");
                audio2.play();
                break;     
    case "red":var audio3=new Audio("sounds\\red.mp3");
                audio3.play();
                 break; 
    case "yellow":var audio4=new Audio("sounds\\yellow.mp3");
                audio4.play();
                 break;     
                                   
  }
}

function intermediate(index)
{
if(gamePattern[index]!=userClickedPattern[index])
{
  var wrong=new Audio("sounds\\wrong.mp3");
  wrong.play();
  document.querySelector("body").classList.add("game-over");
  setTimeout(reset,200);
  
}
}

document.querySelector(".blue").addEventListener("click",function()
{
 index+=1;
  userClickedPattern.push("blue");
 
  
  playsound("blue");
  addAnimation("blue");
  intermediate(index-1);
  if(index==gamePattern.length)
  {
    checkAnswer(index-1);
  }
  
});
document.querySelector(".green").addEventListener("click",function()
{
 index+=1;
  userClickedPattern.push("green");

  
  playsound("green");
  addAnimation("green");
  intermediate(index-1);
  if(index==gamePattern.length)
  {
    checkAnswer(index-1);
  }
});
document.querySelector(".red").addEventListener("click",function()
{
  index+=1;
  userClickedPattern.push("red");
 
  playsound("red");
  addAnimation("red");
  intermediate(index-1);
  if(index==gamePattern.length)
  {
    checkAnswer(index-1);
  }
});
document.querySelector(".yellow").addEventListener("click",function()
{
  index+=1;
  userClickedPattern.push("yellow");



  playsound("yellow");
  addAnimation("yellow");
  intermediate(index-1);
  if(index==gamePattern.length)
  {
    checkAnswer(index-1);
  }
  
});

function reset()
{
  document.querySelector("h1").innerHTML="Game Over";
  gamePattern=[];
  userClickedPattern=[];
  level=0;
  index=0;
  document.querySelector("body").classList.remove("game-over");
  document.getElementById("start").style.display = "block";
  document.querySelector(".s").innerHTML="Restart";
}

function checkAnswer(currentLevel)
{
  
  console.log(gamePattern);
  console.log(userClickedPattern);
for(var i=0;i<=currentLevel;i++)
{
  if(gamePattern[i]!=userClickedPattern[i])
  {
  var wrong=new Audio("sounds\\wrong.mp3");
  wrong.play();
  document.querySelector("body").classList.add("game-over");
  setTimeout(reset,200);
  return;
  }
}
console.log("success");
userClickedPattern=[];
setTimeout(nextSequence,1000);
}

function nextSequence()
{
  level+=1; 
    var randomNumber=Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    addAnimation(randomChosenColour);
    playsound(randomChosenColour);
    document.querySelector("h1").innerHTML="Level "+level;
    userClickedPattern=[];
    index=0;
}

document.querySelector(".start").addEventListener("click",function(event)
{
  level+=1; 
    var randomNumber=Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    addAnimation(randomChosenColour);
    playsound(randomChosenColour);
    document.querySelector("h1").innerHTML="Level "+level;
    document.getElementById("start").style.display = "none";
});