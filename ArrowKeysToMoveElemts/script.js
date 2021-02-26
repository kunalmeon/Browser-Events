let mouse = document.getElementById("mouse");
mouse.tabIndex = 0; //make mouse focusable so that pressing keys will make sense
mouse.onclick = function () {
  //to move you have to draw it first
  alert(mouse.style.top); //o/p is 0
  mouse.style.left = mouse.getBoundingClientRect().left + "px";
  mouse.style.top = mouse.getBoundingClientRect().top + "px";
  alert(mouse.style.top); //some pixel say 20px
};

mouse.onkeydown = function (event) {
  switch (event.key) {
    // o/p of mouse.style.left/top will be some px say 20px ie string value Since +'px'.
    //so while moving we olny need pure int for that parseInr(20px) =20 as done below.

    case "ArrowLeft":
      this.style.left = parseInt(this.style.left) - this.offsetWidth + "px";
      return false;

    case "ArrowRight":
      this.style.left = parseInt(this.style.left) + this.offsetWidth + "px";
      return false;

    case "ArrowUp":
      this.style.top = parseInt(this.style.top) - this.offsetHeight + "px";
      return false;

    case "ArrowDown":
      this.style.top = parseInt(this.style.top) + this.offsetHeight + "px";
      return false;
  }
};
