
import {Form, Button, Card, Alert} from 'react-bootstrap';
import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator';


const Login = (props) => {

  const emailRef = useRef();
  const passwordRef = useRef()
  const [error, setError] = useState(''); 
  let email = '' ;
  let pass = '';

    const handleLogin = (e)=> {
      console.log(email);
        e.preventDefault();
          if(validateInput(email, pass) == true) {
              props.history.push("/home");
          }
        
    }

    const validateInput = (email, pass) => {
        if((validator.isEmail(email)) && (validator.isStrongPassword(pass))){
            return true
        }else{
            setError('Please enter a valid email-id or password')
            return false
        }
    }

    const validateCredentials = () => {
      email = emailRef.current.value;
      pass = passwordRef.current.value
    }


    return(
      <>
      <Card>
          <Card.Body className='center'>
              <h2 className='text-center mb-4'>Login</h2>
              
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form>
                  <Form.Group id='email'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='email' ref={emailRef} required name='email' onChange={validateCredentials}/>
                  </Form.Group>

                  <Form.Group id='password'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type='password' ref={passwordRef} required name='password' onChange={validateCredentials}/>
                  </Form.Group>

                 
                  <Button onClick={handleLogin} className='w-100'>Login</Button>
              </Form>
              <div className="w-100 text-center mt-3">
                  <Link to='/forgot-password'>Forgot Password</Link>
               </div>
          </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
          Need an account? <Link to='/register'>Sign Up</Link>
      </div>
      </>
  )
}

export default Login;
