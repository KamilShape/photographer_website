import React from 'react';
import './styles/miniphoto.css'
import LargePhoto from './LargePhoto';
function MiniPhoto(props) {
    const [visible, makeVisible] = React.useState(false)

    function showLarge(){
        makeVisible(prevState => !prevState)
    }
        return(
            <div className='miniPhoto'>
                <img className='miniPhoto_image' src={props.smallUrl} alt=''  onClick={showLarge}/>
                <LargePhoto visible={visible} showLarge={showLarge} largeUrl={props.largeUrl} />
            </div>
        )    
}

export default MiniPhoto
