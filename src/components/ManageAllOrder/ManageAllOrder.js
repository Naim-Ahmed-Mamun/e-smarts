import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageAllOrder.css'

const ManageAllOrder = () => {
    const [userOrder, setUserOrder] = useState([])

    useEffect(() => {
        const url = `https://limitless-shelf-68611.herokuapp.com/orders?fbclid=IwAR0C6pDCutxiptLX-RqtDh8CstjvsdhQc0vKrSYMmjEc1UDlrOgBeB_ojcY`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
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
                <div className='userOrders'>
                    <div>
                        <div className='row order-title'>
                            <div className='col-lg-2 col-md-4 col-sm-6'><h1>Name</h1></div>
                            <div className='col-lg-2 col-md-4 col-sm-6'><h1>Email</h1></div>
                            <div className='col-lg-2 col-md-4 col-sm-6'><h1>Type</h1></div>
                            <div className='col-lg-2 col-md-4 col-sm-6'><h1>Price</h1></div>
                            <div className='col-lg-2 col-md-4 col-sm-6'><h1>Pay</h1></div>
                            <div className='col-lg-2 col-md-4 col-sm-6'><h1>Delete</h1></div>
                        </div>
                    </div>
                    {userOrder.map(order => <div key={order.course._id} className='row userOrder'>
                        <div className='col-lg-2 col-md-4 col-sm-6'><i className="fas fa-user"></i> {order.name}</div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>{order.email}</div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>{order.course.type}</div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>{order.price}</div>
                        <div className='col-lg-2 col-md-4 col-sm-6'><button>Pay</button></div>
                        <div className='col-lg-2 col-md-4 col-sm-6'><button><i className="fas fa-trash"></i></button></div>
                    </div>)}
                </div>
            </Container>
        </div>
    );
};

export default ManageAllOrder;