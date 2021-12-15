import React, { useState } from 'react'
import { Container, Row, Col, Button, Form,ToastContainer,Toast } from 'react-bootstrap'
import { Link } from "react-router-dom";
import laptop1 from '../images/laptop.jpeg'
import laptop2 from '../images/laptop2.jpeg'

function Search() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <ToastContainer className='mt-4 p-5' position='top-end'>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header closeButton={false}>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">GatorBuy</strong>
                    </Toast.Header>
                    <Toast.Body>Added to cart</Toast.Body>
                </Toast>
            </ToastContainer>
            <Container>
                <h4 style={{ fontWeight: 'bold', marginTop: '50px' }}>Showing 1 to 2 out of 2 items : </h4>
                <div className='d-flex justify-content-end mb-3'>
                    <Form style={{ maxWidth: '30%' }}>
                        <Form.Select defaultValue='All' style={{ fontWeight: 'bold', fontSize: '20px', color: '#224466', border: '2px solid blue' }}>
                            <option>Price: low to high</option>
                            <option>Price: high to low</option>
                        </Form.Select>
                    </Form>
                </div>
                <div id="result-cards">
                    <div id="result-card1" style={{ border: '2px solid grey', borderRadius: '20px', width: '800px', height: '210px', margin: 'auto', marginBottom: '50px' }}>
                        <Row>
                            <Col>
                                <div style={{ marginTop: '20px', marginLeft: '20px' }}>
                                    <img src={laptop1} width="250px" height="160px" />
                                </div>
                            </Col>
                            <Col>
                                <div style={{ marginTop: '20px', marginLeft: '50px' }}>
                                    <h4 style={{ marginBottom: '35px' }}>Macbook Air</h4>
                                    <h4 style={{ marginBottom: '35px' }}>$300</h4>
                                    <h4>John</h4>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ marginLeft: '30px' }}>
                                    <Link to="/result"><Button variant='outline-primary' size="lg" style={{ fontWeight: 'bold', marginTop: '15px', width: '180px', height: '50px', borderRadius: '20px' }}>View More</Button></Link>
                                    <Button variant='success' size="lg" style={{ fontWeight: 'bold', marginTop: '15px', width: '180px', height: '50px', borderRadius: '20px' }} onClick={() => setShow(true)}>Add to Cart</Button>
                                    <a href='/checkout'><Button variant='warning' size="lg" style={{ fontWeight: 'bold', marginTop: '15px', width: '180px', height: '50px', borderRadius: '20px' }}>Buy Now</Button></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div id="result-card2" style={{ border: '2px solid grey', borderRadius: '20px', width: '800px', height: '210px', margin: 'auto', marginBottom: '50px' }}>
                        <Row>
                            <Col>
                                <div style={{ marginTop: '20px', marginLeft: '20px' }}>
                                    <img src={laptop2} width="250px" height="160px" />
                                </div>
                            </Col>
                            <Col>
                                <div style={{ marginTop: '20px', marginLeft: '50px' }}>
                                    <h4 style={{ marginBottom: '35px' }}>Dell laptop</h4>
                                    <h4 style={{ marginBottom: '35px' }}>$400</h4>
                                    <h4>Kate</h4>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ marginLeft: '30px' }}>
                                    <Link to="/result"><Button variant='outline-primary' size="lg" style={{ fontWeight: 'bold', marginTop: '15px', width: '180px', height: '50px', borderRadius: '20px' }}>View More</Button></Link>
                                    <Button variant='success' size="lg" style={{ fontWeight: 'bold', marginTop: '15px', width: '180px', height: '50px', borderRadius: '20px' }} onClick={() => setShow(true)}>Add to Cart</Button>
                                    <a href='/checkout'><Button variant='warning' size="lg" style={{ fontWeight: 'bold', marginTop: '15px', width: '180px', height: '50px', borderRadius: '20px' }}>Buy Now</Button></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Search
