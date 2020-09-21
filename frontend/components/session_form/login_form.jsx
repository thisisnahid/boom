import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'login'
});

const mapDispatchToProps = dispatch => ({
    processFrom: user
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);