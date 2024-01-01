
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let imgurl="study.png"
  return (
  
    <div className="App">

      <div className='black-nav'>
        
        <img src={imgurl} style={{width:40, backgroundColor:'black'}}></img> &nbsp; Self_Development
      </div>
      <div>
        <a href="https://www.acmicpc.net/" target="_blank">백준 알고리즘</a>
      </div>
      <div>      
        <a href="https://github.com/JaeHyunYu" target="_blank">깃허브</a>
      </div>
    </div>
  );
}

export default App;
