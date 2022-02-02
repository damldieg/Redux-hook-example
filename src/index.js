import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./store/Store";
import { bookTableReducer, initialState } from "./store/bookTableReducer";

ReactDOM.render(
  <React.StrictMode>
    {/* Envuelve la App en el store provider para que la misma consuma su contexto */}
    {/* Le pasa por props al provider el reducer y el initialState */}
    <StoreProvider initialState={initialState} reducer={bookTableReducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
