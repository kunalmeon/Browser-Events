// configuration of image size no of images 
let width=130;//same as image width
let count=3;
let position=0;
let list=document.querySelector('ul');
let listItem=document.querySelectorAll('li');
let main=document.getElementsByClassName('carousel');
let prev=document.getElementById('prev');
prev.onclick=function(){
    position+=width*count;
   position=Math.min(position,0);
    list.style.marginLeft=position +'px';
   
    


}
let next=document.getElementById('next');
next.onclick=function()
{
    position-=width*count;
    position=Math.max(position,-width*(listItem.length-count));
    list.style.marginLeft=position+'px';
   
}


