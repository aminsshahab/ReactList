var TodoList = React.createClass({
  render: function() {
    var removeTodo = this.props.removeTodo;
    var completeTodo = this.props.completeTodo;
    var unCompleteTodo = this.props.unCompleteTodo;
    var todos = this.props.todos.map(function (todo, index) {
      return <Todo key={index} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} unCompleteTodo={unCompleteTodo} />;
    });

    return <div className="todoList"> {todos} </div>;
  }
});
