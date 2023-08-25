// audioPlayer.js

const audioPlayerLibrary = require('meyda');

function playAudio(audioURL) {
  audioPlayerLibrary.play(audioURL);
}

module.exports = {
  playAudio,
};
