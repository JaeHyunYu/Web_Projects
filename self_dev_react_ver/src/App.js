import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const root = document.getElementById("root");
function Test1() {
  return (
    <div>
      <h1>test1</h1>;
    </div>
  );
}

function Test2() {
  return (
    <div>
      <h1>test2</h1>;
    </div>
  );
}

function App() {
  const [index, setIndex] = React.useState("0");
  let imgurl = "study.png";
  let bjurl = "baekjoon.png";
  let giturl = "git.png";
  let blogurl = "blog.png";
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <img src={imgurl} style={{ width: 40 }}></img>
        Self_Development
      </div>

      <div className="sites">
        <div className="item">
          <a href="https://www.acmicpc.net/" target="_blank">
            <div className="imgbox">
              <img src={bjurl}></img>
            </div>
            <p>Algorithm</p>
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/JaeHyunYu" target="_blank">
            <div className="imgbox">
              <img src={giturl}></img>
            </div>
            <p>Github</p>
          </a>
        </div>
        <div className="item">
          <a href="https://yu-dev-record.tistory.com/" target="_blank">
            <div className="imgbox">
              <img src={blogurl}></img>
            </div>
            <p>Blog</p>
          </a>
        </div>
      </div>

      <select value={index} onChange={onSelect}>
        <option value="0">test1</option>
        <option value="1">test2</option>
      </select>
      {index === "0" ? <Test1 /> : null}
      {index === "1" ? <Test2 /> : null}

      <a href="https://yu-dev-record.tistory.com/" target="_blank">
        <p>
          site : https://yu-dev-record.tistory.com/ 미리보기보여주기위해선 og
          tag scrapper api를 이용해야 할듯!
        </p>
      </a>
    </div>
  );
}

export default App;
