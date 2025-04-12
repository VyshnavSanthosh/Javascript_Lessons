// setTimeout(() => {
//     console.log('timer');
// }, 8000);

// function x(y){
//     console.log('x');
//     y();
    
// }
// x(function y() {
//     console.log('y');
// })


function a(){
    for (var i = 0; i <= 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
        
    }
    
}
a();

