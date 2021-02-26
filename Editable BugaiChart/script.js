/*Here we will make editable bugauChart with two buttons ok and cancel.

*/

let table = document.getElementById("chart");
//let's make object reference variable which will be used when user click ok and cancel button
let cellToEdit;
let textarea;
/*now main part where  we will look for all three cases of target ,make object from cell,make text area
, make button and assign them to cell*/
table.onclick = function () {
  let target = event.target.closest("td,.ok,.cancel"); //three possible targets that user can click
  if (!target) return;
  if (target.nodeName == "TD") {
    //if we click on the cell first we will be sure that there is single cell selected
    if (cellToEdit) return; //if cell is already there then dont select any new cell until previous is done
    editCellNow(target); //now edit cell meaning append all buttons and other items.
  }
  //once the cell has contained buttons Now we can define action for buttons
  else if (target.className == "ok") {
    finishEditing(cellToEdit.refenceVariable, true);
  } else if (target.className == "cancel") {
    finishEditing(cellToEdit.refenceVariable);
  }
};

function editCellNow(selectedCell) {
  //the value of this object will be used when button is clicked.
  //for ok we will need the value of selected cell i.e seleted.firstChildValue as we dont need buttons to display
  //for cancel we will need selected sell's original value selectedCell.innerHTML
  cellToEdit = {
    refenceVariable: selectedCell, //cell
    dataToShow: selectedCell.innerHTML, //cell's value
  };

  //NOW making textarea
  textarea = document.createElement("textarea");
  textarea.style.width = selectedCell.clientWidth + "px";
  textarea.style.height = selectedCell.clientHeight + "px";
  //We cant add button inside the text area because both are different thing.
  //we can place them together inside the seleted cell as below
  //first empty selected cell
  textarea.innerHTML = selectedCell.innerHTML;
  selectedCell.innerHTML = "";
  //NOw append textArea as first child of selected cell
  selectedCell.appendChild(textarea);

  //Adding buttons to selecte cell
  selectedCell.insertAdjacentHTML(
    "beforeend",
    '<br><button class="ok">ok</button><button class="cancel">cancel</button>'
  );
}
//  finishEditing(cellToEdit.refenceVariable, true);

//Now we can see two buttons which are clickable and we will define their action.
//Here we can assing one handler for both using true and false condtion .

function finishEditing(refenceVariable, condtion) {
  if (condtion) {
    refenceVariable.innerHTML = refenceVariable.firstChild.value; //use of object
  } else {
    refenceVariable.innerHTML = cellToEdit.dataToShow;
  }
  cellToEdit = null; //now we can select another cell
}
