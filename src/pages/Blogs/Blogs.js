import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
// import Navigation from '../../components/shared/Navigation';
import "./Blogs.css";
import Footer from '../Home/Footer/Footer';

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const url = `https://limitless-shelf-68611.herokuapp.com/blogs`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBlogsData(data);
                setLoading(false)
            })

    }, []);

    if (loading) {
        return (
           <div className='my-5 text-center'>
              <Spinner animation="grow" />
           </div>
        )
     }

    return (
        <>


            <div className='blogContainer'>
                <div className='bolgHeadLine'>
                    <Container>
                        <h1>Blog Standard</h1>
                    </Container>
                </div>
                <Container>
                    <div >
                        <div>
                            {blogsData.map(blog => <div key={blog._id} className='blogs'>
                                <div className='blogBox'>
                                    <div>
                                        <img src={blog.img} alt='Empty' style={{ width: "100%" }} />
                                    </div>
                                    <div className='blog-content'>
                                        <h1>{blog.title}</h1>
                                        <div className='blog-reaction'>
                                            <p>{blog.date}</p>
                                            <p><i className="far fa-heart"></i> 20</p>
                                            <p><i className="fas fa-comment"></i> 5</p>
                                            <p>Education</p>
                                        </div>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </Container>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Blogs;