import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const mapStateToProps = (state) => ({
    errors: state.errors,
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);