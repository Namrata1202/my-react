import { Link } from 'react-router-dom';
import componentsImage from '../assets/book.jpg';
import './Box.css';
import React, { useState } from 'react';
import axios from 'axios';





const Box =(props)=>{
    
    const [responseMessage, setResponseMessage] = useState('');

    const clikhandller =  async ()=>{
        const d = props.id;
        console.log(d);

        // try {
        //     // Define the data you want to send in the POST request body
        //     const postData = {
        //       itemId:  props.id, // Pass the itemId from props
        //       // otherData: 'value',
        //     };
        //     const token = localStorage.getItem('token', null)
        //     const headers = {
        //         'Authorization': `Token ` + token,
        //         'Content-Type': 'application/json', // Set content type if needed
        //       };
      
        //     // Make a POST request to your API endpoint
        //     const response = await axios.post('http://127.0.0.1:8000/manager/api/mybook/',  {method: 'GET', headers: headers, pk: postData} );
      
        //     // Handle the response here (e.g., update state)
        //     setResponse(response.data);
        //   } catch (error) {
        //     console.error('Error:', error);
        //   }


        try {


          const postData = {
                  itemId:  props.id, // Pass the itemId from props
                  // otherData: 'value',
                };
                const token = localStorage.getItem('token', null)
                const headers = {
                    'Authorization': `Token ` + token,
                    'Content-Type': 'application/json', // Set content type if needed
                  };

          const response = await fetch('http://127.0.0.1:8000/manager/api/mybook/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               headers,  postData,
            }),
          });
    
          if (response.ok) {
            const data = await response.json();
            setResponseMessage(data.message);
          } else {
            console.error('Request failed with status:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }







    }


    return(
        <div >
            
        <div className="box-content">
            <h2>{props.title}</h2>

           
            
            <img className="box-img" src={componentsImage} alt="my" />
            <h3>author-   {props.author}</h3>
            <h4> book-Categories  {props.bookC}</h4>
            <p>{props.id}</p>
            <button     onClick={clikhandller}>Add</button>
            {responseMessage && <div>{responseMessage}</div>}
            {/* {response && <div>Response: {response}</div>} */}
            
            
        {/* <Link to={`/${props.id}`}><p>see more</p></Link> */}
        
        
        </div>
        </div>


    )
}


export default Box;