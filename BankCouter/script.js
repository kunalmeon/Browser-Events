document.addEventListener('click',function(event){
if(event.target.dataset!==undefined){//two data is defined for buttons so dataset.
    //data-anyhting="anything"; BUt while accessing we use dataset.anything
    event.target.value++;
    event.target.style.color='red';
}

});
;
