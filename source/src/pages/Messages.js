import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function Messages() {
    let messages = [
        { user: 'Alice', text: 'how do i use this', time: '11/11 11:11 AM' },
        { user: 'Bob', text: 'do you take bitcoin?', time: '12/32 4:20 PM' },
    ]
    return (
        <div style={{ minHeight: '50vh' }}>
            {messages.map((element, key) =>
                <Card className='mb-2 listing-item'>
                    <Row>
                        <Col md={3}><b>From: {element.user}</b></Col>
                        <Col md={6}>{element.text}</Col>
                        <Col md={3} style={{ textAlign: 'right' }}>{element.time}</Col>
                    </Row>
                </Card>
            )}
        </div>
    )
}

export default Messages
