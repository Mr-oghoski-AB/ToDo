import "./style.css";
import { create } from "./todoCreation";
import { createProject } from "./projects";
import { addTask } from "./addTask";
import { renderModule } from "./render";
import { switchProject } from "./projectSwitch";
import { editFunc } from "./editTodo";
import { deleteTodo } from "./deleteTodo";
import { removeProject } from "./deleteProject";
import { cancelTask } from "./cancelTask";
import { storage } from "./webStorage";



  document.addEventListener("DOMContentLoaded", () => {
    renderModule.renderTodos();
    editFunc.runEdit();
    deleteTodo.runDelete();
    removeProject.delProject();
    storage.load();
    createProject.renderProjects();
    console.log(switchProject.projectList)
  });


  
