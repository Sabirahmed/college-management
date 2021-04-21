import Header from "../header/Header";
import './College.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { FETCH_SELECTED_COLLEGE } from "../../redux/actions/actionTypes";



const College = (props)=> {
    const selectedId = props.location.selId;
     
    const dispatch = useDispatch();
    const selectedCollege = useSelector(state=>state.selectedCollege)
    
    //setSelectedId(selectedCollege.id);
    console.log ("selectedCollege",selectedCollege);

    useEffect(() => {
        
        dispatch({type:FETCH_SELECTED_COLLEGE, selectedId})
        
      }, []);
  
    const { id, name, img, des } = selectedCollege //destructuring

    return(
       
        <>
        <Header />
             {
                 selectedCollege? 
                 <> 
                    <div key={id}>
                    <h1>{`${name} Overview`}</h1>
                    <img src={img} alt="" id="img"/>
                    <p>{des}</p>
                    {/* <button>View More</button> */}
                    <button id="button" onClick={()=> {props.history.push('/applyForm')}}>Apply</button>
                    </div>
                 </> :
                 <>Please select a college!</>
             }
        </>
        
    )
}

export default College;