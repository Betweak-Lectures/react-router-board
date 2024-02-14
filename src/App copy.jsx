import { useState } from "react";
import { Route, RouterProvider, Routes, BrowserRouter } from "react-router-dom";
import router, { mainRouter } from "./routers/main-router";
import MainPage from "./routes/page";
import BoardLayout from "./components/Layout";
import BoardListPage from "./routes/board/page";

function renderRoutes(routesObj) {
  return routesObj.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={route.element}
        >
          {route.children ? renderRoutes(route.children) : null}{" "}
        </Route>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={route.element}
      />
    );
  });
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>{renderRoutes(mainRouter)}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
