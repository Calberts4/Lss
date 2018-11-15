window.onscroll = function(){

  var distance = window.pageYOffset;
  console.log(- distance);
var bandlogo = document.getElementById("bandlogo");
var curtain1 = document.getElementById("curtain1");
var curtain2 = document.getElementById("curtain2");
var fin = document.getElementById("fin");
var smile = document.getElementById("smile");
var form = document.getElementById("form");

var out ="-500px";
  if(distance >5){
    bandlogo.style.top = "-100px";
    bandlogo.classList.add("invisible");
    curtain1.style.left = out;
    curtain2.style.right = out;
    curtain1.classList.add("invisible");
    curtain2.classList.add("invisible");
    smile.style.right = "390px";
    smile.classList.remove("invisible");
    form.style.left = "390px";
    form.classList.remove("invisible");
  }else{
    bandlogo.style.top = "100px";
    bandlogo.classList.remove("invisible");
    curtain1.style.left = "0";
    curtain2.style.right ="0";
    curtain1.classList.remove("invisible");
    curtain2.classList.remove("invisible");
    smile.style.right = "-600px";
    smile.classList.add("invisible");
    form.style.left = "-500px";
    form.classList.add("invisible");
}
}
