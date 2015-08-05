var Todo = React.createClass({
  getInitialState: function(){
    return {
      inCompleted: true
    }
  },
  removeTodo: function(event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  },

  completeTodo: function(event) {
    event.preventDefault();
    this.props.completeTodo(this.props.todo);
    this.setState({inCompleted: !this.state.inCompleted});
  },

  unCompleteTodo: function(event) {
    event.preventDefault();
    this.props.unCompleteTodo(this.props.todo);
    this.setState({inCompleted: !this.state.inCompleted})
  },

  render: function() {
    var state = this.state.inCompleted ? "todo-incmplt" : "todo-cmplt"
    var todo = this.props.todo
    var balls = todo.completed ? 'uncomplete' : 'complete'
    return (
      <div className={state}>
        <div>
          {todo.description}
        </div>
        <div>
          by: {todo.name}
        </div>
        <a href="" onClick={this.removeTodo}> Delete </a>
        <a href="" onClick={this.completeTodo}> {balls} </a>
      </div>
    );
  }
});
