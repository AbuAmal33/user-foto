import Header from "./Header";
import Content from "./Content";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAlbums, loadUsers, loadFotos } from "../redux/action";
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadAlbums());
    dispatch(loadFotos());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
