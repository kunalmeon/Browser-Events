function elements() {
  let fragment = new DocumentFragment();
  for (let i = 0; i <= 3; i++) {
    let li = document.createElement("li");
    li.append(i);
    fragment.append(li);
  }
  return fragment;
}
function createList() {
  let result = new DocumentFragment();
  while (true) {
    let data = prompt("enter text list");
    if (!data) {
      break;
    } else {
      let item = document.createElement("li");
      item.textContent = data;
      result.append(item);
    }
  }
  return result;
}

let html = document.getElementById("list");
html.append(createList());
