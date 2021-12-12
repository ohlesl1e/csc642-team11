import React from 'react'
import { Col, Container, Row, Button, Form, Card, Table } from 'react-bootstrap'

export default function Checkout() {
    return (
        <div style={{ marginTop: '1rem' }}>
            <Container>
                <Row>
                    <Col>
                        <h3>Checkout</h3>
                        <Row>
                            <Col md={5}><a href='/login'><Button variant='success' style={{ width: '100%' }}>Login</Button></a></Col>
                            <Col md={2} ><h4 style={{ textAlign: "center" }}>or</h4></Col>
                            <Col md={5}><a href='/registration'><Button variant='warning' style={{ width: '100%' }}>Register</Button></a></Col>
                        </Row>
                        <Form style={{ marginTop: '1rem' }}>
                            <Form.Group className='mb-3'>
                                <Form.Label>*Name</Form.Label>
                                <Form.Control
                                    placeholder='Enter your name'
                                    type='name' style={{ border: '2px solid black', borderRadius: '20px' }} />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>*SF State Email</Form.Label>
                                <Form.Control
                                    placeholder='Enter your SF State email'
                                    type='email' style={{ border: '2px solid black', borderRadius: '20px' }}
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>*Phone</Form.Label>
                                <Form.Control
                                    placeholder='Enter your phone number'
                                    type='tele' style={{ border: '2px solid black', borderRadius: '20px' }}
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>*Pickup location</Form.Label>
                                <Form.Select style={{ border: '2px solid black', borderRadius: '20px' }}>
                                    <option value=''>Choose...</option>
                                    <option>Baseball Field</option>
                                    <option>Cox Stadium</option>
                                    <option>Manzanita Square</option>
                                    <option>Malcolm X Plaza</option>
                                    <option>Mashouf Wellness Center</option>
                                    <option>Parking Garage</option>
                                    <option>Tennis Courts</option>
                                    <option>UPN</option>
                                    <option>UPS</option>
                                    <option>West Campus Green</option>
                                </Form.Select>
                            </Form.Group>


                            <Form.Label>*Pickup time</Form.Label>
                            <Row>
                                <Form.Group as={Col} className='mb-3'>
                                    <Form.Select style={{ border: '2px solid black', borderRadius: '20px' }}>
                                        <option value=''>Choose...</option>
                                        <option>01:00</option><option>01:30</option>
                                        <option>02:00</option><option>02:30</option>
                                        <option>03:00</option><option>03:30</option>
                                        <option>04:00</option><option>04:30</option>
                                        <option>05:00</option><option>05:30</option>
                                        <option>06:00</option><option>06:30</option>
                                        <option>07:00</option><option>07:30</option>
                                        <option>08:00</option><option>08:30</option>
                                        <option>09:00</option><option>09:30</option>
                                        <option>10:00</option><option>10:30</option>
                                        <option>11:00</option><option>11:30</option>
                                        <option>12:00</option><option>12:30</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} className='mb-3'>
                                    <Form.Select style={{ border: '2px solid black', borderRadius: '20px' }}>
                                        <option>AM</option>
                                        <option>PM</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Check label='*I have read and agree to the terms and conditions' />
                                </Form.Group>

                                <a href='/confirmation'><Button style={{ width: '100%' }} variant='outline-success'>Checkout</Button></a>
                            </Row>
                        </Form>
                    </Col>
                    <Col>
                        <Card style={{ minHeight: '50%', backgroundColor: '#f3f3f3' }}>
                            <Card.Body>
                                <Card.Title><b>Order summary</b></Card.Title>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Macbook Air</td>
                                            <td>John</td>
                                            <td>$300</td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'><b>Total</b></td>
                                            <td>$300</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
