import {useState,useEffect} from 'react'
import List from './list'
import Form from './form'
import './style.css'
function Contacts() {
  
    const[contacts,setContacts]=useState([
        {
            fullname:"Ahmet Kemal",
            phone_number:1234566
        },
        {
            fullname:"Ayşe meran",
            phone_number:23123423
        },
        {
            fullname:"Carol Newman",
            phone_number:333445566
        },
        {
            fullname:"Alice Romanov",
            phone_number:23124134213
        },
    ]);
    
    useEffect(()=>{
      console.log(contacts)
    },[contacts])
  
    return (
    <div id="container">
      <h1 className="con">Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
