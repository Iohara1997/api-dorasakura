import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import User from "../models/userSchema.js";
import config from "../../config";

const userResolver = {
  Query: {
    async me(_, args, { user }) {
      if (!user) throw new Error("You are not authenticated");
      return await User.findById(user.id);
    },
    async user(root, { id }, { user }) {
      try {
        if (!user) throw new Error("You are not authenticated!");
        return await User.findById(id);
      } catch (error) {
        throw new Error(error.message);
      }
    },
    async allUsers(root, args, { user }) {
      try {
        if (!user) throw new Error("You are not authenticated!");
        return await User.find({});
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    async registerUser(root, { username, email, password }) {
      try {
        const newUser = new User({
          email: email,
          username: username,
          password: await hash(password, 10),
        });
        const userSaved = await newUser.save();
        const token = sign(
          { id: userSaved.id, email: userSaved.email },
          config.jwtConfig,
          { expiresIn: "1y" }
        );
        return {
          token,
          username: userSaved.username,
          email: userSaved.email,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    async login(_, { email, password }) {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          throw new Error("No user with that email");
        }
        const isValid = await compare(password, user.password);
        if (!isValid) {
          throw new Error("Incorrect password");
        }
        const token = sign(
          { id: user.id, email: user.email },
          config.jwtConfig,
          { expiresIn: "1d" }
        );
        return {
          token,
          username: user.username,
          email: user.email,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};
export default userResolver;
