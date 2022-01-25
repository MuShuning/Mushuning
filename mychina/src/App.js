import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'
import China from './components/China.js'
import Contact from './components/Contact.js'
import Beijing from './components/Beijing.js'
import Xinjiang from './components/Xinjiang.js'
import Russia from './components/Russia.js'
import Chart from './components/Chart.js'
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My China
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/

 function App() {
  return (
      <Router>
          <div className="App">

              <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/home' element={< Home />}></Route>
                  <Route exact path='/china' element={< China />}></Route>
                  <Route exact path='/contact' element={< Contact />}></Route>
                  <Route exact path='/beijing' element={< Beijing />}></Route>
                  <Route exact path='/xinjiang' element={< Xinjiang />}></Route>
                  <Route exact path='/russia' element={< Russia />}></Route>
                  <Route exact path='/chart' element={< Chart />}></Route>
              </Routes>
          </div>
      </Router>
  );
}






export default App;
