import React, { Component } from 'react';
import Fs from 'fs';

class EnquireForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            email: ''
        }
    }
    handlechangefname = (event) => {
        this.setState({ fname: event.target.value })
    }

    handlechangelname = (event) => {
        this.setState({ lname: event.target.value })
    }
    handlechangeemail = (event) => {
        this.setState({ email: event.target.value })
    }

    handlesubmit = () => {
        var id = Math.floor(Math.random() * 10000)
        var data = {
            id: id,
            name: this.state.fname,
            lastName: this.state.lname,
            email: this.state.email
        }
        console.log(data)
        data= JSON.stringify(data);

        Fs.writeFile("users.json",data);

    }
    render() {
        return (
            <React.Fragment>
                <center>
                    <h1>Enquire Form</h1>
                    <div>
                        <labe>Enter Name</labe>&nbsp;&nbsp;
                    <input value={this.state.fname} onChange={this.handlechangefname} />
                    </div><br />
                    <div>
                        <labe>Enter Last name</labe>&nbsp;&nbsp;
                    <input value={this.state.lname} onChange={this.handlechangelname} />
                    </div><br />
                    <div>
                        <labe>Enter email</labe>&nbsp;&nbsp;
                    <input value={this.state.email} onChange={this.handlechangeemail} />
                    </div><br />
                    <button onClick={this.handlesubmit}>
                        Submit
                </button>
                </center>
            </React.Fragment>
        )
    }
}

export default EnquireForm;