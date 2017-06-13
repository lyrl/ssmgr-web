import React from 'react';

class ListErrors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentWillReceiveProps(props) {
        if (props.errors !== this.state.errors) {
            this.setState({errors: props.errors});
            setTimeout(this.handleTimeout.bind(this), 5000);
        }
    }

    handleTimeout() {
        this.setState({errors: null});
    }

  render() {
      console.log(this.state.errors);
      if (this.state.errors) {
          return <div className="alert alert-danger" role="alert">{this.state.errors.message}</div>;
      } else {
          return null;
      }
  }
}

export default ListErrors;
