import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getNotes } from "../../redux/actions";
import { fetchDataById, postData, putData } from "../Helpers";

const useCreateNote = paramId => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(null);
  const [date, setDate] = useState(new Date());
  const [editMode, setEditMode] = useState(false);
  const [userSelected, setUserSelected] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const notes = useSelector(state => state.notes);

  const createNote = async e => {
    e.preventDefault();
    const note = {
      title,
      content,
      author: userSelected,
      date
    };
    if (editMode) {
      await putData("notes", id, [note]);
    } else {
      await postData("notes", [note]);
    }
    window.location.href = "./";
  };
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getNotes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const get = () => getNote(paramId);
    if (paramId) {
      setId(paramId);
      setEditMode(true);
      get(paramId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNote = async id => {
    const { data } = await fetchDataById("notes", id);
    setTitle(data.title);
    setContent(data.content);
    setDate(data.date);
    setUserSelected(data.author);
    setId(data._id);
  };

  const handleDate = date => {
    setDate(date);
  };

  const handleInputChange = (e, type) => {
    const value = e.target ? e.target.value : e;
    switch (type) {
      case "userSelected":
        setUserSelected(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;
      default:
        break;
    }
  };

  return {
    notes,
    createNote,
    users,
    title,
    content,
    userSelected,
    date,
    handleDate,
    handleInputChange
  };
};
export default useCreateNote;
