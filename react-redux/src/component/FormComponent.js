import React,{Component} from 'react';

class Formcomponent extends Component{

    constructor(){
        super();

        this.state={
            fname: '',
            lname: ''
        }
    }

    handlechangefname=(event)=>{
        this.setState({fname:event.target.value})
    }

    handlechangelname=(event)=>{
        this.setState({lname: event.target.value})
    }

    handlesubmit=()=>{
        var id= Math.floor(Math.random()*10000)
        var data={
            id: id,
            name: this.state.fname,
            lastName: this.state.lname
        }
        console.log(data)

    }

    render(){
        return(
            <div className="panel panel-info">
                <div className="panel-heading">
                    User Forms
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label>First name</label>&nbsp;&nbsp;<br/>
                        <input className="form-control" 
                        value={this.state.fname} onChange={this.handlechangefname}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Last name</label>&nbsp;&nbsp;<br/>
                        <input className="form-control" 
                        value={this.state.lname} onChange={this.handlechangelname}
                        />
                    </div><br/>
                    <button className="btn btn-success" onClick={this.handlesubmit}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }

}

export default Formcomponent;