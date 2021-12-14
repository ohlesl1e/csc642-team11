import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useWindowSize } from '../resize'

export default function Confirmation() {
    const height = useWindowSize()
    return (
        <div style={{ marginTop: '160px', height: (height - 376.2), textAlign: 'center' }}>
            <Container>
                <h1><b>Thank you for your purchase</b></h1>
                <h4 className='mb-3'>Please consider registering for faster checkout next time</h4>
                <Row style={{ width: '50%', margin: 'auto' }}>
                    <Col md={5}><a href='/login'><Button variant='success' style={{ width: '100%' }}>Login</Button></a></Col>
                    <Col md={2} ><h4 style={{ textAlign: "center" }}>or</h4></Col>
                    <Col md={5}><a href='/registration'><Button variant='warning' style={{ width: '100%' }}>Register</Button></a></Col>
                </Row>
            </Container>
        </div>
    )
}
