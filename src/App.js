import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Form from './Form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    }
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  removeItem(task) {
    let tasks = this.state.todoItems;
    tasks = tasks.filter(currTask => currTask.id !== task.id);
    this.setState({todoItems: tasks});
  }
  addItem(task) {
    let tasks = this.state.todoItems;
    tasks.push(task);
    this.setState({todoItems: tasks});
  }

  render() {
    return (
      
      <div>
        <Form addItem={this.addItem} todoItems={this.state.todoItems} />
        <TodoList todoItems={this.state.todoItems} removeItem={this.removeItem} addItem={this.addItem} />
        
      </div>
      
    )
  }
}

export default App;
