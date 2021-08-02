const container = document.querySelector(".container");
const inputTask = document.querySelector("#newInput");
const filter = document.querySelector("#filter");
const LStoUI = document.addEventListener("DOMContentLoaded", showDataInUI);

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

  link = document.createElement("a");
  link.innerHTML = `<i class="fas fa-times"></i>`;
  link.className = "remove";
  li.appendChild(link);
  link.addEventListener("click", removeFunction);

  saveDataToLS(inputVal);
  document.querySelector("#newInput").value = null;
});

// Remove perticular list item
let removePerticular;

function removeFunction(e) {
  removePerticular = e.target.parentElement.parentElement;
  removePerticular.remove();

  // remove from LS
  removePerticularFromLS(removePerticular);
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

// Clear All tasks

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearList);

function clearList() {
  const select = document.querySelectorAll(".list-group-item");
  select.forEach(function (e) {
    e.remove();
    // clear form local storage
    localStorage.clear();
  });
}

// Saving to local storage

function saveDataToLS(task) {
  if (localStorage.getItem("listArray") === null) {
    listArray = [];
  } else {
    listArray = JSON.parse(localStorage.getItem("listArray"));
  }

  listArray.push(task);

  localStorage.setItem("listArray", JSON.stringify(listArray));
}

function showDataInUI(item) {
  if (localStorage.getItem("listArray") === null) {
    listArray = [];
  } else {
    listArray = JSON.parse(localStorage.getItem("listArray"));
  }

  listArray.forEach(function (val, ind) {
    const li = document.createElement("li");
    li.className = "list-group-item text-capitalize";
    const liChild = li.appendChild(document.createTextNode(val));
    ul.appendChild(li);

    link = document.createElement("a");
    link.innerHTML = `<i class="fas fa-times"></i>`;
    link.className = "remove";
    li.appendChild(link);
    link.addEventListener("click", removeFunction);
  });
}

function removePerticularFromLS(item) {
  console.log(listArray, item);
  listArray.forEach(function (val, ind) {
    if (localStorage.getItem("listArray") === null) {
      listArray = [];
    } else {
      listArray = JSON.parse(localStorage.getItem("listArray"));
    }

    if (item.textContent === val) listArray.splice(ind, 1);

    localStorage.setItem("listArray", JSON.stringify(listArray));
  });
}
