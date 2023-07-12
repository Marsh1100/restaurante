
import {$selectorCateg,$btnCarrito,$tarjetasCateg,$pedido} from "./selectores.js"
import {seleccionCateg,listarCateg, agregarAlCarrito} from "./funciones.js"
import {ProductoCarrito,CarritoDeCompras} from "../Class/Carrito.js"


listarCateg()
//AddEventListener
//Selección de categoria

$selectorCateg.addEventListener('input',seleccionCateg);

document.addEventListener('click', e=>{
  if(e.target.classList.value.includes('carrito')){
    let id= e.target.parentNode.id;
    console.log(id)
  }
})
