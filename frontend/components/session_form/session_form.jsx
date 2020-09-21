import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", age: 0, gender: ""}
    }

    render() {
        return(
            <div>
                <h1>What's next in music is first on Boom</h1>
                <form>
                    <label>Email:
                        <input 
                            type="text" 
                            value={this.state.email} 
                            className="login-input"/>
                    </label>
                    <br/>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            className="login-input" />
                    </label>
                    <button className="login-button">{this.props.formType}</button>
                </form>
            </div>

        )
    }
};

export default SessionForm;