const tasks = [
  {
    id: 1,
    name: "Minha primeira tarefa",
    description: "Descrevendo minha primeira tarefa",
    stageId: 1,
    completed: false,
  },
];

const stages = [
  // {
  //   id: 0,
  //   name: "Backlog",
  // },
  {
    id: 1,
    name: "To Do",
  },
  // {
  //   id: 2,
  //   name: "Doing",
  // },
  // {
  //   id: 3,
  //   name: "Done",
  // },
];

export const getTasks = {
  get: (route, { params }) => {
    console.log("route", route);
    if (route === "/tasks") {
      const { stageId } = params;
      const filteredTasks = tasks.filter((task) => task.stageId === stageId);

      return Promise.resolve({ data: filteredTasks });
    }

    if (route === "/stages") {
      return Promise.resolve({ data: stages });
    }
  },
};
