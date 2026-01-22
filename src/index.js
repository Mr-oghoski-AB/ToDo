import "./style.css";
import { create } from "./todoCreation";
import { createProject } from "./projects";
import { addTask } from "./addTask";
import { renderModule } from "./render";
import { switchProject } from "./projectSwitch";
import { editFunc } from "./editTodo";
import { deleteTodo } from "./deleteTodo";
import { removeProject } from "./deleteProject";


  document.addEventListener("DOMContentLoaded", () => {
    renderModule.renderTodos();
    editFunc.runEdit();
    deleteTodo.runDelete();
    removeProject.delProject();
  });


  
