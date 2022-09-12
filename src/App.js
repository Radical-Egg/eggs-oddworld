//import './assets/App.css';
import 'bulma/css/bulma.min.css';
import './assets/App.scss';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
