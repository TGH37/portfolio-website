import './App.css';
import GlobalProvider from './contexts/GlobalCtx';
import BreakpointProvider from './contexts/MediaBreakpointCtx';
import CursorProvider from './contexts/CursorCtx';
import Homepage from './components/pages/Homepage';
import './styles/css/global.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

library.add( 
  faChevronRight,
  faChevronLeft,
  )

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
