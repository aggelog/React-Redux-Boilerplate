import React from 'react';
import { connect } from 'react-redux';

const immutableSRC = require('../../img/webpack.png');
const reactSRC = require('../../img/react.png');
const reduxSRC = require('../../img/redux.png');

const WelcomePage = props => (
    <div>
        <img src={reactSRC} role="presentation" />
        <img src={reduxSRC} role="presentation" />
        <img src={immutableSRC} role="presentation" />
        <h1>{props.message}</h1>
    </div>
);

WelcomePage.propTypes = {
    message: React.PropTypes.string
};


const mapStateToProps = state => ({
    message: state.getIn(['core', 'message'])
});

export default connect(mapStateToProps, null)(WelcomePage);
