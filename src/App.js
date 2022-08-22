import './app.css'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
