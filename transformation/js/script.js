function changePage() {
  
  document.body.classList.toggle("fun");

 
  document.getElementById("title").innerText = "This is FUN now!";
  document.getElementById("text").innerText = "Everything changed!";
  
  
  document.getElementById("title").classList.toggle("big");
}