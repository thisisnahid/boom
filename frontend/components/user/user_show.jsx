import React from 'react';
import NavBar from '../navbar/navbar_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }
    
    render() {
        const { user } = this.props;
        return(
            <div className="user-show-page">
                <NavBar/>
                <h3 className="h3-email">{user.email}</h3>
                <p>this is {user.email}'s show page</p>
            </div>
        )
    }
};

export default UserShow;