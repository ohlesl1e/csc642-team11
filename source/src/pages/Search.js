import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import laptop1 from '../images/laptop.jpeg'
import laptop2 from '../images/laptop2.jpeg'

function Search() {
    return (
        <div>
            <Container>
                <h4 style={{ fontWeight: 'bold', marginTop: '50px' }}>Showing 1 to 2 out of 2 items : </h4>
                <div style={{ marginLeft: '1080px', marginBottom: '20px' }}>
                    <Form>
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
                                    <Button variant='outline-primary' size="lg" style={{ fontWeight: 'bold', marginTop: '15px',width:'180px',height:'50px',borderRadius: '20px'}}>View More</Button>
                                    <Button variant='success' size="lg" style={{ fontWeight: 'bold', marginTop: '15px',width:'180px',height:'50px',borderRadius: '20px'}}>Add to Cart</Button>
                                    <Button variant='warning' size="lg" style={{ fontWeight: 'bold', marginTop: '15px',width:'180px',height:'50px',borderRadius: '20px' }}>Buy Now</Button>
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
                                    <Button variant='outline-primary' size="lg" style={{ fontWeight: 'bold', marginTop: '15px',width:'180px',height:'50px',borderRadius: '20px' }}>View More</Button>
                                    <Button variant='success' size="lg" style={{ fontWeight: 'bold', marginTop: '15px',width:'180px',height:'50px',borderRadius: '20px' }}>Add to Cart</Button>
                                    <Button variant='warning' size="lg" style={{ fontWeight: 'bold', marginTop: '15px',width:'180px',height:'50px',borderRadius: '20px' }}>Buy Now</Button>
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
