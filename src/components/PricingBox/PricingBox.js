import React from 'react';
import { Container } from 'react-bootstrap';
import "./PricingBox.css";

const PricingBox = () => {
    return (
        <div className="pricing-container">
            <Container>
            <div>
                <div>
                    <div className="pricing-titles">
                        <h4>Advising Success</h4>
                        <h1>Pricing Plans</h1>
                        <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,</p>
                        <p>facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum</p>
                        <p>condim.</p>
                    </div>
                </div>
                <div className="pricing-boxes">
                    <div className="pricing-box">
                        <div className="pricingBox-partOne">
                            <div className="starts">
                                <i className="fas fa-star"></i>
                            </div>
                            <h2>Basic Plane</h2>
                            <h1 id="commonColorOne">$20</h1>
                            <p>PER MONTH</p>
                        </div>
                        <div className="pricingBox-partTwo">
                            <p>One Online Course</p>
                            <p>One E-Book</p>
                            <p>1  Hour of Mentorship</p>
                            <p>Guided Progress</p>
                            <button className="purchaseBtn" id="purchaseBtnOne">PARCHASE</button>
                        </div>
                    </div>
                    <div className="pricing-box">
                        <div className="pricingBox-partOne">
                            <div className="starts">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h2>Professional</h2>
                            <h1 id="commonColorTwo">$50</h1>
                            <p>PER MONTH</p>
                        </div>
                        <div className="pricingBox-partTwo">
                            <p>One Online Course</p>
                            <p>One E-Book</p>
                            <p>1  Hour of Mentorship</p>
                            <p>Guided Progress</p>
                            <button className="purchaseBtn" id="purchaseBtnTwo">PARCHASE</button>
                        </div>
                    </div>
                    <div className="pricing-box">
                        <div className="pricingBox-partOne">
                            <div className="starts">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h2>Exclusive</h2>
                            <h1 id="commonColorThree">$100</h1>
                            <p>PER MONTH</p>
                        </div>
                        <div className="pricingBox-partTwo">
                            <p>One Online Course</p>
                            <p>One E-Book</p>
                            <p>1  Hour of Mentorship</p>
                            <p>Guided Progress</p>
                            <button className="purchaseBtn" id="purchaseBtnThree">PARCHASE</button>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default PricingBox;