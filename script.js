
var slider = document.getElementById('slider');

// setInterval(function () {

//     slider.classList.add('img' + (x));
//  myTimeout;
//     console.log(x);
// }, 2000);

// const myTimeout = setTimeout(function(){
//    console.log('working');
// }, 1000);

// while(1){
// myTimeout;
// console.log('workingloop');
// x++;
// }

var x=1;
function myTimeout(){
   let y=x;
   slider.classList.add('img'+y);
  console.log(y);
 x=x+1;
 if(x==5){
   slider.classList.remove('img'+1);
 x=1;
}
 
}


let time=setInterval(function(){
   myTimeout();
   
   
},4000);

