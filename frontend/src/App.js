//import './assets/App.css';
import 'bulma/css/bulma.min.css';
import './assets/App.scss';
import { createRef } from 'react';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
//import madeWithBulma from './assets/made-with-bulma.png';

function App() {
  const appRef = createRef();
  return (
    <div className="App" ref={appRef}>
      <NavBar />
      <AppRouter appRef={appRef} />
    </div>
  );
}

export default App;
