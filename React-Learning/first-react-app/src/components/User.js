
//Props bize componentler arasında obje transferini 
//gerçekleştrimemizde yardımcı olur

import Proptypes from "prop-types"

function User({name,surname,friends,age,isLoggedin,address}){
    console.log(name)
    //Erken render işlemi bu şekilde yapılabilir.
    if (!isLoggedin){
    return <div>GIRIŞ YAPMADIN ULAN</div>
    }

    return(

<div>
    Şalom   {isLoggedin? [`${name} ${surname} ${age}`]:"Giriş Yapmadınız!!"}
         
    {
        //Array gösterimi yaparken divlere benzersiz bir key atamak gereklidir
        //Bunu mapın indexinden kolayca migrate edebiliriz.
        friends.map((friend,index)=>(
           <div key={index}>{index+1}-{friend}</div>
        ))
    } 
      <p>{address.title}</p>
      <p>  {address.zip}  </p>    
</div>

    )
}
//Şakamısın aq yukarıda Proptypes burda "propTypes"
//isRequired takısı ile zorunlu hale getirip
// konsoldan uyarı almamızı sağlayabiliriz!!
User.propTypes={
name:Proptypes.string.isRequired,
surname:Proptypes.string.isRequired,
friends:Proptypes.array,
age:Proptypes.oneOfType([Proptypes.string,Proptypes.number,Proptypes.array]).isRequired,
isLoggedin:Proptypes.bool,

address:Proptypes.shape({
    title:Proptypes.string,
    zip:Proptypes.number
})

}
//herhangi bir props girişi olmazsa default props ları bu şekilde 
//kullanabiliriz.
User.defaultProps={
    isLoggedin:false,


}


export default User

//props yerine gönderdiğimiz objenin 
//field lerini de fonskiyona yedirebiliriz
//Yani 

/* function User({name,surname,isLoggedin}){

    return(
        <div>
            {name} {surname}
        </div>
    )
} */