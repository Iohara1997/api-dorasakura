import { describe, it, before } from "mocha";
import { expect } from "chai";
import EasyGraphQLTester from "easygraphql-tester";
import doramaResolverMock from "./resolverMock/doramaResolverMock.js";
import doramaTypeDefs from "../src/typeDefs/doramaTypeDefs.js";

describe("Test Mutation", async () => {
  let tester;
  before(() => {
    tester = new EasyGraphQLTester(doramaTypeDefs, doramaResolverMock);
  });
  describe("Should not add a dorama", () => {
    it("Should not add a serie to the list of doramas", () => {
      const mutation = `
              mutation CreateDorama($dorama: DoramaInput!) {
                createDorama(dorama: $dorama!) {
                  id
                  title
                  summary
                  episodes
                  genre
                  year
                  trailer
                  image
                }
              }
            `;
      tester.test(false, mutation, { dorama: {} });
    });
  });
  describe("Should add a dorama", async () => {
    it("Should add a serie to the list of doramas", async () => {
      const mutation = `
          mutation CreateDorama($dorama: DoramaInput) {
            createDorama(dorama: $dorama) {
              id
              title
              summary
              episodes
              genre
              year
              trailer
              image
            }
          }
        `;
      tester.test(true, mutation, {
        dorama: {
          title: "tesaaate",
          summary: "teste",
          episodes: 2,
          genre: "teste",
          year: 1,
          trailer: "teste",
          image: "teste",
        },
      });
    });
    it("Should return createDorama in mock mutation", () => {
      const mutation = `
                  mutation CreateDorama($dorama: DoramaInput) {
                    createDorama(dorama: $dorama) {
                      id
                      title
                      summary
                      episodes
                      genre
                      year
                      trailer
                      image
                    }
                  }
                `;
      const fixture = {
        data: {
          createDorama: {
            id: "1",
            title: "tesaaate",
            summary: "teste",
            episodes: 2,
            genre: "teste",
            year: 1,
            trailer: "teste",
            image: "teste",
          },
        },
      };
      tester.setFixture(fixture, { autoMock: false });
      const response = tester.mock({ query: mutation });

      const error = response.errors;
      const data = response.data;

      expect(error).to.be.empty;
      expect(data).to.include.all.keys("createDorama");
    });
  });
});
