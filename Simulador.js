




let btn = document.getElementsByClassName('btn');
let contador = 0;



document.querySelector(".btn").addEventListener("click", carrito, true);

function carrito(){
    if ( contador == 0) {
        contador= contador+1
        console.log(`Producto agregado`)
        }
    else
    {
        console.log(`la cantidad en carrito es ${contador}`);
        contador= contador+1
    }}
    
    console.log(`la cantidad en carrito es ${contador}`)
  


