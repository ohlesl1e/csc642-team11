import React from 'react'
import { Card, Col, Row, Button, Image, Pagination } from 'react-bootstrap'

function PendingListing() {
    let active = 1
    let items = [
        <Pagination.First disabled />,
        <Pagination.Prev disabled />,
        <Pagination.Item key={1} active={1 === active}>1</Pagination.Item>,
        <Pagination.Item key={2} active={2 === active}>2</Pagination.Item>,
        <Pagination.Item key={3} active={3 === active}>3</Pagination.Item>,
        <Pagination.Item key={4} active={4 === active}>4</Pagination.Item>,
        <Pagination.Ellipsis />,
        <Pagination.Next />,
        <Pagination.Last />
    ]
    return (
        <div style={{ minHeight: '50vh' }}>
            <h6 className='ms-4 mt-4'>Showing 3 of 69</h6>
            <Card className='mb-2 listing-item'>
                <Row>
                    <Col md={3}>
                        <div style={{ width: '100%', height: '8rem' }}>
                            <Image
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                src={require('../images/laptop.jpeg').default}
                            />
                        </div>
                    </Col>
                    <Col md={5}>
                        <h5>2018 Macbook Air 13</h5>
                        <h6>Best offer (by price)</h6>
                    </Col>
                    <Col md={4} style={{ textAlign: 'right' }}>
                        <Button style={{ width: '50%' }} href='/review'>Review</Button>
                        <p className='justify-content-right mt-5'>Submitted (04/20/2021 04:20 PM)</p>
                    </Col>
                </Row>
            </Card>
            <Card className='mb-2 listing-item'>
                <Row>
                    <Col md={3}>
                        <div style={{ width: '100%', height: '8rem' }}>
                            <Image
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                src={require('../images/lamp.jpeg').default}
                            />
                        </div>
                    </Col>
                    <Col md={5}>
                        <h5>IKEA Desk Lamp</h5>
                        <h6>Proposed Price</h6>
                    </Col>
                    <Col md={4} style={{ textAlign: 'right' }}>
                        <Button style={{ width: '50%' }} href='/review'>Review</Button>
                        <p className='justify-content-right mt-5'>Submitted (04/20/2021 04:20 PM)</p>
                    </Col>
                </Row>
            </Card>
            <Card className='mb-2 listing-item'>
                <Row>
                    <Col md={3}>
                        <div style={{ width: '100%', height: '8rem' }}>
                            <Image
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                src={require('../images/chair.jpeg').default}
                            />
                        </div>
                    </Col>
                    <Col md={5}>
                        <h5>IKEA Chair</h5>
                        <h6>Best offer (by price)</h6>
                    </Col>
                    <Col md={4} style={{ textAlign: 'right' }}>
                        <Button style={{ width: '50%' }} href='/review'>Review</Button>
                        <p className='justify-content-right mt-5'>Submitted (01/06/2021 01:15 PM)</p>
                    </Col>
                </Row>
            </Card>
            <Pagination className='mt-4 justify-content-end'>{items}</Pagination>
        </div>
    )
}

export default PendingListing
