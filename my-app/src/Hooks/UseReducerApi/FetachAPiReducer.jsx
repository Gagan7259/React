import axios from "axios";
import React, { useEffect, useState } from "react";

function FetachAPiReducer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/34`)
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("someThing Went Wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
      <pre>{JSON.stringify(post)}</pre>
    </div>
  );
}

export default FetachAPiReducer;
