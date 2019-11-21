//ACTIONS
import * as ct from "../constants";
import { fetchData, postData, deleteData } from "../../components/Helpers";

//Getters
export const getUsers = () => {
  return async (dispatch) => {
    const {data} = await fetchData('users')
    return dispatch(setUsers(data))
  }
}

export const deleteUser = id => {
  return async (dispatch) => {
    await deleteData("users", id);
    return dispatch(getUsers())
  }
}

export const addUser = username => {
  return async (dispatch) => {
    await postData("users", [{ username: username }]);
    return dispatch(getUsers())
  }
}

export const getNotes = () => {
  return async (dispatch) => {
    const {data} = await fetchData('notes')
    return dispatch(setNotes(data))
  }
}

export const deleteNote = id => {
  return async (dispatch) => {
    await deleteData("notes", id);
    return dispatch(getNotes())
  }
}

//Setters
export const setUsers = data => {
  return {
    type: ct.SET_USERS,
    data
  };
};

export const setNotes = data => {
  return {
    type: ct.SET_NOTES,
    data
  };
};
