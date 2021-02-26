let mainMenu = document.getElementById("mainMenu");
mainMenu.onclick = function () {
  let children = event.target.dataset.food;
  let elem = document.getElementById(children);

  elem.hidden = !elem.hidden;
};
