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
var deaconleaves = document.getElementById("deaconleaves");
var closingremarks = document.getElementById("closingremarks");

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

    if (distance > 1110) {
   smile.style.top = 1 + distance * 0.99 + "px";
 }else{
   smile.style.top = 1 + distance + "px";
   }

if (distance >1110) {
  smile.style.right = out;
  smile.classList.add("invisible");
  form.style.left = center;
  form.classList.remove("invisible");
} else {
  form.style.left = out;
  form.classList.add("invisible");
}
if (distance > 1510) {
form.style.top = 1 + distance * 0.99 + "px";
}else{
form.style.top = 1 + distance + "px";
}
if (distance >1510) {
  form.style.left = out;
  form.classList.add("invisible");
  debut.style.right = center;
  debut.classList.remove("invisible");
} else {
  debut.style.right = out;
  debut.classList.add("invisible");
}
if (distance > 1910) {
debut.style.top = 1 + distance * 0.99 + "px";
}else{
debut.style.top = 1 + distance + "px";
}
if (distance >1910) {
  debut.style.right = out;
  debut.classList.add("invisible");
  sheerheartattack.style.left = center;
  sheerheartattack.classList.remove("invisible");
} else {
  sheerheartattack.style.left = out;
  sheerheartattack.classList.add("invisible");
}
if (distance > 2310) {
sheerheartattack.style.top = 1 + distance * 0.99 + "px";
}else{
sheerheartattack.style.top = 1 + distance + "px";
}
if (distance >2310) {
  sheerheartattack.style.left = out;
  sheerheartattack.classList.add("invisible");
  nightattheopera.style.right = center;
  nightattheopera.classList.remove("invisible");
} else {
  nightattheopera.style.right = out;
  nightattheopera.classList.add("invisible");
}
if (distance > 2680) {
nightattheopera.style.top = 1 + distance * 0.99 + "px";
}else{
nightattheopera.style.top = 1 + distance + "px";
}
if (distance > 2680) {
  nightattheopera.style.right = out;
  nightattheopera.classList.add("invisible");
  dayattheraces.style.left = center;
  dayattheraces.classList.remove("invisible");
} else {
  dayattheraces.style.left = out;
  dayattheraces.classList.add("invisible");
}
if (distance > 3050) {
dayattheraces.style.top = 1 + distance * 0.99 + "px";
}else{
dayattheraces.style.top = 1 + distance + "px";
}
if (distance > 3050) {
  dayattheraces.style.left = out;
  dayattheraces.classList.add("invisible");
  wewillrockyou.style.right = center;
  wewillrockyou.classList.remove("invisible");
} else {
  wewillrockyou.style.right = out;
  wewillrockyou.classList.add("invisible");
}
if (distance > 3420) {
wewillrockyou.style.top = 1 + distance * 0.99 + "px";
}else{
wewillrockyou.style.top = 1 + distance + "px";
}
if (distance > 3420) {
  wewillrockyou.style.right = out;
  wewillrockyou.classList.add("invisible");
  topoftheworld.style.left = center;
  topoftheworld.classList.remove("invisible");
} else {
  topoftheworld.style.left = out;
  topoftheworld.classList.add("invisible");
}
if (distance > 3790) {
topoftheworld.style.top = 1 + distance * 0.99 + "px";
}else{
topoftheworld.style.top = 1 + distance + "px";
}
if (distance >3790) {
  topoftheworld.style.left = out;
  topoftheworld.classList.add("invisible");
  breakfree.style.right = center;
  breakfree.classList.remove("invisible");
} else {
  breakfree.style.right = out;
  breakfree.classList.add("invisible");
}
if (distance > 4160) {
breakfree.style.top = 1 + distance * 0.99 + "px";
}else{
breakfree.style.top = 1 + distance + "px";
}
if (distance >4160) {
  breakfree.style.right = out;
  breakfree.classList.add("invisible");
  liveaid.style.left = center;
  liveaid.classList.remove("invisible");
} else {
  liveaid.style.left = out;
  liveaid.classList.add("invisible");
}
if (distance > 4530) {
liveaid.style.top = 1 + distance * 0.99 + "px";
}else{
liveaid.style.top = 1 + distance + "px";
}
if (distance >4530) {
  liveaid.style.left = out;
  liveaid.classList.add("invisible");
  daysofourlives.style.right = center;
  daysofourlives.classList.remove("invisible");
} else {
  daysofourlives.style.right = out;
  daysofourlives.classList.add("invisible");
}
if (distance > 4900) {
daysofourlives.style.top = 1 + distance * 0.99 + "px";
}else{
daysofourlives.style.top = 1 + distance + "px";
}
if (distance >4900) {
  daysofourlives.style.right = out;
  daysofourlives.classList.add("invisible");
  comfirming.style.left = center;
  comfirming.classList.remove("invisible");
} else {
  comfirming.style.left = out;
  comfirming.classList.add("invisible");
}
if (distance > 5270) {
comfirming.style.top = 1 + distance * 0.99 + "px";
}else{
comfirming.style.top = 1 + distance + "px";
}
if (distance >5270) {
  comfirming.style.left = out;
  comfirming.classList.add("invisible");
  death.style.right = center;
  death.classList.remove("invisible");
} else {
  death.style.right = out;
  death.classList.add("invisible");
}
if (distance > 5640) {
death.style.top = 1 + distance * 0.99 + "px";
}else{
death.style.top = 1 + distance + "px";
}
if (distance >5640) {
  death.style.right = out;
  death.classList.add("invisible");
  phoenixtrust.style.left = center;
  phoenixtrust.classList.remove("invisible");
} else {
  phoenixtrust.style.left = out;
  phoenixtrust.classList.add("invisible");
}
if (distance > 6040) {
phoenixtrust.style.top = 1 + distance * 0.99 + "px";
}else{
phoenixtrust.style.top = 1 + distance + "px";
}
if (distance >6040) {
  phoenixtrust.style.left = out;
  phoenixtrust.classList.add("invisible");
  lastalbum.style.right = center;
  lastalbum.classList.remove("invisible");
} else {
  lastalbum.style.right = out;
  lastalbum.classList.add("invisible");
}
if (distance > 6340) {
lastalbum.style.top = 1 + distance * 0.99 + "px";
}else{
lastalbum.style.top = 1 + distance + "px";
}
if (distance >6340) {
  lastalbum.style.right = out;
  lastalbum.classList.add("invisible");
  closingremarks.style.left = "0";
  } else {

}
}
