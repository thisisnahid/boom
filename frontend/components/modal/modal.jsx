import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({ modal, closeModal, clearErrors }) {
    if (!modal) {
        return null;
    }
    let component;
    // debugger
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    function handleCloseModal() {
        closeModal();
        clearErrors();
    }
    
    return (
        <div className="modal-background" onClick={handleCloseModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);