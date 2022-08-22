import React from 'react';
import './app.css'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function switchMode(){
    setDarkMode(prevState => !prevState)
    console.log(darkMode)
  }
  return (
    <div className="App">
      <NavBar darkMode={darkMode} switchMode={switchMode}/>
      <Header darkMode={darkMode}/>
      <Gallery darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
