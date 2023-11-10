const initialValues = [];

export const handleTasks = (state = initialValues, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload.tasks;

    case "REORDER_TASKS":
      return (() => {
        const { taskId, direction } = action.payload;
        const taskIndex = state.findIndex((task) => task.id === taskId);
        let newTasks = [...state];

        if (direction === "up") {
          if (taskIndex === 0) return state;
          const task = newTasks.splice(taskIndex, 1)[0];
          newTasks.splice(taskIndex - 1, 0, task);
        } else if (direction === "down") {
          if (taskIndex === state.length - 1) return state;
          const task = newTasks.splice(taskIndex, 1)[0];
          newTasks.splice(taskIndex + 1, 0, task);
        }
        return newTasks;
      })();

    case "CREATE_TASK":
      console.log("create task");
      return [
        {
          id: Math.max(...state.map((task) => task.id), 0) + 1,
          name: action.payload.name,
          description: action.payload.description,
          completed: false,
        },
        ...state,
      ];

    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload.taskId);

    case "UPDATE_TASK":
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          const { attr, text } = action.payload;

          return {
            ...task,
            [attr]: text,
          };
        } else {
          return task;
        }
      });

    case "COMPLETE_TASK":
      return state.map((task) => {
        const { taskId } = action.payload;
        if (task.id === taskId) {
          console.log(task.id, action.payload);
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      });

    default:
      return state;
  }
};
