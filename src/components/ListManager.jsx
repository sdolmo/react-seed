var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  // Called once in the Component life cycle - initializer
  getInitialState: function() {
    return {items: [], newItemText:''};
  },
  // onChange is called with every keystroke to store the most rencent data entered
  onChange: function(e) {
    // console.log(e) How does proxy work and how is information being passed along?(state and props)
    // Value is what the user sees in the input box which is then directed to newItemText so it updates accordingly
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e) {
    // Stop button from getting clicks since we are using form onSubmit
    e.preventDefault();

    // Grab current list of items
    var currentItems = this.state.items;

    // Add new item to the list
    currentItems.push(this.state.newItemText);

    // Update the main item list with the new list and the newItemText
    this.setState({items: currentItems, newItemText:''});
  },
  render: function() {
    // javascript object
    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {

    }

    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
    }

    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-info">
          <div style={headingStyle} className="panel-heading">
            <h3 className="panel-title">{this.props.title}</h3>
          </div>
          <div className="row panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="col-sm-9">
                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
              </div>
              <div className="col-sm-2">
                <button className="btn btn-info">Add</button>
              </div>
            </form>
          </div>
            <List items={this.state.items} />
        </div>
      </div>
    );
  }
});

module.exports = ListManager;
