import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    const { products, addToCart } = props;

    return (
        <div>
            <h1>This is shop</h1>

            {
                products.map(pd => <Product key={pd.id} product={pd} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToprops = {
    addToCart: addToCart
}

// const connecToStore = connect(mapStateToProps,mapDispatchToprops);
// connecToStore(Shop);

export default connect(mapStateToProps, mapDispatchToprops)(Shop);