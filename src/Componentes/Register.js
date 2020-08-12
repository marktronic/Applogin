import React,{useState} from 'react';
import { Link ,Redirect} from 'react-router-dom';
export default function Register(){
  const userData = {
    fullname:"",
    email : "",
    password : "",
    confirmpass: ""
}
let errors = [];

const answStatus = 0;
  const [userValues, setUserValues] = useState(userData);
  
  const [status, setStatus] = useState(answStatus);
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
   //=====inputs validation=====>
        
   ( userValues.fullname === "" && errors.push("fullname") );

   ( userValues.fullname === "" && alert("El campo de nombre completo no puede estar vacío") );

   ( userValues.email === "" && errors.push("email") );

   ( userValues.email === "" && alert("El campo de correo electrónico no puede estar vacío") );

   (userValues.password.length < 5 && alert("Contraseña invalida. Se requiere un mínimo de 5 caracteres.") );
   
   (userValues.password.length < 5 && errors.push("longitud de la contraseña no válida") );
   
   (userValues.password !== userValues.confirmpass && errors.push("password") );

   (userValues.password !== userValues.confirmpass && alert("las contraseñas no coinciden ") );
    const data = JSON.stringify( userValues );
   
   
   
    const options = {
    method: 'POST',
    body: data,
    headers: {
        'Content-Type': 'application/json'
       
    }
 }
    
     const respuesta = await fetch("https://redis-auth.herokuapp.com/auth/register",options);

   const datos = await respuesta.json();
        if ( respuesta.status === 200 ){

          alert("Congratulations " + userValues.fullname + "! Your account has been created.");

          setStatus(200);

        } else {

            alert("Failure. Try again.");

          console.log(datos);


   }
}
return (
    <form>
    <div className="form-group">
      <label for="exampleInputEmail1">Fullname</label>
      <input type="text" className="form-control"  
      placeholder="Enter Fullname"
      name="fullname" 
      value={userValues.fullname}
      onChange={onChange}
      status={status}
      />
    </div>
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
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" 
       placeholder="Enter Password"
       name="password"
       value={userValues.password}
       onChange={onChange} />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1"> ConfirPass</label>
      <input type="password" className="form-control" 
       placeholder="Enter Password"
       name="confirmpass"
       value={userValues.confirmpass}
       onChange={onChange} />
    </div>
    <Link to="/" className="btn btn-primary ">Cancel</Link> 
    <button type="submit" onClick={onSubmit} className="btn btn-primary">Register</button>
    { status ===200 && <Redirect to="/" /> }
  </form>
  
);


}