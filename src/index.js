import "./style.css";
import { create } from "./todoCreation";
import { createProject } from "./projects";
import { addTask } from "./addTask";
import { renderModule } from "./render";


  document.addEventListener("DOMContentLoaded", () => {
    renderModule.renderTodos();
  });

