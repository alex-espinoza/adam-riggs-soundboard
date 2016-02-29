var React = require('react');

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
    console.log(this.state.soundbites);

    return (
      <div className="row">
        <div className="small-12 columns">
          <div>Testing</div>
        </div>
      </div>
    )
  }
});

module.exports = Soundbites;
