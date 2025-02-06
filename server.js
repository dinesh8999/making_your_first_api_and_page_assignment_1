const express = require('express');
const app = express();

// GET /assistant/greet endpoint
app.get('/assistant/greet', (req, res) => {
  const name = req.query.name || 'Guest';  // Default to 'Guest' if no name is provided

  // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
  const dayOfWeek = new Date().getDay();
  let dayMessage = '';

  // Set a cheerful message based on the day of the week
  switch (dayOfWeek) {
    case 0:
      dayMessage = "It's Sunday, time to relax!";
      break;
    case 1:
      dayMessage = "Happy Monday! Start your week with energy!";
      break;
    case 2:
      dayMessage = "It's Tuesday, keep going strong!";
      break;
    case 3:
      dayMessage = "Happy Wednesday! You're halfway through the week!";
      break;
    case 4:
      dayMessage = "It's Thursday, keep up the great work!";
      break;
    case 5:
      dayMessage = "It's Friday! The weekend is near!";
      break;
    case 6:
      dayMessage = "It's Saturday, enjoy your day!";
      break;
    default:
      dayMessage = "Have a wonderful day!";
      break;
  }

  // Return a JSON response with the personalized greeting and day-specific message
  res.json({
    welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
    dayMessage: dayMessage
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
