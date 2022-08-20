import React from 'react';
import './styles/miniphoto.css'

function MiniPhoto(props) {

        return(
            <div className='miniPhoto'>
                <img className='miniPhoto_image' src={props.url}/>
            </div>
        )    
}

export default MiniPhoto
