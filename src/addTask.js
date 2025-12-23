import { create } from "./todoCreation";
import { renderModule } from "./render";

const addTask = (function () {
  const dialog = document.querySelector("dialog");
  const add = document.querySelector("#addTask");
  const submitBtn = document.querySelector("#submitBtn");
  const form = document.querySelector("dialog form");

  add.addEventListener("click", (e) => {
    dialog.showModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.querySelector("#Tittle").value;
    let description = document.querySelector("#Description").value;
    let dueDate = document.querySelector("#Due-Date").value;
    let priority = document.querySelector("#Priority").value;

    create.add(title, description, dueDate, priority);
    renderModule.renderTodos();    // 🔥 trigger DOM update;
    dialog.close();
    form.reset();
  });
})();

export { addTask };
