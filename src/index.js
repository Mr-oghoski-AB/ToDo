import "./style.css";
import { create } from "./todoCreation";

document.addEventListener ('click' , (e) => {
    let title = prompt('title');
    let description = prompt('description');
    let dueDate = prompt('dueDate');
    let priority = prompt('priority');
    let check = prompt('check');
    

    create.add(title, description, dueDate, priority, check);
    console.log(create.todos);
})