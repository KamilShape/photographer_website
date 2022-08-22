import portrait from './images/portrait.png'
import './styles/header.css';
function Header(props) {
  return (
    <div className={props.darkMode ? "header darkMode" : "header"}>
      <div className="header_container left">
        <h1 className="header_tittle">Hi! <br /> Welcome to my world!</h1>
      </div>
      <div className="header_container right">
        <h1 className="header_tittle">I invite you to my photo gallery! :)</h1>
      </div>
      <div className="header_image-container">
        <img src={portrait} className="header_image" />
      </div>
    </div>
  );
}

export default Header;
