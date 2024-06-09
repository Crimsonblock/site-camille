// import logo from './logo.svg';
import './App.css';
import Home from './modules/Home';

// 5ca0b8

function App() {
  return (
    <div className="App">
      <header>
        <a href='/' id='title' className="blue roboto-light">Camille Bauer</a>
        <h2 className='subtitle roboto-thin'>Mezzo-Soprano</h2>
      </header>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
