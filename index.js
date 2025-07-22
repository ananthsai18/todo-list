let input = document.getElementById("inputi");
let datez = document.getElementById("datez");
let arr = [];

document.getElementById("add").addEventListener("click", pushArray);

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") pushArray();
});

function pushArray() {
  if (!input.value || !datez.value) return;

  const obj = {
    nameOfTask: input.value,
    dateOfTask: datez.value,
  };

  arr.push(obj);
  input.value = "";
  datez.value = "";
  display();
}

function display() {
  let d = document.getElementById("displayz");
  d.innerHTML = "";

  arr.forEach((element, index) => {
    let row = document.createElement("div");
    row.className = "task-row";

    row.innerHTML = `
            <div class="task-info">
              <span class="task-name">${element.nameOfTask}</span>
              <span class="task-date">${element.dateOfTask}</span>
            </div>
            <button class="btn" onclick="del(${index})">Delete</button>
          `;

    d.appendChild(row);
  });
}

function del(index) {
  arr.splice(index, 1);
  display();
}
