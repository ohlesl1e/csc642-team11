import React from 'react'
import { Container, Tabs, Tab, Button, Row, Col } from 'react-bootstrap'
import History from './History'
import Info from './Info'

function Account() {
    return (
        <div>
            <Container>
                <Row className='mt-4'>
                    <Col>
                        <h2>Account</h2>
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                        <span className='me-2'>Create New Listing</span>
                        <Button href='/csc642-team11-gatorbuy/listing' variant='warning' style={{ paddingTop: '3px' }}>+</Button>
                    </Col>
                </Row>
                <div>
                    <text style={{ color: 'gray', fontSize: '12px' }}>User ID: 1234567890</text>
                </div>

                <Tabs id="mypage" style={{ marginTop: '20px', marginBottom: '20px' }}
                >
                    <Tab eventKey="information" title="Information" selected='true'>
                        <Info />
                    </Tab>
                    <Tab eventKey="history" title="Purchase History">
                        <History />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default Account
