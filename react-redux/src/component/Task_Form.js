import React, { Component } from 'react';

class Task_Form extends Component {

    constructor() {
        super()
        this.state = {
            task: ''
        }
    }

    inputchange=(event)=>{
        this.setState({task:event.target.value})
    }

    render() {
        return (
            <form>
                <label>
                    Enter New task
                    <input onChange={this.inputchange} />
                </label><br/>
                

                <button onClick={this.handlesubmit}>
                    DONE
                 </button><br/>
                 <label>
                    {this.state.task}
                 <input
                        name={this.state.task}
                        type="checkbox"
                        checked={this.state.task}
                        onChange={this.handleInputChange} />
                </label><br />
                <br /><br />
                {this.state.tasks}
            </form>
        )
    }
}


export default Task_Form;