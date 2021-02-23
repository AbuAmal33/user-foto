import Header from "./Components/Header";
import Content from "./Components/Content";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAlbums, loadUsers, loadFotos } from "./redux/action";
import { useEffect } from "react";
import { Route } from "react-router-dom";

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
    return <div>идёт загрузка...</div>;
  }

  return (
    <div className="App">
      <Header />
      <Route path={"/:id?"}>
        <Content />
      </Route>
    </div>
  );
}

export default App;
