import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
