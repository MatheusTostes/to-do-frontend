import axios from "axios";
import { getBackendUrl, getEnvironment } from "../config";
import { getTasks } from "../mock/tasks";

let api;

if (getEnvironment === "production") {
  api = axios.create({
    baseURL: getBackendUrl(),
    withCredentials: true,
  });
} else {
  api = getTasks;
}

export default api;
