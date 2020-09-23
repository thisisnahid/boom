import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal());
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    render() {
        const { formType } = this.props;

        let errorsArray = this.props.errors;
        if (this.props.errors.session) {
            errorsArray = this.props.errors.session.map(error => <p> {error} </p>)
        };
        

        const signupModal = (
            <div className="signup-form">
                <form onSubmit={this.handleSubmit} key={this.state.id}>
                    <p>Create your Boom account</p>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <br></br>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br></br>
                    {/* <link rel="stylesheet" href="">Need help?</link> */}
                    <p>
                        We may use your email and devices for updates and tips on Boom's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.

                        {/* We may use information you provide us in order to show you targeted ads as described in our <link rel="stylesheet" href="">Privacy Policy</link>. */}
                    </p>
                    {errorsArray}
                    <button>Continue</button>
                </form>
            </div>
        )

        const loginModal = (
            <div className="login-form">
                <form onSubmit={this.handleSubmit} key={this.state.id}>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <br></br>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br></br>
                    {/* <link rel="stylesheet" href="">Don't know your password?</link> */}
                    {errorsArray}
                    <button>Sign In</button>
                </form>
            </div>
        )

        let modal
        if (formType === 'signup') {
            modal = signupModal;
        } else {
            modal = loginModal;
        }


        return (
            <div className="session-form-container">
                {modal}
            </div>
        );
    }
}

export default SessionForm;
