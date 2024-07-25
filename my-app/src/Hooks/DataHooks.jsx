import axios from "axios";
import React, { useEffect, useState } from "react";
function DataHooks() {
  const [post, setPost] = useState({});

  const [id, setId] = useState(1);
  const [idfromButtonClick, setidfromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [idfromButtonClick]);
  const handleclick = () => {
    setidfromButtonClick(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleclick}>Fetch post Title</button>
      <dir>{post.title}</dir>
      {/* {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))} */}
    </div>
  );
}

export default DataHooks;
