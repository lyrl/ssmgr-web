import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
});

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
     return (
         <div className="card">
             <div className="header">
                 <h2>
                     用户添加
                 </h2>
             </div>
             <div className="body">
                 <form>
                     <label htmlFor="email_address">用户名</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input onChange={this.props.handleUserNameChange} value={this.props.user_name} type="text" id="email_address" className="form-control" placeholder="请输入用户名" />
                         </div>
                     </div>

                     <label htmlFor="password">密码</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input onChange={this.props.handlePasswordChange} value={this.props.password} type="password" id="password" className="form-control" placeholder="请输入密码" />
                         </div>
                     </div>

                     <label htmlFor="email">邮箱</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input  onChange={this.props.handleEmailChange} value={this.props.password}  type="email" id="email" className="form-control" placeholder="输入邮箱" />
                         </div>
                     </div>

                     <button type="button" className="btn btn-primary btn-block m-t-15 waves-effect ">提交</button>
                     <button type="button" className="btn btn-default btn-block m-t-15 waves-effect " onClick={this.props.onCancel}>取消</button>
                 </form>
             </div>
         </div>
    )

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
