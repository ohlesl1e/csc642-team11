import React from 'react'
import { Container, Tabs, Tab, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react';

import notebook from '../images/notebook.jpeg'
import textbook from '../images/book.jpeg'
import chair from '../images/chair.jpeg'
import clock from '../images/clock.jpeg'
import laptop from '../images/laptop.jpeg'
import Messages from './Messages';
import SellingList from './SellingList';


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
                    <Button href='/csc642-team11-gatorbuy/listing' variant='warning' style={{ paddingTop: '3px' }}>+</Button>
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
                    <SellingList />
                </Tab>
            </Tabs>
        </Container>

    )
}





export default Seller
