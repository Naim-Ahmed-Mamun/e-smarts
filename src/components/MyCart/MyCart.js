import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../../pages/Home/Footer/Footer';
import Navigation from '../shared/Navigation';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';


const MyCart = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const userEmail = user?.email;
    useEffect(() => {
        fetch(`https://limitless-shelf-68611.herokuapp.com/myOrder/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyOrders(data)
            })
    }, [userEmail]);

    // handleDelete
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to delete your product",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              fetch(`https://limitless-shelf-68611.herokuapp.com/deleteOrder/${id}`, {
               method: 'DELETE'
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.deletedCount) {
                     Swal.fire({
                        type: 'success',
                        title: 'Delete Successfully',
                     })
                     const remaining = myOrders.filter(order => order._id !== id);
                     setMyOrders(remaining)
                  }
               })
            }
          })
    }
    return (
        <>

        <Navigation/>

            <div className="my_cart">

                <div className="cart_items">
                    <div className="d-flex align-items-center">
                        <Container data-aos="fade-up">
                            <h2 className='all_courses_title text-white'>My Cart</h2>
                        </Container>
                    </div>
                </div>

                <Container className='my-5' data-aos="fade-up">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Order No:</th>
                                <th>Course Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((myOrder,ind) => <tr key={myOrder?._id}>
                                        <td>{ind + 1}</td>
                                        <td className='text-capitalize'>{myOrder?.course?.type}</td>
                                        <td>${myOrder?.price}</td>
                                        <td onClick={() => handleDelete(myOrder?._id)}><button className='btn btn-danger'><FaTrash/></button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>

            <Footer></Footer>

            
        </>
    );
};

export default MyCart;