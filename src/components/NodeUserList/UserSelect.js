import React from 'react';

class UserSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.$('#'+this.props.name).selectpicker({
      size: this.props.size ? this.props.size : 5,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      window.$('#'+this.props.name).selectpicker('val', nextProps.value);
    } else {
      window.$('#'+this.props.name).selectpicker('val', '');
    }
  }

  componentWillUnmount() {
    window.$('#'+this.props.name).selectpicker('destroy');
    window.$('#'+this.props.name).selectpicker({
      size: this.props.size ? this.props.size : 5,
    });
  }

  componentDidUpdate() {
    window.$('#'+this.props.name).selectpicker('destroy');

    window.$('#'+this.props.name).selectpicker({
      size: this.props.size ? this.props.size : 5,
    });
  }

  render() {
    let users = null;

    console.log('this.props.users:' + users);

    if (this.props.users) {
      users = this.props.users.map(user => { return <option>{user.user_name}</option> });
      console.log('this.props.users:' + users);
    }

    return <select className="form-control selectpicker  show-tick" id={this.props.name} name={this.props.name} onChange={this.props.onChange}  data-live-search="true">
      <option value="">-- 请选择 --</option>
      {users}
    </select>
  }

}

export default UserSelect;