const btn = document.getElementById('startButton');
const txt = document.getElementById('text1');
var seconds = 00; 
var tens = 00; 
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var Interval;
//btn.style.display = 'none';

btn.addEventListener("click", () => {
  // 👇️ hide button
  //console.log("hi there");
  btn.style.display = 'none';
  text1.style.display = 'none'; 
  console.log("Should hide text");
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
});
  
function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
}
