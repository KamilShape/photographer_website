import React from "react";
import './styles/gallery.css';
import MiniPhoto from "./MiniPhoto";

function Gallery(props) {
  const [images, setImages] = React.useState([])
  React.useEffect(function(){
    fetch('https://api.unsplash.com/photos?per_page=30&client_id=siDQ9gt_LFTZxTZM9SKgBKUBRFsrI5okA8BT5EMA8cA')
    .then(res => res.json())
    .then(data => setImages(data))
  },[])
  let photos = images.map(image => {
    return <MiniPhoto key={image.id} smallUrl={image.urls.small} largeUrl={image.urls.regular}/>
  })


  return (
    <div className={props.darkMode ? "gallery darkMode" : "gallery"}>
      <div className="title">GALLERY</div>
      <div className="gallery_photos">
          {photos}
      </div>
    </div>
    )

}

export default Gallery;
