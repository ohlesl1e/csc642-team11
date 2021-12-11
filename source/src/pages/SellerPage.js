import React from 'react'
import { Container } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import { useState } from 'react';

import notebook from '../images/notebook.jpeg'
import textbook from '../images/book.jpeg'
import chair from '../images/chair.jpeg'
import clock from '../images/clock.jpeg'
import laptop from '../images/laptop.jpeg'


function Seller() {

    // 0 = Buyer Messages
    // 1 = Purchase History
    // 2 = Selling
        const [key, setKey] = useState('home');


    return (
            <Container >
            <div>
                <h1 style={{ marginTop: '20px', marginBottom: '-30px' }}>My Page</h1>
                <text style={{ marginLeft: '80%', marginRight: '15px' }}><b>Create New Listing</b></text>
                <button style={{ fontSize: '20px', borderRadius: '100%', backgroundColor: 'gold', width: '40px', height: '40px' }}>+</button>
            </div>

            <div>
                <text style={{ color: 'gray', fontSize: '12px' }}>User ID: 1234567890</text>
            </div>

            <div>
                 <Tabs
                    id="mypage"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    style={{ marginTop: '20px', marginBottom: '20px' }}
                >
                    <Tabs.Tab eventKey="messages" title="Buyer Messages" selected='true'> 
                        <button style={{ width: '100%', height: '50px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'left', marginBottom: '5px' }}>
                            <b>From: User</b>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { /* wow coding */ }
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            

                            how do i use this

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            11/11 11:11 AM
                        </button>
                        <button style={{ width: '100%', height: '50px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'left', marginBottom: '5px' }}>
                            <b>From: User</b>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            do you take $SHIB for payment

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            12/34 56:78 AM
                        </button>
                        <div style={{ textAlign: 'right', marginTop: '20%'}}>
                            <h6>1-2 of 2 shown</h6>
                        </div>

                    </Tabs.Tab>

                    <Tabs.Tab eventKey="history" title="Purchase History">
                        <button style={{ width: '90%', height: '150px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'left', marginBottom: '5px' }}>
                            <img src={textbook} width="120px" height="100px" style={{ marginTop: '0px', marginLeft: '20px' }}></img>
                            <h6 style={{ marginTop: '-100px', marginLeft: '25%' }}>
                                React-Bootstrap For Dummies, 5th Edition
                            </h6>
                            <h6 style={{ marginLeft: '25%' }}>
                                $249
                            </h6>
                            <br></br>
                            <text style={{ marginLeft: '25%' }}>Delivery Fulfilled</text>
                            <h6 style={{ color: 'gray', fontSize: '12px', marginTop: '-10px', marginBottom: '-10px', marginLeft: '85%' }}>Purchased 12/13 11:58 PM</h6>
                        </button>

                        <button style={{ width: '90%', height: '150px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'left', marginBottom: '5px' }}>
                            <img src={notebook} width="120px" height="100px" style={{ marginTop: '0px', marginLeft: '20px' }}></img>
                            <h6 style={{ marginTop: '-100px', marginLeft: '25%' }}>
                                CSC 642 Final Exam Answers Notebook
                            </h6>
                            <h6 style={{ marginLeft: '25%' }}>
                                $99,999.02
                            </h6>
                            <br></br>
                            <text style={{ marginLeft: '25%' }}>Delivery Pending</text>
                            <h6 style={{ color: 'gray', fontSize: '12px', marginTop: '-10px', marginBottom: '-10px', marginLeft: '85%' }}>Purchased 12/2 03:24 PM</h6>
                        </button>

                        <button style={{ width: '90%', height: '150px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'left', marginBottom: '5px' }}>
                            <img src={laptop} width="120px" height="100px" style={{ marginTop: '0px', marginLeft: '20px' }}></img>
                            <h6 style={{ marginTop: '-100px', marginLeft: '25%' }}>
                                iLaptop
                            </h6>
                            <h6 style={{ marginLeft: '25%' }}>
                                $600
                            </h6>
                            <br></br>
                            <text style={{ marginLeft: '25%' }}>Delivery Pending</text>
                            <h6 style={{ color: 'gray', fontSize: '12px', marginTop: '-10px', marginBottom: '-10px', marginLeft: '85%' }}>Purchased 2/22 01:31 AM</h6>
                        </button>

                        <div style={{ textAlign: 'right', marginTop: '5%' }}>
                            <h6>1-3 of 3 shown</h6>
                        </div>


                    </Tabs.Tab>


                    <Tabs.Tab eventKey="selling" title="Selling" >
                        <button style={{ width: '90%', height: '150px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'left', marginBottom: '5px' }}>
                            <div>
                                <text style={{ marginLeft: '88%', fontSize: '12px', marginRight: '10px'}} >Approved/Live</text>
                                <button style={{ width: '15px', height: '15px', borderRadius: '100%', backgroundColor: 'lime' }}></button>
                            </div>
                            <img src={chair} width="120px" height="100px" style={{ marginTop: '-20px', marginLeft: '20px' }}></img>
                            <h6 style={{ marginTop: '-100px', marginLeft: '25%' }}>
                                Used Chair
                            </h6>
                            <h6 style={{ marginLeft: '25%' }}>
                                Best Offer - $99
                            </h6>
                            <br></br>
                            <text style={{ marginLeft: '25%' }}>2 unreviewed offers</text>
                            <h6 style={{ color: 'gray', fontSize: '12px', marginTop: '-10px', marginBottom: '-10px', marginLeft: '81%' }}>Listing Published 11/12 11:21 PM</h6>
                        </button>

                        <button style={{ width: '90%', height: '150px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'left', marginBottom: '5px' }}>
                            <div>
                                <text style={{ marginLeft: '92%', fontSize: '12px', marginRight: '10px' }} >Denied</text>
                                <button style={{ width: '15px', height: '15px', borderRadius: '100%', backgroundColor: 'red' }}></button>
                            </div>
                            <div>
                                <text style={{ marginLeft: '91.5%', fontSize: '10px', marginRight: '10px', color: 'gray' }} >Click for Details</text>
                            </div>
                            <img src={clock} width="120px" height="100px" style={{ marginTop: '-40px', marginLeft: '20px' }}></img>
                            <h6 style={{ marginTop: '-100px', marginLeft: '25%' }}>
                                Free Time
                            </h6>
                            <h6 style={{ marginLeft: '25%' }}>
                                Proposed Price - $12
                            </h6>
                            <br></br>
                            <text style={{ marginLeft: '25%' }}>&nbsp;</text>
                            <h6 style={{ color: 'gray', fontSize: '12px', marginTop: '-10px', marginBottom: '-10px', marginLeft: '79%' }}>Listing Reviewed at 12/14 08:41 AM</h6>
                        </button>



                       

                        <div style={{ textAlign: 'right', marginTop: '5%' }}>
                            <h6>1-2 of 2 shown</h6>
                        </div>
                    </Tabs.Tab>
                </Tabs>
            </div>
            </Container>

        )
    }

    

    

export default Seller
