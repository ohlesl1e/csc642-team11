import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Confirmation() {
    return (
        <div style={{ marginTop: '10rem', height: '40vh', textAlign: 'center' }}>
            <Container>
                <h1><b>Thank you for your purchase</b></h1>
                <h4 className='mb-3'>Please consider registering for faster checkout next time</h4>
                <Row style={{ width: '50%', margin: 'auto' }}>
                    <Col md={5}><a href='/csc642-team11-gatorbuy/login'><Button variant='success' style={{ width: '100%' }}>Login</Button></a></Col>
                    <Col md={2} ><h4 style={{ textAlign: "center" }}>or</h4></Col>
                    <Col md={5}><a href='/csc642-team11-gatorbuy/registration'><Button variant='warning' style={{ width: '100%' }}>Register</Button></a></Col>
                </Row>
            </Container>
        </div>
    )
}
