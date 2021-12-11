import React from 'react'
import { Container, Tabs, Tab, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react';

import notebook from '../images/notebook.jpeg'
import textbook from '../images/book.jpeg'
import chair from '../images/chair.jpeg'
import clock from '../images/clock.jpeg'
import laptop from '../images/laptop.jpeg'
import Messages from './Messages';


function Seller() {

    // 0 = Buyer Messages
    // 1 = Purchase History
    // 2 = Selling
    const [key, setKey] = useState('home');


    return (
        <Container >
            <Row className='mt-4'>
                <Col>
                    <h2>Seller Page</h2>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                    <span className='me-2'>Create New Listing</span>
                    <Button href='/listing' variant='warning'>+</Button>
                </Col>
            </Row>

            <div>
                <text style={{ color: 'gray', fontSize: '12px' }}>User ID: 1234567890</text>
            </div>

            <Tabs
                id="mypage"
                defaultActiveKey='messages'
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
                <Tab eventKey="messages" title="Buyer Messages">
                    <Messages />
                </Tab>
                <Tab eventKey="selling" title="Selling" >
                    <button style={{ width: '90%', height: '150px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'left', marginBottom: '5px' }}>
                        <div>
                            <text style={{ marginLeft: '88%', fontSize: '12px', marginRight: '10px' }} >Approved/Live</text>
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
                </Tab>
            </Tabs>
        </Container>

    )
}





export default Seller
