import { switchProject } from "./projectSwitch";

const renderModule = (function () {
  const renderTodos = function () {
    const myTodo = document.getElementById("myTodo");
    myTodo.innerHTML = ""; // clear previous DOM
    const activeProject = switchProject.getActiveProject();

    switchProject.projectList[activeProject].forEach((Element, index) => {
      const todo = document.createElement("div");
      const checkBox = document.createElement("input");
      const div = document.createElement("div");
      const divBtn = document.createElement("div");
      const del = document.createElement("button");
      const edit = document.createElement("button");

      del.textContent = "del";
      edit.textContent = "edit";
      checkBox.type = "checkbox";

      checkBox.checked = Element.check === true;

      checkBox.addEventListener("change", () => {
        Element.check = checkBox.checked;
        console.log(Element);
      });

      edit.classList.add("edit");
      edit.dataset.project = activeProject;
      edit.dataset.index = index;

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

      todo.classList.add("todo");

      myTodo.append(todo);
    });
  };

  return {
    renderTodos,
  };
})();

export { renderModule };
