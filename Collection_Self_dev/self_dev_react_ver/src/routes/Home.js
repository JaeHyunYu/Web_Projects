import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Sitebox({ text, imgurl, url }) {
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

export function Nav() {
  let imgurl = "study.png";
  return (
    <div>
      <div className="black-nav">
        <Link className="navbarMenu" to={"/"}>
          <img src={imgurl} style={{ width: 40 }} alt="Hi"></img>
          Self_Development
        </Link>
        <div className="navbarMenus">
          <Link className="navbarMenu" to={"/Dev"}>
            Dev
          </Link>
          <Link className="navbarMenu" to={"/Eng"}>
            Eng
          </Link>
          <Link className="navbarMenu" to={"/Employ"}>
            Employ
          </Link>
          <Link className="navbarMenu" to={"/Book"}>
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}
function Home() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

{
  /*
function Eventex() {
  const [index, setIndex] = React.useState("0");
  const [content, setContent] = React.useState("0");

  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  const handleButton = (event) => {
    setContent(event.target);
  };
  return (
    <div>
      {" "}
       
    <div>
      {content == 0 ? <IT_dev /> : content == 1 ? <Eng_dev /> : <Employ />}
    </div>
    <div>
      <select value={index} onChange={onSelect}>
        <option value="0">test1</option>
        <option value="1">test2</option>
        <option value="2">test3</option>
      </select>
      {index === "0" ? <p>{bjurl}</p> : null}
      {index === "1" ? <p>{giturl}</p> : null}
      {index === "2" ? <p>{blogurl}</p> : null}
      <p>
        url 미리보기보여주기위해선 og tag scrapper api를 이용해야 할듯! (추후
        개발 예정)
      </p>

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
        {content}
      </div>
    </div>
   
    </div>
  );
}
   */
}
export default Home;
