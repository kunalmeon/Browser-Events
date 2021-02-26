let slider = document.querySelector(".slider");
let thumb = slider.querySelector(".thumb");
let image=document.querySelector('.image');
let para=document.getElementById('para');
//All i need is coordinates so that i can redraw the thumb
thumb.onmousedown = function () {
  //our thumb will move horizantally so we will not need Y-coordinates
  let shiftedX = event.clientX - thumb.getBoundingClientRect().left; //no gaurantee that user will slide the thumb from its initial point.there can be shifts.
  function onMouseMove() {
    let newLeft =
      event.clientX - shiftedX - slider.getBoundingClientRect().left;
    if (newLeft < 0) newLeft = 0;
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) newLeft = rightEdge;
    thumb.style.left = newLeft + "px";
    image.style.left=newLeft+'px';
   para.style.left=newLeft+'px';
  }

  document.addEventListener("mousemove", onMouseMove);
  document.onmouseup = function () {
    //if we mouseup on thumb then if cursor goes outOf the slider there will be problem.
    //And that problem is thumb gets stuck in document.As we have moved our mouse in document,our movement should also stop in document.
    //wider flexibility.
    document.removeEventListener("mousemove", onMouseMove);
  };
  thumb.ondragstart = function () {
    return false;
  };
};
