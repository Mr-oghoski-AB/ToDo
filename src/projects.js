import { switchProject } from "./projectSwitch";
import { removeProject } from "./deleteProject";
import { storage } from "./webStorage";

const createProject = (function () {
  const myProjects = document.getElementById("myProjects");
  const sideBar = document.getElementById("sideBar");
  const newProject = document.getElementById("newProject");
  const inputName = document.createElement("input");
  const submitName = document.createElement("button");
  const form = document.createElement("form");

  form.classList = "subSection";
  submitName.textContent = "add";
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 🚫 stop page refresh
  });

  newProject.addEventListener("click", (e) => {
    form.append(inputName, submitName);

    sideBar.insertBefore(form, sideBar.children[1]);
  });

  submitName.addEventListener("click", () => {
    const div = document.createElement("div");
    const name = document.createElement("p");
    const delBtn = document.createElement("button");
    delBtn.classList.add("projDel");

    div.classList.add("project");
    name.textContent = inputName.value;
    delBtn.textContent = "✖";

    div.append(name, delBtn);
 
    console.log(switchProject.projectList); 
    myProjects.appendChild(div);
    switchProject.loopProjects();
    removeProject.delProject();
    // console.log(switchProject.projectList)
    inputName.value = "";
    form.remove();
  });

  const renderProjects = () => {
  const myProjects = document.getElementById("myProjects");
  myProjects.innerHTML = ""; // 🔥 clear sidebar first

  for (const projectName in switchProject.projectList) {
    const div = document.createElement("div");
    const name = document.createElement("p");
    const delBtn = document.createElement("button");

    div.classList.add("project");
    delBtn.classList.add("projDel");

    name.textContent = projectName;
    delBtn.textContent = "✖";
    delBtn.dataset.project = projectName;

    div.append(name, delBtn);
    myProjects.appendChild(div);
  }

  switchProject.loopProjects();
  removeProject.delProject();
};

return {
  renderProjects
}
})();

export { createProject };
