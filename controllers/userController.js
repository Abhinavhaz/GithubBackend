const axios = require("axios");
const User =require("../models/User.js")

// Save GitHub User
exports.saveGitHubUser = async (req, res) => {
  const { username } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(200).json(user);
    }

    const response = await axios.get(`https://api.github.com/users/${username}`);
    const data = response.data;

    user = new User({
      username,
      name: data.name,
      location: data.location,
      bio: data.bio,
      avatar_url: data.avatar_url,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      followers: data.followers,
      following: data.following,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch or save user data." });
  }
};

// Add more functions here as needed (e.g., findFriends, searchUsers, etc.)
