function clearFridge() {
  let foodItem = document.getElementById("foodList");
  while (foodItem.firstChild) {
    foodItem.firstChild.remove();
  }
}
function clearFriendList() {
  let foodItem = document.getElementById("friendList");
  while (foodItem.firstChild) {
    foodItem.firstChild.remove();
  }
}

function FriendList() {
  let friendList = document.createElement("ol");
  friendList.id = "friendList";
  while (true) {
    let name = prompt("enter friends name", "lly");
    if (!name) break;
    let friendName = document.createElement("li");
    friendName.textContent = name;
    friendList.append(friendName);
  }
  document.body.append(friendList);
}
