const create = (function () {
  const Default = [ 
    {
        title : "Finish odin project",
        description: "finish all the course and contents of odin project",
        dueDate : "19/04/2026",
        priority : "high",
        check : "not checked"
    },
    {
        title : "Collect Result",
        description: "",
        dueDate : "19/12/2025",
        priority : "high",
        check : "not checked"
    },
    {
        title : "Breakfast",
        description: "",
        dueDate : "19/12/2025",
        priority : "low",
        check : "not checked"
    },
  ];

  class createTodo {

    constructor(title, description, dueDate, priority, check) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.check = check;
    }
  }

 const add = (projectArray,title, description, dueDate, priority, check) => {
    projectArray.push(new createTodo(title, description, dueDate, priority, check));

    // console.log(projectArray);
    
  };

  return {
    Default,
    add
  }
})();

export {
    create
}
