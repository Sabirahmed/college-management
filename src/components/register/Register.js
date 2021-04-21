
import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import validator from 'validator';

const Register = (props)=> {
    const emailRef = useRef();
    const nameRef = useRef();
    const mobRef = useRef();
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    let name = '';
    let email = '';
    let pass = '';
    let cnfPass = '';
    let mob = '';

    
    const [error, setError] = useState('');

    const validateInputFields = (email, pass, mob, name) =>{
        console.log(name)
        if(validator.isEmail(email) && validator.isStrongPassword(pass) && (name !== '') &&(mob.length==10)){
            return true
        }
    }

   const handleSubmit = (e) => {
       
        e.preventDefault();

        if (pass !== cnfPass) {
            return setError('Password does not match');
        }else if (validateInputFields(email, pass, mob, name) == true)   {
            alert('You have successfully registered!')
            props.history.push("/home");

        }else {
            return setError('Please enter valid input only');
        }
        
        // if(passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return setError('Password does not match');
        // }
       
    }

    const validateRegistration = () => {
        name = nameRef.current.value;
        email = emailRef.current.value;
        pass = passwordRef.current.value;
        mob = mobRef.current.value;
        cnfPass = passwordConfirmRef.current.value;


    }

    return(
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form>

                    <Form.Group id='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' ref={nameRef} required onChange={validateRegistration}/>
                    </Form.Group>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required onChange={validateRegistration} />
                    </Form.Group>

                    <Form.Group id='mobile'>
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type='number' ref={mobRef} required onChange={validateRegistration} />
                    </Form.Group>

                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required onChange={validateRegistration} />
                    </Form.Group>

                    <Form.Group id='password-confirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required onChange={validateRegistration} />
                    </Form.Group>
                    <Button onClick={handleSubmit} className='w-100'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? <Link to='/login'>Log In</Link>
        </div>
        </>
    )

}

export default Register;