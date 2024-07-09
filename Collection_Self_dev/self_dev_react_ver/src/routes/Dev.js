import React, { useState, useEffect } from "react";
import Sitebox, { Nav } from "./Home.js";

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

  return (
    <div className="App">
      <div>
        <IT_dev />
      </div>
    </div>
  );
}

export default Dev;
