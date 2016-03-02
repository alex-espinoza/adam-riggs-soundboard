var React = require('react');

require('../stylesheets/soundbites.css');

var Soundbites = React.createClass({
  getInitialState: function() {
    return {
      soundbites: [
        {'label': 'Awesome', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'awesome'},
        {'label': 'Fantastic', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'fantastic'},
        {'label': 'Great', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'great'},
        {'label': 'Mm mm mm', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'mm'},
        {'label': 'So I Used To Date This Gal', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'so'},
        {'label': 'Uhhhhhh', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'uhh'},
        {'label': 'Okay', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'okay'},
        {'label': 'Nothing', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'nothing'},
        {'label': 'Test', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'test'},
        {'label': 'Oh my god', 'src': 'http://www.noiseaddicts.com/samples_1w72b820/2247.mp3', id: 'oh'},
      ]
    }
  },

  playSoundbite: function(soundbite, e) {
    var audio = document.getElementById(soundbite.id);
    audio.play();
  },

  render: function() {
    var soundbites = this.state.soundbites.map(function(soundbite, index) {
      var boundPlaySoundbite = this.playSoundbite.bind(this, soundbite);

      return (
        <div className="small-12 large-6 columns soundbite" key={index}>
          <div onClick={boundPlaySoundbite}>
            <h3>{soundbite.label}</h3>
            <audio id={soundbite.id} src={soundbite.src}></audio>
          </div>
        </div>
      )
    }, this);

    return (
      <div className="row">
        {soundbites}
      </div>
    )
  }
});

module.exports = Soundbites;
