var React = require('react');

require('../stylesheets/soundbites.css');

var Soundbites = React.createClass({
  getInitialState: function() {
    return {
      soundbites: [
        {'label': 'Awesome', 'src': 'http://www.google.com'},
        {'label': 'Fantastic', 'src': 'http://www.google.com'},
        {'label': 'Great', 'src': 'http://www.google.com'},
        {'label': 'Mm mm mm', 'src': 'http://www.google.com'},
        {'label': 'So I Used To Date This Gal', 'src': 'http://www.google.com'},
        {'label': 'Uhhhhhh', 'src': 'http://www.google.com'},
        {'label': 'Okay', 'src': 'http://www.google.com'},
        {'label': 'Nothing', 'src': 'http://www.google.com'},
        {'label': 'Test', 'src': 'http://www.google.com'},
        {'label': 'Oh my god', 'src': 'http://www.google.com'},
      ]
    }
  },

  render: function() {
    var soundbites = this.state.soundbites.map(function(soundbite, index) {
      return (
        <div className="small-12 large-6 columns soundbite" key={index}>
          <button><h3>{soundbite.label}</h3></button>
        </div>
      )
    });

    return (
      <div className="row">
        {soundbites}
      </div>
    )
  }
});

module.exports = Soundbites;
