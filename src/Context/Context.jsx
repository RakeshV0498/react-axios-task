/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer } from "react";
import { handleUser, initialState } from "./Reducer";
import PropTypes from "prop-types";
import { readAllData } from "../API/crud";

export const userContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(handleUser, {
    users: [],
    formData: initialState,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await readAllData();
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: users,
        });
      } catch (error) {
        dispatch({ type: "FETCH_USERS_ERROR", payload: error });
      }
    };
    fetchData();
  }, []);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.object,
};

export default Context;
