import Dorama from "../models/doramaSchema.js";

const doramaResolver = {
  Query: {
    dorama() {
      return find();
    },
    dorama(_, { id }) {
      return findById(id);
    },
  },
  Mutation: {
    createDorama(_, { dorama }) {
      const newDorama = new Dorama(dorama);
      return newDorama.save();
    },
    updateDorama(_, { id, dorama }) {
      return findByIdAndUpdate(id, dorama, {
        new: true,
        useFindAndModify: false,
      });
    },
    deleteDorama(_, { id }) {
      return findByIdAndRemove(id, {
        useFindAndModify: false,
      });
    },
  },
};
export default doramaResolver;
