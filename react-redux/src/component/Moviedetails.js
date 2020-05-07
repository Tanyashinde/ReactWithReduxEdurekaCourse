import React,{Component} from 'react';

class Moviedetails extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    render(){
        const {params} = this.props.match;
        return(
            <React.Fragment>
                <h1>Movies details for page id {params.id}</h1>
            </React.Fragment>
        )
    }
}

export default Moviedetails;