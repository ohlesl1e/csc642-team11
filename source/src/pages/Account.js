import React from 'react'
import { Container, Tabs, Tab, Button } from 'react-bootstrap'
import History from './History'
import Info from './Info'

function Account() {
    return (
        <div>
            <Container>
                <form className="Form">
                    <div>
                        <h2 style={{ marginTop: '20px', marginBottom: '-30px' }}>Account</h2>
                        <text style={{ marginLeft: '80%', marginRight: '15px' }}><b>Create New Listing</b></text>
                        <Button href='/listing' variant='warning'>+</Button>
                    </div>

                    <div>
                        <text style={{ color: 'gray', fontSize: '12px' }}>User ID: 1234567890</text>
                    </div>

                    <div>
                        <Tabs id="mypage" style={{ marginTop: '20px', marginBottom: '20px' }}
                        >
                            <Tab eventKey="information" title="Information" selected='true'>
                                <Info />
                            </Tab>
                            <Tab eventKey="history" title="Purchase History">
                                <History />
                            </Tab>
                        </Tabs>
                    </div>

                </form>

            </Container>
        </div>
    )
}

export default Account
