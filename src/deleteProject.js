import { switchProject } from "./projectSwitch";
import { renderModule } from "./render";
import { storage } from "./webStorage";

const removeProject = (function () {
  const delProject = () => {
    const project = document.querySelectorAll(".project");
    const projectText = document.querySelectorAll(".project p");
    const del = document.querySelectorAll(".projDel");
    const activeProject = switchProject.getActiveProject();

    del.forEach((item, index) => {
      item.dataset.project = projectText[index].textContent;
      item.dataset.index = index;
    });

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("projDel")) {
        const projectId = e.target.dataset.project;
        const projectDiv = e.target.closest(".project");

        delete switchProject.projectList[projectId];
        if (activeProject == undefined){
          switchProject.setActiveProject(undefined)
        }
        

        projectDiv.remove();
        // createProject.renderProjects();
        storage.save()
        renderModule.renderTodos();
        

        console.log(switchProject.projectList);
      }
    });
  };

  return {
    delProject,
  };
})();

export { removeProject };
