
import {$selectorCateg,$btnCarrito,$tarjetasCateg,$pedido} from "./selectores.js"
import {seleccionCateg,listarCateg, agregarAlCarrito} from "./funciones.js"
import {ProductoCarrito,CarritoDeCompras} from "../Class/Carrito.js"


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


if (myModal) {
    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
      })
}

listarCateg()
//AddEventListener
//Selección de categoria

$selectorCateg.addEventListener('input',seleccionCateg);
export const carritoDeCompras = new CarritoDeCompras();

document.addEventListener('click', e=>{
  console.log(e.target.classList.value)
})
