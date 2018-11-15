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
  }else{
    document.getElementById("curtain1").style.left = "0";
    document.getElementById("curtain2").style.right ="0";
curtain1.classList.remove("invisible");
curtain2.classList.remove("invisible");

  }


  }
