import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Blogs from './pages/Blogs/Blogs';
import Login from './components/shared/Login/Login/Login';
import Register from './components/shared/Register/Register';
import SingleCourseDetails from './components/SingleCourseDetails/SingleCourseDetails';
import ContextProvider from './context/ContextProvider';
import AllCourses from './pages/AllCourses/AllCourses/AllCourses';
import Home from './pages/Home/Home/Home';
import Review from './components/Review/Review';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import MyCart from './components/MyCart/MyCart';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/allCourses" element={<AllCourses></AllCourses>}></Route>
            <Route path="/courses/:id" element={<PrivateRoute>
              <SingleCourseDetails></SingleCourseDetails>
            </PrivateRoute>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/review" element={<Review></Review>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/myOrder" element={<MyCart></MyCart>}></Route>
        </Routes>
        </BrowserRouter>
     
      </ContextProvider>

    </>
  );
}

export default App;
