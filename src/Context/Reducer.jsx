export const initialState = {
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    city: "",
    zipcode: "",
  },
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
      // Handle address fields separately
      if (action.field.startsWith("address.")) {
        const addressField = action.field.split(".")[1];
        return {
          ...state,
          address: {
            ...state.address,
            [addressField]: action.value,
          },
        };
      }
      // For other fields, update directly
      return {
        ...state,
        [action.field]: action.value,
      };

    case "Reset_Form":
      return initialState;

    default:
      return state;
  }
};
