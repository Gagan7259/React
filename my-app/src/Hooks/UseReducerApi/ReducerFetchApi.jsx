import axios from "axios";
import React, { useEffect, useReducer } from "react";

const intialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        post: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        post: {},
        loading: false,
        error: "Something went Wrong",
      };
    default:
      return state;
  }
};

function ReducerFetchApi() {
  const [state, dispatch] = useReducer(reducer, intialState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/34`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "LOADING" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default ReducerFetchApi;
