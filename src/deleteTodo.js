import { switchProject } from "./projectSwitch";
import { renderModule } from "./render";


const deleteTodo = (function () {
  const runDelete = () => {
    const todoContainer = document.querySelector(".todo")


    document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const projectId = e.target.dataset.project;
    const todoIndex = e.target.dataset.index;

    switchProject.projectList[projectId].splice(todoIndex, 1);
    renderModule.renderTodos();
  }
});
  };

  return {
    runDelete
  }
})();

export {
    deleteTodo
}