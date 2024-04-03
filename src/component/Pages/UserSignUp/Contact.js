import { useState } from 'react';
import './contact.css';
const Contact = () => {

    const[name,setFullname]= useState('');
    const[newName,setNewname]=useState('');
    const[number,setNumber]=useState();
    const[emailD,setEmailid]=useState();
    const[username,setUser]= useState();
    const[confirmid,setConfirmid]=useState('');
    const[pass,setPass]=useState();
    const[checkp,setCheckp]=useState(); 
 function checkeremail(emailD,confirmid){
    if(emailD === confirmid){
        return true;
    }
    else{
        return false;
    }
 }
 function checkerpassword(pass,checkp){
    if(pass === checkp){
        return true;
    }
    else{
        return false;
    }
 }
  const Sub=(e)=>{
    e.preventDefault();
    setUser(username);
    setNewname(name);
    setNumber(number);
    setEmailid(emailD);
    setConfirmid(confirmid);
    setPass(pass);
    setCheckp(checkp);
    checkeremail(emailD,confirmid)?console.log("true"):alert("email id does,nt match");
    checkerpassword(pass,checkp)?console.log("true"):alert("password doesnt match");
     console.log(username);
    console.log(name);  
    console.log(number);
    console.log(emailD);
    console.log(confirmid);
    console.log(checkp);
    console.log(pass);

  }

  const userName=(event)=>{
    setUser(event.target.value);
  }
   const fullName=(event)=>{
     setFullname(event.target.value);
   }
   const numberN=(event)=>{
     setNumber(event.target.value);
   }
   const emailId=(event)=>{
    setEmailid(event.target.value);
   }
   const confirmId=(event)=>{
    setConfirmid(event.target.value);
   }
   const setPassword=(event)=>{
    setPass(event.target.value);
   }
   const confirmPassword=(event)=>{
      setCheckp(event.target.value)
   }
        return (
            <>
            <div className='form-heading'>
                <h1> Registration Form</h1>
            </div>
            
            <div className="form">
                <form onSubmit={Sub} className='form-details'>
                    <input type='text' placeholder='Enter the User-Nmae' id='change-style' onChange={userName} value={username} ></input>
                    <input type='text' placeholder='Enter the Full Name' id='change-style' onChange={fullName} value={name} ></input>
                    <input type='text' placeholder='Enter the phone Number' id='change-style' onChange={numberN} value={number}></input>
                    <input type='email' placeholder='Enter your email-id' id='change-style' onChange={emailId} value={emailD}></input>
                    <input type='text' placeholder='Confirm email-id' id='change-style' onChange={confirmId}  value={confirmid}></input>
                    <input type='text' placeholder='Set-password' id='change-style' onChange={setPassword} value={pass}></input>
                    <input type='email' placeholder='confirm-password' id='change-style' onChange={confirmPassword} value={checkp} ></input>

                    <div className='btn-p'>
                        <button className='contact-button' onClick={Sub}>REGISTER</button>
                    </div>
                      
                </form>
             </div>
           
            </>
        
        )

}
export default Contact;