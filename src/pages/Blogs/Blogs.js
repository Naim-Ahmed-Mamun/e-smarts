import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "./Blogs.css";

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([])

    useEffect(() => {
        const url = `https://limitless-shelf-68611.herokuapp.com/blogs?fbclid=IwAR0ve1PrFFJqwxWMKtkpG204RhZv6kecuKPAOVr8F1lbPM4bphMYgfXswg0`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBlogsData(data)
            })

    }, [])

    return (
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
                                    <img src={blog.img} alt='Empty' style={{width: "100%"}}/>
                                </div>
                                <div className='blog-content'>
                                    <h1>{blog.title}</h1>
                                    <div className='blog-reaction'>
                                        <p>{blog.date}</p>
                                        <p><i class="far fa-heart"></i> 20</p>
                                        <p><i class="fas fa-comment"></i> 5</p>
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
    );
};

export default Blogs;