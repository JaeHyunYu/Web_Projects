import React, { useState, useEffect } from "react";
import { Sitebox, Nav } from "./Home.js";

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

function Book() {
  return (
    <div className="App">
      <Nav />
      <div>
        <IT_dev />
      </div>
    </div>
  );
}

export default Book;
