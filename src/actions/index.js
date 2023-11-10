export const createTask = (task) => {
  return {
    type: "CREATE_TASK",
    payload: task,
  };
};
