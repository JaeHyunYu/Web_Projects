import React, { useState, useEffect } from "react";
import { Sitebox, Nav } from "./Home.js";

let writingurl = "writing9.png";
let hackersurl = "Hackers.png";
let gpturl = "gpt.png";

function Eng_dev() {
  return (
    <div>
      <div className="sites">
        <Sitebox
          text="writing9"
          imgurl={writingurl}
          url="https://writing9.com/"
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
          text="GoHackers"
          imgurl={hackersurl}
          url="https://www.gohackers.com/?c=ielts/ielts_info2/ielts_writing"
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

function Eng() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Eng_dev />
      </div>
    </div>
  );
}

export default Eng;
