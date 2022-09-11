
/*
Array Functions ;
1-push
2-map
3-find
4-filter
5-some
6-every
7-includes
*/
const users=["ahmet","mehmet","fikret"]

const usersobj=[
    {name:"ahmet",
     age:20},
    {name:"mehmet",
     age:30},
    {name:"mehmet",
     age:25}]

//push
// Arrayin sonuna bir eleman ekliyor.
//Ayrıca push işlemi geriye yeni arrayin 
//uzunlugunuda dönmekte 


/* const newarray=users.push("Ayşe")
   console.log(newarray)
 */

//map
//Go-lang daki range gibi bir işlem gerçekleştiriyor.
//for dongüsü kullanmadan map methodu ile sıralama 
//yapıyor.

/*  users.map((item)=>{
    console.log(item)
})

    usersobj.map((obj)=>{
    console.log(obj.name)
}) */

//find
//Arryin içinde verilen koşullar ile 
//arama yapar .

/* const findit=usersobj.find((item)=>item.name=="ahmet"&&item.age>19)
   console.log(findit)
 */

//filter
//filtreleme işlemi yapıyor.find ile arasındaki fark ise 
//filter birden fazla element geri döndürüyor tabii şartlara uyanları.
//ayrıca fieldları direk fonskiyon içinde tanımlayabiliriz 

/* const filtered=usersobj.filter(({name,age})=>age>19 && name==="mehmet")
console.log(filtered)
 */

//some
//arrayde istenilen element var ise true yok ise false 
//döner.

/* const some =usersobj.some(({name,age})=>name=="ahmet"&&age<=20)
console.log(some) */

//every
//arrayin tüm elemenlarının şarta uymasını bekler 
//buna göre true veya false döner 

/* const every =usersobj.every(({name,age})=>age>=20)
console.log(every)
 */

//includes
//argüman olarak verdiğimiz değerinin arrayin içinde geçip geçmediğine 
//bakan ve bu duruma göre true yada false dönen bir metottur.
//ayrıca ekstra index değeri ilede arama yapılabilir.

const inc=users.includes("ahmet",2)
console.log(inc)