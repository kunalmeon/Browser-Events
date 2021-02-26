//  (2.b) here we will access that button from 2.a and assign handler on it.
let button = document.getElementById("btn");
button.onclick = function () {
  alert("html+js");
};
/* note while usind dom property ie accessing html element in js
the browser makes and Event object that contains detail information about the event i.e type of event whick key was pressed etc.
And this object is passed as an argument to the event handler. e.g
*/
button.onclick = function (event) {
  alert(event.type);
};
// Note the later handler i.e fucntion(event) will overrride pervious one

/* (2.c) the handler is not always the function we can also pass the object. And that object must contain handler with name "handleEvent()".
And you know how to make an object. i.d directly as let object={}; or let object=new MyClass().
*/
let objBtn = document.getElementById("obj");
let obj = {
  handleEvent(event) {
    alert("handler can be an object with handleEvent method inside it");
  },
};
objBtn.addEventListener("click", obj);

/* for mutliple events we use event linstner as shown in below*/
class MyClass {
  handleEvent() {
    let method = "on" + event.type[0].toUpperCase() + event.type.slice(1); //tala ko event name
    //
    this[method]();
  }
  onClick() {
    alert(event.type);
    alert("by defualt event object is passed if we use domProperty");
  }

  onMousewheel() {
    alert(event.type);
    alert("by defualt event object is passed if we use domProperty");
  }
}

let object = new MyClass();
let messageElem = document.getElementById("messageButton");

messageElem.addEventListener("mousewheel", object);
messageElem.addEventListener("click", object);
