import jsonPlaceholder from "../apis/jsonPlaceholder";
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("./posts");

  // dispatching the action object manually and not return it immediately like before
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`./users/${id}`);

  // dispatching the action object manually and not return it immediately like before
  // This is the only way to trigger a state change.dispatch() is a function of the Redux store
  dispatch({ type: "FETCH_USER", payload: response.data });
};
