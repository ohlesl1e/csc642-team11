import React, { useState } from 'react'
import { Button, Pagination, ListGroup, Modal } from 'react-bootstrap'

function AllUser() {
    let active = 1
    let items = [
        <Pagination.First disabled />,
        <Pagination.Prev disabled />,
        <Pagination.Item key={1} active={1 === active}>1</Pagination.Item>,
        <Pagination.Item key={2} active={2 === active}>2</Pagination.Item>,
        <Pagination.Item key={3} active={3 === active}>3</Pagination.Item>,
        <Pagination.Item key={4} active={4 === active}>4</Pagination.Item>,
        <Pagination.Ellipsis />,
        <Pagination.Next />,
        <Pagination.Last />
    ]
    const [users, setUsers] = useState([
        { name: 'John', joined: '04/15/2018' },
        { name: 'Sophia', joined: '04/15/2018' },
        { name: 'Joe', joined: '06/14/2019' },
        { name: 'Ashley', joined: '05/25/2020' },
        { name: 'Maddie', joined: '09/05/2017' },
        { name: 'Alex', joined: '01/31/2021' },
    ])
    const [show, setShow] = useState(false)
    const [index, setIndex] = useState(0)
    return (
        <div>
            <Modal show={show}>
                <Modal.Header>Are you sure that you want to ban {users[index].name}?</Modal.Header>
                <Modal.Footer>
                    <Button onClick={() => setShow(false)} variant="outline-danger">
                        Yes
                    </Button>
                    <Button onClick={() => setShow(false)} variant="outline-primary">
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
            <h6 className='ms-4 mt-4'>Showing 6 of 69</h6>
            <ListGroup as='ol'>
                {users.map((element, i) =>
                    <ListGroup.Item as='li' key={i} className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{element.name}</div>
                            Member since: {element.joined}
                        </div>
                        <Button
                            variant='danger'
                            size='sm'
                            onClick={() => {
                                setShow(true)
                                setIndex(i)
                            }}
                        >Ban</Button>
                    </ListGroup.Item>
                )}
            </ListGroup>
            <Pagination className='mt-4 justify-content-end'>{items}</Pagination>
        </div>
    )
}

export default AllUser
