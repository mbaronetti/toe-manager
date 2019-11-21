import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getUsers , deleteUser, addUser} from '../../redux/actions'

const useCreateUser = props => {
  const users = useSelector(state => state.users)
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUserName = e => {
    setUserName(e.target.value);
  };

  const deleteUserName = id => {
    dispatch(deleteUser(id))
  };

  const addUserName = async e => {
    e.preventDefault();
    setUserName("");
    dispatch(addUser(userName))
  };

  return { users, userName, handleUserName, addUserName, deleteUserName };
};

export default useCreateUser;
