import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

https://webcache.googleusercontent.com/search?q=cache:1ve9xYJ-GAUJ:https://travie.tistory.com/entry/%25EC%2599%25B8%25EB%25B6%2580-%25EC%25B0%25B8%25EA%25B3%25A0%25EA%25B8%2580%25EC%259D%2598-URL-%25EC%259D%2598-OG-%25ED%2583%259C%25EA%25B7%25B8-%25EC%25A0%2595%25EB%25B3%25B4%25EB%25A1%259C-%25EB%25B0%2598%25EC%259D%2591%25ED%2598%2595-%25EB%25AF%25B8%25EB%25A6%25AC%25EB%25B3%25B4%25EA%25B8%25B0%25EB%25A5%25BC-%25EC%2583%259D%25EC%2584%25B1%25ED%2595%2598%25EB%258A%2594-PHP-%25EC%25BD%2594%25EB%2593%259C&hl=ko&gl=kr
참고

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
    </div>
  );
}

export default App;
