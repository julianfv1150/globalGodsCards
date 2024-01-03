
import { Routes, Route } from 'react-router-dom';
import Cabecera from './components/cabecera/Cabecera'
import NavBar from './components/navBar/NavBar';
import Home from './views/Home';
import Maze from './views/Maze';
import Footer from './views/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/mazo' element={<Maze />} />
      {/*
        </Route>
        <Route path='/griegos'>          
        </Route>
        <Route path='/nordicos'>          
        </Route>
        <Route path='/hindues'>          
        </Route>
        <Route path='/egipcios'>          
        </Route>
        <Route path='/chinos'>          
        </Route>
        <Route path='/aztecas'>          
        </Route>        
        <Route path='details/:id'>          
      */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
