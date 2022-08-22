import logo from './images/logo.png'
import './styles/navbar.css';
function NavBar(props) {
  return (
    <div className={props.darkMode ? "navBar darkMode" : "navBar"}>
         <div className="navBar_container">
          <img className="navBar_logo" src={logo} alt="" />
          <h1 className="navBar_title">  Photographer</h1>
      </div>
      <div className="navBar_toggle">
        <p className="navBar_name">Light</p>
        <div className={props.darkMode ? "navBar_switch darkMode_switch" : "navBar_switch"} onClick={props.switchMode}>
          <div  className={props.darkMode ? "navBar_circle darkMode_circle" : "navBar_circle"}></div>
        </div>
        <p className="navBar_name">Dark</p>
      </div>
    </div>
  );
}

export default NavBar;
