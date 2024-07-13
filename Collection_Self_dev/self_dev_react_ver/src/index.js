import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*
import express from "express";
const app = express();

app.listen(8000, () => {
  console.log("8000 서버 호출");
});

app.get('*',function(요청,응답){
응답.sendFile(path.join(_dirname,'react-project/build/index.html'))
}) -> react에서 route 처리해주기위해서 추가

*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
