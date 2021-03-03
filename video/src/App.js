import './App.css';
import video from './video/video.mp4';

function App() {
  return (
    <div className="app">
      <video id="video" width="960" height="540" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
