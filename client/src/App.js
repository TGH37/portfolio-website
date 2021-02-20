import './App.css';

import { BreakpointProvider } from './contexts/MediaBreakpointCxt'

import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage.js'
import PortfolioSection from './components/PortfolioSection';

function App() {
  const queries = {
    xs: '(max-width: 600px)',
    md: '(max-width: 1023px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1998px)',
    or: '(orientation: landscape)'
  }
  return (
    <div className="App">
      <BreakpointProvider queries={queries}>
        <Navbar />
        <Homepage />
        <PortfolioSection />
      </BreakpointProvider>
    </div>
  );
}

export default App;
