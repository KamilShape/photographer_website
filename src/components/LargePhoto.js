import React from 'react';
import './styles/largephoto.css'
function LargePhoto(props) {
    // function showVisible (){
    //    props.visible = false
    // }
    return(
        // <div className={props.visible? '' : "nonVisible"}>
            <div className={props.visible ? 'largePhoto_container' : 'nonVisible'} onClick={props.showLarge}>
                <div className='largePhoto_imageContainer'>
                    <img className='largePhoto_image' src={props.largeUrl}/> 
                </div>
            </div>
        // </div>
    ) 
}

export default LargePhoto