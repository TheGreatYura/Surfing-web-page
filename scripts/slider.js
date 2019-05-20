var prev = document.getElementById("prev");
var next = document.getElementById("next");
var images = document.getElementsByClassName("img");
var currentImg = 0;
var count = document.getElementById("count");

prev.addEventListener("click", showPrev);
next.addEventListener("click", showNext);

function showNext() {
  images[currentImg].classList.remove("active");
  
  if(currentImg < images.length - 1) {
    currentImg++;
    count.innerHTML = currentImg + 1;
    images[currentImg].classList.add("active");
  }
  else {
    currentImg = 0;
    count.innerHTML = currentImg + 1;
    images[currentImg].classList.add("active");
  }
}

function showPrev() {
	images[currentImg].classList.remove("active");
  
  if(currentImg > 0) {
    currentImg--;
    count.innerHTML = currentImg + 1;
    images[currentImg].classList.add("active");
  }
  else {
    currentImg = images.length -1;
    count.innerHTML = currentImg + 1;
    images[currentImg].classList.add("active");
  }
}