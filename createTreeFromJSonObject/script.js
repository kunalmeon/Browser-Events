let container = document.getElementById("container");
let data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  tree: {
    huge: {
      sequoia: {},
      oak: {},
    },
  },
  flowering: {
    "apple tree": {},
    magnolia: {},
  },
};
function tree(node, data) {
  node.append(nodeMake(data));
}
function nodeMake(obj) {
  if (!Object.keys) return;
  let miniContainer = document.createElement("ul");
  for (let name in obj) {
    let fish = document.createElement("li");
    fish.textContent = name;
    let types = nodeMake(obj[name]);
    if (types) {
      fish.append(types);
    }

    miniContainer.append(fish);
  }
  return miniContainer;
}
tree(container, data);
