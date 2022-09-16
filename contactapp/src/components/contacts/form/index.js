import {useState,useEffect} from 'react'

const initialFormValues={fullname:'',phone_number:''}
function Form({addContact,contacts}) {
   
    const[form,setForm]=useState({fullname:"",phone_number:""})
    useEffect(()=>{
        setForm(initialFormValues)
    },[contacts])
    
    const Onchangeinput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
       
    }
    const onSubmit=(e)=>{
        //Post işlemi sırasında sayfayı yeniden render etmeyi önlemek için!!
        e.preventDefault();
        addContact([...contacts,form])

       
    }
    return (
        <div>
    <form onSubmit={onSubmit}>
        <div>
        <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={Onchangeinput}/>
        </div>
        
        <div>
        <input name='phone_number'  placeholder='Phone Number'value={form.phone_number}onChange={Onchangeinput}/>
        </div>
        
        <div  className="btn">
        <button>Add</button>
        </div>
    </form>
    </div>
  )
    }
    export default Form
