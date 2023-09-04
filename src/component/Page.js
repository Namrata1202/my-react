import { useLoaderData } from "react-router";
import './AllBox.css';

import { redirect } from "react-router";

import Boxx from "./Boxx";


import './AllBox.css';





const Page=()=>{

    const items = useLoaderData()
    console.log(items);
    

    return(

        <div>
            
             <div   className="shop-section" >
             {items.map((item)=>(
              <div  className="box">
                <Boxx  key={item.id}  id={item.id} title={item.title} author={item.author}  bookC ={item.book_categories__name} />
               </div>
            ))}
             </div>
          
     
           
</div>
    )
}


export default Page;



export async function  loader (){
  
    const token = localStorage.getItem('token', null)
    console.log("my value");
    console.log(token);
    if( token  === null){
      return  redirect('/Login')
    }


else{
    console.log("hello world");
  const headers = {
    'Authorization': `Token ` + token,
    'Content-Type': 'application/json', // Set content type if needed
  };
  const response = await fetch('http://127.0.0.1:8000/manager/api/mybook/', {method: 'GET', headers: headers});
    

  if (!response.ok) {
    console.log("not ok");
  }else{
    const resdata = await  response.json();
    return resdata['detail'];
  }
    
}
}