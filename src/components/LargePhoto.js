import React from 'react';
import './styles/largephoto.css'
function LargePhoto(props) {
    return(
            <div className={props.visible ? 'largePhoto_container' : 'nonVisible'} onClick={props.showLarge}>
                <div className='largePhoto_imageContainer'>
                    <img className='largePhoto_image' src={props.largeUrl}/> 
                </div>
            </div>
    ) 
}

export default LargePhoto