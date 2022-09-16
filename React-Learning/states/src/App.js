
import { useState } from "react";

function App() {
  
  let [name, setName]= useState("Ahmet");
  let [age,setAge]=useState("38")
  let [friends,setFriends]=useState(["Mehmet","Murat"])
  let [address,setAdress]=useState({title:"Istanbul",zip:"34640"});

  return (
     <div className="App">
     <h1>Merhaba {name}</h1>
     <h1>Yaşım   {age}</h1>
  <button  onClick={()=>setName(name==="Mehmet"?name="Ahmet":name="Mehmet")}>Click</button>
  <button  onClick={()=>setAge(age==="35"?age="38":age="35")}>Click</button>   
     <hr />
     <br></br>
     
     <h2>friends</h2>
     {

    friends.map((friend,index)=>{
      return<div key={index}>{friend}</div>
    })
     }
<button  onClick={()=>setFriends([...friends,"Ayşe"])}>Add New friend</button>  
     <hr />
     <br></br>


    <h2>Adresses</h2>
       <div>
        {address.title} {address.zip}
       </div>
       <button  onClick={()=>setAdress({...address,title:"Ankara"})}>Change Adress</button>  
     </div>  
     
  );
}

export default App;
