import { switchProject } from "./projectSwitch";
import { renderModule } from "./render";
import { createProject } from "./projects";

const removeProject = (function () {
  const delProject = () => {
    const project = document.querySelectorAll(".project");
    const projectText = document.querySelectorAll(".project p");
    const del = document.querySelectorAll(".projDel");

    del.forEach((item, index) => {
      item.dataset.project = projectText[index].textContent;
      item.dataset.index = index;
    });

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("projDel")) {
        const projectId = e.target.dataset.project;
        const todoIndex = e.target.dataset.index;
        const projectDiv = e.target.closest(".project");

        delete switchProject.projectList[projectId];

        projectDiv.remove();
        // createProject.renderProjects();
        renderModule.renderTodos();
        

        console.log(switchProject.projectList);
      }
    });
    console.log(del);
  };

  return {
    delProject,
  };
})();

export { removeProject };
