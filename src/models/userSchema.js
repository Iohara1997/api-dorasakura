import mongoose from "../../database.js";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("users", userSchema);

export default User;
