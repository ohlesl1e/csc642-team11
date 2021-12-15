import React from 'react'
import { Container, Button, Form, InputGroup, Dropdown } from 'react-bootstrap'
import { useWindowSize } from '../resize'

function Listing() {
    const height = useWindowSize()
    return (
        <div style={{ minHeight: (height - 240.2) }}>
            <Container>
                <h2 className='mt-4'>Create Listing</h2><hr />
                <Form>
                    <Form.Group className='mb-3'>
                        <h6>*Item Category and Name</h6>
                        <InputGroup>
                            <Form.Select style={{ maxWidth: '20%' }}
                                title='Category'
                            >
                                <option>---- SELECT ----</option>
                                <option>All</option>
                                <option>Textbooks</option>
                                <option>Clothing</option>
                                <option>Electronics</option>
                                <option>School Supplies</option>
                                <option>Dorm</option>
                            </Form.Select>
                            <Form.Control />
                        </InputGroup>
                    </Form.Group>


                    <Form.Group className='mb-3'>
                        <Form.Label>*Proposed Item Price</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Item Description</Form.Label>
                        <Form.Control as='textarea' />
                    </Form.Group>

                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Upload Images</Form.Label>
                        <Form.Control type='file' multiple />
                    </Form.Group>

                    <div style={{ textAlign: 'right' }}>
                        <span style={{ color: 'grey' }} className='me-2'>
                            *May take up to 24 hours for approval.
                        </span>{' '}
                        <Button href='/seller' variant='success' className='me-2'>Submit For Review</Button>
                        <Button href='/seller' variant='danger'>Cancel</Button>
                    </div>


                </Form>

            </Container>
        </div>
    )
}

export default Listing
