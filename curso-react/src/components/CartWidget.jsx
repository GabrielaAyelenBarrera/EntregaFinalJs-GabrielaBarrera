import cart from "/src/assets/images/cart.svg"


const CartWindget = () => { 
    return (
        <>
        <button type="button" className="btn btn-secondary position-relative">
  <img src={cart} alt="Carrito" width={16}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1 </span>
</button>
        
        
        
        </>



    )



}

export default CartWindget