import React from 'react';
import './LargePhoto.css'
class LargePhoto extends React.Component {
    showVisible = () =>{
        console.log(this.props.visible)
    }
  render(){
    return(
        <div className={this.props.visible ? '' : 'nonVisible'}>
            <div className='largePhoto_container'>
                <div className='largePhoto_imageContainer'>
                    <button className='largePhoto_button' onClick={this.props.handleShowPhoto}>X</button>
                    <img className='largePhoto_image' src={`architecture_photos/${this.props.name}.jpg`}/> 
                </div>
            </div>
        </div>
    ) 
  }
}

export default LargePhoto