import React from 'react';
import agent from '../../../agent';
import { connect } from 'react-redux';

const ProductView = props => {
  const product = props.product;

  const trafficDesc = (product)=>{
      switch (product.charge_mode) {
          case 'traffic':
              return '自选';
          case 'time':
              return '不限';
          case 'free':
              return '1G';
      }
  };



  return (

      <div className="col-sm-4 " >
          <div className="panel panel-default">
              <div className="panel-body" >
                  <div>
                      <h2 style={{marginBottom: '50px'}}>{product.product_name}</h2>
                  </div>

                  <div>
                      <p><strong>流量：{trafficDesc(product)}</strong></p >
                      <p><strong>设备：不限</strong></p>
                      <p><strong>节点：{product.nodes.length}</strong></p>

                  </div>


                  <div style={{marginTop: '50px'}} >
                      <p> {product.product_desc} </p>
                  </div>


                  <div style={{marginTop: '50px'}}>
                      <button type="button" className="btn btn-success">查看</button>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default ProductView;
