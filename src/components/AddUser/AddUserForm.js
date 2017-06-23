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
                 <ul className="header-dropdown m-r--5">
                     <li className="dropdown">
                         <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                             <i className="material-icons">more_vert</i>
                         </a>
                         <ul className="dropdown-menu pull-right">
                             <li><a href="javascript:void(0);">Action</a></li>
                             <li><a href="javascript:void(0);">Another action</a></li>
                             <li><a href="javascript:void(0);">Something else here</a></li>
                         </ul>
                     </li>
                 </ul>
             </div>
             <div className="body">
                 <form>
                     <label htmlFor="email_address">用户名</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input type="text" id="email_address" className="form-control" placeholder="请输入用户名" />
                         </div>
                     </div>

                     <label htmlFor="password">密码</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input type="password" id="password" className="form-control" placeholder="请输入密码" />
                         </div>
                     </div>

                     <label htmlFor="email">邮箱</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input type="email" id="email" className="form-control" placeholder="输入邮箱" />
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
