import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Login({ role }) {
    return (
        <div>
            <Container>
                {
                    role === 'admin' ?
                        <h3 className="text-center" style={{ fontWeight: 'bold', marginTop: '30px', color: 'purple' }}>Admin Login</h3>
                        : <h3 className="text-center" style={{ fontWeight: 'bold', marginTop: '30px', color: 'purple' }}>Login to GatorBuy</h3>
                }

                <form action="/Account" style={{ width: '600px', margin: 'auto', fontWeight: 'bold', fontSize: '20px' }}>
                    <div className="form-group">
                        <label for="email" style={{ marginTop: '20px', marginBottom: '10px' }}>*SF State Email</label>
                        <input type="email" name="email" id="emial" className="form-control" placeholder="your@mail.sfsu.edu OR your@sfsu.edu" required
                            style={{ border: '2px solid black', borderRadius: '20px' }} />
                    </div>
                    <div className="form-group">
                        <label for="password" style={{ marginTop: '20px', marginBottom: '10px' }}>*Password</label>
                        <input type="password" name="password" id="password" className="form-control" placeholder="your password" required
                            maxLength="16" style={{ border: '2px solid black', borderRadius: '20px' }} />
                    </div>
                    {
                        role === 'admin' ?
                            <Button
                                href='/csc642-team11-gatorbuy/admindashboard'
                                variant='success'
                                id="cancel-button"
                                style={{
                                    width: '300px',
                                    height: '70px',
                                    marginTop: '40px',
                                    marginLeft: '150px',
                                    paddingTop: '1rem'
                                }}>
                                Login
                            </Button> :
                            <Button
                                href='/csc642-team11-gatorbuy/account'
                                variant='success'
                                id="cancel-button"
                                style={{ width: '300px', height: '70px', marginTop: '40px', marginLeft: '150px' }}>
                                Login
                            </Button>
                    }
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <a href="http://www.sfsu.edu">Forget Password?</a><br />
                        <label style={{ marginTop: '10px', marginBottom: '10px' }}>OR</label><br />
                        <a href="/csc642-team11-gatorbuy/Registration">Create your account</a>
                    </div>
                </form>

            </Container>
        </div >
    )
}


export default Login