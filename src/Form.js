import React from 'react';

import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeTask = this.handleChangeTask.bind(this);
        this.state = {
            task: "",
            description: ""
        };
    }
    
    submitHandler(event) {
        event.preventDefault();
        const inputTask = this.state.task;
        const inputDesc = this.state.description;
        let idNum = this.props.todoItems.length + 1;
        console.log(idNum);
        const objectToAdd = {
            id: idNum, 
            task: inputTask,
            description: inputDesc
        }
        this.props.addItem(objectToAdd);

        
    }
    handleChangeTask(event) {
        this.setState({task: event.target.value});
    }
    handleChangeDesc(event) {
        this.setState({description: event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Add task</h1>
                <div id="field1">
                    <label htmlFor="task">Task</label>
                    <input type="text" required id="task" onChange={this.handleChangeTask} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" required id="description" onChange={this.handleChangeDesc} />
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;