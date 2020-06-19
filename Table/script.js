let videoDiv=document.querySelector('.videoDiv');
let thirdVideo=document.createElement('p');
thirdVideo.textContent='thirdVideo';
videoDiv.append(thirdVideo);
videoDiv.firstElementChild.textContent='modified video';

let arrayFromRows=Array.from(table.tBodies[0].rows)
.sort((a,b)=>a.cells[0].innerHTML>b.cells[0].innerHTML?1:-1);
table.tBodies[0].append( ...arrayFromRows);

let bodytwo=Array.from(table.tBodies[1].rows)
.sort((a,b)=>a.cells[2].innerHTML>b.cells[2].innerHTML?1:-1);
table.tBodies[1].append(...bodytwo);