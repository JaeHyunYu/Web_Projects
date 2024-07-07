import React, { useState, useEffect } from "react";
import Sitebox from "./Home";
const root = document.getElementById("root");
let bjurl = "baekjoon.png";
let giturl = "git.png";
let blogurl = "blog.png";

function IT_dev() {
  return (
    <div>
      <div className="sites">
        <Sitebox
          text="Algorithm"
          imgurl={bjurl}
          url="https://www.acmicpc.net/"
        />

        <Sitebox
          text="Github"
          imgurl={giturl}
          url="https://github.com/JaeHyunYu"
        />
        <Sitebox
          text="Blog"
          imgurl={blogurl}
          url="https://yu-dev-record.tistory.com/"
        />
      </div>
    </div>
  );
}

function Dev() {
  let imgurl = "study.png";
  const [index, setIndex] = React.useState("0");
  const [content, setContent] = React.useState("0");

  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  const handleButton = (event) => {
    setContent(event.target);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <img src={imgurl} style={{ width: 40 }}></img>
        Self_Development
        <div className="buttons" style={{ display: "flex" }}>
          <button
            onClick={() => {
              setContent(0);
            }}
          >
            Dev_Study
          </button>
          <button
            onClick={() => {
              setContent(1);
            }}
          >
            Eng_Study
          </button>
          <button
            onClick={() => {
              setContent(2);
            }}
          >
            Employ
          </button>
        </div>
      </div>

      {content}

      <select value={index} onChange={onSelect}>
        <option value="0">test1</option>
        <option value="1">test2</option>
        <option value="2">test2</option>
      </select>
      {index === "0" ? <p>{bjurl}</p> : null}
      {index === "1" ? <p>{giturl}</p> : null}
      {index === "2" ? <p>{blogurl}</p> : null}
      <p>
        url 미리보기보여주기위해선 og tag scrapper api를 이용해야 할듯! (추후
        개발 예정)
      </p>
    </div>
  );
}

export default Dev;
