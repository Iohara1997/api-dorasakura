import { describe, it } from "mocha";
import chai from "chai";
import { makeExecutableSchema } from "@graphql-tools/schema";
import doramaTypeDefs from "../src/typeDefs/doramaTypeDefs.js";
import doramaResolverMock from "./resolverMock/doramaResolverMock.js";

const schema = makeExecutableSchema({
  typeDefs: doramaTypeDefs,
  doramaResolverMock,
});

chai.should();
describe("Test Static Schema Snapshot", () => {
  it("schema should contain types", () => {
    chai.assert.isNotNull(schema.getType("Dorama"));
    chai.assert.isDefined(schema.getType("Dorama"));
  });

  it("scheme should not contain unregistered types", () => {
    chai.assert.isUndefined(
      schema.getType("NotADefinedType", "Type should not be defined")
    );
  });
});
