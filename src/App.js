import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/home/HomePage';
import Clients from './components/clients/Clients';
import About from './components/about/About';
import Stats from './components/stats/Stats';
import Demo from './components/demo/Demo';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Clients />
      <About />
      <Stats />
      <Demo />
      <Footer />
       
    </div>
  );
}

export default App;
