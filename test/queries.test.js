import { describe, it, before } from "mocha";
import doramaTypeDefs from "../src/typeDefs/doramaTypeDefs.js";
import doramaResolverMock from "./resolverMock/doramaResolverMock.js";
import EasyGraphQLTester from "easygraphql-tester";

describe("Test Queries", () => {
  before(() => {
    tester = new EasyGraphQLTester(doramaTypeDefs, doramaResolverMock);
  });

  let tester;

  it("Should pass if the allDoramas query is valid", () => {
    const validQuery = `
    query AllDoramas {
      allDoramas {
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
    tester.test(true, validQuery);
  });

  it("Should pass if the dorama query is valid", () => {
    const validQuery = `
    query Dorama($doramaId: ID!) {
      dorama(id: $doramaId) {
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
    tester.test(true, validQuery, { doramaId: "6334d245819ee77f89d99d90" });
  });

  it("Should not pass if the doramaId is not present", () => {
    const validQuery = `
    query Dorama($doramaId: ID!) {
      dorama(id: $doramaId) {
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
    tester.test(false, validQuery);
  });
});
