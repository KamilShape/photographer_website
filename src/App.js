import './components/styles/navbar.css';
import './components/styles/header.css';
import './components/styles/gallery.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Gallery from './components/Gallery';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Gallery/>
    </div>
  );
}

export default App;
