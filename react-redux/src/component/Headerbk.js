import React, { Fragment, Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Edureka react with redux course',
            userinput: 'user Text'
        }
    }

    inputchange = (event) => {
        this.setState({ "userinput": event.target.value?event.target.value:"user Text" })
    }
    render() {
        return (
            <Fragment>
                <header className="header">
                    <center>
                        <h2 classname="logo">{this.state.title}</h2>
                        <h5>{this.props.headerdata}</h5>
                        <input onChange={this.inputchange} />
                        <p>{this.state.userinput}</p>
                    </center>

                </header>
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