import {useState} from 'react'

function List({ contacts }) {
 
    const [filtertext,setfilterText]=useState('')
  
    const filtered=contacts.filter((item=>{
    return Object.keys(item).some((key)=>
    item[key]
    .toString()
    .toLowerCase()
    .includes(filtertext.toLocaleLowerCase()))

    }))
  
    return(
    
    <div>
     <input placeholder='Filter Contact' value={filtertext} 
        onChange={(e)=>setfilterText(e.target.value)}></input>
     <ul className='list'>
        {filtered.map((contact,i)=>
        <li key={i}>
         <span>{contact.fullname}</span>
         <span>{contact.phone_number}</span></li>)}
     </ul>
     <p>Total Contacts:({filtered.length})</p>
    </div>
  )
}

export default List
