import { handleRequest } from "../src/handler";

describe("Cloudflare Worker handler returns", () => {
  it("Hello, Worker!", async () => {
    const r = await handleRequest(new Request("/"));
    expect(await r.text()).toBe("Hello, Worker!");
  });
});
