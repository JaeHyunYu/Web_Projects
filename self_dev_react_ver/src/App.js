import React, { useState, useEffect } from "react";
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

function Test3() {
  const [data, newData] = useState(null);

  useEffect(() => {
    fetch("test.php")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        newData(response);
      });
  }, []);

  return <div>{data ? data : "No data yet..."}</div>;
}

function Sitebox({ text, imgurl, url }) {
  // props 재사용가능용으로 만듬
  return (
    <div className="item">
      <a href={url} target="_blank">
        <div className="imgbox">
          <img src={imgurl}></img>
        </div>
        <p>{text}</p>
      </a>
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
        <Sitebox
          text="Algorithm"
          imgurl={bjurl}
          url="https://www.acmicpc.net/"
        />
        {/* Sitebox props 안쓸 경우 코드 이렇게 작성해야함
        <div className="item">
          <a href="https://www.acmicpc.net/" target="_blank">
            <div className="imgbox">
              <img src={bjurl}></img>
            </div>
            <p>Algorithm</p>
          </a>
        </div>
         */}

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

      <select value={index} onChange={onSelect}>
        <option value="0">test1</option>
        <option value="1">test2</option>
      </select>
      {index === "0" ? <Test1 /> : null}
      {index === "1" ? <Test2 /> : null}
      <Test3 />

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
