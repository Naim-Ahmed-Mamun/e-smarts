import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Instructor from './pages/Instructor/Instructor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/instructor" element={<Instructor></Instructor>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
