let todoList = [];


document.addEventListener("DOMContentLoaded",() => {
    const registerButtonElem = document.getElementById("register");
    registerButtonElem.addEventListener("click", () =>{
        // TODOの値を取得する
        const newTodo = document.getElementById("new-todo-name");
        const newPerson = document.getElementById("new-person");
        const newDeadline = document.getElementById("deadline");

        console.log(newTodo.value);
        console.log(newPerson.value);
        console.log(newDeadline.value);

        const newTodoObject = {
            todoName:newTodo.value,
            person:newPerson.value,
            deadline:newDeadline.value
        };
        
        todoList.push(newTodoObject);

        console.log(todoList);

        todoList.forEach((todo) => {
            const trElem = document.createElement("tr");

            const todoNameTdElem = document.createElement("td");
            todoNameTdElem.textContent = todo.todoName

            const personTdElem = document.createElement("td");
            personTdElem.textContent = todo.person

            const deadlineTdElem = document.createElement("td");
            deadlineTdElem.textContent = todo.deadline

            trElem.appendChild(todoNameTdElem);
            trElem.appendChild(personTdElem);
            trElem.appendChild(deadlineTdElem);

            const tbody = document.getElementById("todo-data");
            tbody.appendChild(trElem);

        })
    });
});