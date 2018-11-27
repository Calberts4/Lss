window.onscroll = function(){

  var distance = window.pageYOffset;
  console.log(- distance);
var bandlogo = document.getElementById("bandlogo");
var curtain1 = document.getElementById("curtain1");
var curtain2 = document.getElementById("curtain2");
var fin = document.getElementById("fin");
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
  }else{
    bandlogo.style.top = "100px";
    bandlogo.classList.remove("invisible");
    curtain1.style.left = "0";
    curtain2.style.right ="0";
    curtain1.classList.remove("invisible");
    curtain2.classList.remove("invisible");
    }
    if (distance >710) {
      smile.style.right = center;
      smile.classList.remove("invisible");
    } else {
      smile.style.right = out;
      smile.classList.add("invisible");
    }
    if (distance > 1080) {
   smile.style.top = 1 + distance * 0.99 + "px";
 }else{
   smile.style.top = 1 + distance + "px";
   }
if (distance >1080) {
  smile.style.right = out;
  smile.classList.add("invisible");
  form.style.left = center;
  form.classList.remove("invisible");
} else {
  form.style.left = out;
  form.classList.add("invisible");
}
if (distance >1380) {
  debut.style.right = center;
  debut.classList.remove("invisible");
} else {
  debut.style.right = out;
  debut.classList.add("invisible");
}
if (distance >1780) {
  sheerheartattack.style.left = center;
  sheerheartattack.classList.remove("invisible");
} else {
  sheerheartattack.style.left = out;
  sheerheartattack.classList.add("invisible");
}
if (distance >2480) {
  nightattheopera.style.right = center;
  nightattheopera.classList.remove("invisible");
} else {
  nightattheopera.style.right = out;
  nightattheopera.classList.add("invisible");
}
if (distance >2880) {
  dayattheraces.style.left = center;
  dayattheraces.classList.remove("invisible");
} else {
  dayattheraces.style.left = out;
  dayattheraces.classList.add("invisible");
}
if (distance >3580) {
  wewillrockyou.style.right = center;
  wewillrockyou.classList.remove("invisible");
} else {
  wewillrockyou.style.right = out;
  wewillrockyou.classList.add("invisible");
}
if (distance >3980) {
  topoftheworld.style.left = center;
  topoftheworld.classList.remove("invisible");
} else {
  topoftheworld.style.left = out;
  topoftheworld.classList.add("invisible");
}
if (distance >4480) {
  breakfree.style.right = center;
  breakfree.classList.remove("invisible");
} else {
  breakfree.style.right = out;
  breakfree.classList.add("invisible");
}
if (distance >5300) {
  liveaid.style.left = center;
  liveaid.classList.remove("invisible");
} else {
  liveaid.style.left = out;
  liveaid.classList.add("invisible");
}if (distance >5800) {
  daysofourlives.style.right = center;
  daysofourlives.classList.remove("invisible");
} else {
  daysofourlives.style.right = out;
  daysofourlives.classList.add("invisible");
}if (distance >6100) {
  comfirming.style.left = center;
  comfirming.classList.remove("invisible");
} else {
  comfirming.style.left = out;
  comfirming.classList.add("invisible");
}if (distance >6900) {
  death.style.right = center;
  death.classList.remove("invisible");
} else {
  death.style.right = out;
  death.classList.add("invisible");
}if (distance >7300) {
  phoenixtrust.style.left = center;
  phoenixtrust.classList.remove("invisible");
} else {
  phoenixtrust.style.left = out;
  phoenixtrust.classList.add("invisible");
}if (distance >7800) {
  lastalbum.style.right = center;
  lastalbum.classList.remove("invisible");
} else {
  lastalbum.style.right = out;
  lastalbum.classList.add("invisible");
}if (distance >8677) {
  fin.style.right = "-1000px";
} else {
  fin.style.right = "500px";
}
}
