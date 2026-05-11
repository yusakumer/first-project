let todoList = [];

// 入力された新しいTODOの値を取得し、todoList変数に代入する関数
const registerNewTodo = () => {
  // TODOの値を取得する
  const newTodo = document.getElementById("new-todo-name");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("deadline");

  // 入力された値を配列に追加
  todoList.push({
    todoName: newTodo.value,
    person: newPerson.value,
    deadline: newDeadline.value,
  });
};

// TODO一覧を全て削除する関数
const removeTodoElem = () => {
  const tbody = document.getElementById("todo-data");

  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
};

// TODO一覧を表示する関数
const TodoListDisplay = (todoList) => {
  todoList.forEach((todo) => {
    const tbody = document.getElementById("todo-data");

    const trElem = document.createElement("tr");

    const todoNameTdElem = document.createElement("td");
    todoNameTdElem.textContent = todo.todoName;

    const personTdElem = document.createElement("td");
    personTdElem.textContent = todo.person;

    const deadlineTdElem = document.createElement("td");
    deadlineTdElem.textContent = todo.deadline;

    trElem.appendChild(todoNameTdElem);
    trElem.appendChild(personTdElem);
    trElem.appendChild(deadlineTdElem);

    tbody.appendChild(trElem);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    // TODOの値を取得する
    registerNewTodo();

    //todo一覧を削除
    removeTodoElem();
    // todo一覧を表示
    TodoListDisplay(todoList);
  });

  const filterInputElem = document.getElementById("filter");
  filterInputElem.addEventListener("input", () => {
    const filterWord = filterInputElem.value;
    const filteredTodoList = todoList.filter(
      (todo) =>
        todo.todoName.includes(filterWord) || todo.person.includes(filterWord),
    );

    removeTodoElem();
    TodoListDisplay(filteredTodoList);

  });
});
