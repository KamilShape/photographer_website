import logo from './images/logo.png'
import './styles/navbar.css';
function NavBar() {
  return (
    <div className="navBar">
         <div className="navBar_container">
          <img className="navBar_logo" src={logo} alt="" />
          <h1 className="navBar_title">  Photographer</h1>
      </div>
      <div className="navBar_toggle">
        <p className="navBar_name">Light</p>
        <div className="navBar_switch">
          <div className="navBar_circle"></div>
        </div>
        <p className="navBar_name">Dark</p>
      </div>
    </div>
  );
}

export default NavBar;
