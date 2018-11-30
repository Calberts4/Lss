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
var deaconleaves = document.getElementById("deaconleaves");
var deaconleavestext = document.getElementById("deaconleavestext");
var present = document.getElementById("present");
var presenttext = document.getElementById("presenttext");

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
    if (distance >593) {
      smile.classList.remove("invisible");
      smiletext.classList.add("invisible");
    } else {
      smile.classList.add("invisible");
    }
    if (distance >593) {
      smile.style.right = center3;
    } else {
      smile.style.right = center2;
      smile.style.right = out;
    }
    if (distance >698) {
      smiletext.style.right = center2;
      smiletext.classList.remove("invisible");
    } else {
      smiletext.classList.add("invisible");
    }
    if (distance > 493) {
   smile.style.top = 55 + distance * 0.99 + "px";
   smiletext.style.top = 55 + distance * 0.99 + "px";
 }else{
   smile.style.top = 55 + distance + "px";
   smiletext.style.top = 55 + distance + "px";
   }

if (distance > 993) {
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
if (distance> 1098) {
  formtext.style.left = center3;
  formtext.classList.remove("invisible");
} else {
  formtext.style.left = "-686px";
  formtext.classList.add("invisible");
}
if (distance > 893) {
form.style.top = 55 + distance * 0.99 + "px";
formtext.style.top = 55 + distance * 0.99 + "px";
}else{
form.style.top = 55 + distance + "px";
formtext.style.top = 55 + distance + "px";
}
if (distance > 4800) {
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
if (distance> 4900) {
  debuttext.style.right = center3;
  debuttext.classList.remove("invisible");
} else {
  debuttext.style.right = "-686px";
  debuttext.classList.add("invisible");
}
if (distance > 4700) {
debut.style.top = 55 + distance * 0.99 + "px";
debuttext.style.top = 55 + distance * 0.99 + "px";
}else{
debut.style.top = 55 + distance + "px";
debuttext.style.top = 55 + distance + "px";
}
if (distance > 5200) {
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
if (distance> 5300) {
  sheerheartattacktext.style.left = center3;
  sheerheartattacktext.classList.remove("invisible");
} else {
  sheerheartattacktext.style.left = "-686px";
  sheerheartattacktext.classList.add("invisible");
}
if (distance > 5100) {
sheerheartattack.style.top = 55 + distance * 0.99 + "px";
sheerheartattacktext.style.top = 55 + distance * 0.99 + "px";
}else{
sheerheartattack.style.top = 55 + distance + "px";
sheerheartattacktext.style.top = 55 + distance + "px";
}
if (distance > 5600) {
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
if (distance> 5700) {
  nightattheoperatext.style.right = center3;
  nightattheoperatext.classList.remove("invisible");
} else {
  nightattheoperatext.style.right = "-686px";
  nightattheoperatext.classList.add("invisible");
}
if (distance > 5500) {
nightattheopera.style.top = 55 + distance * 0.99 + "px";
nightattheoperatext.style.top = 55 + distance * 0.99 + "px";
}else{
nightattheopera.style.top = 55 + distance + "px";
nightattheoperatext.style.top = 55 + distance + "px";
}
if (distance > 6000) {
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
if (distance> 6100) {
  dayattheracestext.style.left = center3;
  dayattheracestext.classList.remove("invisible");
} else {
  dayattheracestext.style.left = "-686px";
  dayattheracestext.classList.add("invisible");
}
if (distance > 5900) {
dayattheraces.style.top = 75 + distance * 0.99 + "px";
dayattheracestext.style.top = 75 + distance * 0.99 + "px";
}else{
dayattheraces.style.top = 75 + distance + "px";
dayattheracestext.style.top = 75 + distance + "px";
}
if (distance > 6400) {
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
if (distance> 6500) {
  wewillrockyoutext.style.right = center3;
  wewillrockyoutext.classList.remove("invisible");
} else {
  wewillrockyoutext.style.right = "-686px";
  wewillrockyoutext.classList.add("invisible");
}
if (distance > 6300) {
wewillrockyou.style.top = 85 + distance * 0.99 + "px";
wewillrockyoutext.style.top = 85 + distance * 0.99 + "px";
}else{
wewillrockyou.style.top = 85 + distance + "px";
wewillrockyoutext.style.top = 85 + distance + "px";
}
if (distance > 6800) {
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
if (distance> 6900) {
  topoftheworldtext.style.left = center3;
  topoftheworldtext.classList.remove("invisible");
} else {
  topoftheworldtext.style.left = "-686px";
  topoftheworldtext.classList.add("invisible");
}
if (distance > 6700) {
topoftheworld.style.top = 100 + distance * 0.99 + "px";
topoftheworldtext.style.top = 100 + distance * 0.99 + "px";
}else{
topoftheworld.style.top = 100 + distance + "px";
topoftheworldtext.style.top = 100 + distance + "px";
}
if (distance > 7200) {
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
if (distance> 7300) {
  breakfreetext.style.right = center3;
  breakfreetext.classList.remove("invisible");
} else {
  breakfreetext.style.right = "-686px";
  breakfreetext.classList.add("invisible");
}
if (distance > 7100) {
breakfree.style.top = 100 + distance * 0.99 + "px";
breakfreetext.style.top = 100 + distance * 0.99 + "px";
}else{
breakfree.style.top = 100 + distance + "px";
breakfreetext.style.top = 100 + distance + "px";
}
if (distance >7600) {
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
if (distance> 7700) {
  liveaidtext.style.left = center3;
  liveaidtext.classList.remove("invisible");
} else {
  liveaidtext.style.left = "-686px";
  liveaidtext.classList.add("invisible");
}
if (distance > 7500) {
liveaid.style.top = 125 + distance * 0.99 + "px";
liveaidtext.style.top = 125 + distance * 0.99 + "px";
}else{
liveaid.style.top = 125 + distance + "px";
liveaidtext.style.top = 125 + distance + "px";
}
if (distance >8000) {
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
if (distance> 8100) {
  daysofourlivestext.style.right = center3;
  daysofourlivestext.classList.remove("invisible");
} else {
  daysofourlivestext.style.right = "-686px";
  daysofourlivestext.classList.add("invisible");
}
if (distance > 7900) {
daysofourlives.style.top = 125 + distance * 0.99 + "px";
daysofourlivestext.style.top = 125 + distance * 0.99 + "px";
}else{
daysofourlives.style.top = 125 + distance + "px";
daysofourlivestext.style.top = 125 + distance + "px";
}
if (distance > 8400) {
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
if (distance> 8500) {
  comfirmingtext.style.left = center3;
  comfirmingtext.classList.remove("invisible");
} else {
  comfirmingtext.style.left = "-686px";
  comfirmingtext.classList.add("invisible");
}
if (distance > 8300) {
comfirming.style.top = 125 + distance * 0.99 + "px";
comfirmingtext.style.top = 125 + distance * 0.99 + "px";
}else{
comfirming.style.top = 125 + distance + "px";
comfirmingtext.style.top = 125 + distance + "px";
}
if (distance > 8800) {
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
if (distance> 8900) {
  deathtext.style.right = center3;
  deathtext.classList.remove("invisible");
} else {
  deathtext.style.right = "-686px";
  deathtext.classList.add("invisible");
}
if (distance > 8700) {
death.style.top = 150 + distance * 0.99 + "px";
deathtext.style.top = 150 + distance * 0.99 + "px";
}else{
death.style.top = 150 + distance + "px";
deathtext.style.top = 150 + distance + "px";
}
if (distance > 9200) {
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
if (distance> 9300) {
  phoenixtrusttext.style.left = center3;
  phoenixtrusttext.classList.remove("invisible");
} else {
  phoenixtrusttext.style.left = "-686px";
  phoenixtrusttext.classList.add("invisible");
}
if (distance > 9100) {
phoenixtrust.style.top = 135 + distance * 0.99 + "px";
phoenixtrusttext.style.top = 135 + distance * 0.99 + "px";
}else{
phoenixtrust.style.top = 135 + distance + "px";
phoenixtrusttext.style.top = 135 + distance + "px";
}
if (distance > 9600) {
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
if (distance> 9700) {
  lastalbumtext.style.right = center3;
  lastalbumtext.classList.remove("invisible");
} else {
  lastalbumtext.style.right = "-686px";
  lastalbumtext.classList.add("invisible");
}
if (distance > 9500) {
lastalbum.style.top = 150 + distance * 0.99 + "px";
lastalbumtext.style.top = 150 + distance * 0.99 + "px";
}else{
lastalbum.style.top = 150 + distance + "px";
lastalbumtext.style.top = 150 + distance + "px";
}
if (distance > 9200) {
  lastalbum.style.right = out;
  lastalbum.classList.add("invisible");
  lastalbumtext.style.right = "-686px";
  lastalbumtext.classList.add("invisible");
  deaconleaves.style.left = center2;
  deaconleaves.classList.remove("invisible");
} else {
  deaconleaves.style.left = out;
  deaconleaves.classList.add("invisible");
}
if (distance> 9300) {
  deaconleavestext.style.left = center3;
  deaconleavestext.classList.remove("invisible");
} else {
  deaconleavestext.style.left = "-686px";
  deaconleavestext.classList.add("invisible");
}
if (distance > 9100) {
deaconleaves.style.top = 135 + distance * 0.99 + "px";
deaconleavestext.style.top = 135 + distance * 0.99 + "px";
}else{
deaconleaves.style.top = 135 + distance + "px";
deaconleavestext.style.top = 135 + distance + "px";
}
if (distance > 9600) {
  deaconleaves.style.left = out;
  deaconleaves.classList.add("invisible");
  deaconleavestext.style.left = "-686px";
  deaconleavestext.classList.add("invisible");
  lastalbum.style.right = center2;
  lastalbum.classList.remove("invisible");
} else {
  lastalbum.style.right = out;
  lastalbum.classList.add("invisible");
}
if (distance> 9700) {
  lastalbumtext.style.right = center3;
  lastalbumtext.classList.remove("invisible");
} else {
  lastalbumtext.style.right = "-686px";
  lastalbumtext.classList.add("invisible");
}
if (distance > 9500) {
lastalbum.style.top = 150 + distance * 0.99 + "px";
lastalbumtext.style.top = 150 + distance * 0.99 + "px";
}else{
lastalbum.style.top = 150 + distance + "px";
lastalbumtext.style.top = 150 + distance + "px";
}

if(distance >10000){
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
