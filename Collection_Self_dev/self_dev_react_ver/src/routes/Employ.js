import React, { useState, useEffect } from "react";
import { Sitebox, Nav } from "./Home.js";

let employurl = "employ.png";
let giturl = "git.png";
let gpturl = "gpt.png";

function Employ_dev() {
  return (
    <div>
      <div className="sites">
        <Sitebox
          text="자소설닷컴"
          imgurl={employurl}
          url="https://jasoseol.com/"
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
          text="ChatGPT"
          imgurl={gpturl}
          url="https://chat.openai.com/"
        />
      </div>
    </div>
  );
}

function Employ() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Employ_dev />
      </div>
    </div>
  );
}

export default Employ;
