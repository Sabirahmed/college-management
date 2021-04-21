
import Header from "../header/Header"
import './Contact.css';

const Contact = ()=> {

    return(
        <>
        <Header />
        <h3>Contact Us</h3>

            <div className="container">
                    <form action="#">
                        <label htmlFor="fname">Name</label>
                        <input type="text" id="fname" name="name" placeholder="Your name.." />

                        <label htmlFor="lname">Email</label>
                        <input type="text" id="email" name="email" placeholder="Your email .." />

                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                    
            </div>
            <p id="p">Email: <a href="mailto:someone@yoursite.com">sabir.ahmed59@gmail.com</a></p>
            <p id="p">Mobile: 8700692949</p>

        </>
    )
}

export default Contact;
