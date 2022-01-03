import React from 'react';
import { Container } from 'react-bootstrap';
import "./Blogs.css";

const Blogs = () => {
    // const [bolgData, setBlogsData] = useState([])

    // useEffect((
    //     fetch("https://limitless-shelf-68611.herokuapp.com/blogs?fbclid=IwAR0ve1PrFFJqwxWMKtkpG204RhZv6kecuKPAOVr8F1lbPM4bphMYgfXswg0")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setBlogsData(data)
    //         })

    // ), [])

    return (
        <div className='blogContainer'>
            <div className='bolgHeadLine'>
                <Container>
                    <h1>Blog Standard</h1>
                </Container>
            </div>
            <Container>  
                <div>

                </div>
            </Container>
        </div>
    );
};

export default Blogs;