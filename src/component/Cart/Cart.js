import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CartActions';

const Cart = (props) => {
    console.log(props)
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h2>This is cart</h2>
            <ul>
                {
                    cart.map(item => <li key={item.cartId}>{item.name}<button onClick={()=>removeFromCart(item.cartId)}>x</button></li>)
                }
            </ul>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToprops = {
    removeFromCart: removeFromCart
}
export default connect(mapStateToProps, mapDispatchToprops)(Cart);