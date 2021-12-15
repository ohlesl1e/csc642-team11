import React from 'react'
import { Card, Row, Col, Image, Badge } from 'react-bootstrap'

function SellingList() {
    let listings = [
        { title: 'Used Chair', price: 'Best Offer - $30', status: 'Approved', time: '11/12 11:21 PM', image: 'chair.jpeg' },
        { title: 'Free Time', price: 'Proposed Price - $12', status: 'Denied', time: '12/14 08:41 AM', image: 'clock.jpeg' },
    ]
    return (
        <div>
            {listings.map((element, key) =>
                <Card className='mb-2 listing-item'>
                    <Row>
                        <Col md={3}>
                            <div style={{ width: '100%', height: '8rem' }}>
                                <Image
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    src={require(`../images/${element.image}`).default}
                                />
                            </div>
                        </Col>
                        <Col md={5}>
                            <h5>{element.title}</h5>
                            <h6>{element.price}</h6>
                        </Col>
                        <Col md={4} style={{ textAlign: 'right' }}>
                            {element.status === 'Approved' &&
                                <div>
                                    <h6>Approved/Live <Badge bg='success' pill style={{ color: '#198754' }}>+</Badge></h6>
                                    <p className='justify-content-right mt-5'>Listing published ({element.time})</p>
                                </div>
                            }
                            {element.status === 'Denied' &&
                                <div>
                                    <h6>Denied <Badge bg='danger' pill style={{ color: '#DC3545' }}>+</Badge></h6>
                                    <p className='justify-content-right mt-5'>Listing reviewed ({element.time})</p>
                                </div>
                            }
                        </Col>
                    </Row>
                </Card>
            )}
        </div>
    )
}

export default SellingList
