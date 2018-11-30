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
var debuttext = document.getElementById("debuttext");
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
var sheerheartattacktext = document.getElementById("sheerheartattacktext");
var nightattheoperatext  = document.getElementById("nightattheoperatext");
var dayattheracestext = document.getElementById("dayattheracestext");
var wewillrockyoutext = document.getElementById("wewillrockyoutext");
var topoftheworldtext = document.getElementById("topoftheworldtext");
var breakfreetext = document.getElementById("breakfreetext");
var liveaidtext = document.getElementById("liveaidtext");
var daysofourlivestext = document.getElementById("daysofourlivestext");
var comfirmingtext = document.getElementById("comfirmingtext");
var deathtext = document.getElementById("deathtext");
var phoenixtrusttext = document.getElementById("phoenixtrusttext");
var lastalbumtext = document.getElementById("lastalbumtext");
var closingremarks = document.getElementById("closingremarks");
var closingremarks2 = document.getElementById("closingremarks");
var closingremarks3 = document.getElementById("closingremarks");
var closingremarks4 = document.getElementById("closingremarks");
var closingremarks5 = document.getElementById("closingremarks");
var out ="-686px";
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
    if (distance >441) {
      smile.classList.remove("invisible");
      smiletext.classList.add("invisible");
    } else {
      smile.classList.add("invisible");
    }
    if (distance >760) {
      smile.style.right = center3;
    } else {
      smile.style.right = center2;
      smile.style.right = out;
    }
    if (distance >865) {
      smiletext.style.right = center2;
      smiletext.classList.remove("invisible");
    } else {
      smiletext.classList.add("invisible");
    }
    if (distance > 560) {
   smile.style.top = 55 + distance * 0.99 + "px";
   smiletext.style.top = 55 + distance * 0.99 + "px";
 }else{
   smile.style.top = 55 + distance + "px";
   smiletext.style.top = 55 + distance + "px";
   }

if (distance >1410) {
  // smilesong.stop();
  smile.style.right = out;
  smile.classList.add("invisible");
  smiletext.style.right = out;
  smiletext.classList.add("invisible");
  form.style.left = center2;
  form.classList.remove("invisible");
} else {
  form.style.left = "-686px";
  form.classList.add("invisible");
}
if (distance> 1515) {
  formtext.style.left = center3;
  formtext.classList.remove("invisible");
} else {
  formtext.style.left = "-686px";
  formtext.classList.add("invisible");
}
if (distance > 1310) {
form.style.top = 55 + distance * 0.99 + "px";
formtext.style.top = 55 + distance * 0.99 + "px";
}else{
form.style.top = 55 + distance + "px";
formtext.style.top = 55 + distance + "px";
}
if (distance > 2160) {
  form.style.left = out;
  form.classList.add("invisible");
  formtext.style.left = out;
  formtext.classList.add("invisible");
  debut.style.right = center2;
  debut.classList.remove("invisible");
} else {
  debut.style.right = out;
  debut.classList.add("invisible");
}
if (distance> 2265) {
  debuttext.style.right = center3;
  debuttext.classList.remove("invisible");
} else {
  debuttext.style.right = "-686px";
  debuttext.classList.add("invisible");
}
if (distance > 2060) {
debut.style.top = 55 + distance * 0.99 + "px";
debuttext.style.top = 55 + distance * 0.99 + "px";
}else{
debut.style.top = 55 + distance + "px";
debuttext.style.top = 55 + distance + "px";
}
if (distance >2910) {
  debut.style.right = out;
  debut.classList.add("invisible");
  debuttext.style.right = "-686px";
  debuttext.classList.add("invisible");
  sheerheartattack.style.left = center2;
  sheerheartattack.classList.remove("invisible");
} else {
  sheerheartattack.style.left = out;
  sheerheartattack.classList.add("invisible");
}
if (distance> 3005) {
  sheerheartattacktext.style.left = center3;
  sheerheartattacktext.classList.remove("invisible");
} else {
  sheerheartattacktext.style.left = "-686px";
  sheerheartattacktext.classList.add("invisible");
}
if (distance > 2810) {
sheerheartattack.style.top = 55 + distance * 0.99 + "px";
sheerheartattacktext.style.top = 55 + distance * 0.99 + "px";
}else{
sheerheartattack.style.top = 55 + distance + "px";
sheerheartattacktext.style.top = 55 + distance + "px";
}
if (distance > 3660) {
  sheerheartattack.style.left = out;
  sheerheartattack.classList.add("invisible");
  sheerheartattacktext.style.left = "-686px";
  sheerheartattacktext.classList.add("invisible");
  nightattheopera.style.right = center2;
  nightattheopera.classList.remove("invisible");
} else {
  nightattheopera.style.right = out;
  nightattheopera.classList.add("invisible");
}
if (distance> 3765) {
  nightattheoperatext.style.right = center3;
  nightattheoperatext.classList.remove("invisible");
} else {
  nightattheoperatext.style.right = "-686px";
  nightattheoperatext.classList.add("invisible");
}
if (distance > 3560) {
nightattheopera.style.top = 55 + distance * 0.99 + "px";
nightattheoperatext.style.top = 55 + distance * 0.99 + "px";
}else{
nightattheopera.style.top = 55 + distance + "px";
nightattheoperatext.style.top = 55 + distance + "px";
}
if (distance > 4410) {
  nightattheopera.style.right = out;
  nightattheopera.classList.add("invisible");
  nightattheoperatext.style.right = "-686px";
  nightattheoperatext.classList.add("invisible");
  dayattheraces.style.left = center2;
  dayattheraces.classList.remove("invisible");
} else {
  dayattheraces.style.left = out;
  dayattheraces.classList.add("invisible");
}
if (distance> 4515) {
  dayattheracestext.style.left = center3;
  dayattheracestext.classList.remove("invisible");
} else {
  dayattheracestext.style.left = "-686px";
  dayattheracestext.classList.add("invisible");
}
if (distance > 4310) {
dayattheraces.style.top = 75 + distance * 0.99 + "px";
dayattheracestext.style.top = 75 + distance * 0.99 + "px";
}else{
dayattheraces.style.top = 75 + distance + "px";
dayattheracestext.style.top = 75 + distance + "px";
}
if (distance > 5160) {
  dayattheraces.style.left = out;
  dayattheraces.classList.add("invisible");
  dayattheracestext.style.left = "-686px";
  dayattheracestext.classList.add("invisible");
  wewillrockyou.style.right = center2;
  wewillrockyou.classList.remove("invisible");
} else {
  wewillrockyou.style.right = out;
  wewillrockyou.classList.add("invisible");
}
if (distance> 5165) {
  wewillrockyoutext.style.right = center3;
  wewillrockyoutext.classList.remove("invisible");
} else {
  wewillrockyoutext.style.right = "-686px";
  wewillrockyoutext.classList.add("invisible");
}
if (distance > 5060) {
wewillrockyou.style.top = 85 + distance * 0.99 + "px";
wewillrockyoutext.style.top = 85 + distance * 0.99 + "px";
}else{
wewillrockyou.style.top = 85 + distance + "px";
wewillrockyoutext.style.top = 85 + distance + "px";
}
if (distance > 5910) {
  wewillrockyou.style.right = out;
  wewillrockyou.classList.add("invisible");
  wewillrockyoutext.style.right = "-686px";
  wewillrockyoutext.classList.add("invisible");
  topoftheworld.style.left = center2;
  topoftheworld.classList.remove("invisible");
} else {
  topoftheworld.style.left = out;
  topoftheworld.classList.add("invisible");
}
if (distance> 6015) {
  topoftheworldtext.style.left = center3;
  topoftheworldtext.classList.remove("invisible");
} else {
  topoftheworldtext.style.left = "-686px";
  topoftheworldtext.classList.add("invisible");
}
if (distance > 5810) {
topoftheworld.style.top = 100 + distance * 0.99 + "px";
topoftheworldtext.style.top = 100 + distance * 0.99 + "px";
}else{
topoftheworld.style.top = 100 + distance + "px";
topoftheworldtext.style.top = 100 + distance + "px";
}
if (distance > 6660) {
  topoftheworld.style.left = out;
  topoftheworld.classList.add("invisible");
  topoftheworldtext.style.left = "-686px";
  topoftheworldtext.classList.add("invisible");
  breakfree.style.right = center2;
  breakfree.classList.remove("invisible");
} else {
  breakfree.style.right = out;
  breakfree.classList.add("invisible");
}
if (distance> 6765) {
  breakfreetext.style.right = center3;
  breakfreetext.classList.remove("invisible");
} else {
  breakfreetext.style.right = "-686px";
  breakfreetext.classList.add("invisible");
}
if (distance > 6560) {
breakfree.style.top = 100 + distance * 0.99 + "px";
breakfreetext.style.top = 100 + distance * 0.99 + "px";
}else{
breakfree.style.top = 100 + distance + "px";
breakfreetext.style.top = 100 + distance + "px";
}
if (distance >7610) {
  breakfree.style.right = out;
  breakfree.classList.add("invisible");
  breakfreetext.style.right = "-686px";
  breakfreetext.classList.add("invisible");
  liveaid.style.left = center2;
  liveaid.classList.remove("invisible");
} else {
  liveaid.style.left = out;
  liveaid.classList.add("invisible");
}
if (distance> 7715) {
  liveaidtext.style.left = center3;
  liveaidtext.classList.remove("invisible");
} else {
  liveaidtext.style.left = "-686px";
  liveaidtext.classList.add("invisible");
}
if (distance > 7510) {
liveaid.style.top = 125 + distance * 0.99 + "px";
liveaidtext.style.top = 125 + distance * 0.99 + "px";
}else{
liveaid.style.top = 125 + distance + "px";
liveaidtext.style.top = 125 + distance + "px";
}
if (distance >8360) {
  liveaid.style.left = out;
  liveaid.classList.add("invisible");
  liveaidtext.style.left = "-686px";
  liveaidtext.classList.add("invisible");
  daysofourlives.style.right = center2;
  daysofourlives.classList.remove("invisible");
} else {
  daysofourlives.style.right = out;
  daysofourlives.classList.add("invisible");
}
if (distance> 8465) {
  daysofourlivestext.style.right = center3;
  daysofourlivestext.classList.remove("invisible");
} else {
  daysofourlivestext.style.right = "-686px";
  daysofourlivestext.classList.add("invisible");
}
if (distance > 8260) {
daysofourlives.style.top = 125 + distance * 0.99 + "px";
daysofourlivestext.style.top = 125 + distance * 0.99 + "px";
}else{
daysofourlives.style.top = 125 + distance + "px";
daysofourlivestext.style.top = 125 + distance + "px";
}
if (distance > 9110) {
  daysofourlives.style.right = out;
  daysofourlives.classList.add("invisible");
  daysofourlivestext.style.right = "-686px";
  daysofourlivestext.classList.add("invisible");
  comfirming.style.left = center2;
  comfirming.classList.remove("invisible");
} else {
  comfirming.style.left = out;
  comfirming.classList.add("invisible");
}
if (distance> 9215) {
  comfirmingtext.style.left = center3;
  comfirmingtext.classList.remove("invisible");
} else {
  comfirmingtext.style.left = "-686px";
  comfirmingtext.classList.add("invisible");
}
if (distance > 9010) {
comfirming.style.top = 125 + distance * 0.99 + "px";
comfirmingtext.style.top = 125 + distance * 0.99 + "px";
}else{
comfirming.style.top = 125 + distance + "px";
comfirmingtext.style.top = 125 + distance + "px";
}
if (distance > 9860) {
  comfirming.style.left = out;
  comfirming.classList.add("invisible");
  comfirmingtext.style.left = "-686px";
  comfirmingtext.classList.add("invisible");
  death.style.right = center2;
  death.classList.remove("invisible");
} else {
  death.style.right = out;
  death.classList.add("invisible");
}
if (distance> 9965) {
  deathtext.style.right = center3;
  deathtext.classList.remove("invisible");
} else {
  deathtext.style.right = "-686px";
  deathtext.classList.add("invisible");
}
if (distance > 9760) {
death.style.top = 150 + distance * 0.99 + "px";
deathtext.style.top = 150 + distance * 0.99 + "px";
}else{
death.style.top = 150 + distance + "px";
deathtext.style.top = 150 + distance + "px";
}
if (distance > 10610) {
  death.style.right = out;
  death.classList.add("invisible");
  deathtext.style.right = "-686px";
  deathtext.classList.add("invisible");
  phoenixtrust.style.left = center2;
  phoenixtrust.classList.remove("invisible");
} else {
  phoenixtrust.style.left = out;
  phoenixtrust.classList.add("invisible");
}
if (distance> 10715) {
  phoenixtrusttext.style.left = center3;
  phoenixtrusttext.classList.remove("invisible");
} else {
  phoenixtrusttext.style.left = "-686px";
  phoenixtrusttext.classList.add("invisible");
}
if (distance > 10510) {
phoenixtrust.style.top = 135 + distance * 0.99 + "px";
phoenixtrusttext.style.top = 135 + distance * 0.99 + "px";
}else{
phoenixtrust.style.top = 135 + distance + "px";
phoenixtrusttext.style.top = 135 + distance + "px";
}
if (distance > 11360) {
  phoenixtrust.style.left = out;
  phoenixtrust.classList.add("invisible");
  phoenixtrusttext.style.left = "-686px";
  phoenixtrusttext.classList.add("invisible");
  lastalbum.style.right = center2;
  lastalbum.classList.remove("invisible");
} else {
  lastalbum.style.right = out;
  lastalbum.classList.add("invisible");
}
if (distance> 11465) {
  lastalbumtext.style.right = center3;
  lastalbumtext.classList.remove("invisible");
} else {
  lastalbumtext.style.right = "-686px";
  lastalbumtext.classList.add("invisible");
}
if (distance > 11260) {
lastalbum.style.top = 150 + distance * 0.99 + "px";
lastalbumtext.style.top = 150 + distance * 0.99 + "px";
}else{
lastalbum.style.top = 150 + distance + "px";
lastalbumtext.style.top = 150 + distance + "px";
}
if (distance >12110) {
  lastalbum.style.right = out;
  lastalbum.classList.add("invisible");
  lastalbumtext.style.right = "-686px";
  lastalbumtext.classList.add("invisible");
} else {
}
if(distance >11810){
  bandlogo2.style.top = "11810px";
  bandlogo2.classList.remove("invisible");
  curtain3.style.left = "0";
  curtain4.style.right ="0";
  curtain3.classList.remove("invisible");
  curtain4.classList.remove("invisible");
}else{
  bandlogo2.style.top = "11810px";
  bandlogo2.classList.add("invisible");
  curtain3.style.left = out;
  curtain4.style.right = out;
  curtain3.classList.add("invisible");
  curtain4.classList.add("invisible");
  }
}
