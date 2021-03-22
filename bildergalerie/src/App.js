import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import './App.css';

function App() {
  /*const getImage = async () => {
    let imageArray = [];
    for(var i = 0; i <= 3; i++) {
      let imageData = await fetch('https://random.imagecdn.app/800/500');
      imageArray.push({url: imageData.url});
    }
    return [...imageArray];
  }*/

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1616428329911-59581d132558?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=800',
      thumbnail: 'https://images.unsplash.com/photo-1616428329911-59581d132558?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&h=450',
      width: 500,
      height: 800
    },
    {
      url: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=672&h=850',
      thumbnail: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&h=450',
      width: 672,
      height: 850
    }, 
    {
      url: 'https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=850',
      thumbnail: 'https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&h=450',
      width: 1350,
      height: 850
    },
    {
      url: 'https://images.unsplash.com/photo-1610971441253-ab06498a0749?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&h=850',
      thumbnail: 'https://images.unsplash.com/photo-1610971441253-ab06498a0749?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=350&h=450',
      width: 634,
      height: 850
    },
    {
      url: 'https://images.unsplash.com/photo-1616300461757-f4a163268869?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&h=850',
      thumbnail: 'https://images.unsplash.com/photo-1616300461757-f4a163268869?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&h=450',
      width: 633,
      height: 850
    },
    {
      url: 'https://images.unsplash.com/photo-1616321521147-8f1b57ea97d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=800',
      thumbnail: 'https://images.unsplash.com/photo-1616321521147-8f1b57ea97d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&h=450',
      width: 700,
      height: 800
    },
    {
      url: 'https://images.unsplash.com/photo-1616338968156-76ff58fa9197?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=603&h=800',
      thumbnail: 'https://images.unsplash.com/photo-1616338968156-76ff58fa9197?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&h=450',
      width: 603,
      height: 800
    },
    {
      url: 'https://images.unsplash.com/photo-1616176876327-ad3577f8c230?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=850',
      thumbnail: 'https://images.unsplash.com/photo-1616176876327-ad3577f8c230?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&h=450',
      width: 634,
      height: 850
    },
  ];

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
        </Gallery>
      </div>
    </div>
  );
}

export default App;
