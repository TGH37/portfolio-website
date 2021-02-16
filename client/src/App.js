import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage.js'
import PortfolioSection from './components/PortfolioSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <PortfolioSection />
    </div>
  );
}

export default App;
