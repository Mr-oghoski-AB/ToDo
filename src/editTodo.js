import { switchProject } from "./projectSwitch";
import { setEditContext } from "./editState";

const editFunc = (function () {

  const runEdit = () => {
    const edit = document.querySelectorAll(".edit");
    const dialog = document.querySelector("dialog");
    const add = document.querySelector("#addTask");
    const submit = document.querySelector("#submitBtn");
    const editBtn = document.createElement("button");
    const activeProject = switchProject.getActiveProject();
    const form = document.querySelector("dialog form");


    document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("edit")) return;
    if (form.contains(submit)){ 
      submit.remove();
      editBtn.textContent = 'EDIT'
      editBtn.classList.add('editBtn')
      form.appendChild(editBtn);
      return 
    }

    const project = e.target.dataset.project;
    const index = e.target.dataset.index;
    const todo = switchProject.projectList[project][index];

    setEditContext(project, index);

    // populate form
    document.querySelector("#Tittle").value = todo.title;
    document.querySelector("#Description").value = todo.description;
    document.querySelector("#Due-Date").value = todo.dueDate;
    document.querySelector("#Priority").value = todo.priority;
   
    dialog.showModal();

 
  });
  };

  return { runEdit };
})();

export { editFunc };
