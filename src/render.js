import { switchProject } from "./projectSwitch";
import { format, compareAsc, formatDate } from "date-fns";
import { storage } from "./webStorage";

const renderModule = (function () {
  const renderTodos = function () {
    storage.load();
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

      div.classList.add('sec');
  
      

      del.innerHTML =
        '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill ="red"/></svg>';
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

    const sec = document.querySelectorAll('.sec :nth-child(2)');
        console.log(sec);
      sec.forEach((p) => {
         switch (p.textContent) {
          case 'high':
            p.classList.add('high')
            break;
          case 'medium': 
            p.classList.add('medium')
            break;
          case 'low': 
            p.classList.add('low')
            break;
        }
      });
  };

  return {
    renderTodos,
  };
})();

export { renderModule };
