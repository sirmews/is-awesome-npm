import { expect, test, describe } from "bun:test";
import { levelOfAwesomeness } from "../src/index";

describe("levelOfAwesomeness", () => {
  test("returns 'Awesome' when string contains 'Jade'", () => {
    expect(levelOfAwesomeness(["Jade"])).toBe("Awesome");
  });

  test("returns 'Lame' when string does not contain 'Jade'", () => {
    expect(levelOfAwesomeness(["John", "Jane"])).toBe("Lame");
  });

  test("returns 'Lame' when string does not contain 'Jade'", () => {
    expect(levelOfAwesomeness([])).toBe("Lame");
  });
});
