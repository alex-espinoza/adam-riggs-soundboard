var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Soundbites = require('./Soundbites')

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Soundbites />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
