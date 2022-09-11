import axios from "axios";


//data ifadesi altında axios json parslanmış değerleri dönmekte !!

// (async ()=>{
//     const datas=await axios('https://jsonplaceholder.typicode.com/users')
//     console.log(datas.data)
// }
// )()

const getUsers=()=>{
    return new Promise(async (resolve)=>{
       const datas=await axios('https://jsonplaceholder.typicode.com/users')
        resolve(datas.data)})
       
}

// getUsers().then((data)=>{
//     console.log(data)
// }).catch(()=>{
//     console.log("Its not working !!")
// })

const getPosts=(post_id)=>{
    return new Promise(async (resolve)=>{
       const datas=await axios('https://jsonplaceholder.typicode.com/posts/'+post_id)
        resolve(datas.data)})
       
}
// getPosts(2).then((data)=>{
//     console.log(data)
// }).catch(()=>{
//     console.log("Its not working !!")
// })

// (async()=>{
//     await getUsers()
//     .then((data)=>{
//     console.log(data)
//     })
//     .catch(()=>{
//     console.log("Its not working !!")
//     })

//     await getPosts(2)
//     .then((data)=>{
//     console.log(data)
//     }).catch(()=>{
//     console.log("Its not working !!")
//     })
  
// })()
// Bu da async fonskyon gibi promisleri sıralı çalıştırır.
Promise.all([getUsers(),getPosts(1)])
.then(console.log)
.catch(console.log)