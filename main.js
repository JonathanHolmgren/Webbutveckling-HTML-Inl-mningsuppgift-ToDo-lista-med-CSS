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
    document.querySelector("small").innerText = "You need to write something";
    document.querySelector("small").setAttribute("class", "empty");
    return;
  } else {
    document.querySelector("small").innerText = "";
  }

  const item = document.createElement("li");
  list.appendChild(item);
  todoArray.push(text);

  const itemLabel = document.createElement("span");
  itemLabel.innerText = text;
  item.appendChild(itemLabel);
  listCount++;
  label.innerText = `${completedCount} tasks are completed`;

  const bin = document.createElement("span");
  bin.innerHTML = "delete";
  bin.setAttribute("class", "material-symbols-outlined");
  item.appendChild(bin);

  itemLabel.addEventListener("click", function () {
    if (item.getAttribute("class") == "completed") {
      item.setAttribute("class", "");
      completedCount--;
    } else {
      item.setAttribute("class", "completed", "id", "trashcan");
      completedCount++;
    }

    label.innerText = `${completedCount} tasks are completed`;
  });

  bin.addEventListener("click", function () {
    var nummer = todoArray.indexOf(text);
    delete todoArray[nummer];
    item.remove();
    listCount--;
    if (item.getAttribute("class") == "completed") {
      completedCount--;
    }

    label.innerText = `${completedCount} tasks are completed`;
  });

  input.value = "";
});
