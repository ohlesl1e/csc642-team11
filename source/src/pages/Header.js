import React, { useState } from 'react'
import '../App.css';
import { Container, Navbar, Nav, Form, FormControl, Button, InputGroup, Col, Offcanvas, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)

    return (
        <div style={{ height: '69px' }}>
            <Navbar expand='lg' sticky='top' variant='dark' style={{ backgroundColor: '#683A7E' }}>
                <Container>
                    <Navbar.Brand className='nav-bar-element'><a href='/' style={{ color: 'white', textDecoration: 'none' }}>GatorBuy</a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='nav-fill w-100 nav-bar-element'>
                            <Nav.Item>
                                {window.innerWidth >= 992 ?
                                    <Form style={{ maxWidth: '80%', margin: 'auto' }}>
                                        <InputGroup>
                                            <Form.Select defaultValue='All' style={{ maxWidth: '20%' }}>
                                                <option>All</option>
                                                <option>Textbooks</option>
                                                <option>Cloathing</option>
                                                <option>Electronics</option>
                                                <option>School Supplies</option>
                                                <option>Dorm</option>
                                            </Form.Select>
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                className="me-6"
                                                aria-label="Search"
                                            />
                                            <a href='/search'><Button variant='warning'>Search</Button></a>
                                        </InputGroup>
                                    </Form> :
                                    <Form style={{ maxWidth: '98%'}}>
                                        <InputGroup>
                                            <Form.Select defaultValue='All' style={{ maxWidth: '20%' }}>
                                                <option>All</option>
                                                <option>Textbooks</option>
                                                <option>Cloathing</option>
                                                <option>Electronics</option>
                                                <option>School Supplies</option>
                                                <option>Dorm</option>
                                            </Form.Select>
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                className="me-6"
                                                aria-label="Search"
                                            />
                                            <a href='/search'><Button variant='warning'>Search</Button></a>
                                        </InputGroup>
                                    </Form>
                                }
                            </Nav.Item>
                        </Nav>
                        <Nav className='nav-bar-element'>
                            <Button href='/seller' className='nav-bar-element' variant='light'>Sell</Button>
                            <Button className='nav-bar-element' variant='light' onClick={handleShow}>Cart</Button>
                            <Button href='/login' className='nav-bar-element' variant='warning'>Account</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas show={show} onHide={handleHide} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <a href='/checkout'><Button className='mb-3' style={{ width: '100%' }} variant='warning'>Checkout</Button></a>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Macbook Air</div>
                                John
                            </div>
                            <Badge variant="primary" pill>
                                $300
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header
