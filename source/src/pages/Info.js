import React, {useState} from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

function Info() {
    const [fn, setFn] = useState('Moe')
    const [ln, setLn] = useState('Lester')
    const [email, setEmail] = useState('mlester69@mail.sfsu.edu')
    const [phone, setphone] = useState('4155556699')
    return (
        <div style={{ height: '50vh' }}>
            <Form>
                <Form.Group className='mb-3' as={Row}>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control value={fn} onInput={(e) => setFn(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control value={ln} onInput={(e) => setLn(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' value={email} onInput={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type='tele' value={phone} onInput={(e) => setphone(e.target.value)}/>
                </Form.Group>

                <div style={{ textAlign: 'right' }}>
                    <Button variant='success'>Save changes</Button>
                </div>
            </Form>
        </div>
    )
}

export default Info
