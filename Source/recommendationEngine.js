// recommendationEngine.js

const recommendationLibrary = require('meyda');

function generateRecommendations(userId) {
  const recommendations = recommendationLibrary.generateRecommendations(userId);
  return recommendations;
}

module.exports = {
  generateRecommendations,
};
