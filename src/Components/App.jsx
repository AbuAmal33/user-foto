import Header from "./Header";
import Content from "./Content";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAlbums, loadUsers, loadFotos } from "../redux/action";
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch();
  const loadingUsers = useSelector((state) => state.loadingUsers);
  const loadingAlbums = useSelector((state) => state.loadingAlbums);
  const loadingFotos = useSelector((state) => state.loadingFotos);

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadAlbums());
    dispatch(loadFotos());
  }, [dispatch]);

  if (loadingUsers || loadingAlbums || loadingFotos) {
    return <div className="loading">идёт загрузка...</div>;
  }

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
