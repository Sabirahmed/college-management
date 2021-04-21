import React, { Suspense } from 'react';
//routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Spinner from './components/shared/spinner/Spinner';
import Register from './components/register/Register';
import ForgotPassword from './components/forgetPassword/ForgotPassword';
import { Container } from "react-bootstrap";
// const  Login = React.lazy(()=> import('./components/login/Login'));
// const Home = React.lazy(()=> import('./components/home/Home'));
// const Contact = React.lazy(()=> import('./components/contact/Contact'));
// const About = React.lazy(()=> import('./components/about/About'));
// const College = React.lazy(()=> import('./components/college/College'));
// const ApplyForm = React.lazy(()=> import('./components/applyForm/applyForm'));

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import College from './components/college/College';
import ApplyForm from './components/applyForm/applyForm';
import Login from './components/login/Login';


function App() {
  return (
    
      <Container className='d-flex align-items-center justify-corner-center'
    style={{minHeight:'100vh'}}>
       <div className='w-100' >
          <Suspense fallback={<Spinner /> }>
        
                <BrowserRouter>
                
                      <Switch>
                          <Route exact path="/" component={Login} />
                          <Route exact path="/home" component={Home} />
                          <Route exact path="/about" component={About} />
                          <Route exact path="/contact" component={Contact} />
                          <Route exact path="/college" component={College} />
                          <Route path='/applyForm' component={ApplyForm}  />
                          <Route exact path="/register" component={Register} />
                          <Route exact path="/forgot-password" component={ForgotPassword} />
                          <Route exact path="*" component={Login} />
                      </Switch>
                  
                
                  </BrowserRouter>
            </Suspense>
      </div>
      </Container>
     
  );
}

export default App;
