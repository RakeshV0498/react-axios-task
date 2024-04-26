export const initialState = {
  name: "",
  username: "",
  email: "",
  street: "",
  city: "",
  zipcode: "",
  phone: "",
  website: "",
};

export const handleUser = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_USERS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "Add_New_User":
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
      };

    case "Reset_Form":
      return { ...state, formData: initialState };

    default:
      return state;
  }
};
