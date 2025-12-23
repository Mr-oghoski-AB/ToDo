import "./style.css";
import { create } from "./todoCreation";
import { createProject } from "./projects";

document.addEventListener("DOMContentLoaded", (e) => {
  const myTodo = document.getElementById("myTodo");
  // let title = prompt('title');
  // let description = prompt('description');
  // let dueDate = prompt('dueDate');
  // let priority = prompt('priority');
  // let check = prompt('check');

  // create.add(title, description, dueDate, priority, check);
  console.log(create.todos);

  create.todos.forEach((Element) => {
    const todo = document.createElement("div");
    const checkBox = document.createElement("input");
    const div = document.createElement("div");
    const divBtn = document.createElement("div");
    const del = document.createElement("button");
    const edit = document.createElement("button");

    del.textContent = "del";
    edit.textContent = "edit";
    checkBox.type = "checkbox";

    [
      Element.title,
      Element.description,
      Element.priority,
      Element.dueDate,
    ].forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      div.append(p);
    });

    divBtn.append(edit, del);

    todo.append(checkBox, div, divBtn);

    todo.classList = "todo";

    myTodo.appendChild(todo);
  });
});
