const create = (function () {
  const todos = [];

  class createTodo {

    constructor(title, description, dueDate, priority, check) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.check = check;
    }
  }

 const add = (title, description, dueDate, priority, check) => {
    todos.push(new createTodo(title, description, dueDate, priority, check));
  };

  return {
    todos,
    add
  }
})();

export {
    create
}
