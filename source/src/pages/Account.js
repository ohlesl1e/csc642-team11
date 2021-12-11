import React from 'react'
import { Container } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'

function Account() {
    return (
        <div>
            <Container>
                <form className="Form">
                    <div>
                        <h1 style={{ marginTop: '20px', marginBottom: '-30px' }}>Account</h1>
                        <text style={{ marginLeft: '80%', marginRight: '15px' }}><b>Create New Listing</b></text>
                        <button style={{ fontSize: '20px', borderRadius: '100%', backgroundColor: 'gold', width: '40px', height: '40px' }}>+</button>
                    </div>

                    <div>
                        <text style={{ color: 'gray', fontSize: '12px' }}>User ID: 1234567890</text>
                    </div>

                    <div>
                        <Tabs
                            id="mypage"

                            style={{ marginTop: '20px', marginBottom: '20px' }}
                        >
                            <Tabs.Tab eventKey="information" title="Information" selected='true'>
                                <h6>First Name</h6>

                                <input style={{ borderRadius: '10px', width: '35%', height: '40px' }}>
                                </input>

                                <h6 style={{ marginTop: '20px'}}>Last Name</h6>

                                <input style={{ borderRadius: '10px', width: '30%', height: '40px' }}>
                                </input>

                                <h6 style={{ marginTop: '20px' }}>Email</h6>

                                <input style={{ borderRadius: '10px', width: '40%', height: '40px' }}>
                                </input>

                                <h6 style={{ marginTop: '20px' }}>Phone Number</h6>

                                <input style={{ borderRadius: '10px', width: '35%', height: '40px', marginBottom: '20px' }}>
                                </input>

                                <hr></hr>

                                <Container>
                                    <button style={{
                                        backgroundColor: '#3CA72A',
                                        color: 'white',
                                        marginLeft: '80%',
                                        width: '20%',
                                        textJustify: 'right',
                                        borderRadius: '10px',
                                        borderColor: 'transparent'
                                    }}>Save Changes</button>
                                </Container>
                            </Tabs.Tab>

                            </Tabs>
                        </div>

                </form>

            </Container>
        </div>
    )
}

export default Account
