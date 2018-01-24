var React=require('react');

import TodoContainer from './TodoContainer.jsx';
import TodoSearch from './TodoSearch.jsx';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

class TodoApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            todoData:['1','2','3','4','5','56']
        };
        this.updateStateData=this.updateStateData.bind(this);
    }
    
    updateStateData(insData)
    {
        //alert(insData);
        this.setState({
                todoData:this.state.todoData.push(insData)
            });
     console.log(this.state.todoData);       
    }
    
    render()
    {
        return(
                <div>
                    <h1>Todo List</h1>
                    <TodoContainer>
                        <TodoSearch />
                        <TodoList TodoData={this.state.todoData} />
                        <TodoForm  updateStateData={this.updateStateData}/>
                    </TodoContainer>
                </div>
            );
    }
}

export default TodoApp;