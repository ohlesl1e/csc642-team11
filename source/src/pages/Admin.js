import React from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import PendingListing from './PendingListing'

function Admin() {
    return (
        <div>
            <Container>
                <h2 className='mt-4'>Admin Dashboard</h2>
                <Tabs defaultActiveKey='pending listing'>
                    <Tab eventKey='pending listing' title='Pending listings'>
                        <PendingListing />
                    </Tab>
                    <Tab eventKey='all listing' title='All listings'></Tab>
                    <Tab eventKey='all users' title='All users'></Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default Admin
