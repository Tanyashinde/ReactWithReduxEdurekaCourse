import React, { Fragment, Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Edureka react with redux course',
        }
    }
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand">Edureka</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Movies">Movies</Link></li>
                                <li><Link to="/Artist">Artist</Link></li>
                                <li><Link to="/Courses">Courses</Link></li>
                            </ul>
                            {/* <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

//function based
/*const Header=()=> {
    return(
        <Fragment>
            <header>
                <center>
                    <h2>Edureka react with redux course</h2>
                </center>
            </header>
            <hr/>
        </Fragment>
    )
}*/

export default Header;