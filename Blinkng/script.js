function notifier(top = 0, right = 0, className, html) {
  let element = document.createElement("div");
  element.className = "notification";
  if (className) {
    element.classList.add(className);
  }
  element.innerHTML = html.toUpperCase();

  element.style.cssText = "color:red; background-color:yellow;";
  element.style.marginTop = top + "px"; //pure number is not margin i.e200 300etc so we have to add "px"
  element.style.marginRight = right + "px";
  document.body.append(element);

  setTimeout(() => {
    element.remove();
  }, 1500);
}
setInterval(() => {
  notifier(300, 500, "", "kunal");
}, 1800);
