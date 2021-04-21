import Header from "../header/Header";
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FETCH_COLLEGE_DATA } from "../../redux/actions/actionTypes";
import './Home.css';

const Home = (props) => {
    const dispatch = useDispatch();
    const collegeList = useSelector(state=>state.collegeList)

  console.log("collegeList", collegeList);

  // Similar to componentDidMount and componentDidUpdate:
  
    useEffect(() => {
      dispatch({type:FETCH_COLLEGE_DATA})
      
    }, []);
  
    const renderCollegeHeader = ()=> {
      let header = Object.keys(collegeList[0])
      return header.map((key, index) => {
        if (index < 5) {
          return <th key={index}>{key.toUpperCase()}</th>
        }
         
      })
   }


   const renderCollegeData = ()=> {
      return collegeList.map((college, index) => {
          const { id, name, location, area, city } = college //destructuring
          return (
            <tr key={id} >
                <td>{id}</td>
                <td onClick={()=>{props.history.push({
                    pathname: '/college',
                    selId: id 
                  })}}>
                <a href="#" >{name}</a></td>
                <td>{location}</td>
                <td>{area}</td>
                <td>{city}</td>
            </tr>
          )
      })
   }


    return(
        <>
         <Header />
        
         
         <div className="image"><img src="https://img.collegedekhocdn.com/media/img/news/List_of_Colleges_in_DU_1.png?tr=h-310,w-615" alt=""/>
         
         </div>
         <h1>List of Delhi University Colleges:{collegeList?.length}</h1>

          {
             collegeList.length > 0 ?
             <>
                <table id='colleges'>
                  <tbody>
                      <tr>{renderCollegeHeader()}</tr>
                      {renderCollegeData()}
                  </tbody>
                </table>
                
             </>:
             <h3>No College Found!</h3>

          }
            
       </>
    )
}

export default Home;