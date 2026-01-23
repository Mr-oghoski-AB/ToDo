import { getEditContext, clearEditContext } from "./editstate";
import { create } from "./todoCreation";
import { renderModule } from "./render";
import { switchProject } from "./projectSwitch";
import { editFunc } from "./editTodo";

const addTask = (function () {
  const dialog = document.querySelector("dialog");
  const add = document.querySelector("#addTask");
  const submitBtn = document.querySelector("#submitBtn");
  const form = document.querySelector("dialog form");

  add.addEventListener("click", (e) => {
    clearEditContext(); // ensure ADD mode
    form.reset();
    dialog.showModal();
    const editBtn = document.querySelector(".editBtn");
    if (form.contains(editBtn)) {
      console.log(editBtn);
      console.log(submitBtn);

      document.querySelector("#Tittle").value = "";
      document.querySelector("#Description").value = "";
      document.querySelector("#Due-Date").value = "";
      document.querySelector("#Priority").value = "";
      editBtn.remove();
      form.appendChild(submitBtn);
    } else {
      console.log("not there");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.querySelector("#Tittle").value;
    let description = document.querySelector("#Description").value;
    let dueDate = document.querySelector("#Due-Date").value;
    let priority = document.querySelector("#Priority").value;

    const editContext = getEditContext();

    if (editContext) {
      // ✏️ EDIT
      const { project, index } = editContext;
      const todo = switchProject.projectList[project][index];

      todo.title = title;
      todo.description = description;
      todo.dueDate = dueDate;
      todo.priority = priority;

      clearEditContext();
    } else {
      // ➕ ADD
      const activeProject = switchProject.getActiveProject();

      create.add(
        switchProject.projectList[activeProject],
        title,
        description,
        dueDate,
        priority,
      );
    }

    renderModule.renderTodos(); // 🔥 trigger DOM update;
    // editFunc.runEdit();
    dialog.close();
    form.reset();
  });
})();

export { addTask };
