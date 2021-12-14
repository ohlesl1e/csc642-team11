import React from 'react'
import { Container, Tabs, Tab, Row, Col, Button } from 'react-bootstrap'
import Messages from './Messages';
import SellingList from './SellingList';
import { useWindowSize } from '../resize';


function Seller() {
    const height = useWindowSize()


    return (
        <div style={{ minHeight: (height - 240.2) }}>
            <Container>
                <Row className='mt-4'>
                    <Col>
                        <h2>Selling Page</h2>
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                        <span className='me-2'>Create New Listing</span>
                        <Button href='/listing' variant='warning' style={{ paddingTop: '3px' }}>+</Button>
                    </Col>
                </Row>

                <div>
                    <text style={{ color: 'gray', fontSize: '12px' }}>User ID: 1234567890</text>
                </div>

                <Tabs
                    id="mypage"
                    defaultActiveKey='messages'
                    style={{ marginTop: '20px', marginBottom: '20px' }}
                >
                    <Tab eventKey="messages" title="Buyer Messages">
                        <Messages />
                    </Tab>
                    <Tab eventKey="selling" title="Selling" >
                        <SellingList />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}





export default Seller
