// server.js

const express = require('express');
const bodyParser = require('body-parser');
const audioAnalyzer = require('./audioAnalyzer');
const audioPlayer = require('./audioPlayer');
const recommendationEngine = require('./recommendationEngine');

const app = express();

app.use(bodyParser.json());

app.post('/analyze', (req, res) => {
  const audioData = req.body.audio;
  const analysisResult = audioAnalyzer.analyzeAudio(audioData);
  res.json({ analysis: analysisResult });
});

app.post('/play', (req, res) => {
  const audioURL = req.body.audioURL;
  audioPlayer.playAudio(audioURL);
  res.json({ message: 'Audio playback started' });
});

app.get('/recommendations', (req, res) => {
  const userId = req.query.userId;
  const recommendations = recommendationEngine.generateRecommendations(userId);
  res.json({ recommendations: recommendations });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
