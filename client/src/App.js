import './App.css';

import { BreakpointProvider } from './contexts/MediaBreakpointCxt'

import Homepage from './components/pages/Homepage.js'

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
        <Homepage />
      </BreakpointProvider>
    </div>
  );
}

export default App;
