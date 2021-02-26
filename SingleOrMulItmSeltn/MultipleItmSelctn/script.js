let button = document.getElementById("btn");
button.onclick = function () {
  if (event.metaKey || event.ctrlKey) {
    alert("altKey ctrlKey and the mouse click");
  }
};
let para = document.getElementById("para");
para.ondblclick = function () {
  alert("double click will select the text beside the handler");
};
para.onmousedown = function () {
  return ture;
};
para.oncopy = function () {
  alert(" Denied !!!");
};

let list = document.getElementById("ulList");

list.onclick = function () {
  if (event.target.tagName != "LI") return;
  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
};
//One main syntax ie classList is used and we know about it. Here selected class is made in css file with background color
/*THis class is assigened to all list items(li) using classList to make code small fast and more readable. */


/*Selectoion of mutliple items is easy .All we have to do is assign class.As we continue to press metaKeys background color will keep on adding
This will show to user that multiple data are selected */
function toggleSelect(li){
  li.classList.add('selected');
}

/*But to select single one we have to use trick. And the trick is remove all(metaKey or click) previously selected item
fist and then add slected class to single item*/
function singleSelect(li){
  let selected=list.querySelectorAll('.selected');
  alert(selected.length);
  for(let elem of selected){
    
    elem.classList.remove('selected');
  }
  li.classList.toggle('selected');
}

