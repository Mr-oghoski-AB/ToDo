import { create } from "./todoCreation";
import { renderModule } from "./render";
import { editFunc } from "./editTodo";
import { storage } from "./webStorage";

const switchProject = (function () {
  const projectList = {};
  projectList["Default"] = create.Default;
  let activeProject = "Default";

   function setActiveProject(name) {
    activeProject = name;
  }

  function getActiveProject() {
    return activeProject;
  }

  function loopProjects() {
    const list = document.querySelectorAll(".project p");
    list.forEach((item) => {
      const name = item.textContent.trim();
      if (!projectList[name]) {
        projectList[name] = [];
        storage.save();
      }

      item.addEventListener("click", (e) => {
        setActiveProject(name);
        renderModule.renderTodos();
        editFunc.runEdit()
        return activeProject
      });
    });
  }

  return {
    projectList,
    loopProjects,
    getActiveProject,
    setActiveProject
  };
})();

export { switchProject };
