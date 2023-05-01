import { CREATE_TASK, GET_TASK } from "../URI";
import axiosWithApi from "../axiosWithApiServer";

export const createTask = (taskObj) => {
  const url = CREATE_TASK.url;
  return axiosWithApi({
    url,
    method: CREATE_TASK.reqType,
    body: JSON.stringify(taskObj),
  });
};
export const getAllTasks = () => {
  const url = GET_TASK.url;
  return axiosWithApi({
    url,
    method: GET_TASK.reqType,
  });
};
