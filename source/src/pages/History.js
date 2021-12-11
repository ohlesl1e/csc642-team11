import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import '../App.css';

function History() {
    return (
        <div>
            <Card className='mb-3 listing-item'>
                <Row>
                    <Col md={3}>
                        <div className='listing-image-container'>
                            <img src={require('../images/book.jpeg').default} className='listing-image' />
                        </div>
                    </Col>
                    <Col md={5}>
                        <h5>React-Bootstrap For Dummies, 5th Edition</h5>
                        <h6>$249</h6>
                        <br></br>
                        <text>Delivery Fulfilled</text>
                    </Col>
                    <Col md={4} style={{ textAlign: 'right' }}>
                        <h6 style={{ color: 'gray' }}>Purchased 12/13 11:58 PM</h6>
                    </Col>
                </Row>
            </Card>

            <Card className='mb-3 listing-item'>
                <Row>
                    <Col md={3}>
                        <div className='listing-image-container'>
                            <img src={require('../images/notebook.jpeg').default} className='listing-image' />
                        </div>
                    </Col>
                    <Col md={5}>
                        <h5>CSC 642 Final Exam Answers Notebook</h5>
                        <h6>$99,999.02</h6>
                        <br></br>
                        <text>Delivery Pending</text>
                    </Col>
                    <Col md={4} style={{ textAlign: 'right' }}>
                        <h6 style={{ color: 'gray' }}>Purchased 12/2 03:24 PM</h6>
                    </Col>
                </Row>
            </Card>

            <Card className='mb-3' style={{ padding: '1rem', boxShadow: '3px 6px 5px rgba(0,0,0,.3)' }}>
                <Row>
                    <Col md={3}>
                        <div className='listing-image-container'>
                            <img src={require('../images/laptop.jpeg').default} className='listing-image' />
                        </div>
                    </Col>
                    <Col md={5}>
                        <h5>Laptop</h5>
                        <h6>$600</h6>
                        <br></br>
                        <text >Delivery Pending</text>
                    </Col>
                    <Col md={4} style={{ textAlign: 'right' }}>
                        <h6 style={{ color: 'gray' }}>Purchased 2/22 01:31 AM</h6>
                    </Col>
                </Row>
            </Card>

            <div style={{ textAlign: 'right', marginTop: '5%' }}>
                <h6>1-3 of 3 shown</h6>
            </div>
        </div>
    )
}

export default History
