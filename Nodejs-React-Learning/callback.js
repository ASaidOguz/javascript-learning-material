
//shift+alt+A for block comments !!
/* setTimeout(()=>{
    console.log("Hey after 2 second!!")
},2000) */


//Her bir saniyede çalışan fonskiyon
/* setInterval(()=>{
    console.log("Ben 1 saniye burdayım!!")
},1000) */

/* const sayHi=(cb)=>{
    cb();
}
sayHi(()=>{
    console.log("Hello")
}) */

//ctrl+ö çoklu comment aç/kapa!!!!!!!!!!!!!!!!!!!!!!!!!
// Promise döndüren bir fonskiyonda .then ile devam edip 
// tekrar fetch kullanmak hataya sebep olmakta!!


import fetch from "node-fetch"
/* fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(response => console.log(response),
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(data=>data.json()
  .then(data=>console.log(data)))) */


// async function GetData(){
//     const users=await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
//      console.log("Users Yüklendi:",users)

//      const post1=await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json()
//      console.log("Post1 yüklendi:",post1)

//     const post2=await (await fetch('https://jsonplaceholder.typicode.com/posts/2')).json()
//     console.log("Post1 yüklendi:",post2)
// }
// GetData()

//ANonim fonskiyon oluşturmak için 

(async()=>{
    const users=await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    console.log("Users Yüklendi:",users)

    const post1=await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json()
    console.log("Post1 yüklendi:",post1)

   const post2=await (await fetch('https://jsonplaceholder.typicode.com/posts/2')).json()
   console.log("Post1 yüklendi:",post2)
})()




  


  