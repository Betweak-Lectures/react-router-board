import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/main-router";
import ThemeProvider from "./components/ThemeProvider";
import AuthProvider from "./components/AuthProvider";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
