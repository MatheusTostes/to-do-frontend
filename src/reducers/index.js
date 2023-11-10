import { combineReducers } from "@reduxjs/toolkit";
import { handleTasks } from "./handleTasks";
import { handleLogin } from "./handleLogin";

export const Reducers = combineReducers({
  tasksState: handleTasks,
  loginState: handleLogin,
});
