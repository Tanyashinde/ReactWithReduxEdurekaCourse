import React,{Component} from 'react';
import UserList from './UserList';
const url='http://localhost:8901/posts'
class Users extends Component{
    constructor(props){
        super(props);

        this.state={
            users: ''
        }
    }
    render(){
        return(
            <React.Fragment>
               <h1>Users details:</h1>
                <UserList datalist={this.state.users} />
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,
            { Method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ users: data })
            })
    }
}



export default Users;