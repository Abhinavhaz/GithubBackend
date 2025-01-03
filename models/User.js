const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: String,
  location: String,
  bio: String,
  avatar_url: String,
  public_repos: Number,
  public_gists: Number,
  followers: Number,
  following: Number,
  friends: [String], // Consider ObjectIds if you use reference to other User documents
  created_at: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

// Optional: Adding index for faster lookups on username
UserSchema.index({ username: 1 });

module.exports = mongoose.model("User", UserSchema);
