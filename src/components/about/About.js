import Header from "../header/Header";
import './About.css';
import pic from '../../assets/images/abt.jpeg';
const About = ()=> {

    return(
        <>
        <Header />
        <h1>Sabir Ahmed</h1>
        <div> <img src={pic} alt="" id="pic"/>
         </div> 
         <h3>Technical Lead at HCL Technology:</h3>
        <h4>Web/Mobile developer with 10 years of experience of  well-rounded in object-oriented and user-entered design, seeks position with a top technology firm.</h4>

        </>
    )
}

export default About;
