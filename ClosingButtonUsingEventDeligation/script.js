let news = document.getElementById("news");

/* news.onclick=function(){
if(event.target.dataset.close==undefined) alert('click x to close');
let item=event.target.closest('.article');
/*closest('value') gives us
   the nearest parent of the "value" i.e bubbling  effect.here the item variable i.e (let item) will now refer to div element with class name .item
   so our task is to remove the item form the container after clicking x button. meaning item (let item) is now refering to individual div element.
   

item le certain article lai represent garxa and that will only be removed.
item.remove();

}
news.onclick=function(){
    if(event.target.dataset.fullclose==undefined) alert('click x to close whole news');
    let item=event.target.closest('#news');//item le abo whole news lai represent garxa and thus whole news will be removed
    item.remove();
     */

//above code is not fine because onclick overrides each other so we use eventlistner


news.addEventListener("click", function () {
  if (event.target.dataset.close == undefined) alert("click x to close");
  else {
    let article = event.target.closest(".article");
    /*closest('value') gives us
         the nearest parent of the "value" i.e bubbling  effect.here the item variable i.e (let item) will now refer to div element with class name .item
         so our task is to remove the item form the container after clicking x button. meaning item (let item) is now refering to individual div element.
         */

    // item le certain article lai represent garxa and that will only be removed.
    article.remove();
  }
 

});
let wholepaper=document.getElementById('display');
wholepaper.onclick=function(){
   if  (event.target.dataset.fullclose == undefined) return;
   //  alert("click x to close whole news");
  else {
     let news = event.target.closest("#display"); //item le abo whole news lai represent garxa and thus whole news will be removed
  news.remove();

  //news remove vaye paxi hide gareko NO NEWS lai kasari dekhaune? Closing button will now give the value of dataset which is eqaul to the 
  // id of that hidden button and we will access that hidden element using hidden property as below.
  let blankmessage=event.target.dataset.fullclose;
  let offline=document.getElementById(blankmessage);
  offline.hidden=!offline.hidden;

  
}
}
