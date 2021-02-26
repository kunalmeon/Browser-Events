// Since we have many ways of defining handler for an action.
//for better readablity we use even deligation and the idea behind put 
// it is we will make one parent with handler in it.And all the children can acess that hander i/e one for all.
//SUppose we are making a menu with buttons inside html and methods in any object in script.SO how can we connect those buttons and the methods
//The approach is pass all those buttons in object that conatins handler for button action.To call action we will use data-action attribute which
//contains the name of the method to call.    <button id="load" data-action="load">Load</button>.
//upon clicking call a function(onCLick) that will make and call handler function in the parent(object).



// let menu=document.getElementById('menu');
class Menu{
constructor(elem){
  this.elem=elem;
  elem.onclick=this.raction.bind(this);//binding is done to call funtion later and the first argument of bindind will be the value of "this" where
  //the function is called after binding. First bind then you call the function.Here "this=Menu" as shown below at line 25
}
load(){
  alert('loading data');
}

save(){
alert('saving data');
}
search(){
  alert('searching data');}
bill(){
   alert('hello love');
  
}
  raction(){

  /*function ko name button ko data-action attribute baata nikalyo i.e "load".data keyword is used for adding customised property. The basic syntax is
  syntax data-variable="value"; To access it's value let valueis=event.target.dataset.variable. Note its upto us to define value or not according to
  the need .
  */
  let action=event.target.dataset.action;
  if(action){//if("load")
    this[action]();//Menu.load();
  }

}

}
new Menu(document.getElementById('menu'));