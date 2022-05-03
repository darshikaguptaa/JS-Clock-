let div = document.getElementById("time");
let list = document.getElementById("list");

window.onload = displayClock();

function displayClock(){
  window.display = new Date().toLocaleTimeString();
  div.textContent = display;
  setTimeout(displayClock, 1000); 
}

div.addEventListener("click",()=>{
    list.style.opacity = "1"
    time = document.createElement("li")
    time.textContent = display;
    list.appendChild(time);
})

