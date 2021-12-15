import React from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import { useWindowSize } from '../resize'
import AllListing from './AllListing'
import AllUser from './AllUser'
import PendingListing from './PendingListing'

function Admin() {
    const height = useWindowSize()
    return (
        <div style={{ minHeight: (height - 240.2) }}>
            <Container>
                <h2 className='mt-4'>Admin Dashboard</h2>
                <Tabs defaultActiveKey='pending listing'>
                    <Tab eventKey='pending listing' title='Pending listings'>
                        <PendingListing />
                    </Tab>
                    <Tab eventKey='all listing' title='All listings'>
                        <AllListing />
                    </Tab>
                    <Tab eventKey='all users' title='All users'>
                        <AllUser />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default Admin
