import { $selectorCateg, $tarjetasCateg } from "./selectores.js";
import {ProductoCarrito,CarritoDeCompras} from "../Class/Carrito.js";



export function listarCateg(){
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarCategoria(data))
}

const productoCarrito = new ProductoCarrito();
const carritoDeCompras = new CarritoDeCompras();


function mostrarCategoria(data){
    $selectorCateg.innerHTML = '<option selected value="Categoria">Categoria</option>'
    data.categories.forEach(opcionCategoria=>{
        let categoria = opcionCategoria.strCategory;

        const opcion = document.createElement('option');
        opcion.value = categoria;
        opcion.textContent = categoria;

        $selectorCateg.appendChild(opcion);

    });

}

export function seleccionCateg(e){
    let input = e.target.value;

    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${input}`;

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarComidas(data))
}

function mostrarComidas(data){
    $tarjetasCateg.innerHTML=" ";
    data.meals.forEach(plato=>{
        let {strMeal, strMealThumb, idMeal} = plato;

        let html=`
                <div class="card" style="width: 18rem;">
                    <img src="${strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"><b>${strMeal}</b></p>
                        <div>
                        <button type="button" class="btn btn-success bi bi-cart-plus carrito" id="${idMeal}" >
                        </button>
                    </div>
                </div>`;

        $tarjetasCateg.insertAdjacentHTML('beforeend',html)
    })
    
}
//AddEventListener
$selectorCateg.addEventListener('input',seleccionCateg);

$tarjetasCateg.addEventListener('click', e=>{
    if(e.target.classList.value.includes('carrito')){
      let id= e.target.id; 
      
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
        .then(response => response.json())
        .then(data => agregarAlCarrito(data.meals[0]))

    };
  })
  

export function agregarAlCarrito(plato){

    console.log("aaaaa");
    const {strMeal,strMealThumb} = plato;

    const carrito = carritoDeCompras.getProductosCarrito();
  
    //Saber si ya existe el producto en el carrito!
    let existe = false;
    
    carrito.forEach((e,i)=>{
      if(e.nombre == nombre){
        existe = true;
        carritoDeCompras.editCantProducto(i,cantidad)
        return
      }
    });

    if(!existe){
        let newProducto = new ProductoCarrito(strMeal,strMealThumb,1)
        carritoDeCompras.addProductoCarrito(newProducto)
    }
    console.log(carritoDeCompras.getProductosCarrito());
      //renderCarritoCompra();
}