// const express = require("express");
// const { saveGitHubUser } = require("../controllers/userController");

// const router = express.Router();

// router.post("/", saveGitHubUser);

// module.exports = router;
const express = require("express");
const axios = require("axios"); // Use axios to make API calls
const router = express.Router();

// Search for users based on username
router.get("/search/:username", async (req, res) => {
  const { username } = req.params;
  
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${username}`);
    res.json(response.data.items); // Send the user list to frontend
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
});

// Get repositories for a given user
router.get("/:username/repos", async (req, res) => {
  const { username } = req.params;

  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    res.json(response.data); // Send the repository data to frontend
  } catch (error) {
    res.status(500).json({ message: "Error fetching repositories", error: error.message });
  }
});

module.exports = router;
