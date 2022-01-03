import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Login from './components/shared/Login/Login/Login';
import Register from './components/shared/Register/Register';
import SingleCourseDetails from './components/SingleCourseDetails/SingleCourseDetails';
import ContextProvider from './context/ContextProvider';
import AllCourses from './pages/AllCourses/AllCourses/AllCourses';

import Home from './pages/Home/Home/Home';

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/allCourses" element={<AllCourses></AllCourses>}></Route>
            <Route path="/courses/:name" element={<SingleCourseDetails></SingleCourseDetails>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
        </BrowserRouter>
     
      </ContextProvider>

    </>
  );
}

export default App;
