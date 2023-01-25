const listTodo = [];
function Reset() {
  // mengambil element isi todo
  const isi = document.getElementById("isiTodo");
  while (isi.firstChild) {
    isi.removeChild(isi.firstChild);
  }
}
function removeTodo(index) {
  listTodo.splice(index, 1);
  displayElement();
}
function addList(index, todo) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const inputDone = document.createElement("input");
  inputDone.type = "button";
  inputDone.value = "done";
  // melakukan func agar dipanggil ketika dipencet
  inputDone.onclick = function () {
    removeTodo(index);
  };
  td.appendChild(inputDone);
  tr.appendChild(td);
  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);
  // menambahkan kedalam list html
  const isiTodo = document.getElementById("isiTodo");
  isiTodo.appendChild(tr);
}
function displayElement() {
  Reset();
  for (let i = 0; i < listTodo.length; i++) {
    const todo = listTodo[i];
    //dicocokkan dengan nilai dalam bentuk lowercase
    const searchText = document.getElementById("search").value.toLowerCase();
    if (todo.toLowerCase().includes(searchText)) {
      addList(i, todo);
    }
  }
}
document.forms["todoForms"].onsubmit = function (event) {
  event.preventDefault();
  const todo = document.forms["todoForms"]["todo"].value;
  listTodo.push(todo);
  document.forms["todoForms"].reset();
  displayElement();
  console.info(listTodo);
};
const searchText = document.getElementById("search");
searchText.onkeyup = function () {
  displayElement();
};
searchText.onkeydown = function () {
  displayElement();
};
