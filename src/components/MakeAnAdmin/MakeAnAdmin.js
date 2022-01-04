import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MakeAnAdmin.css';

const MakeAnAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const collectEmail = event => {
        setAdminEmail(event.target.value)
    }
    const handleAdmin = event => {
        event.preventDefault()
        console.log(adminEmail)

    }
    return (
        <div>
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
                        <input type="email" placeholder="abc@gmail.com" onBlur={collectEmail}/>
                        <button type='submit' className='adminBtn'>Submit</button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default MakeAnAdmin;