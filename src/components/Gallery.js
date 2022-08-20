import React from "react";
import MiniPhoto from "./MiniPhoto";
function Gallery() {
  const [images, setImages] = React.useState([])
  React.useEffect(function(){
    fetch('https://api.unsplash.com/photos?per_page=30&query=dog&client_id=siDQ9gt_LFTZxTZM9SKgBKUBRFsrI5okA8BT5EMA8cA')
    .then(res => res.json())
    .then(data => setImages(data))
    console.log(images)
  },[])
  let photos = images.map(image => {
    return <MiniPhoto key={image.id} url={image.urls.regular}/>
  })
  return (
    <div className="gallery">
      <div className="gallery_tittle">GALLERY</div>
      <div className="gallery_photos">
          {photos}
      </div>

    </div>
    )

}

export default Gallery;
