const create = (function () {
  const Default = [
    {
      title: "Finish odin project",
      description: "finish all the course and contents of odin project",
      dueDate: "2026-06-23",
      priority: "high",
      check: false,
    },
    {
      title: "Morning Jog & Stretch",
      description:
        "30 minutes jog followed by light stretching to reset energy for the day",
      dueDate: "2026-01-30",
      priority: "medium",
      check: false,
    },
    {
      title: "Plan Content for X (Twitter)",
      description:
        "Draft 5 football-related tweets and 2 trading insights for the coming week",
      dueDate: "2026-02-01",
      priority: "low",
      check: false,
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

  const add = (projectArray, title, description, dueDate, priority, check) => {
    projectArray.push(
      new createTodo(title, description, dueDate, priority, check),
    );

    // console.log(projectArray);
  };

  return {
    Default,
    add,
  };
})();

export { create };
