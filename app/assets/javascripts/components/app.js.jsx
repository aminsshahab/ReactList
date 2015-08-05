var App = {}

App.allTodos = function() {
  return $.ajax({
    method: 'get',
    url: '/todos',
    dataType: 'json',
  });
},


App.deleteTodo = function(todo){
  if (!todo || !todo.id){
    console.warn('bad todo', todo);
    throw new Error('cannot delete todo without an id');
  }
  return $.ajax({
    method: 'delete',
    url: '/todos/'+todo.id,
    dataType: 'json',
  });
};

App.createTodo = function(todo){
  var request = $.ajax({
    url: '/todos',
    dataType: 'json',
    type: 'POST',
    data: {todo: todo},
  });
  request.done(function(attributes){
    $.extend(todo, attributes)
  });
  request.fail(function(xhr, status, err) {
    console.error(this.props.url, status, err.toString());
    // todo remove the bad todo
  }.bind(this));
  return request
};

App.finishTodo = function(todo){
  var request = $.ajax({
    url: '/todos/'+todo.id,
    method: 'PUT',
    dataType: 'json',
    data: {todo: todo},
  });
  request.done(function(attributes){
    $.extend(todo, attributes)
  });
  request.fail(function(xhr, status, err) {
    console.error(this.props.url, status, err.toString());
  }.bind(this));
  return request
}

App.unFinishTodo = function(todo){
  var request = $.ajax({
    url: '/todos/'+todo.id,
    method: 'PUT',
    dataType: 'json',
    data: {todo: todo},
  });
  request.done(function(attributes){
    $.extend(todo, attributes)
  });
  request.fail(function(xhr, status, err) {
    console.error(this.props.url, status, err.toString());
  }.bind(this));
  return request
}



