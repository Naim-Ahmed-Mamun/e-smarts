import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PricingBox from './components/PricingBox/PricingBox';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <PricingBox></PricingBox>
      </BrowserRouter>
    </>
  );
}

export default App;
