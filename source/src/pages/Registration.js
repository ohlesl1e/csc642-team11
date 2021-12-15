import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useWindowSize } from '../resize';

function Registration() {
    const height = useWindowSize()
    return (
        <div style={{ minHeight: (height - 240.2) }} className='mt-4'>
            <Container>
                <h3 class="text-center" style={{ fontWeight: 'bold', color: 'purple' }}>Create a New Account</h3>
                <h4 style={{ color: 'blue', textAlign: 'right' }}>* are mandatory</h4>
                <form action="/login" style={{ width: '600px', margin: 'auto', fontWeight: 'bold', fontSize: '20px' }}>
                    <div class="form-group">
                        <label for="firstname" style={{ marginTop: '20px', marginBottom: '10px' }}>*Firstname</label>
                        <input type="text" name="firstname" id="firstname" class="form-control" placeholder="John" required
                            maxlength="40" style={{ border: '2px solid black', borderRadius: '20px' }} />
                    </div>
                    <div class="form-group">
                        <label for="lastname" style={{ marginTop: '20px', marginBottom: '10px' }}>*Lastname</label>
                        <input type="text" name="lastname" id="lastname" class="form-control" placeholder="Davis" required
                            maxlength="40" style={{ border: '2px solid black', borderRadius: '20px' }} />
                    </div>
                    <div class="form-group">
                        <label for="email" style={{ marginTop: '20px', marginBottom: '10px' }}>*SF State Email</label>
                        <input type="email" name="email" id="emial" class="form-control" placeholder="your@mail.sfsu.edu OR your@sfsu.edu" required
                            style={{ border: '2px solid black', borderRadius: '20px' }} />
                    </div>
                    <div class="form-group">
                        <label for="password" style={{ marginTop: '20px', marginBottom: '10px' }}>*Password</label>
                        <input type="password" name="password" id="password" class="form-control" placeholder="your password" required
                            maxlength="16" style={{ border: '2px solid black', borderRadius: '20px' }} />
                    </div>
                    <div class="form-group">
                        <label for="phone" style={{ marginTop: '20px', marginBottom: '10px' }}>*Phone (format: xxxxxxxxxx)</label>
                        <input type="tel" name="phone" id="phone" class="form-control" placeholder="1234567890" pattern="^\d{10}$" required
                            style={{ border: '2px solid black', borderRadius: '20px' }} />
                    </div>
                    <div class="form-check" id="agreeterms" style={{ marginTop: '20px', marginBottom: '40px' }}>
                        <input type="checkbox" class="form-check-input" id="terms" required />
                        <label class="form-check-label" for="terms">* I have read and agree to the <a href="https://youtu.be/dQw4w9WgXcQ" target='_blank'>terms and conditions</a></label>
                    </div>
                    <div>
                        <Link to="/"><button class="btn btn-danger btn-lg" id="cancel-button" style={{ marginRight: '20px', width: '275px' }}>Cancel</button></Link>
                        <button type="submit" class="btn btn-success btn-lg" id="success-button" style={{ width: '275px' }} href="javascript:history.back()">Submit</button>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <label>Already had an account?</label><br />
                        <a href="/login">Sign in here!</a>
                    </div>
                </form>
            </Container>
        </div >
    )
}


export default Registration
