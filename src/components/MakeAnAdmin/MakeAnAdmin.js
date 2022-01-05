import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './MakeAnAdmin.css';

const MakeAnAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const adminEmailData = {email: adminEmail}
    const collectEmail = event => {
        setAdminEmail(event.target.value)
    }
    const handleAdmin = event => {
        event.preventDefault()
        // console.log(adminEmail)
        const url = `https://limitless-shelf-68611.herokuapp.com/users/admin`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminEmailData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.modifiedCount){
                    Swal.fire({
                        type: 'success',
                        title: 'Admin ad successfully!',
                     })
                }else{
                    Swal.fire({
                        type: 'error',
                        title: 'User Not Find!',
                     })
                }

            })

    }
    return (
        <div className='MakeAdminContainer'>
            <div className='MakeAdminTitle'>
                <Container>
                    <h1>Make An Admin</h1>
                    <Link to="/home"><p>Home/Make An Admin</p></Link>
                </Container>
            </div>
            <Container>
                <div className='MakeAdminForm'>
                    <form onClick={handleAdmin}>
                        <div><i className="fas fa-user"></i> <span>Admin</span></div>
                        <input type="email" placeholder="abc@gmail.com" onBlur={collectEmail} required/>
                        <button type='submit' className='adminBtn'>Submit</button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default MakeAnAdmin;