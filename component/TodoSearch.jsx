var React= require('react');

class TodoSearch extends React.Component
{
    render()
    {
        return(
                <div>
                    <span><input type="text" ref="searchdata" onChange={this.props.searchlist} /> </span>
                </div>
            );
    }
    
}

export default TodoSearch;