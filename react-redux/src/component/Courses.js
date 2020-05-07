import React, { Component } from 'react';
import CourseList from './CourseList';

const url = "http://localhost:8900/posts"

class Courses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            course: ''
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>User details:</h1>
                <CourseList datalist={this.state.course} />
                <center></center>
                <br /><br />
            </React.Fragment>
        )
    }
    componentDidMount() {
        fetch(url,
            { Method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ course: data })
            })
    }
}

export default Courses;