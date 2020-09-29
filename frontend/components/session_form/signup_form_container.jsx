import { connect } from 'react-redux';
import { signup, login, receiveErrors, clearErrors } from '../../actions/session_actions';
import { closeModal }from '../../actions/modal_actions';
import SessionForm from './session_form';
import React from 'react';

const mapStateToProps = (state) => ({
    errors: state.errors,
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)).then(() => closeModal()),
    processForm: (user) => dispatch(signup(user).then(closeModal())),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);