const container = document.querySelector(".container");
const inputTask = document.querySelector("#newInput");
const filter = document.querySelector("#filter");

//create Add Task Button
const btn = document.createElement("button");
btn.className = "btn btn-success";
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

let link;
let listArray = [];

// Add Task to <ul>
btn.addEventListener("click", function (e) {
  const li = document.createElement("li");
  li.className = "list-group-item text-capitalize";
  const liChild = li.appendChild(document.createTextNode(inputVal));
  ul.appendChild(li);
  listArray.push(inputVal);

  link = document.createElement("a");
  link.innerHTML = `<i class="fas fa-times"></i>`;
  link.className = "remove";
  li.appendChild(link);
  link.addEventListener("click", removeFunction);

  document.querySelector("#newInput").value = null;
});

// Remove perticular list item
function removeFunction(e) {
  e.target.parentElement.parentElement.remove();
  console.log("remove clicked");
}

// Filter list
let filterVal;
filter.addEventListener("input", function (e) {
  filterVal = e.target.value;

  const select = document.querySelectorAll(".list-group-item");
  console.log(select);
  select.forEach(function (val, ind) {
    {
      val.textContent.includes(filterVal)
        ? (val.style.display = "block")
        : (val.style.display = "none");
    }
  });
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearList);

function clearList() {
  const select = document.querySelectorAll(".list-group-item");
  select.forEach(function (e) {
    e.remove();
  });
}
