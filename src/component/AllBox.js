import { useLoaderData } from "react-router";
import { redirect } from "react-router";

import Box from "./Box";


import './AllBox.css';



const AllBox =()=>{
const items = useLoaderData()
console.log(items);
const token = localStorage.getItem('token', null)
console.log(token);


    return(
        <div>
            
             <div   className="shop-section" >
             {items.map((item)=>(
              <div  className="box">
                <Box    id={item.pk} title={item.title} author={item.author}  bookC ={item.book_categories__name} />
               </div>
            ))}
             </div>
          
     
           
</div>
    )
}


export default AllBox;


export async function  loader (){
  
    const token = localStorage.getItem('token', null)
    console.log("my value");
    console.log(token);
    if( token  === null){
      return  redirect('/Login')
    }


else{

  const headers = {
    'Authorization': `Token ` + token,
    'Content-Type': 'application/json', // Set content type if needed
  };
  const response = await fetch('http://127.0.0.1:8000/manager/api/books/', {method: 'GET', headers: headers});
    

  if (!response.ok) {
    console.log("not ok");
  }else{
    const resdata = await  response.json();
    return resdata['detail'];
  }
    
}
}




  // }

    // {method: 'GET', headers: headers});
    // fetch('http://127.0.0.1:8000/manager/api/books/', {method: 'GET', headers: headers}).then(response => {
    //   console.log("res");
    //   console.log(response);
    //   if (!response.ok) {
    //   // Handle error responses
    //     return response.text().then(errorText => {
    //     throw new Error(`HTTP error! Status: ${response.status}\nError: ${errorText}`);
    //   });
    // }
    // return response.json(); // Parse JSON for successful responses
    // }).then(data => {
    //   // Handle the response data for successful requests
      
    //   console.log("data");
    //   console.log(data.detail);
    //   return data['detail'];
    // }).catch(error => {
    //   // Handle errors here
    //   console.error(error);
    // })
