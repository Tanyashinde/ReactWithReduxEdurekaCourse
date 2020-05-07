import React,{Component} from 'react';
import CourseList from './CourseList';

const url= 'http://localhost:8900/posts'
class Courses extends Component{

    constructor(props){
        super(props);

        this.state={
            courses: ''
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>Course details:</h1>
                <CourseList datalist={this.state.courses} />
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,
            { Method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ courses: data })
            })
    }
}



export default Courses;