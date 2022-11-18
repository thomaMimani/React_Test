import { useState } from 'react';
import './App.css';
import Forms from './components/Forms';
import Info from './components/Info';

function App() {

  const [name, setName]= useState('')
  const [lName, setLName]= useState('')
  const [email, setEmail]=useState('')
  const [hobby, setHobby]=useState([])

  const regEx=/^[A-Za-z\s]*$/ 
  const getName = name=>{
    if(regEx.test(name)){
      setName(name)
    }else{
      setName('Only letters and spaces are allowed')
    }
  }

  const getLName= lName=>{
    if (regEx.test(lName)){
      setLName(lName)
    }else{
      setLName('Only letters and spaces are allowed')
    }
  }

  const getEmail= email=>{
    if(email.includes('@')){
      setEmail(email)
    }else{
      setEmail('Not Correct')
    }
  }

  const getHobby=hobby=>{
   setHobby(hobby)
  }

  return <div className='container-fluid w-100% d-flex'>
    <Forms getName={getName} getLName={getLName} getEmail={getEmail} getHobby={getHobby}/>
    <Info name={name} lName = {lName} email = {email} hobby={hobby} />
  </div>
}

export default App;
