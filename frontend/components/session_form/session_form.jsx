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
        this.demoUser = this.demoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    demoUser(e) {
        e.preventDefault();
        const demo = Object.assign({email: "iambeyalways@queenb.com", password: "beehive911", username: "Beyoncé" }); 
        this.props.login(demo)
            .then(this.props.closeModal);
    }

    render() {
        const { formType } = this.props;

        let errorsArray = this.props.errors;
        if (this.props.errors.session) {
            errorsArray = this.props.errors.session.map(error => <p> {error} </p>)
        };

        // let emailPlaceholder = document.getElementById("email");
        // emailPlaceholder.placeholder = "Your email address";
        

        const signupModal = (
            <div className="signup-form">
                <link rel="stylesheet" href="https://fontawesome.com/icons/smile?style=solid"/>
                <form onSubmit={this.handleSubmit} key={this.state.id}>
                    <button className="facebook-button" onClick={this.demoUser}>Continue With Demo User</button>
                    <br/>
                    <button className="google-button">Continue With Google</button>
                    <br />
                    <button className="apple-button">Continue With Apple</button>
                    <br />
                    <p className="or-text"> or </p>
                    <label>
                        <input 
                            className="signup-inputs"
                            type="text"
                            placeholder=" Your email address"
                            // value="Your email address"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <br></br>
                    <label>
                        <input
                            className="signup-inputs"
                            type="password"
                            placeholder=" Your password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    {errorsArray}
                    <br></br>
                    <button type="submit" className="continue-button">Continue</button>
                </form>
                        <a className="help-link" href="">Need help?</a>
                    <footer className="signup-footer">
                        <p>
                            We may use your email and devices for updates and tips on Boom's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
                        </p>
                        <p>
                            We may use information you provide us in order to show you targeted ads as described in our <a className="privacy-link" href="">Privacy Policy</a>.
                        </p>
                    </footer>
            </div>
        )

        const loginModal = (
            <div className="login-form">
                <link rel="stylesheet" href="https://fontawesome.com/icons/smile?style=solid" />
                <form onSubmit={this.handleSubmit} key={this.state.id}>
                    <button className="facebook-button" onClick={this.demoUser}>Continue With Demo User</button>
                    <br />
                    <button className="google-button">Continue With Google</button>
                    <br />
                    <button className="apple-button">Continue With Apple</button>
                    <br />
                    <p className="or-text"> or </p>
                    <label>
                        <input
                            className="login-inputs"
                            type="text"
                            placeholder=" Your email address"
                            // value="Your email address"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <br></br>
                    <label>
                        <input
                            className="login-inputs"
                            type="password"
                            placeholder=" Your password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    {errorsArray}
                    <br></br>
                    <button type="submit" className="continue-button">Continue</button>
                </form>
                <a className="help-link" href="">Need help?</a>
                <footer className="login-footer">
                    <p>
                        We may use your email and devices for updates and tips on Boom's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
                        </p>
                    <p>
                        We may use information you provide us in order to show you targeted ads as described in our <a className="privacy-link" href="">Privacy Policy</a>.
                        </p>
                </footer>
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
