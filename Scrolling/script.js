/*The basic idea is document can be any long but the
window size is certain.Upon scrollig if we are out of
content ie. document size<window size then we have some
space left so that we can add more content to it.

Note:There are two important property in scrolling
1.It is of elastic nature i.e it bounces back and forth 
at top and bottom while scrolling
2.Unaccurate precision meaning the bottom is not the exact buttom.
There is some space left in it for better User Experience


*/


function adder() {

  let page = document.documentElement.getBoundingClientRect().bottom; //our page can be any long.
  let window = document.documentElement.clientHeight; //only certain part of page is visible which is equal to the window height.
  // Here window refers to the browser chrome firefox safari .(browser window not the Monitor window)
  if (page < window+400 ) {
   document.body.insertAdjacentHTML("beforeend", `<img src="./images/beer.jpeg" id="image">`);
     document.body.insertAdjacentHTML("beforeend", `<p id="para">DrinkBeer</p>`);
   

    
}
}

window.onscroll = function () {
  adder();
};
