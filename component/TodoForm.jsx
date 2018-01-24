var React=require('react');

class TodoForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.submitdata=this.submitdata.bind(this);
    }
    
    submitdata(e)
    {
        e.preventDefault();
        this.props.updateStateData(this.refs.insertlist.value);
    }
    
    render()
    {
        return(
                <div>
                    <form onSubmit={this.submitdata}>
                        <input type="text" ref="insertlist" /><br/>
                        <input type="submit" value="Add Data" />
                    </form>
                </div>
            );
    }
}

export default TodoForm;