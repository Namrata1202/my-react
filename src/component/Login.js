import  './Login.css';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form } from 'react-router-dom';
const Login =()=>{
    return(
      
<div>

<Form   method='post'  className="containe">

    <label  >Email</label>
    <input  placeholder="enter your name" required  type="email" name="email"  />

    

    <label >Password</label>
    <input placeholder="enter yout passsword"  required    type="password"  name="password"  />


  <Link  to='/register'><h4>not registered</h4></Link>

    <button  type="submit">Submit</button>


</Form>
</div>

    )
}


export default Login;

export async function action({request,params}){
    const data =  await request.formData();
    const formdata ={
        username:data.get('email'),
        password:data.get('password'),
        
    } 

    console.log(formdata);
    const response =await fetch('http://127.0.0.1:8000/manager/api/loginUser/',{
       method:'POST',
       headers:{
        'Content-Type':'application/json',
       },
       body:JSON.stringify(formdata)
    });
    if(!response.ok){
        console.log("not ok")
    }
    else {
        const resdata = await response.json();
        console.log(resdata['data']['token']);
        localStorage.setItem('token', resdata['data']['token'])
    }

    
    return redirect('/')


}