window.onscroll = function(){

  var distance = window.pageYOffset;
  console.log(distance);

var bandlogo = document.getElementById("bandlogo");
var curtain1 = document.getElementById("curtain1");
var curtain2 = document.getElementById("curtain2");
var bandlogo2 = document.getElementById("bandlogo2");
var curtain3 = document.getElementById("curtain3");
var curtain4 = document.getElementById("curtain4");

// var smilesong = new Pizzicato.Sound('doingallright.mp3');

var smile = document.getElementById("smile");
var smiletext = document.getElementById("smiletext");
var form = document.getElementById("form");
var formtext = document.getElementById("formtext");
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
var closingremarks = document.getElementById("closingremarks");
var closingremarks2 = document.getElementById("closingremarks");
var closingremarks3 = document.getElementById("closingremarks");
var closingremarks4 = document.getElementById("closingremarks");
var closingremarks5 = document.getElementById("closingremarks");
var out ="-500px";
var center = "50%";
var center2 = "25%";
var center3 = "75%";
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

    if (distance >700) {
      // smilesong.play();
      smile.style.right = center;
      smile.classList.remove("invisible");
      smiletext.classList.add("invisible");
    } else {
      smile.style.right = out;
      smile.classList.add("invisible");
    }
    if (distance >1090) {
      smile.style.right = center3;
      smiletext.style.right = center2;
      smiletext.classList.remove("invisible");
    } else {
      smile.style.right = center;
      smile.style.right = out;
      smiletext.classList.add("invisible");
    }
    if (distance > 1210) {
   smile.style.top = 50 + distance * 0.99 + "px";
   smiletext.style.top = 50 + distance * 0.99 + "px";
 }else{
   smile.style.top = 50 + distance + "px";
   smiletext.style.top = 50 + distance + "px";
   }

if (distance >1410) {
  // smilesong.stop();
  smile.style.right = out;
  smile.classList.add("invisible");
  smiletext.style.right = out;
  smiletext.classList.add("invisible");
  form.style.left = center2;
  form.classList.remove("invisible");
  // formtext.style.left = center3;
  // formtext.classList.remove("invisible");
} else {
  form.style.left = out;
  form.classList.add("invisible");
  // formtext.style.left = out;
  // formtext.classList.add("invisible");
}
if (distance > 1610) {
form.style.top = 50 + distance * 0.99 + "px";
// formtext.style.top = 50 + distance * 0.99 + "px";
}else{
form.style.top = 50 + distance + "px";
// formtext.style.top = 50 + distance + "px";
}
if (distance >1610) {
  form.style.left = out;
  form.classList.add("invisible");
  // formtext.style.left = out;
  // formtext.classList.add("invisible");
  debut.style.right = center;
  debut.classList.remove("invisible");
} else {
  debut.style.right = out;
  debut.classList.add("invisible");
}
if (distance > 2010) {
debut.style.top = 1 + distance * 0.99 + "px";
}else{
debut.style.top = 1 + distance + "px";
}
if (distance >2010) {
  debut.style.right = out;
  debut.classList.add("invisible");
  sheerheartattack.style.left = center;
  sheerheartattack.classList.remove("invisible");
} else {
  sheerheartattack.style.left = out;
  sheerheartattack.classList.add("invisible");
}
if (distance > 2410) {
sheerheartattack.style.top = 1 + distance * 0.99 + "px";
}else{
sheerheartattack.style.top = 1 + distance + "px";
}
if (distance >2410) {
  sheerheartattack.style.left = out;
  sheerheartattack.classList.add("invisible");
  nightattheopera.style.right = center;
  nightattheopera.classList.remove("invisible");
} else {
  nightattheopera.style.right = out;
  nightattheopera.classList.add("invisible");
}
if (distance > 2780) {
nightattheopera.style.top = 1 + distance * 0.99 + "px";
}else{
nightattheopera.style.top = 1 + distance + "px";
}
if (distance > 2780) {
  nightattheopera.style.right = out;
  nightattheopera.classList.add("invisible");
  dayattheraces.style.left = center;
  dayattheraces.classList.remove("invisible");
} else {
  dayattheraces.style.left = out;
  dayattheraces.classList.add("invisible");
}
if (distance > 3150) {
dayattheraces.style.top = 1 + distance * 0.99 + "px";
}else{
dayattheraces.style.top = 1 + distance + "px";
}
if (distance > 3150) {
  dayattheraces.style.left = out;
  dayattheraces.classList.add("invisible");
  wewillrockyou.style.right = center;
  wewillrockyou.classList.remove("invisible");
} else {
  wewillrockyou.style.right = out;
  wewillrockyou.classList.add("invisible");
}
if (distance > 3520) {
wewillrockyou.style.top = 1 + distance * 0.99 + "px";
}else{
wewillrockyou.style.top = 1 + distance + "px";
}
if (distance > 3520) {
  wewillrockyou.style.right = out;
  wewillrockyou.classList.add("invisible");
  topoftheworld.style.left = center;
  topoftheworld.classList.remove("invisible");
} else {
  topoftheworld.style.left = out;
  topoftheworld.classList.add("invisible");
}
if (distance > 3890) {
topoftheworld.style.top = 1 + distance * 0.99 + "px";
}else{
topoftheworld.style.top = 1 + distance + "px";
}
if (distance >3890) {
  topoftheworld.style.left = out;
  topoftheworld.classList.add("invisible");
  breakfree.style.right = center;
  breakfree.classList.remove("invisible");
} else {
  breakfree.style.right = out;
  breakfree.classList.add("invisible");
}
if (distance > 4260) {
breakfree.style.top = 1 + distance * 0.99 + "px";
}else{
breakfree.style.top = 1 + distance + "px";
}
if (distance >4260) {
  breakfree.style.right = out;
  breakfree.classList.add("invisible");
  liveaid.style.left = center;
  liveaid.classList.remove("invisible");
} else {
  liveaid.style.left = out;
  liveaid.classList.add("invisible");
}
if (distance > 4630) {
liveaid.style.top = 1 + distance * 0.99 + "px";
}else{
liveaid.style.top = 1 + distance + "px";
}
if (distance >4630) {
  liveaid.style.left = out;
  liveaid.classList.add("invisible");
  daysofourlives.style.right = center;
  daysofourlives.classList.remove("invisible");
} else {
  daysofourlives.style.right = out;
  daysofourlives.classList.add("invisible");
}
if (distance > 5000) {
daysofourlives.style.top = 1 + distance * 0.99 + "px";
}else{
daysofourlives.style.top = 1 + distance + "px";
}
if (distance >5000) {
  daysofourlives.style.right = out;
  daysofourlives.classList.add("invisible");
  comfirming.style.left = center;
  comfirming.classList.remove("invisible");
} else {
  comfirming.style.left = out;
  comfirming.classList.add("invisible");
}
if (distance > 5370) {
comfirming.style.top = 1 + distance * 0.99 + "px";
}else{
comfirming.style.top = 1 + distance + "px";
}
if (distance >5370) {
  comfirming.style.left = out;
  comfirming.classList.add("invisible");
  death.style.right = center;
  death.classList.remove("invisible");
} else {
  death.style.right = out;
  death.classList.add("invisible");
}
if (distance > 5740) {
death.style.top = 1 + distance * 0.99 + "px";
}else{
death.style.top = 1 + distance + "px";
}
if (distance >5740) {
  death.style.right = out;
  death.classList.add("invisible");
  phoenixtrust.style.left = center;
  phoenixtrust.classList.remove("invisible");
} else {
  phoenixtrust.style.left = out;
  phoenixtrust.classList.add("invisible");
}
if (distance > 6140) {
phoenixtrust.style.top = 1 + distance * 0.99 + "px";
}else{
phoenixtrust.style.top = 1 + distance + "px";
}
if (distance >6140) {
  phoenixtrust.style.left = out;
  phoenixtrust.classList.add("invisible");
  lastalbum.style.right = center;
  lastalbum.classList.remove("invisible");
} else {
  lastalbum.style.right = out;
  lastalbum.classList.add("invisible");
}
if (distance > 6440) {
lastalbum.style.top = 1 + distance * 0.99 + "px";
}else{
lastalbum.style.top = 1 + distance + "px";
}
if (distance >6440) {
  lastalbum.style.right = out;
  lastalbum.classList.add("invisible");
  } else {
}
if (distance >6450) {
  closingremarks.classList.remove("invisible");
  } else {
  closingremarks.classList.add("invisible");
}
if (distance > 6750) {
closingremarks.style.top = 1 + distance * 0.99 + "px";
}else{
closingremarks.style.top = 1 + distance + "px";
}
if (distance > 6750) {
  closingremarks.classList.add("invisible");
}else{
  closingremarks2.classList.remove("invisible");
}
if (distance > 7350) {
  closingremarks2.style.top = 1 + distance * 0.99 + "px";
}else{
  closingremarks2.style.top = 1 + distance + "px";
}
if (distance > 7350) {
  closingremarks2.classList.add("invisible");
}else{
  closingremarks3.classList.remove("invisible");
}
if (distance > 7850) {
  closingremarks3.style.top = 1 + distance * 0.99 + "px";
}else{
  closingremarks3.style.top = 1 + distance + "px";
}
if (distance > 7850) {
  closingremarks3.classList.add("invisible");
}else{
  closingremarks4.classList.remove("invisible");
}
if (distance > 8350) {
  closingremarks4.style.top = 1 + distance * 0.99 + "px";
  } else {
    closingremarks4.style.top = 1 + distance + "px";
}
if (distance > 8350) {
  closingremarks4.classList.add("invisible");
}else{
  closingremarks5.classList.add("invisible");
}
if (distance > 8850) {
  closingremarks4.style.top = 1 + distance * 0.99 + "px";
  } else {
    closingremarks4.style.top = 1 + distance + "px";
}
if (distance > 8850) {
  closingremarks5.classList.add("invisible");
}else{
}
if(distance >9300){
  bandlogo2.style.top = "9500px";
  bandlogo2.classList.remove("invisible");
  curtain3.style.left = "0";
  curtain4.style.right ="0";
  curtain3.classList.remove("invisible");
  curtain4.classList.remove("invisible");
}else{
  bandlogo2.style.top = "9500px";
  bandlogo2.classList.add("invisible");
  curtain3.style.left = out;
  curtain4.style.right = out;
  curtain3.classList.add("invisible");
  curtain4.classList.add("invisible");
  }
}
