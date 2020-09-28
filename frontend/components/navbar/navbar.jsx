import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaEnvelope, FaBell } from 'react-icons/fa';


const NavBar = (props) => {
    const { logout } = props;
    
    let history = useHistory();
   
    const handleLogout = () => {
        props.logout()
            .then(history.push("/"));
    }


    return (
            <div>
                <div className="navbar-container">
                    <div className="navbar-sub-container">
                        <nav>
                            <ul>
                                <div className="nav-left">
                              <li><img className="boom-logo-nav" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTEuOTgzIDUxMS45ODMiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTExLjk4MyA1MTEuOTgzIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im05Mi41MTUgMjE3LjM2NmMtNi42NzgtNC44OTYtMTYuMDY0LTMuNDU3LTIwLjk2NyAzLjIyNS0xNS4zMTkgMjAuODg1LTE1LjU0MyA0OS41MjEtLjAzIDcwLjc3NSA0Ljg4NCA2LjY5IDE0LjI2NSA4LjE1NyAyMC45NiAzLjI3MiA2LjY5MS00Ljg4NCA4LjE1Ni0xNC4yNjggMy4yNzItMjAuOTYtNy43Ni0xMC42MzEtNy42My0yNC45NTktLjAxMS0zNS4zNDYgNC45LTYuNjc5IDMuNDU2LTE2LjA2Ni0zLjIyNC0yMC45NjZ6Ii8+PHBhdGggZD0ibTM4LjgxNyAxODguOTQ4Yy03LjA4OS00LjI4OS0xNi4zMTItMi4wMTgtMjAuNTk4IDUuMDctMjUuNjMxIDQyLjM2Ny0yMi41OTkgODguMjIyLTEuMDAzIDEyMy45NDQgNC4yODggNy4wOSAxMy41MSA5LjM2IDIwLjU5OCA1LjA3NiA3LjA4OS00LjI4NiA5LjM2MS0xMy41MDggNS4wNzYtMjAuNTk4LTE2LjIyMS0yNi44MjctMTguNTM3LTYwLjYwMi45OTctOTIuODk2IDQuMjg5LTcuMDg3IDIuMDE5LTE2LjMwOS01LjA3LTIwLjU5NnoiLz48cGF0aCBkPSJtNDE5LjQ1MiAyMTcuMzY2Yy02LjY4MSA0LjktOC4xMjQgMTQuMjg3LTMuMjI1IDIwLjk2NyA3LjYyIDEwLjM4OSA3Ljc0OCAyNC43MTctLjAxMSAzNS4zNDYtNC44ODQgNi42OTItMy40MTkgMTYuMDc2IDMuMjcyIDIwLjk2IDYuNjg4IDQuODgxIDE2LjA3MyAzLjQyMSAyMC45Ni0zLjI3MiAxNS41MjItMjEuMjY4IDE1LjI4LTQ5LjkwMi0uMDMtNzAuNzc1LTQuODk5LTYuNjgzLTE0LjI4Ni04LjEyMy0yMC45NjYtMy4yMjZ6Ii8+PHBhdGggZD0ibTQ5NC43NDcgMTk0LjAxOGMtNC4yODctNy4wODgtMTMuNTEtOS4zNi0yMC41OTgtNS4wNy03LjA4OSA0LjI4Ny05LjM1OCAxMy41MS01LjA3IDIwLjU5OCAxNy4xOTcgMjguNDI4IDE3LjIxNiA2NC40MTgtLjAwMyA5Mi44OTYtNC4yODUgNy4wOS0yLjAxMyAxNi4zMTIgNS4wNzYgMjAuNTk4IDcuMDk1IDQuMjg3IDE2LjMxMyAyLjAwOSAyMC41OTgtNS4wNzYgMjIuOTU4LTM3Ljk3OCAyMi45OTgtODUuOTI2LS4wMDMtMTIzLjk0NnoiLz48cGF0aCBkPSJtMjU1Ljk4MyAzMDAuOTkyYy0yNC44MTMgMC00NSAyMC4xODctNDUgNDVzMjAuMTg3IDQ1IDQ1IDQ1IDQ1LTIwLjE4NyA0NS00NS0yMC4xODYtNDUtNDUtNDV6bTAgNjBjLTguMjg0IDAtMTUtNi43MTYtMTUtMTVzNi43MTYtMTUgMTUtMTUgMTUgNi43MTYgMTUgMTUtNi43MTUgMTUtMTUgMTV6Ii8+PHBhdGggZD0ibTI1NS45ODMgMTIwLjk5MmMtMjQuODEzIDAtNDUgMjAuMTg3LTQ1IDQ1czIwLjE4NyA0NSA0NSA0NSA0NS0yMC4xODcgNDUtNDUtMjAuMTg2LTQ1LTQ1LTQ1em0wIDYwYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE1IDE1LTE1IDE1eiIvPjxwYXRoIGQ9Im0zNDUuOTgzIDMwLjk5MmgtMTgwYy0yNC44MTMgMC00NSAyMC4xODctNDUgNDV2MzYwYzAgMjQuODEzIDIwLjE4NyA0NSA0NSA0NWgxODBjMjQuODEzIDAgNDUtMjAuMTg3IDQ1LTQ1di0zNjBjMC0yNC44MTQtMjAuMTg2LTQ1LTQ1LTQ1em0tOTAgMzkwYy00MS4zNTUgMC03NS0zMy42NDUtNzUtNzVzMzMuNjQ1LTc1IDc1LTc1IDc1IDMzLjY0NSA3NSA3NS0zMy42NDQgNzUtNzUgNzV6bTAtMTgwYy00MS4zNTUgMC03NS0zMy42NDUtNzUtNzVzMzMuNjQ1LTc1IDc1LTc1IDc1IDMzLjY0NSA3NSA3NS0zMy42NDQgNzUtNzUgNzV6Ii8+PC9nPjwvc3ZnPg==" /></li>
                                    <li><a href="" className="nav-links">Home</a></li>
                                    <li><a className="nav-links">Stream</a></li>
                                    <li><a className="nav-links">Library</a></li>
                                </div>
                                <li><input className="nav-search" type="text" placeholder="Search"/></li>
                                <div className="nav-right">
                                    <li><a className="nav-links">Try Pro</a></li>
                                    <li><a className="nav-links">Upload</a></li >
                                    {/* <li><a className="fas fa-bell"><img src="https://fontawesome.com/icons/bell?style=solid" alt=""/></a></li> */}
                                    <li className="bell-icon"><FaBell /> </li>
                                    <li className="envelope-icon"><FaEnvelope /></li>
                                    <li><a className="nav-links" onClick={() => handleLogout()}>Log Out</a></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    )
};

export default NavBar;