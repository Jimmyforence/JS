




/*let btn = document.getElementsByClassName('btn');*/

let contador=0


document.querySelector(".btn").addEventListener("click", carrito, true);



function carrito(){
    let limite = prompt("ingrese la cantidad de playeras que quieras");
    while ( contador <= limite) {
        console.log(`la cantidad en carrito es ${contador}`);
        contador++;
        console.log(`Producto agregado`)
    }
}
   
    /*if ( contador == 0) {
        contador= contador+1
       
        }
    else
    {
        console.log(`la cantidad en carrito es ${contador}`);
        contador= contador+1
    }}
    
    console.log(`la cantidad en carrito es ${contador}`)
} */