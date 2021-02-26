/*let table=document.getElementById('table');
let bodyOfTable=table.querySelector('tbody');
let array=Array.from(bodyOfTable.rows);
array.sort((a,b)=>a.cells[0].innerHTML>b.cells[0].innerHTML?1:-1);
table.tBodies[0].append(...array);
*/

/**let tables = document.getElementById("User");

tables.onclick = function () {
  if (event.target.tagName != "TH") return;
  let th = event.target;
  sortTable(th.cellIndex, th.dataset.type);
};

function sortTable(coloumn, type) {
  let tBody = tables.querySelector("tbody");
  let rowsArray = Array.from(tBody.rows);
  let compare;
  switch (type) {
    case "number":
      compare = function (rowA, rowB) {
        return rowA.cells[coloumn].innerHTML - rowB.cells[coloumn].innerHTML;
      };
      break;
    case "string":
      compare = function (rowA, rowB) {
        return rowA.cells[coloumn].innerHTML > rowB.cells[coloumn].innerHTML
          ? 1
          : -1;
      };
      break;
  }
  rowsArray.sort(compare);
  tBody.append(...rowsArray);
} */


/* My own way.  


NOTE: To make array from the table we have to select the body of the table as
let userTable=document.getElementById('table');
let tableBody=userTable.querySelector('tbody');// hete 'tbody' id html tag for table's body
let rowsArray=Array.from(tableBody.rows);//note 'rows' and 'cells' are the actual keyword for table from HTML.
now you can sort.

let userTable = document.getElementById("table");
userTable.onclick = function () {
  if (event.target.tagName != "TH") return;
  tableSorting(event);
};
function tableSorting() {
  let type = event.target.dataset.type;
  let tableBody = userTable.querySelector("tbody");
  if (type == "string") {
    let rowsArray = Array.from(tableBody.rows);
    rowsArray.sort((rowA, rowB) =>
      rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
    );
    tableBody.append(...rowsArray);
  }
  else if (type == "number"){
    let rowsArray = Array.from(tableBody.rows);
    rowsArray.sort((rowA, rowB) =>{
      return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML ;}
    );
    tableBody.append(...rowsArray);
}
}*/

//FUTHER SHORTING OF CODE
let userTable = document.getElementById("table");
userTable.onclick = function () {
  if (event.target.tagName != "TH") return;
  let type = event.target.dataset.type;
  let tableBody = userTable.querySelector("tbody");
  if (type == "string") {
    let rowsArray = Array.from(tableBody.rows);
    rowsArray.sort((rowA, rowB) =>
      rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
    );
    tableBody.append(...rowsArray);
  }
  else if (type == "number"){
    let rowsArray = Array.from(tableBody.rows);
    rowsArray.sort((rowA, rowB) =>{
      return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML ;}
    );
    tableBody.append(...rowsArray);
}
}
