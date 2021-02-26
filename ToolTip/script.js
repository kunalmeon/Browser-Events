let toolTipElem;
let toolTipValue;

let content = document.getElementById("content");

content.onmouseover = function () {
  if (!event.target.dataset.tooltip) return;
  toolTipValue = event.target.dataset.tooltip;
  toolTipMaker(toolTipValue);
};

function toolTipMaker(toolTipValue) {
  toolTipElem = document.createElement("div");
  toolTipElem.className = "toolTip";
  toolTipElem.textContent = toolTipValue;
  // document.body.append(toolTipElem);
  document.body.append(toolTipElem);
  let targetElem = event.target;
  let cordinatesOfIt = targetElem.getBoundingClientRect();

  let leftPoint =
    cordinatesOfIt.left + targetElem.offsetWidth - toolTipElem.offsetWidth;
  let topPoint = cordinatesOfIt.top - toolTipElem.offsetHeight - 15;
  if (leftPoint < 0) leftPoint = 0;
  if (topPoint < 0) topPoint = cordinatesOfIt.top + toolTipElem.offsetHeight;
  toolTipElem.style.left = leftPoint + "px";
  toolTipElem.style.top = topPoint + "px";
}

document.onmouseout = function () {
  if (toolTipElem) {
    toolTipElem.remove();
    toolTipElem = null;
  }
};

let imageToBeShown;

document.onmouseover = function () {
  if (!event.target.dataset.image) return;
  let link = event.target.closest("a");
  imageToBeShown = link.getAttribute("href");

  imageDisplayer(imageToBeShown);
};
function imageDisplayer(imageToBeShown) {
  toolTipElem = document.createElement("img");
  toolTipElem.className = "imgClass";
  toolTipElem.setAttribute("src", imageToBeShown);

  document.body.append(toolTipElem);
  let targetElem = event.target;
  let cordinatesOfIt = targetElem.getBoundingClientRect();

  let leftPoint =
    cordinatesOfIt.left + targetElem.offsetWidth - toolTipElem.offsetWidth;
  let topPoint = cordinatesOfIt.top - toolTipElem.offsetHeight - 15;
  if (leftPoint < 0) leftPoint = 0;
  if (topPoint < 0) topPoint = cordinatesOfIt.top + toolTipElem.offsetHeight;
  toolTipElem.style.left = leftPoint + "px";
  toolTipElem.style.top = topPoint + "px";
}

//the problem is only one mouseover event is running. The last one
//is overriding the previous one. Cant we make one mouseOver and choose betn the function
//like if dataset=image then imageToolTip() else if dataset=knowmore then knowMore();
//
