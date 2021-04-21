import './applyForm.css';
import {useSelector} from 'react-redux';
import Header from '../header/Header';

const ApplyForm = (props) => {
        const selectedCollege = useSelector(state=>state.selectedCollege);
        const {name} = selectedCollege //destructuring


        const handleSubmit = (e) =>{
            e.preventDefault();
           //alert(`You have successfully applied for the college ${name}`),
           // props.history.push('/home')

           // if the ok button is clicked, result will be true (boolean)
            const msg =  window.confirm(`Are you sure, wanna apply for the college ${name} ?`, )
            if ( msg ) {
                alert(`You have successfully applied for the college ${name}`)
                props.history.push('/home')
            } else {
                console.log('cancelled')
            }
        }
            return (
                        <>
                        <Header />
                        <h2>{name} Apply Form </h2>
                
                            <form onSubmit={handleSubmit}>
                        
                                <div className="container">
                                    <label htmlFor="uname"><b>Username</b></label>
                                    <input type="text" placeholder="Enter Name" name="uname" required />
                
                                    <label htmlFor="email"><b>Email</b></label>
                                    <input type="text" placeholder="Enter Email" name="email" required />
                
                                    <label htmlFor="contact"><b>Mobile</b></label>
                                    <input type="number" placeholder="Enter Mobile" name="contact" required />
                
                                    <label htmlFor="HSC"><b>HSC Marks</b></label>
                                    <input type="number" step = 'any' placeholder="Enter HSC Mark" name="hsc" required />
                
                
                                    <label htmlFor="Graduate"><b>Graduation Marks</b></label>
                                    <input type="number" step = 'any' placeholder="Enter Graduation Mark" name="graduate" required />
                
                                    <button type="submit">Apply</button>
                                    
                                </div>
                
                                
                            </form>
                        </>
            );
            
        
  
   
}

export default ApplyForm;
