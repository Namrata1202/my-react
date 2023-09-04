import { useState } from "react";
import { Form,redirect } from "react-router-dom";
import  './Register.css';



const Register=()=>{

//   const[enteredname,setname]=useState('');
//   const[enteredemail,setemail]= useState('');
//   const[enteredpasssword,setpassword]=useState('');


//     const nameHandler=(event)=>{
//         setname(event.target.value);
//     }
    
//     const emailhandler=(event)=>{
//         setemail(event.target.value);
//     }
//     const passwordhandler=(event)=>{
//        setpassword(event.target.value);
//     }


//     const submitHandler=(event)=>{
       
//        event.preventDefault();

//        const data ={
//         name:enteredname,
//         email:enteredemail,
//         password:enteredpasssword,
//         id: Math.random().toString(),
//        }
//        console.log(data);
//        setname('');
//        setemail('');
//        setpassword('');

//     }


    return(
        <div>

        <Form   method='post'  className="container">

            <label  >Name</label>
            <input  placeholder="enter your name" required  type="text" name="name"  />

            <label  >Email</label>
            <input  placeholder="enter your emaail" required name="email"  type="email"    />

            <label >Password</label>
            <input placeholder="enter yout passsword"  required  type="password"  name="password"  />

            <label >Address</label>
            <input placeholder="enter yout passsword"  required type="text"  name="address"  />

            <label >College</label>
            <input placeholder="enter yout passsword"  required  type="text"  name="college"  />
            
            <label >Phone</label>
            <input placeholder="enter yout passsword"   required type="text"  name="phone"  />

            <button  type="submit">Submit</button>


        </Form>
        </div>
        
    )
}

export default  Register;

export async function action({request,params}){
    const data =  await request.formData();
    const formdata ={
        name:data.get('name'),
        email:data.get('email'),
        password:data.get('password'),
        address:data.get("address"),
        college:data.get("college"),
        phone:data.get("phone")
    } 

    console.log(formdata);
    const response =await fetch('http://127.0.0.1:8000/manager/api/bookUser/',{
       method:'POST',
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify(formdata)

    });
    console.log(response);
    if(!response.ok){

        console.log("not ok")
    }

    
    return redirect('/login')


}