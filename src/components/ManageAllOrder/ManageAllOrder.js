import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAllOrder = () => {
    const [userOrder, setUserOrder] = useState([])

    useEffect(() => {
        const url = `https://limitless-shelf-68611.herokuapp.com/orders?fbclid=IwAR0C6pDCutxiptLX-RqtDh8CstjvsdhQc0vKrSYMmjEc1UDlrOgBeB_ojcY`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserOrder(data)
            })
    }, [])
    return (
        <div className='MakeAdminContainer'>
            <div className='MakeAdminTitle'>
                <Container>
                    <h1>Make An Admin</h1>
                    <Link to="/home"><p>Home/Make All Order</p></Link>
                </Container>
            </div>
            <Container>
                <div>

                </div>
            </Container>
        </div>
    );
};

export default ManageAllOrder;