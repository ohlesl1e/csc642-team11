import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react';

function Seller() {

    // 0 = Buyer Messages
    // 1 = Purchase History
    // 2 = Selling

    const [tab, set_tab] = useState(0);

    console.log(tab);


    if (tab === 0) {
        console.log( "!!!");
        return (
            <div>
                <Container>
                    <h1 style={{ marginTop: '20px' }}>My Page</h1>
                    <h6 style={{
                        fontSize: '1vw',
                        color: 'gray'
                    }}> User ID: 1234567890</h6>

                    <div class="tab">
                        <button class="tablinks" name='messages' onclick={() => set_tab(0)} style={{
                            backgroundColor: 'gold',
                            borderRadius: '10px',
                            margin: '20px 20px',
                            marginBottom: '0px',
                            width: '15%',
                            fontSize: '100%'
                        }}>Buyer Messages</button>

                        <button class="tablinks" name='history' onclick={() => set_tab(1)} style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            margin: '20px 20px',
                            marginBottom: '0px',
                            width: '15%',
                            fontSize: '100%'

                        }}>Purchase History</button>

                        <button class="tablinks" name='selling' onclick={() => set_tab(2)} style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            margin: '20px 20px',
                            marginBottom: '0px',
                            width: '15%',
                            fontSize: '100%'
                        }}>Selling</button>
                    </div>

                    <div>
                        <hr style={{ marginTop: '0px' }}></hr>
                    </div>

                    <div>

                        <button class="tablinks" onclick="open(event, 'From: User')" style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            marginTop: '5px',
                            marginBottom: '5px',
                            width: '100%',
                            textAlign: 'left'
                        }}>

                            <p style={{ textAlign: 'left', marginLeft: '10px' }}>
                                From: User

                                <span style={{ marginLeft: '100px' }} >
                                    lorem ipsum sell me your thing
                                </span>
                                <span style={{ float: 'right' }}>
                                    <b> xx/xx xx:xx AM</b>
                                </span>

                            </p>
                        </button>

                        <button class="tablinks" onclick="open(event, 'From: User')" style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            marginTop: '5px',
                            marginBottom: '5px',
                            width: '100%',
                            textAlign: 'left'
                        }}>

                            <p style={{ textAlign: 'left', marginLeft: '10px' }}>
                                From: User

                                <span style={{ marginLeft: '100px' }} >
                                    hi
                                </span>
                                <span style={{ float: 'right' }}>
                                    <b> xx/xx xx:xx AM</b>
                                </span>

                            </p>
                        </button>

                        <button class="tablinks" onclick="open(event, 'From: User')" style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            marginTop: '5px',
                            marginBottom: '5px',
                            width: '100%',
                            textAlign: 'left'
                        }}>

                            <p style={{ textAlign: 'left', marginLeft: '10px' }}>
                                From: User

                                <span style={{ marginLeft: '100px' }} >
                                    wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                                </span>
                                <span style={{ float: 'right' }}>
                                    <b> xx/xx xx:xx AM</b>
                                </span>

                            </p>
                        </button>


                    </div>

                    <div>
                        <h6 style={{ textAlign: 'right', marginTop: '10px' }}>1-3 of 3 shown</h6>
                        <hr></hr>
                    </div>
                </Container>
            </div>
        )
    }

    else if (tab === 1) {
        return (
            <div>
                <Container>
                    <h1 style={{ marginTop: '20px' }}>My Page</h1>
                    <h6 style={{
                        fontSize: '1vw',
                        color: 'gray'
                    }}> User ID: 1234567890</h6>

                    <div class="tab">
                        <button class="tablinks" onclick="open(event, 'Buyer Messages')" style={{
                            backgroundColor: 'gold',
                            borderRadius: '10px',
                            margin: '20px 20px',
                            marginBottom: '0px',
                            width: '15%',
                            fontSize: '100%'
                        }}>Buyer Messages</button>

                        <button class="tablinks" onclick="open(event, 'Purchase History')" style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            margin: '20px 20px',
                            marginBottom: '0px',
                            width: '15%',
                            fontSize: '100%'

                        }}>Purchase History</button>

                        <button class="tablinks" onclick="open(event, 'Selling')" style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            margin: '20px 20px',
                            marginBottom: '0px',
                            width: '15%',
                            fontSize: '100%'
                        }}>Selling</button>
                    </div>

                    <div>
                        <hr style={{ marginTop: '0px' }}></hr>
                    </div>

                </Container>
            </div>
        )
    }


    
}

export default Seller
