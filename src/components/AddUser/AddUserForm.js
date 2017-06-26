import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
});

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      window.$('#adduser').validate({
        submitHandler: form => {
          this.props.onSubmit();
        },
        rules: {
          'email': {
            required: true,
            email: true,

          },
          'password': {
            required: true
          },
          'user_name': {
            required: true,
            minlength: 3,
            maxlength: 15
          },

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
                     用户添加
                 </h2>
             </div>
             <div className="body">
                 <form id="adduser">
                     <label htmlFor="user_name">用户名</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input onChange={this.props.onChangeUserName} value={this.props.user_name} type="text" id="user_name" name="user_name" className="form-control "  placeholder="请输入用户名"  required  />
                         </div>
                     </div>

                     <label htmlFor="password">密码</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input onChange={this.props.onChangePassword} value={this.props.password} type="password" id="password" name="password" className="form-control "   placeholder="请输入密码"  required />
                         </div>
                     </div>

                     <label htmlFor="email">邮箱</label>
                     <div className="form-group">
                         <div className="form-line">
                             <input  onChange={this.props.onChangeEmail} value={this.props.email}  type="email" id="email" name="email" className="form-control "  placeholder="输入邮箱"  required  />
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


export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
