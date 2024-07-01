var button= document.getElementById("button")
var msg= document.getElementById("msg")
var input= document.getElementsByClassName("name")
function buttonclicked(){
  var n = Math.random()*100;
  var score = Math.floor(n)+1;
  msg.innerText=`Your love score is ${score}%`
}
function checkScore(){
  button.addEventListener('click', buttonclicked)
}
checkScore();
