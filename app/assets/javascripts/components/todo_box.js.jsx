var TodoBox = React.createClass({

  getInitialState: function() {
    return {todos: []};
  },

  addTodo: function(todo){
    console.log('adding todo', todo)
    this.state.todos.unshift(todo);
    this.forceUpdate();
  },

  removeTodo: function(todo) {
    var todos = this.state.todos;
    var index = todos.indexOf(todo)
    App.deleteTodo(todo);
    if (index > -1) {
      todos.splice(index, 1);
    }
    this.setState({todos: todos});
  },

  completeTodo: function(todo){
    App.finishTodo(todo).then(function(){
      this.forceUpdate();
    }.bind(this))

  },

  unCompleteTodo: function(todo){
    App.unFinishTodo(todo).then(function(){
      this.forceUpdate();
    }.bind(this))

  },

  setTodos: function(todos){
    this.setState({todos: todos});
  },

  loadTodos: function() {
    App.allTodos().done(this.setTodos).fail(function(xhr, status, err) {
      console.error(status, err.toString());
    });
  },

  createTodo: function(todo) {
    this.addTodo(todo);
    App.createTodo(todo);
  },

  componentDidMount: function() {
    this.loadTodos();
  },

  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoForm onTodoSubmit={this.createTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} completeTodo={this.completeTodo} unCompleteTodo={this.unCompleteTodo} />
      </div>
    );
  }
});

