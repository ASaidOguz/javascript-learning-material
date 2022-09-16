import {useState} from 'react'

function InputExample() {
  const [Form,setForm]=useState({name:"",surname:""})

 const onChangeInput=(e)=>{
  //...Form eski verileri tut anlamına gelmekte.
  setForm({...Form,[e.target.name]:e.target.value})
 }
  return (
    <div>
      Name <br/>
      <input name="name"value={Form.name} onChange={onChangeInput} /> 
      <br/>{Form.name}
      <br/>
      <hr/>
      Surname <br/>
      <input name='surname' value={Form.surname} onChange={onChangeInput} /> 
      <br/>{Form.surname}
    
    </div>

  )
}

export default InputExample
