



/*let btn = document.getElementsByClassName('btn');*/

let contador=1
let contador2=1
const playera1 = {Sku: 1001, precio: 800, Talla: "Extra Chica" }
const playera2 = {Sku: 1002,precio: 800,Talla: "Chica" }
const prodDisp =[playera1,playera2];

document.querySelector(".btn").addEventListener("click", addCarrito, true);
document.querySelector(".btnB").addEventListener("click", addCarrito2, true);



function addCarrito(){
    let limite = prompt("ingrese la cantidad de playeras que quieras");
    while ( contador <= limite) {
        // console.log(`la cantidad en carrito es ${contador}`)
        // carrito.pop(playera1)
        
        
        
        console.log(`${contador} Producto(s)  agregado al carrito}`)
        console.log(`costo del carrito es ${(playera2.precio*(contador2-1) )+(playera1.precio*(contador))}`)
        console.log (carrito)
        contador++;
        carrito.push(playera1)
        costo.push(playera1.precio);
    }
    
}


function addCarrito2(){
    let limite = prompt("ingrese la cantidad de playeras que quieras");
    while ( contador2 <= limite) {
        console.log(`la cantidad en carrito es ${contador2}`)
        // carrito.pop(playera2)
        
        
        
        console.log(`${contador2} Producto(s)  agregado al carrito}`)
        console.log(`costo del carrito es ${(playera2.precio*(contador2) )+(playera1.precio*(contador-1))}`)
        console.log (carrito)
        contador2++;
        carrito.push(playera2)
        costo.push(playera2.precio);
    }
}


const carrito = [];
const costo = []
   
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