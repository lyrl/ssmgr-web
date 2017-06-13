import React from 'react';

class ListErrors extends React.Component {
    render() {
        console.log(this.props.errors);
        if (this.props.errors) {
            return <div className="alert alert-danger" role="alert">{this.props.errors.message}</div>;
        } else {
            return null;
        }
    }
}

export default ListErrors;
