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
        let name;
        if (user.username) {
            name = user.username;
        } else {
            name = user.email;
        }

        

        //header, info, insights
        return(
            <div className="user-show-page">
                <NavBar className="nav-bar-user-show" />
                <div className="user-show-page-container">
                    <header className="header-background">
                        <img className="profile-pic" src={user.img_url} alt="profile-pic"/>
                        <p className="user-name">{name}</p>
                    </header>
                </div>
            </div>
        )
    }
};

export default UserShow;