



/*let btn = document.getElementsByClassName('btn');*/

let contador=1
let contador2=1
const playera1 = {Sku: 1001, precio: 800, Talla: "Extra Chica" }
const playera2 = {Sku: 1002,precio: 800,Talla: "Chica" }
const playera3 = {Sku: 1003, precio: 1100, Talla: "Extra Chica" }
const playera4 = {Sku: 1004,precio: 1800,Talla: "Chica" }
const playera5 = {Sku: 1002,precio: 1800,Talla: "Chica" }
const playera6 = {Sku: 1003, precio: 2000, Talla: "Extra Grande" }
const playera7 = {Sku: 1004,precio: 1800,Talla: "Chica" }

const prodDisp =[playera1,playera2,playera3,playera4,playera5,playera6, playera7];
 
document.querySelector(".btn").addEventListener("click", addCarrito, true);
document.querySelector(".btnB").addEventListener("click", addCarrito2, true);
document.querySelector(".lupa").addEventListener("click",busca, true);
document.querySelector(".erase").addEventListener("click",elimina, true);

function elimina(){
    let goma =0
    contador = goma
    contador2 = goma
    console.log(`${contador}  Producto(s)  agregado al carrito}`)
}
function busca (){
    let buscad = prompt ("ingrese busqueda por precio")
    let searchresult =  prodDisp.filter ((producto) => producto.precio > buscad)

    console.log(searchresult)
}


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


// let total =0
// carrito.forEach((item) => (total += item.precio));
// console.log(total)

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