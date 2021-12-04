import React from 'react'
import { Container } from 'react-bootstrap'

function Listing() {
    return (
        <div>
            <Container>
                <form className="Form">
                    <div>
                        <h1 style={{ marginTop: '20px', marginBottom: '-30px' }}>Create Listing</h1>
                        <button style={{ backgroundColor: 'transparent', borderColor: 'transparent', color: 'red', marginLeft: '90%', borderRadius: '10px' }}>Cancel</button>
                    </div>


                    <hr></hr>


                    <div>
                        <h6>*Item Category and Name</h6>
                    </div>
                    <div>
                        <select style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', height: '30px', borderWidth: '2px', borderColor: 'black', marginRight: '-3px' }}>
                            <option>---- SELECT ----</option>
                            <option>All</option>
                            <option>Textbooks</option>
                            <option>Clothing</option>
                            <option>Electronics</option>
                            <option>School Supplies</option>
                            <option>Dorm</option>
                        </select>
                        <input style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px', width: '30%' }}>
                        </input>
                    </div>


                    <div>
                        <h6 style={{ marginTop: '30px' }}>*Proposed Item Price</h6>
                        <input style={{ borderRadius: '10px', width: '30%' }} placeholder='$'>
                        </input>
                    </div>

                    <div>
                        <h6 style={{ marginTop: '30px' }}>Item Description (optional)</h6>
                        <input style={{ borderRadius: '10px', width: '90%', height: '80px' }}>
                        </input>
                    </div>

                    <div>
                        <h6 style={{ marginTop: '30px' }}>*Upload an image</h6>
                        <input type='file'>
                        </input>
                    </div>

                    <hr></hr>

                    <div>
                        <Container>
                            <h6 style={{
                                marginTop: '20px',
                                marginBottom: '-25px',
                                fontSize: '12px',
                                marginLeft: '58%'
                            }}>*May take up to 24 hours for approval.</h6>

                            <button style={{
                                backgroundColor: '#3CA72A',
                                color: 'white',
                                marginLeft: '80%',
                                width: '20%',
                                textJustify: 'right',
                                borderRadius: '10px',
                                borderColor: 'transparent'
                            }}>Submit For Review</button>
                        </Container>
                    </div>


                </form>

            </Container>
        </div>
    )
}

export default Listing
