// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

// const clearCompleted = () => {
//     this.setState({
//       items: this.state.items.filter(item => 
//           !item.completed
//       )
//     })
//   }

const TodoList = props =>{

    return(
        <div className = 'todo-list'>
            {props.items.map(item=>(
                <Todo toggleItem = {props.toggleItem} key={item.id} item={item}/>
            ))}
            <button className = 'clear-btn' onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;