import './App.css';
import GlobalProvider from './contexts/GlobalCtx';
import BreakpointProvider from './contexts/MediaBreakpointCtx';
import CursorProvider from './contexts/CursorCtx';
import Homepage from './components/pages/Homepage';
import './styles/css/global.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <BreakpointProvider>
          <CursorProvider>
            <Homepage />
          </CursorProvider>
        </BreakpointProvider>
      </GlobalProvider>
    </div>
  );
};

export default App;
