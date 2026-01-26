import { switchProject } from "./projectSwitch";
import { format, compareAsc, formatDate } from "date-fns";

const renderModule = (function () {
  const renderTodos = function () {
    const myTodo = document.getElementById("myTodo");
    myTodo.innerHTML = ""; // clear previous DOM
    const activeProject = switchProject.getActiveProject();

    if (!switchProject.projectList[activeProject]) return;

    switchProject.projectList[activeProject].forEach((Element, index) => {
      const todo = document.createElement("div");
      const checkBox = document.createElement("input");
      const div = document.createElement("div");
      const divBtn = document.createElement("div");
      const del = document.createElement("button");
      const edit = document.createElement("button");

      del.textContent = "✖";
      del.classList.add("delete");
      del.dataset.project = activeProject;
      del.dataset.index = index;

      edit.textContent = "info";
      checkBox.type = "checkbox";

      checkBox.checked = Element.check === true;

      checkBox.addEventListener("change", () => {
        Element.check = checkBox.checked;
        console.log(Element);
      });

      edit.classList.add("edit");
      edit.dataset.project = activeProject;
      edit.dataset.index = index;

      const teDate = new Date(Element.dueDate); 
      const dueDate = format(teDate, "iii MMM ii RRR");

      [Element.title, Element.priority, dueDate].forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        div.append(p);
      });

      divBtn.append(edit, del);
      todo.append(checkBox, div, divBtn);

      todo.classList.add("todo");

      myTodo.append(todo);
    });
  };

  return {
    renderTodos,
  };
})();

export { renderModule };
