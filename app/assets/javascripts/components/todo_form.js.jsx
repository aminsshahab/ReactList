var TodoForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var text = React.findDOMNode(this.refs.text).value.trim();
    var name = React.findDOMNode(this.refs.name).value.trim();
    if (!text || !name) {
      return;
    }
    this.props.onTodoSubmit({description: text, name: name});
    React.findDOMNode(this.refs.text).value = '';
    React.findDOMNode(this.refs.name).value = '';
    return;
  },
  render: function() {
    return (
      <form className="todoForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="name" ref="name"/>
        <input type="text" className="todoBox" placeholder="What needs to get done" ref="text"/>
        <input type="submit" value="Create" />
      </form>
    );
  }
});

