import React from 'react'
import '../App.css';
import { Container, Navbar, Nav, Form, FormControl, Button, InputGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar expand='lg' sticky='top' variant='dark' style={{ backgroundColor: '#683A7E' }}>
                <Container>
                    <Navbar.Brand className='nav-bar-element'><a href='/' style={{ color: 'white', textDecoration: 'none' }}>GatorBuy</a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='nav-fill w-100 nav-bar-element'>
                            <Nav.Item>
                                <Form>
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
                                        <Button variant='warning'>Search</Button>
                                    </InputGroup>
                                </Form>
                            </Nav.Item>
                        </Nav>
                        <Nav className='nav-bar-element'>
                            <Button className='nav-bar-element' variant='light'>Sell</Button>
                            <Button className='nav-bar-element' variant='light'>Cart</Button>
                            <Button className='nav-bar-element' variant='warning'>Account</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
