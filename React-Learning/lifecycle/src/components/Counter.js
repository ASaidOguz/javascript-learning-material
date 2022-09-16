import {useState,useEffect} from 'react'
//useEffect hooku aynen useState gibi react kütüphanesinin altındadır.
//useEffect , yapılan durum değişimlerini yakalamamızı sağlar.
function Counter() {
    const[number,setNumber]=useState(0)
    let[name,setName]=useState("Ahmet")
   
   useEffect(()=>{
     console.log("State güncellendi!!")
   })
    //Burdaki boş array dependecny array olarak geçiyor ve komponent ilk mount olan
    //zamanı yakalamamıza imkan tanıyor.Array boş iken herhangi bir state değişiminde tetiklenir.
    useEffect(()=>{
     console.log("Component mount edildi!!")
      
     const interval=setInterval(()=>{setNumber((n)=>n+1)},1000)
    //başarılı bir şekilde unmount işlemi aşağıdaki gibi 
    //yapılır!!
    return ()=>clearInterval(interval)
    },[]);
   
     //Eğer birden fazla component var ve dinlemek istediğimiz
     //belirli bir komponent var ise ;
     //dependency arrayine dinlemek istediğimiz 
     //stateleri yazabilirz
   
     useEffect(()=>{
       console.log("name veya number state güncellendi!!")},[name,number]);

    return (
    <div>
      <h1>{number}</h1>
     <button onClick={()=>setNumber(0)}>Reset</button>

     <h1>{name}</h1>
     <button onClick={()=>setName(name==="Mehmet"?name="Ahmet":name="Mehmet")}>Click!!</button>
    </div>
  )
}

export default Counter

// !!!!useEffect konsolda iki kez render ediliyor bunun sebebi 
// index.js'de app.js react.StrictMode altında çalışıyor, 
// tagı div veya başka bir tagla değiştirin düzelir. 
// İki kez render etmesinin sebebi sorunları tespit 
// etmek ve bir sorun varsa uyarmakla ilgili