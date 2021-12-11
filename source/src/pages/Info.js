import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

function Info() {
    return (
        <div style={{ height: '50vh' }}>
            <Form>
                <Form.Group className='mb-3' as={Row}>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control />
                    </Col>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control />
                </Form.Group>

                <div style={{ textAlign: 'right' }}>
                    <Button variant='success'>Save changes</Button>
                </div>
            </Form>
        </div>
    )
}

export default Info
