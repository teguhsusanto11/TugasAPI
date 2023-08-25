// Impor modul
const express = require('express');
const bodyParser = require('body-parser');
const audioAnalyzer = require('meyda'); 
const audioPlayer = require('meyda');
const recommendationEngine = require('meyda');

// Create an instance of the Express app
const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Endpoint for audio analysis
app.post('/analyze', (req, res) => {
  const audioData = req.body.audio; // Audio data in some format (e.g., audio file or URL)

  // Perform audio analysis using the audioAnalyzer library
  const analysisResult = audioAnalyzer.analyze(audioData);

  res.json({ analysis: analysisResult });
});

// Endpoint for audio playback
app.post('/play', (req, res) => {
  const audioURL = req.body.audioURL; // URL of the audio to be played

  // Use the audioPlayer library to play the audio
  audioPlayer.play(audioURL);

  res.json({ message: 'Audio playback started' });
});

// Endpoint for getting music recommendations
app.get('/recommendations', (req, res) => {
  const userId = req.query.userId; // User ID for personalized recommendations

  // Generate music recommendations using the recommendationEngine library
  const recommendations = recommendationEngine.generateRecommendations(userId);

  res.json({ recommendations: recommendations });
});

// Start the Express server
const port = 3000; // Port number for the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
