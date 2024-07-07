import React, { useState, useEffect } from "react";

const root = document.getElementById("root");
let bjurl = "baekjoon.png";
let giturl = "git.png";
let blogurl = "blog.png";
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
function IT_dev() {
  return (
    <div>
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
    </div>
  );
}

function Eng_dev() {
  return (
    <div>
      <div className="sites">
        <Sitebox text="writing9" imgurl={bjurl} url="https://writing9.com/" />
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
          text="GoHackers"
          imgurl={giturl}
          url="https://www.gohackers.com/?c=ielts/ielts_info2/ielts_writing"
        />
        <Sitebox
          text="ChatGPT"
          imgurl={blogurl}
          url="https://chat.openai.com/"
        />
      </div>
    </div>
  );
}
function Employ() {
  return (
    <div>
      <div className="sites">
        <Sitebox text="자소설닷컴" imgurl={bjurl} url="https://jasoseol.com/" />

        <Sitebox
          text="인쿠르트"
          imgurl={giturl}
          url="https://www.incruit.com/?utm_source=google&utm_medium=cpc&utm_campaign=paid_keyword_google_pc&utm_term=%EC%9D%B8%ED%81%AC%EB%A3%A8%ED%8A%B8&gad_source=1&gclid=CjwKCAiAlJKuBhAdEiwAnZb7ldH0g5zcWlIhXvPU_bx6kIrS34ZpBFlXAzh8KT42UpEpSAZRdVjimBoC6wgQAvD_BwE"
        />
        <Sitebox
          text="잡플레닛"
          imgurl={blogurl}
          url="https://www.jobplanet.co.kr/job"
        />
      </div>
    </div>
  );
}
function Home() {
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
      </div>
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

      {content}
      <div>
        {content == 0 ? <IT_dev /> : content == 1 ? <Eng_dev /> : <Employ />}
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
