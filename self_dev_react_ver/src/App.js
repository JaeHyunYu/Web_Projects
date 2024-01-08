import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let imgurl = "study.png";
  let bjurl = "baekjoon.png";
  let giturl = "git.png";
  let blogurl = "blog.png";
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
    </div>
  );
}

export default App;
