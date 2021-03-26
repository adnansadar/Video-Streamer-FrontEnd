import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsandUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
  // using lodash to map over unique user ids arrays

  // dispatching another action creater within the current one
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("./posts");

  // dispatching the action object manually and not return it immediately like before
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`./users/${id}`);

//   // dispatching the action object manually and not return it immediately like before
//   // This is the only way to trigger a state change.dispatch() is a function of the Redux store
//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

// MEMOIZED FUNCTION APPROACH
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// // pass id and dispatch to fetchUser

// // wrap the function with _memoize to make a request for each id only once
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`./users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`./users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
