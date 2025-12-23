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

    div.classList = "project";
    name.textContent = inputName.value;
    delBtn.textContent = "del";

    div.append(name, delBtn);

    myProjects.appendChild(div);
    inputName.value = ""
    form.remove()
  });
})();

export { createProject };
