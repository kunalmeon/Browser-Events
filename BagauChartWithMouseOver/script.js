let table=document.getElementById('chart');
chart.onclick=function(){
  if(event.target.tagName!="TD") return;
 
 event.target.style.backgroundColor='red';
 
}
chart.onmouseout=function(){
  event.target.style.backgroundColor='';
}
table.onmousedown=function(){
  return false;//to deselect elements while cliking we may double click
}