import { React, useState, useEffect } from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { SiUnsplash } from 'react-icons/si';
import { FaCamera } from 'react-icons/fa';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import './App.css';

import unsplashImages from './images/unsplash.js';
import { imageArray } from './images/canvasResize.js';

function App() {
  //images for the slider 
  const sliderImages = [
    {url: 'https://s18.postimg.cc/9vhgup22x/img1.jpg'},
    {url: 'https://s18.postimg.cc/tdc4amjl5/img3.jpg'},
    {url: 'https://s18.postimg.cc/vunvhvvrt/img2.jpg'},
  ]

  // images from unsplash
  const images = unsplashImages;

  // uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);

  // self created images
  const selfCreatedImages = imageArray;

  // read file from upload
  function readFile(e) {
    var image = new Image();
    const files = e.target.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        image.src = this.result;
        image.onload = () => {
          setUploadedImages([...uploadedImages,
          {
            src: image.src,
            width: image.width,
            height: image.height
          }
          ]);
        };
      });
    }
  }

  return (
    <div className="App">
      <div id="title-area">
        <h1>Bildergalerie</h1>
      </div>
      <div id="slider-area">
        <Slider classNames={horizontalCss}>
          {sliderImages.map((image) => 
              <div style={{ background: 'url('+ image.url +') no-repeat center center', backgroundSize: 'cover' }} />
          )}
        </Slider>
      </div>
      <div id="gallery-area">
        <h2 className="subtitle"><SiUnsplash style={{marginRight: '1rem'}}/>Unsplash</h2>
        <div id="gallery-wrapper">
          <Gallery>
            {
              images.map((image) =>
                <Item
                  original={image.url}
                  thumbnail={image.thumbnail}
                  width={image.width}
                  height={image.height}
                >
                  {({ ref, open }) => (
                    <img ref={ref} id="gallery-item" onClick={open} src={image.thumbnail} />
                  )}
                </Item>
              )
            }
            {
              uploadedImages.map((picture) =>
                <Item
                  original={picture.src}
                  thumbnail={picture}
                  width={picture.width}
                  height={picture.height}
                >
                  {({ ref, open }) => (
                    <img ref={ref} id="gallery-item" width="350px" height="450px" style={{ objectFit: 'cover' }} onClick={open} src={picture.src} />
                  )}
                </Item>
              )
            }
          </Gallery>
        </div>
        <h2 className="subtitle"><FaCamera style={{marginRight: '1rem'}}/>Eigene Bilder</h2>
        <div id="gallery-wrapper">
          <Gallery>
            {console.log(selfCreatedImages)}
            { 
              selfCreatedImages.map((image) =>
                <Item
                  original={image.url}
                  thumbnail={image.thumbnail}
                  width={image.width}
                  height={image.height}
                >
                  {({ ref, open }) => (
                    <div id="gallery-item-wrapper">
                      <img ref={ref} id="custom-gallery-item" onClick={open} src={image.thumbnail} />
                    </div>
                  )}
                </Item>
              )
            }
          </Gallery>
        </div>  
      </div>
      <form>
        <div id="upload-image-container">
          <h1 id="upload-backdrop-text">UPLOAD</h1>
          <input id="image-upload" type="file" accept="image/*" id="choose-file" name="choose-file" onChange={readFile} />
        </div>
      </form>
      <div id="small-footer">
        <p>
          Bildergalerie - Unsplash x Lewin Gerber 
        </p>
      </div>
    </div>
  );
}

export default App;
