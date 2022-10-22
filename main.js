const bin = document.createElement("span");
const button = document.querySelector("button");
const input = document.querySelector("input");
const label = document.querySelector("p");
const list = document.querySelector("ul");

let completedCount = 0;
let listCount = 0;

const listan = [];
const todoArray = [];

button.addEventListener("click", function () {
  const text = input.value;

  if (text.length == 0) {
    document.querySelector("small").innerText = "Input must not be empty";
    document.querySelector("small").setAttribute("class", "emptyAni");
    return;
  } else {
    document.querySelector("small").innerText = "";
    document.querySelector("small").setAttribute("class", "empty");
  }

  const item = document.createElement("li");
  list.appendChild(item);
  todoArray.push(text);

  const itemLabel = document.createElement("span");
  itemLabel.innerText = text;
  item.appendChild(itemLabel);
  listCount++;
  label.innerText = `${completedCount}  completed`;

  const bin = document.createElement("span");
  bin.innerHTML = "🗑️";
  bin.setAttribute("class", "material-symbols-outlined");
  item.appendChild(bin);

  itemLabel.addEventListener("click", function () {
    if (itemLabel.getAttribute("class") == "completed") {
      itemLabel.setAttribute("class", "");
      completedCount--;
    } else {
      itemLabel.setAttribute("class", "completed");
      completedCount++;
    }

    label.innerText = `${completedCount} completed`;
  });

  bin.addEventListener("click", function () {
    var nummer = todoArray.indexOf(text);
    delete todoArray[nummer];
    item.remove();
    listCount--;
    if (itemLabel.getAttribute("class") == "completed") {
      completedCount--;
    }

    label.innerText = `${completedCount} completed`;
  });

  input.value = "";
});
