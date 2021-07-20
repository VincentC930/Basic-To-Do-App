import React from 'react'
import './TodoBox.css';

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.itemRemoval = this.itemRemoval.bind(this);
    }
    itemRemoval() {
        this.props.removeItem(this.props.item);
    }
    render() {
        return (
            <div className="box"> 
                <h1>{this.props.task}</h1>
                <p>{this.props.description}</p>
                <button onClick={this.itemRemoval}>Done!</button>
            </div>
        )
    }
}

export default TodoBox;