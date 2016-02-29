var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="small-6 columns">
          <h1>Soundboard</h1>
        </div>
        <div className="small-6 columns">
          <img src="http://placehold.it/200x200" className="float-center" />
        </div>
      </div>
    )
  }
});

module.exports = Header;
