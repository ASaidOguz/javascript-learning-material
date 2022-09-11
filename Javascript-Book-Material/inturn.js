
//if-else statemnets in js 
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
}else{
     console.log("Hey it's not a number you have given just now !!")
}


//While loop in js
while(theNumber<12){
     theNumber+=2
     console.log(theNumber)
}


//do-while loop in js
let yourName;
do{
     yourName=prompt("Who are you !")
}while(!yourName)
console.log(yourName)

//switch -case statement in js
switch(prompt("What's condition of the weather today?")){
     case "rainy":
          console.log("Today is rainy!!")
          break;
     case "cloudy":
          console.log("Todays weather is cloudy")
          break;
     case "sunny":
          console.log("Todays weather is sunny")
          break;   }

//for loop in js
for(let number=0;number<=12;number+=1){
     console.log("For loop's number:",number)
}

//Simple function in js
const value=function(x){
     return x*x
}

console.log(value(prompt("give me number XD")))

//Simple exponent calculation in js
const power=function(base,exponent){
     let result=1
     for(let count=0;count<exponent;count++){
          result*=base
          
     }
     return result
}
console.log(power(2,5))

//Arror functions in js 

const love=(heart,eyes)=>{
     if (heart=="love"&&eyes=="green"){
          console.log("LOVE!!")
          }else{
               console.log("not so LOVE!!")
          }
}
let heart=prompt("give me your heart!!")
let eyes=prompt("give me your eyes!!")
love(heart,eyes)

/* What is call stack ?
Because a function has to jump back to the place that called it when it returns,
the computer must remember the context from which the call happened.
In one case, console.log has to return to the greet function when it is done.
In the other case, it returns to the end of the program.
The place where the computer stores this context is the call stack. Every
time a function is called, the current context is stored on top of this stack.
When a function returns, it removes the top context from the stack and uses
that context to continue execution.
Storing this stack requires space in the computer’s memory. When the stack
grows too big, the computer will fail with a message like “out of stack space”
or “too much recursion”. The following code illustrates this by asking the
computer a really hard question that causes an infinite back-and-forth between
two functions. Rather, it would be infinite, if the computer had an infinite
stack. As it is, we will run out of space, or “blow the stack”.
*/

//Recursion exercise 

const recursion=(x)=>{
    if(!x<0) {if (x%2==0){
          return true
     }else{
          return false
     }
}else{
     return false
}
}

console.log(recursion(-1))