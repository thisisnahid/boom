import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'sign up'
});

const mapDispatchToProps = dispatch => ({
    processFrom: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);