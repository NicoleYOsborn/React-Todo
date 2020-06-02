import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const items= [
  {
      name: 'Make meal plan',
      id: 1,
      completed: false,
  },
  {
      name: 'Make grocery list',
      id: 2,
      completed: false,
  },
  {
      name: 'Buy groceries',
      id: 3,
      completed: false,
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      items: items,

    }
  };
addItem=(itemName)=>{
  const newItem={
    name: itemName,
    id: Date.now(),
    completed: false,
  };
  this.setState({
    items: [...this.state.items, newItem]
  });
};

toggleItem = itemId=>{
  this.setState({
    items: this.state.items.map(item=>{
      if(item.id === itemId){
        return{
          ...item,
          completed: !item.completed
        };
      }else{
        return item;
      }
    })
  });
};
  render() {


    return (
      <div className='App'>
        <div className = "header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList
        toggleItem={this.toggleItem}
        items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
