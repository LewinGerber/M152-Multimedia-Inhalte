import { React, useState, useEffect } from 'react';
import './App.css';
import video from './video/video.mp4';

function App() {
  const [size, setSize] = useState({width: window.innerWidth * 0.85, height: window.innerHeight * 0.85});

  function handleResize () {
    //calculate new dimensions
    let newWidth = window.innerWidth * 0.85;
    let newHeight = window.innerHeight * 0.85;

    //set the state
    setSize({width: newWidth, height: newHeight});
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className="app">
      <video id="video" width={size.width} height={size.height} controls data-videoid="video-id">
        <source src={video} type="video/mp4" />
      </video>
      <div id="background-layer" />
    </div>
  );
}

export default App;
