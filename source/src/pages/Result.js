import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import laptop from '../images/laptop.jpeg'

function Result() {
    return (
        <div>
            <Container>
                <h2 style={{ marginTop: '40px',marginLeft:'300px',marginBottom:'20px' }}>Macbook Air 13</h2>
                <div>
                    <Row>
                        <Col style={{marginLeft:'100px'}}>
                            <img src={laptop} width="580px" height="400px" />
                            <div style={{border: '2px solid grey',marginTop:'15px',textAlign:'center'}}>
                                <h4>This is Macook Air 13</h4>
                                <h4>Released in 2017</h4>
                                <h4>Model is A1466</h4>
                            </div>
                        </Col>
                        <Col style={{marginLeft:'150px'}}>
                            <Row>
                                <div>
                                    <h4 style={{marginBottom:'20px'}}>Macbook Air 13</h4>
                                    <h4 style={{marginBottom:'20px'}}>$300</h4>
                                    <h4 style={{marginBottom:'20px'}}>John</h4>
                                    <h4 style={{marginBottom:'80px'}}>123-456-7890</h4>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <Col><Button variant='outline-primary' size="lg" style={{ fontWeight: 'bold',marginBottom:'40px',width:'350px',height:'60px',borderRadius: '20px' }}>Questions? Contact with seller!</Button></Col>
                                    <Col><Button variant='success' size="lg" style={{ fontWeight: 'bold',marginBottom:'20px',width:'350px',height:'60px',borderRadius: '20px'}}>Add to Cart</Button></Col>
                                    <Col><a href='/checkout'><Button variant='warning' size="lg" style={{ fontWeight: 'bold',marginBottom:'20px',width:'350px',height:'60px',borderRadius: '20px' }}>Buy Now</Button></a></Col>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Result

