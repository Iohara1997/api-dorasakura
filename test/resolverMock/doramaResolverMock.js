import doramas from "./doramas.js";
const dorama = {
  id: "6334d8141fdcc6e06a0a5f99",
  title: "tesaaate",
  summary: "teste",
  episodes: 1,
  genre: "teste",
  year: 1,
  trailer: "teste",
  image: "teste",
};

const doramaResolverMock = {
  Query: {
    allDoramas() {
      try {
        return doramas;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    dorama(_, { id }) {
      return dorama;
    },
  },
  Mutation: {
    createDorama(_, args) {
      const dorama = {
        title: args.input.title,
        summary: args.input.summary,
        episodes: args.input.episodes,
        genre: args.input.genre,
        year: args.input.year,
        trailer: args.input.trailer,
        image: args.input.image,
      };
      doramas.push(dorama);
      return dorama;
    },
  },
};
export default doramaResolverMock;
