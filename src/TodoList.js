import React from 'react';
import './TodoList.css';
import TodoBox from './TodoBox';

class TodoList extends React.Component {
    render() {
        return (
            
            <div className="TodoList">
                {
                    this.props.todoItems.map((item, index) => {
                        return <TodoBox task={item.task} description={item.description} key={index} removeItem={this.props.removeItem} item={item} addItem={this.props.addItem} />
                    })
                }

            </div>
            
           //<h1>Hi</h1>
            
        )
        
    }
}

export default TodoList;