// // let number = (a, b) => {
// //     return a + b;
// // };
// // console.log(number(10,5))

// // ES6 fat arrow function 

// var javaScript = {
//     name : "JavaScript",
//     libraries: ["React", "Angular", "vue"],
   
//     printLibraries: function () {
//         //use object this
//         // var self = this;
//         // console.log(this);
//         // this.libraries.forEach(function(e){
//             // console.log(this) //this forEach change this valu
//             // console.log(`${this.name} loves ${e}`);

//             // now this is a object this
//             // console.log(`${self.name} loves ${e}`);
//         // })

//         // arrow function don't change this value
//         this.libraries.forEach((e)=> console.log(`${this.name} loves ${e}`))
//     }
// }

// javaScript.printLibraries();




// const searchInput = document.querySelector(".search");
// const display = document.querySelector(".result");
// const thanks = document.querySelector(".thanks");

// Normal function that works perfectly

// function show(){
//     // var self = this;
//     display.innerHTML = this.value;
    
//     setTimeout(function (){
//         // thanks.innerHTML = `You have typed: ${this.value}`;
//         // thanks.innerHTML = `You have typed: ${self.value}`;

//     },1000 );
// }


// const show =()=>{
//     display.innerHTML = this.value;
// }

// searchInput.addEventListener("keyup", show);


// // truthy falsy value
// // var myVar = true;
// var myVar = [];
// // var myVar = "" //it's false value(False, 0 , "" , null, undefined, NaN)-> falsy
// if(!myVar){
// console.log("i am truthy");
// } else {
//     console.log("i am false");
// }



// ternary operator
// var age = 17;

// var type;
// if(age >= 18){
//     type = "adult";
// }else {
//     type = "child";
// }

// var type = age >= 18 ? "adult" : age < 10 ? "child" : "young";



// console.log(type);


// var isLoggedin = true;

// var access = isLoggedin ? true : false;

// var a = 5;

// var access = a > 4;

// console.log(access)











































