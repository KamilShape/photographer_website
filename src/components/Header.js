import portrait from './images/portrait.jpg'
import landscape from './images/landscape.jpg'
import './styles/header.css';
import { useState } from 'react';
function Header(props) {
  const fn = () => []
  const [state, setState] = useState(fn())
  console.log(fn())
  return (
    <div className={props.darkMode ? "header darkMode " : "header"}>
        <div className={props.darkMode ? "header_container darkMode" : "header_container"}>
          <div className={props.darkMode ? "header_box first darkMode" : "header_box first"}>
            <h1 className="header_title">Steven</h1>
            <p className="header_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores distinctio iure amet, inventore reprehenderit omnis velit fuga assumenda exercitationem nobis repellendus modi quam ratione itaque. Tempora minus ullam ex praesentium!</p>
          </div>
          <div className="header_box second">
            <div className='header_image_container'><img className='header_image' src={portrait} alt="" /></div>
            <div className={props.darkMode ? "header_about darkMode" : "header_about"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quidem.</div>
          </div>
          <div className="header_box third">
            <div className={props.darkMode ? "header_about darkMode" : "header_about"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quidem.</div>
            <div className='header_image_container'><img className='header_image' src={landscape} alt="" /></div>
          </div>
        </div>
    </div>
  );
}

export default Header;
