import { Flowbite } from "flowbite-react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </Flowbite>
  </React.StrictMode>,
);
