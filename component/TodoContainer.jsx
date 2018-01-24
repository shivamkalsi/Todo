var React=require('react');

class TodoContainer extends React.Component
{
    render()
    {
        return(
                <div text-align="center">
                    <div className="callout">
                        {this.props.children}
                    </div>
                </div>
            );
    }
}

export default TodoContainer;
