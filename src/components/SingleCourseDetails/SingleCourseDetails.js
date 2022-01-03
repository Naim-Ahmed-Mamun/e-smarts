import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCourseDetails.css';
import { GetContext } from "../../context/ContextProvider";

const SingleCourseDetails = () => {
   const {name} = useParams();
   const {singleCourse,setSingleCourse} = useContext(GetContext);
   useEffect(() => {
      const url = `https://limitless-shelf-68611.herokuapp.com/courses/${name}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setSingleCourse(data))
   },[name,setSingleCourse])
   return (
      <>
         <h2>{name}</h2>
      </>
   );
};

export default SingleCourseDetails;