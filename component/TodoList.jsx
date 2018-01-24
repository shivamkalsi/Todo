var React=require('react');

class TodoList extends React.Component
{
    render()
    {
        return( 
                <div className="todolist">
                    {
                    this.props.TodoData.map(function(item){
                     <div>item</div>  
                    }
                    )}
                </div>
            );
    }
}

export default TodoList;