// // // const student={
// // //     name:"kabir",
// // //     age:19,
// // //     des:{
// // //         profile:"developer",
// // //         lang:"eng"
// // //     },
// // //     display(){
// // //         console.log(this.des);
// // //     }
// // // }
// // // console.log(student.name);
// // // console.log(student.des.lang);
// // // student.display().;

// // // function display(){
// // //     console.log(i);
// // //     var i=50;
// // //     console.log(i);
// // // }
// // // display();

// // // function display(){
// // //     console.log(i);
// // //     let i=50;
// // //     console.log(i);
// // // }
// // // display();

// // function multiply(num1, num2) {
// //   return num1 * num2;
// // }
// // const kabir = (num1, num2) => num1 * num2;

// // console.log(kabir(12, 13));

// // //   var li = '<li>' +
// // //   '<div class="row">' +
// // //   '<div class="col-md-4">' +
// // //     '<img src="' + moviePoster + '" height="250" alt="" />' +
// // //   '</div>' +
// // //   '<div class="col-md-8">' +
// // //      '<h2>' + movieTitle + '</h2>' +
// // //   '</div>' +
// // //    '</div>' +
// // // '</li>';

// // var a = "kabir";
// // var li = `<li> 
// //   <div class="row">
// //   ${a}
// //   </div>
// //   </li>`;

// // console.log(li);
// ////helete

// Function as argument

// function printMessage(num1,num2, runTask){

//     console.log("Before calling callback function");
//     runTask(num1,num2);
// }
// printMessage(50,40, (num1, num2)=> console.log(num1+num2) );
// printMessage(50,40, (num1, num2)=> console.log(num1-num2));
// Function as argument
// function printHello(message, func){
//     console.log(message);
//     func();
// }
// function func1(){
//     console.log("Function one")
// }
// const func2 = ()=> {
//     console.log("Function two")
// }
// printHello("Hello", func1)
// printHello("Hello", func2)
// printHello("Hello", ()=>console.log("Callback func"))
// function example2(callback) {
//     setTimeout(function () {
//             callback("Task completed")
//     }, 2000)
// }
// example2((message) => console.log(message))
