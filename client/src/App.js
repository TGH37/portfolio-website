import './App.css';

import { BreakpointProvider } from './contexts/MediaBreakpointCxt';
import CursorProvider from './contexts/CursorCtx';

import Homepage from './components/pages/Homepage.js'
import './styles/css/global.css'


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
        <CursorProvider>
          <Homepage />
        </CursorProvider>
      </BreakpointProvider>
    </div>
  );
}

export default App;
