import React,{useState} from 'react';
import { Link,Redirect} from 'react-router-dom';

export default function Login(){
  const userData = {
    email : "",
    password : ""
}

  const [userValues, setUserValues] = useState(userData);
  
  const [status, setStatus] = useState(undefined);

  const checkToken = localStorage.getItem ( 'my-token' );
  const onChange = e =>{

    setUserValues(
      
        {
          ...userValues,
          [e.target.name] : e.target.value              
        }
      
    );
 
}
 
  const  onSubmit= async(e)=>{
    e.preventDefault();
    const data = JSON.stringify( userValues );
  // const data =  JSON.stringify({
      
  //      email:"marktronic82@gmail",//email
  //      password:"123456",//password
  //  })
   const options = {
     method: 'POST',
     body: data,
     headers: {
         'Content-Type': 'application/json'
        
     }
  }
    
    const respuesta = await fetch("https://redis-auth.herokuapp.com/auth/login",options);

    const datos = await respuesta.json();
    console.log(status);
    localStorage.setItem('my-token',datos.access_token );
    setStatus(respuesta.status);
    console.log(status);
     console.log(datos.access_token)
     console.log(datos);
     
    
    
 }
return (
  // <div className="container h-100 mt-5 text-centers">
  // <div className="row justify-content-center h-100">
  //   <div className="col-sm-6 align-self-center">
    // <div className="card justify-content-center bg-light border border-primary shadow-lg p-3 mb-5 bg-white rounded">
         
     <form>
     <h2 textcolor="red">Login</h2>
    <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" 
     placeholder="Enter email"
     name="email"
     value={userValues.email}
     onChange={onChange}
     status = { status }
     
     />
     </div>
     <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" 
      className="form-control" 
      name="password" 
      placeholder="Password"
      value={userValues.password}
      onChange={onChange}
      status = { status }
      />
    </div>
   <div>
    <button type="submit" onClick={onSubmit} className="btn btn-primary">Login</button>
     <Link to="/register" className="btn btn-primary ">Register</Link> 
     { checkToken !== null && <Redirect to="/welcome" /> }
    </div>
    
  </form>
  // </div>
  // </div>
  // </div>
  // </div>
);


}
