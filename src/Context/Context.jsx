import { createContext, useEffect, useReducer } from "react";
import { handleUser } from "./Reducer";
import PropTypes from "prop-types";
import { readAllData } from "../API/crud";

const userContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(handleUser, {
    users: [],
    newUser: [],
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
