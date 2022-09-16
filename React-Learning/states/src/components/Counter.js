import { useState }  from 'react'

export default function Counter() {
  
  const[count,setCount]=useState(0);
  
  const Increase=()=>{
    setCount(count+1)
  }
  const Decrease=()=>{
    setCount(count-1)
  }
    return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}
