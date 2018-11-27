window.onscroll = function(){

  var distance = window.pageYOffset;
  console.log(- distance);
var bandlogo = document.getElementById("bandlogo");
var curtain1 = document.getElementById("curtain1");
var curtain2 = document.getElementById("curtain2");
//var fin = document.getElementById("fin");
var smile = document.getElementById("smile");
var form = document.getElementById("form");
var debut = document.getElementById("debut");
var sheerheartattack = document.getElementById("sheerheartattack");
var nightattheopera  = document.getElementById("nightattheopera");
var dayattheraces = document.getElementById("dayattheraces");
var wewillrockyou = document.getElementById("wewillrockyou");
var topoftheworld = document.getElementById("topoftheworld");
var breakfree = document.getElementById("breakfree");
var liveaid = document.getElementById("liveaid");
var daysofourlives = document.getElementById("daysofourlives");
var comfirming = document.getElementById("comfirming");
var death = document.getElementById("death");
var phoenixtrust = document.getElementById("phoenixtrust");
var lastalbum = document.getElementById("lastalbum");

var out ="-500px";
var center = "50%";
  if(distance >5){
    bandlogo.style.top = "-100px";
    bandlogo.classList.add("invisible");
    curtain1.style.left = out;
    curtain2.style.right = out;
    curtain1.classList.add("invisible");
    curtain2.classList.add("invisible");
    smile.style.right = center;
    smile.classList.remove("invisible");
    //debut.style.right = center;
    //debut.classList.remove("invisible");
    //.style.left = center;
    //sheerheartattack.classList.remove("invisible");
    //nightattheopera.style.right = center;
    //nightattheopera.classList.remove("invisible");
    //dayattheraces.style.left = center;
    //dayattheraces.classList.remove("invisible");
    //wewillrockyou.style.right = center;
    //wewillrockyou.classList.remove("invisible");
    //topoftheworld.style.left = center;
    //topoftheworld.classList.remove("invisible");
    //breakfree.style.right = center;
    //breakfree.classList.remove("invisible");
    //liveaid.style.left = center;
    //liveaid.classList.remove("invisible");
    //daysofourlives.style.right = center;
    //daysofourlives.classList.remove("invisible");
    //comfirming.style.left = center;
    //comfirming.classList.remove("invisible");
    //death.style.right = center;
    //death.classList.remove("invisible");
    //phoenixtrust.style.left = center;
  //phoenixtrust.classList.remove("invisible");
    //lastalbum.style.right = center;
    //lastalbum.classList.remove("invisible");
  }else{
    bandlogo.style.top = "100px";
    bandlogo.classList.remove("invisible");
    curtain1.style.left = "0";
    curtain2.style.right ="0";
    curtain1.classList.remove("invisible");
    curtain2.classList.remove("invisible");
    smile.style.right = out;
    smile.classList.add("invisible");
    //debut.style.right = out;
    //debut.classList.add("invisible");
    //sheerheartattack.style.left = out;
    //sheerheartattack.classList.add("invisible");
    //nightattheopera.style.right = out;
    //nightattheopera.classList.add("invisible");
    //dayattheraces.style.left = out;
    //dayattheraces.classList.add("invisible");
    //wewillrockyou.style.right = out;
    //wewillrockyou.classList.add("invisible");
    //topoftheworld.style.left = out;
    //topoftheworld.classList.add("invisible");
    //breakfree.style.right = out;
    //breakfree.classList.add("invisible");
    //liveaid.style.left = out;
    //liveaid.classList.add("invisible");
    //daysofourlives.style.right = out;
    //daysofourlives.classList.add("invisible");
    //comfirming.style.left = out;
    //comfirming.classList.add("invisible");
    //death.style.right = out;
    //death.classList.add("invisible");
    //phoenixtrust.style.left = out;
    //phoenixtrust.classList.add("invisible");
    //lastalbum.style.right = out;
    //lastalbum.classList.add("invisible");
}
if (distance >100) {
  form.style.left = center;
  form.classList.remove("invisible");
} else {
  form.style.left = out;
  form.classList.add("invisible");
}
}
