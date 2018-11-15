window.onscroll = function(){

  var distance = window.pageYOffset;
  console.log(- distance);
var curtain1 = document.getElementById("curtain1");
var out ="-500px";
  if(distance >-1){
    curtain1.style.left = out;
    document.getElementById("curtain2").style.right = out;
    curtain1.classList.add("invisible");
    curtain2.classList.add("invisible");
    document.getElementById("smile").style.right = "390px";
    document.getElementById("smile").style.opacity ="100%"
    document.getElementById("form").style.left = "390px";
    document.getElementById("form").style.opacity = "100%";
  }else{
    document.getElementById("curtain1").style.left = "0";
    document.getElementById("curtain2").style.right ="0";
curtain1.classList.remove("invisible");
curtain2.classList.remove("invisible");
document.getElementById("smile").style.right = "-600px";
document.getElementById("smile").style.opacity = "0";
document.getElementById("form").style.left = "-500px";
document.getElementById("form").style.opacity ="0"
}
}
