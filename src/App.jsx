import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/main-router";
import AuthProvider from "./components/AuthProvider";

import { Provider } from "react-redux";
import store, { persistor } from "./store";

import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={"loading 중"} persistor={persistor}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
