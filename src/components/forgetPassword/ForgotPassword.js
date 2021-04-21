
import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import validator from 'validator';


const ForgotPassword = (props) => {
    const emailRef = useRef();
    const [error, setError] = useState('');
    


    let val = '';

    const validateInput = (email) => {
        if(validator.isEmail(val)){
            return true
        }else{
            setError('Please enter a valid email-id')
            return false
        }
    }

    const handleSubmit = (e) =>{
       
        e.preventDefault();
        if(validateInput(val) == true) {
            alert('Reset password link send to your email. Please check your inbox for further instructions!');
            props.history.push("/login");
        }
        
       
    }

    const validateEmail = (e) => {
        val = emailRef.current.value;
        
    }

    return(
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Reset Password</h2>
                
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required 
                        onChange={validateEmail}
                        autoComplete="off"
                        placeholder="Enter your email"
                        />
                    </Form.Group>

                   
                    <Button onClick={handleSubmit} className='w-100' >Reset Password</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to='/login'>login</Link>
                 </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account? <Link to='/register'>Sign Up</Link>
        </div>
        </>
    )
}

export default ForgotPassword;