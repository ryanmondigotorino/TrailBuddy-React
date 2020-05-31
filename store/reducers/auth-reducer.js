const initialState = {
  loading: false,
  data: null,
  signUpData: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return { ...state, loading: action.loading };
    case 'IS_ERROR':
      return { ...state, error: action.error };
    case 'SIGN_IN_SUCCESS':
      return { ...state, data: action.data };
    case 'SIGN_UP_SUCCESS':
      return { ...state, signUpData: action.data };
    default:
      return state;
  }
};
