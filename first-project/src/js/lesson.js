import {todoList,registerNewTodo, removeTodoElem, TodoListDisplay} from "./todo.js";
import "../css/style.css";



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
