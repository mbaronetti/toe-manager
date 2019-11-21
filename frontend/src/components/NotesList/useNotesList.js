import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUsers , getNotes, deleteNote} from '../../redux/actions'

const useNotesList = props => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getNotes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = id => {
    dispatch(deleteNote(id));
  };

  return { notes, handleDelete };
};

export default useNotesList;
