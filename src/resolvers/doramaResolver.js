import Dorama from "../models/doramaSchema.js";

const doramaResolver = {
  Query: {
    async allDoramas(root, args, { user }) {
      try {
        if (!user) throw new Error("You are not authenticated!");
        return await Dorama.find({});
      } catch (error) {
        throw new Error(error.message);
      }
    },
    async dorama(_, { id }, { user }) {
      if (!user) throw new Error("You are not authenticated!");
      return await Dorama.findById(id);
    },
  },
  Mutation: {
    async createDorama(_, { dorama }, { user }) {
      if (!user) throw new Error("You are not authenticated!");
      const newDorama = new Dorama(dorama);
      return await newDorama.save();
    },
    async updateDorama(_, { id, dorama }, { user }) {
      if (!user) throw new Error("You are not authenticated!");
      return await Dorama.findByIdAndUpdate(id, dorama, {
        new: true,
      });
    },
    async deleteDorama(_, { id }, { user }) {
      if (!user) throw new Error("You are not authenticated!");
      return await Dorama.findByIdAndRemove(id, {
        useFindAndModify: false,
      });
    },
  },
};
export default doramaResolver;
