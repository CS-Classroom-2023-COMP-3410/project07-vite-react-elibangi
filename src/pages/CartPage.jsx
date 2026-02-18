import ShoppingCart from '../components/ShoppingCart';
function CartPage({ cart, setCart, products, setProducts}) {
    return (
        <div>
            <div>
                <h1>Cart Page</h1>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <ShoppingCart cart = {cart} setCart = {setCart} products = {products} setProducts = {setProducts} />
                </div>

            </div>
        </div>
    )
}

export default CartPage;