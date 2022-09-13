import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './components/Context';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';


// import ChildB from './components/ChildB';
function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Routes>
          </Routes>
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
