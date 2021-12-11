import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import notebook from '../images/notebook.jpeg'
import laptop from '../images/laptop.jpeg'
import lamp from '../images/lamp.jpeg'
import chair from '../images/chair.jpeg'
import clock from '../images/clock.jpeg'
import textbook from '../images/book.jpeg'

function Home() {
    return (
        <div>
            <Container>
                <div id="home-body">
                    <div id="home-title">
                        <h1 style={{ fontWeight: 'bold', color: '#5d2975', marginTop: '40px' }}>Buy and sell your items on campus!</h1>
                        <h1 style={{ fontWeight: 'bold', color: '#5d2975' }}>We help ypu save money!</h1>
                    </div>
                    <div id="item-cards">
                        <h4 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '-30px' }}>New Posted items : </h4>
                        <Row>
                            <Col>
                                <div id="item-card1" style={{ marginTop: '40px' }}>
                                    <Link to="/result"><img src={notebook} width="400px" height="300px" style={{ objectFit: 'cover' }} /></Link>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <h5 style={{ marginRight: '220px' }}>Notebook</h5>
                                        <Link to="/checkout"><Button variant='success' size="lg" style={{ fontWeight: 'bold' }}>Buy</Button></Link></div>
                                    <h5 style={{ marginTop: '-20px' }}>$5</h5>
                                </div>
                            </Col>
                            <Col>
                                <div id="item-card2" style={{ marginTop: '40px' }}>
                                    <Link to="/result"><img src={laptop} width="400px" height="300px" style={{ objectFit: 'cover' }} /></Link>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <h5 style={{ marginRight: '240px' }}>Laptop</h5>
                                        <Link to="/checkout"><Button variant='success' size="lg" style={{ fontWeight: 'bold' }}>Buy</Button></Link></div>
                                    <h5 style={{ marginTop: '-20px' }}>$300</h5>
                                </div>
                            </Col>
                            <Col>
                                <div id="item-card3" style={{ marginTop: '40px' }}>
                                    <Link to="/result"><img src={lamp} width="400px" height="300px" style={{ objectFit: 'cover' }} /></Link>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <h5 style={{ marginRight: '240px' }}>Lamp</h5>
                                        <Link to="/checkout"><Button variant='success' size="lg" style={{ fontWeight: 'bold' }}>Buy</Button></Link></div>
                                    <h5 style={{ marginTop: '-20px' }}>$9</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div id="item-card4" style={{ marginTop: '40px' }}>
                                    <Link to="/result"><img src={chair} width="400px" height="300px" style={{ objectFit: 'cover' }} /></Link>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <h5 style={{ marginRight: '240px' }}>Chair</h5>
                                        <Link to="/checkout"><Button variant='success' size="lg" style={{ fontWeight: 'bold' }}>Buy</Button></Link>
                                    </div>
                                    <h5 style={{ marginTop: '-20px' }}>$7</h5>
                                </div>
                            </Col>
                            <Col>
                                <div id="item-card5" style={{ marginTop: '40px' }}>
                                    <Link to="/result"><img src={clock} width="400px" height="300px" style={{ objectFit: 'cover' }} /></Link>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <h5 style={{ marginRight: '240px' }}>Clock</h5>
                                        <Link to="/checkout"><Button variant='success' size="lg" style={{ fontWeight: 'bold' }}>Buy</Button></Link></div>
                                    <h5 style={{ marginTop: '-20px' }}>$4</h5>
                                </div>
                            </Col>
                            <Col>
                                <div id="item-card6" style={{ marginTop: '40px' }}>
                                    <Link to="/result"><img src={textbook} width="400px" height="300px" style={{ objectFit: 'cover' }} /></Link>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <h5 style={{ marginRight: '240px' }}>textbook</h5>
                                        <Link to="/checkout"><Button variant='success' size="lg" style={{ fontWeight: 'bold' }}>Buy</Button></Link></div>
                                    <h5 style={{ marginTop: '-20px' }}>$15</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home
