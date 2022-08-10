import React, { useEffect, useState } from "react";
import InputSearch from "./InputSearch";
import List from "./List";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  console.log(list);

  const usersinfo = (url) =>
    new Promise((resolve, reject) =>
      fetch(url)
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((error) => reject(error))
    );

  useEffect(() => {
    usersinfo("http://localhost:3001/films?filter=" + search)
      .then((response) => {
        setList(response);
      })
      .catch((error) => console.log(error.message));
  }, [search]);

  return (
    <div className="App">
      <InputSearch
        search={search}
        setSearch={(event) => setSearch(event.target.value)}
      />
      <List search={search} list={list} />
    </div>
  );
}

export default App;
