import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';

const MainView = props => {
    const productPanelStyle = {
        // height: 500,
        // borderWidth: '1px',
        // borderStyle: "solid",
        // margin: '0 auto'
    };

  return (
      <div className="container text-center">

        <h1>产品</h1><hr/>

        <div className="row">

          <div className="col-sm-4 " >
            <div className="panel panel-default">
              <div className="panel-body" style={productPanelStyle}>
                <div>
                  <h2 style={{marginBottom: '50px'}}>流量版</h2>
                </div>

                <div>
                  <p><strong>流量：不限</strong></p >
                  <p><strong>设备：不限</strong></p>
                  <p><strong>节点：10</strong></p>
                </div>


                <div style={{marginTop: '50px'}} >
                  <p>世界各地服务器节点</p>
                  <p>不限流量 </p>
                </div>


                <div style={{marginTop: '50px'}}>
                  <button type="button" className="btn btn-success">查看</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 " >
            <div className="panel panel-default">
              <div className="panel-body" style={productPanelStyle}>
                <div>
                  <h2 style={{marginBottom: '50px'}}>极速版</h2>
                </div>

                <div>
                  <p><strong>流量：自选</strong></p >
                  <p><strong>设备：不限</strong></p>
                  <p><strong>节点：2</strong></p>
                </div>


                <div style={{marginTop: '50px'}} >
                  <p>香港到中国直连线路</p>
                  <p>延迟低速度快</p>
                </div>


                <div style={{marginTop: '50px'}}>
                  <button type="button" className="btn btn-success">查看</button>
                </div>
              </div>
            </div>
          </div>



          <div className="col-sm-4 " >
            <div className="panel panel-default">
              <div className="panel-body" style={productPanelStyle}>
                <div>
                  <h2 style={{marginBottom: '50px'}}>试用版</h2>
                </div>

                <div>
                  <p><strong>流量：2G</strong></p >
                  <p><strong>设备：不限</strong></p>
                  <p><strong>节点：1</strong></p>
                </div>


                <div style={{marginTop: '50px'}} >
                  {/*<p>世界各地服务器节点</p>*/}
                  {/*<p>不限流量 </p>*/}
                </div>


                <div style={{marginTop: '150px'}}>
                  <button type="button" className="btn btn-success">查看</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
};

export default connect(()=>{}, ()=>{})(MainView);
