import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';


class Menu extends React.Component {
    render() {
        let isActive = this.context.location.pathname === this.props.to;
        let className = isActive ? 'active' : '';

        return(
            <li className={className}>
                <Link to={this.props.to}>
                    <i className="material-icons">{this.props.icon}</i>
                    <span>{this.props.name}</span>
                </Link>
            </li>
        );
    }
}

Menu.contextTypes = {
    router: React.PropTypes.object,
    location: React.PropTypes.object
};


export default Menu;
