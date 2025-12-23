import "./style.css";
import { create } from "./todoCreation";
import { createProject } from "./projects";
import { addTask } from "./addTask";
import { renderModule } from "./render";
import { switchProject } from "./projectSwitch";


  document.addEventListener("DOMContentLoaded", () => {
    renderModule.renderTodos();
  });


  
