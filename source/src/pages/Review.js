import React from 'react'
import { Col, Container, Form, InputGroup, Row, Button } from 'react-bootstrap'

function Review() {
    return (
        <div>
            <Container>
                <h2 className='mt-4'>Review Listing</h2><hr />
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Item name</Form.Label>
                        <Form.Control value='IKEA Chair' readOnly />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Proposed item price</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control value='30' readOnly />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Item description</Form.Label>
                        <Form.Control as='textarea' value='Used, very good condition' readOnly />
                    </Form.Group>

                    <Form.Label>Images</Form.Label>
                    <Row>
                        <Col md={4}><img width='100%' height='300em' src={require('../images/chair.jpeg').default} style={{ objectFit: 'cover' }} /></Col>
                        <Col md={4}><img width='100%' height='300em' src={require('../images/placeholder.png').default} style={{ objectFit: 'cover' }} /></Col>
                        <Col md={4}><img width='100%' height='300em' src={require('../images/placeholder.png').default} style={{ objectFit: 'cover' }} /></Col>
                    </Row><hr />

                    <Form.Group className='mb-3'>
                        <Form.Label>Reason to deny (if applicable)</Form.Label>
                        <Form.Control as='textarea' />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Row>
                            <Col><a href='/csc642-team11-gatorbuy/admindashboard'><Button variant='danger' style={{ width: '100%' }}>Deny</Button></a></Col>
                            <Col><a href='/csc642-team11-gatorbuy/admindashboard'><Button variant='success' style={{ width: '100%' }}>Approve</Button></a></Col>
                            <Col><a href='/csc642-team11-gatorbuy/admindashboard'><Button style={{ width: '100%' }}>Back</Button></a></Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default Review