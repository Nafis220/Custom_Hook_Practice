import React, { useEffect, useState } from "react";
import useFetchData from "./useFetchData";

export default function App() {
  const { loading, state, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
    (data) => data.map((user) => ({ name: user.name, id: user.id })).slice(0, 8)
  );
  const {
    loading: postLoading,
    state: postState,
    error: postError,
  } = useFetchData("https://jsonplaceholder.typicode.com/posts", (data) =>
    data.slice(0, 10)
  );

  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <div>
        <h2>Users</h2>
        <hr />
        {loading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        {state.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
      <div>
        <h2>Post</h2>
        <hr />
        {postLoading && <h3>Loading...</h3>}
        {postError && <h3>{postError}</h3>}
        {postState.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </div>
  );
}
