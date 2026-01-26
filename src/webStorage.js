import { switchProject } from "./projectSwitch";

const storage = (function () {

  const save = () => {
    localStorage.setItem(
      "todo-projects",
      JSON.stringify(switchProject.projectList)
    );
  };

  const load = () => {
    const data = localStorage.getItem("todo-projects");
    if (!data) return;

    const parsed = JSON.parse(data);

  // clear existing keys
  Object.keys(switchProject.projectList).forEach(key => {
    delete switchProject.projectList[key];
  });

  // restore saved keys
  Object.assign(switchProject.projectList, parsed);
  };

  return { save, load };
})();

export { storage };
