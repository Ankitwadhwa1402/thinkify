import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/home/HomePage';
import Clients from './components/clients/Clients';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Clients />
      <About />
       
    </div>
  );
}

export default App;
