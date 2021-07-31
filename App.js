const container = document.querySelector(".container");
const inputTask = document.querySelector("#newInput");
const filter = document.querySelector("#filter");

//create Add Task Button
const btn = document.createElement("button");
btn.appendChild(document.createTextNode("Add Task"));
btn.setAttribute("type", "submit");
document.querySelector("#btn").appendChild(btn);

const ul = document.createElement("ul");

const ulDiv = document.querySelector("#ul");

ulDiv.appendChild(ul);
// input extract value from input
let inputVal;

inputTask.addEventListener("input", function (e) {
  inputVal = e.target.value;
});

// Add Task to <ul>
btn.addEventListener("click", function (e) {
  const li = document.createElement("li");
  li.className = "li";
  const liChild = li.appendChild(document.createTextNode(inputVal));
  ul.appendChild(li);
  document.querySelector("#newInput").value = null;
});
