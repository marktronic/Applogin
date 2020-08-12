import React,{useState} from 'react';
import { Link ,Redirect} from 'react-router-dom'; 
 function Welcome(){
    const aboutContent = "";

    const [about, setAbout] = useState(aboutContent);
    
    const checkToken = localStorage.getItem ( 'my-token' );
     const about =async()=>{
        const optionsLogout = {
            method: 'POST',
            headers: 
            {
               'Authorization': 'Bearer ' + checkToken
            }
        }
        
        const respuesta = await fetch("https://redis-auth.herokuapp.com/auth/logout", optionsLogout );
        
        const datos = await respuesta.json();
        console.log();
     
     }
    //  const logout=()=>{
   
    //    if (checkToken ===null){
    //     localStorage.removeItem('my-token')
    //     alert("hola");

    //      }
    //  }
    return (
     <div>
    <h1>Welcome</h1>
    <h2>Gracias a todos y cada uno de ustedes por estar aquí con nosotros hoy. Estamos muy contentos de poder dar la bienvenida a aquellos de ustedes que han estado con nosotros durante mucho tiempo, así como a aquellos que son nuevos en (grupo / comunidad / asociación, etc.)

Hoy se celebra nuestra reunión anual de grupo y estamos orgullosos de poder organizarla hoy aquí, en este maravilloso lugar, con todos ustedes.

Antes de comenzar, me gustaría expresar mi sincero agradecimiento a todos los que generosamente nos ayudaron a que este evento se uniera para convertirse en un éxito. (Incluye los nombres de las personas que deseas agradecer aquí) ¡No podríamos haberlo hecho sin ustedes!</h2>
     <Link to="/" onClick={()=>localStorage.removeItem('my-token')} className="btn btn-primary ">Logout</Link>  
    {/* <button  onClick={logout()} className="btn btn-primary">Logout</button> */}
    <Link to="/about" className="btn btn-primary ">About</Link> 
     { checkToken == null && <Redirect to="/" /> } 
    </div>
    );
  }
  
  export default Welcome;
