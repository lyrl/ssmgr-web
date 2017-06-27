import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
});

class EditNodeForm extends React.Component {
    constructor(props) {
        super(props);
    }

  componentWillReceiveProps(nexProps) {
      // window.$('.selectpicker').change();
      window.$('.selectpicker').selectpicker('val', nexProps.node.node_encry_mode);
    }

    componentDidMount() {

      window.$('.selectpicker').selectpicker({
        size: 10,
      });


      window.$('#addNode').validate({
        submitHandler: form => {
          this.props.onSubmit();
        },
        rules: {
          'node_name': {
            required: true,
          },
          'node_ip': {
            required: true
          },
          'node_port': {
            required: true
          },
          'node_key': {
            required: true
          },
          'node_encry_mode': {
            required: true
          }
        },
        highlight: function (input) {
          window.$(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
          window.$(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
          window.$(element).parents('.form-group').append(error);
        }
      });
    }

    render() {
     return (
         <div className="card">
             <div className="header">
                 <h2>
                     节点修改
                 </h2>
             </div>
             <div className="body">
                 <form id="addNode">
                     <label htmlFor="user_name">名称</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input onChange={this.props.onNodeNameChange} value={this.props.node.node_name} type="text" id="node_name" name="node_name" className="form-control "  placeholder="节点名称"    />
                         </div>
                     </div>

                     <label htmlFor="password">IP</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input onChange={this.props.onNodeIpChange} value={this.props.node.node_ip} type="text" id="node_ip" name="node_ip" className="form-control "   placeholder="节点IP"   />
                         </div>
                     </div>

                     <label htmlFor="email">端口</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input  onChange={this.props.onNodePortChange} value={this.props.node.node_port}  type="text" id="node_port" name="node_port" className="form-control "  placeholder="通讯端口"    />
                         </div>
                     </div>

                     <label htmlFor="email">通讯密钥</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input  onChange={this.props.onNodeKeyChange} value={this.props.node.node_key}  type="text" id="node_key" name="node_key" className="form-control "  placeholder="通讯密钥"    />
                         </div>
                     </div>

                     <label htmlFor="email">默认加密方式</label>
                     <div className="form-group">
                       <div className="form-line">
                         <select className="form-control selectpicker  show-tick" id="node_encry_mode" name="node_encry_mode" value={this.props.node.node_encry_mode} onChange={this.props.onNodeEncryModeChange} data-live-search="true">
                           <option value="">-- 请选择 --</option>
                           <optgroup label="Sodium">
                             <option>chacha20-poly1305</option>
                             <option>chacha20-ietf-poly1305</option>
                             <option>xchacha20-ietf-poly1305</option>
                             <option>sodium:aes-256-gcm</option>
                             <option>salsa20</option>
                             <option>chacha20</option>
                             <option>chacha20-ietf</option>
                           </optgroup>

                           <optgroup label="Sodium 1.0.12">
                             <option>xchacha20</option>
                           </optgroup>

                           <optgroup label="OpenSSL">
                             <option>aes-128-gcm</option>
                             <option>aes-192-gcm</option>
                             <option>aes-256-gcm</option>
                             <option>aes-128-cfb</option>
                             <option>aes-192-cfb</option>
                             <option>aes-256-cfb</option>
                             <option>aes-128-ofb</option>
                             <option>aes-192-ofb</option>
                             <option>aes-256-ofb</option>
                             <option>aes-128-ctr</option>
                             <option>aes-192-ctr</option>
                             <option>aes-256-ctr</option>
                             <option>camellia-128-cfb</option>
                             <option>camellia-192-cfb</option>
                             <option>camellia-256-cfb</option>
                             <option>bf-cfb</option>
                             <option>cast5-cfb</option>
                             <option>des-cfb</option>
                             <option>idea-cfb</option>
                             <option>rc2-cfb</option>
                             <option>seed-cfb</option>
                             <option>rc4</option>
                             <option>rc4-md5</option>
                             <option>table</option>
                           </optgroup>

                           <optgroup label="OpenSSL 1.1">
                             <option>aes-128-ocb</option>
                             <option>aes-192-ocb</option>
                             <option>aes-256-ocb</option>
                           </optgroup>
                           <optgroup label="mbedTLS">
                             <option>mbedtls:aes-128-cfb128</option>
                             <option>mbedtls:aes-192-cfb128</option>
                             <option>mbedtls:aes-256-cfb128</option>
                             <option>mbedtls:aes-128-ctr</option>
                             <option>mbedtls:aes-192-ctr</option>
                             <option>mbedtls:aes-256-ctr</option>
                             <option>mbedtls:camellia-128-cfb128</option>
                             <option>mbedtls:camellia-192-cfb128</option>
                             <option>mbedtls:camellia-256-cfb128</option>
                             <option>mbedtls:aes-128-gcm</option>
                             <option>mbedtls:aes-192-gcm</option>
                             <option>mbedtls:aes-256-gcm</option>
                           </optgroup>
                         </select>
                       </div>
                     </div>

                     <button type="submit" className="btn btn-primary btn-block m-t-15 waves-effect ">提交</button>
                     <button type="button" className="btn btn-default btn-block m-t-15 waves-effect " onClick={this.props.onCancel}>取消</button>
                 </form>
             </div>
         </div>
    )

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(EditNodeForm);
