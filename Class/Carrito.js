


export class ProductoCarrito{
    constructor(nombre,imgUrl,precio,cantidad){
      this.nombre=nombre;
      this.imgUrl=imgUrl;
      this.precio=precio;
      this.cantidad=cantidad;
    }
}


export class CarritoDeCompras{
    constructor(){
      this.carrito = [];
    }
    
    addProductoCarrito(producto){
      this.carrito.push(producto);
    }
    //
    editCantProducto(index,cantidad){
      this.carrito[index].cantidad += 1;
    }
    removeProducto(index){
      this.carrito[index].cantidad -=1;
      if(this.carrito[index].cantidad==0){
        this.carrito.splice(index,1);
      }
    }
  
    getProductosCarrito(){
      return this.carrito;
    }
  }