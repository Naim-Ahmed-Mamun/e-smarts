import React from 'react';
import { Container } from 'react-bootstrap';
import './AllLogo.css'

const AllLogo = () => {
    return (
        <div className='logoContainer'>
            <Container>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <img src='https://esmarts.qodeinteractive.com/wp-content/uploads/2017/09/h1-client-4-hover.png' alt='Empty' style={{width: "238px"}}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <img src='https://esmarts.qodeinteractive.com/wp-content/uploads/2017/09/h1-client-3.png' alt='Empty' style={{width: "238px"}}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <img src='https://esmarts.qodeinteractive.com/wp-content/uploads/2017/09/h1-client-1.png' alt='Empty' style={{width: "238px"}}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <img src='https://esmarts.qodeinteractive.com/wp-content/uploads/2017/09/h1-client-5-hover.png' alt='Empty' style={{width: "238px"}}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AllLogo;