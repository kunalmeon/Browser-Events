let gadghi = document.createElement("div");
gadghi.innerHTML =
  "<span class='hour'>hh</span>:<span class='minutes'>mm</span>:<span class='seconds'>ss</span>";
gadghi.id = "cico5";
document.body.append(gadghi);

let referenceOfGadghi = document.getElementById("cico5");

function displayTime() {
  let date = new Date();

  let hour = date.getHours();
  if (hour < 10) hour = "0" + hour;
  referenceOfGadghi.children[0].textContent = hour;

  let minute = date.getMinutes();
  if (minute < 10) minute = "0" + minute;
  referenceOfGadghi.children[1].textContent = minute;

  let second = date.getSeconds();
  if (second < 10) second = "0" + second;
  referenceOfGadghi.children[2].textContent = second;
}
let timerId;
function start() {
  timerId = setInterval(displayTime, 1000);
  //  displayTime();
}
function stopTime() {
  clearInterval(timerId); //yo line baata compiler sidhai setInterval function ma jaanxa
  //Because setInterval and clearInterval are related to each other. then the executaion time got by timerId will be cleared  i.e timerId=null
  // timerId=null; and then after for the purpose of displaying time we call displayTime() one last time this is optional else
  //hh:mm:ss will be seen in the screen
}
