import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfile from "./UserProfile";
import ProductInfo from "./ProductInfo";
function App() {
  return (
    <div>
      <h1>Phạm Văn Nam</h1>
      <p>Hôm nay là ngày đẹp trời</p>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>
  );
}


export default App;