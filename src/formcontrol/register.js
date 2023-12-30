import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



export default function Register() {
 
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();

    


  };
  const [Username,setUsername] = useState({username:""});
  const [Email,setEmail] = useState({email:""});
  const [Password,setPassword] = useState({password:""});
  const [ConfirmPassword,setConfirmPassword] = useState({Cpassword:""});
  const [isUsernameValid,setisUsernameValid] = useState(true)
  const [isEmailValid,setisEmailValid] = useState(true)
  const [isPasswordValid,setisPasswordValid] = useState(true)
  const [action, setAction] = useState("Registration");


  const getDetails = (e)=>{
    const {name,value} = e.target
    setUsername({...Username,[name]:value})
    setEmail({...Email,[name]:value})
    setPassword({...Password,[name]:value})
    setConfirmPassword({...ConfirmPassword,[name]:value})

    if (name === 'email') {
      const isValidEmail = /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
      setisEmailValid(isValidEmail);
    }

    if (name === 'password') {
      const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(value);
      setisPasswordValid(isValidPassword);
    }

    if( name === 'username'){
      const isValidUsername = /^[A-Za-z][A-Za-z0-9_]{7,15}$/i.test(value);

      setisUsernameValid(isValidUsername)
      
    }

   
  
}
console.log(Username);
console.log(Email);
console.log(Password);
console.log(ConfirmPassword);





 
const handleSubmit = (e)=>{
  e.preventDefault();

 
{if(action==="Registration"){
  if(!Username.username || !Email.email || !Password.password || !ConfirmPassword.Cpassword || !isEmailValid || !isPasswordValid || !isUsernameValid || Password.password  !== ConfirmPassword.Cpassword){
    alert("Please Enter the Details")
  }else{
  alert(`
        ---------- User Details -------
        User Name: ${Username.username}
        Email: ${Email.email}
        Password: ${Password.password}
        `)
  }}}
  if (action === "Login"){
    if( !Email.email || !Password.password ||  !isEmailValid || !isPasswordValid){
      alert("Please Enter the Details")
    }else{
    alert(`
          ---------- User Details -------
          Email: ${Email.email}
          Password: ${Password.password}
          `)
    }

  }
 

  
}
const toggleAction = () => {
  if (action === "Registration") {
    setAction("Login");
  } else {
    setAction("Registration");
  }
};


  return (
        
     <div>
      <div style={{minHeight:'100vh', backgroundImage:'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)'}} className='d-flex w-100  justify-content-center align-items-center'>
      <div  className="container">
       <div className="row ">
          <div style={{maxWidth:'400px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'}} className='col-12 col-lg-6 mx-auto bg-light rounded p-5'>
           <div className='heading d-flex justify-content-center align-items-center  '>
             { action==="Registration" && <h2 className='border-bottom border-2 fw-bold border-primary'>Registration</h2>}
             { action==="Login" && <h2 className='border-bottom border-2 border-primary fw-bold'>Login</h2>}
            
           </div>
          
        
          
    
               <form onSubmit={handleSubmit} className="mt-5">
                  {action==="Registration" &&
                    <div className="mb-3">
                    <TextField className="w-100" id="standard-basic" name="username" label="Username" variant="standard" error={!isUsernameValid}  onChange={(e)=>getDetails(e)} value={Username.username || ""} /></div>}
                    { 
          !Username.username || Username.username.length<5 &&
           <div className='mb-3 text-danger'>
              *Minimum 7 Characters
            </div>}
            { 
          !Username.username || Username.username.length>20 &&
           <div className='mb-3 text-danger'>
              *Maximum 17 Characters
            </div>}
                 <div className="mb-3">
                 <TextField className="w-100" id="standard-basic" name="email" label="Email" variant="standard" error={!isEmailValid}  value={Email.email || ""}  onChange={(e)=>getDetails(e)} />
                 </div>
                 { 
            !Email.email || !isEmailValid  &&
           <div className='mb-3 text-danger'>
              *Invalid Format /abc@gmail.com
            </div>}
                 <div className="mb-3">
                 <FormControl sx={{width: '100%' }} variant="standard">
              <InputLabel error={!isPasswordValid} htmlFor="standard-adornment-password">Password</InputLabel>
              <Input error={!isPasswordValid} name="password" value={Password.password || ""}  onChange={(e)=>getDetails(e)}
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
                 </div>
                 { 
        !Password.password || !isPasswordValid &&
           <div className='mb-3 text-danger'>
              *Minimum 8 Characters, one letter and a number.
            </div>}
                { action==="Registration" &&
                <div className="mb-3">
                 <TextField className="w-100"
              id="standard-password-input"
              label="Confirm Password"
              type="password"
              name="Cpassword"
              error={Password.password  !== ConfirmPassword.Cpassword}
              onChange={(e)=>getDetails(e)}
              value={ConfirmPassword.Cpassword || ""}
              autoComplete="current-password"
              variant="standard"
            />
                 </div>}
                 { action==="Registration" &&
            Password.password  === ConfirmPassword.Cpassword && ConfirmPassword.Cpassword !=="" && Password.password !==""   &&
           <div className='mb-3 text-success'>
              *Password Confirmed
            </div>}
    
               { action==="Registration" && <Button style={{height:'50px'}} className="bg-primary w-100 text-light mt-3 fs-6 fw-semibold rounded" type="submit" variant="contained">Register</Button>}
               { action==="Login" && <Button style={{height:'50px'}} className="bg-primary w-100 text-light mt-3 fs-6 fw-semibold rounded" type="submit" variant="contained">Login</Button>}
             { action==="Registration" && <div className="mt-3 d-flex justify-content-center align-items-center">
               <p>
              Already have an Account? <a style={{cursor:'pointer'}}  onClick={toggleAction}  className="text-decoration-none">
                 Login
              </a>
            </p>
               
               </div>
               }
                { action==="Login" && <div className="mt-3 d-flex justify-content-center align-items-center">
               <p>
              Don't have an Account? <a style={{cursor:'pointer'}}  onClick={toggleAction}  className="text-decoration-none">
                 Register
              </a>
            </p>
               
               </div>
               }
               </form>
    
               </div>
       </div>
      </div>
           </div>
    </div>    
    
  );
}