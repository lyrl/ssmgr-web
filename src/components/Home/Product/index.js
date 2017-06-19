import React from 'react';
import agent from '../../../agent';
import { connect } from 'react-redux';
import ProductView from './ProductView';

import {PRODUCT_PAGE_LOADED,PRODUCT_PAGE_UNLOADED} from '../../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
    ...state.product,
    currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: PRODUCT_PAGE_LOADED, payload}),
  onUnload: () =>
    dispatch({  type: PRODUCT_PAGE_UNLOADED })
});

class ProductContainer extends React.Component {
  componentWillMount() {
    this.props.onLoad(agent.Product.all())
  }


  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    console.log("products:" + this.props.products);

    return (

        <div className="container text-center">

          <h1>产品</h1><hr/>

          <div className="row">

              {this.props.products != null ? this.props.products.map(product => {
                return <ProductView product={product}/>
              }): null}

          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
