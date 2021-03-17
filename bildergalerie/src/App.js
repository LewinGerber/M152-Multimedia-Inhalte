import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import Gallery from 'react-grid-gallery';
import './App.css';

function App() {

  const IMAGES =
    [{
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    }]

  return (
    <div className="App">
      <div id="title-area">
        Bildergalerie
      </div>
      <div id="slider-area">
        <Slider classNames={horizontalCss}>
          <div style={{ background: 'url(https://s18.postimg.cc/9vhgup22x/img1.jpg) no-repeat center center', backgroundSize: 'cover' }} />
          <div style={{ background: 'url(https://s18.postimg.cc/tdc4amjl5/img3.jpg) no-repeat center center', backgroundSize: 'cover' }} />
          <div style={{ background: 'url(https://s18.postimg.cc/vunvhvvrt/img2.jpg) no-repeat center center', backgroundSize: 'cover' }} />
        </Slider>
      </div>
      <div id="gallery-area">
        <Gallery 
          images={IMAGES}
          enableImageSelection={false}
          backdropClosesModal={true}
        />
      </div>
    </div>
  );
}

export default App;
