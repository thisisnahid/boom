import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    render() {
        let { formType } = this.props;
        let otherFormType = "";
        if (formType === 'signup') {
            otherFormType = 'login';
        } else {
            otherFormType = 'signup';
        }

        let errorsArray = this.props.errors;
        if (this.props.errors.session) {
            errorsArray = this.props.errors.session.map(error => <p> {error} </p>)
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{formType}</h1>
                <br></br>
                or: <Link to={`/${otherFormType}`}>{otherFormType}</Link>
                <br></br>
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
                {errorsArray}
                <button>{formType}</button>
            </form>
        );
    }
}

export default SessionForm;
