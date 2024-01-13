import React, { useState, useEffect } from "react";

const root = document.getElementById("root");

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

function Home() {
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

export default Home;
