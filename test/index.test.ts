import { expect, test, describe } from "bun:test";
import { levelOfAwesomeness } from "../src/index";

describe("levelOfAwesomeness", () => {
  test("returns 'Awesome' when followsJade is true", () => {
    expect(levelOfAwesomeness(["Jade"])).toBe("Awesome");
  });

  test("returns 'Lame' when followsJade is false", () => {
    expect(levelOfAwesomeness(["John", "Jane"])).toBe("Lame");
  });

  test("returns 'Lame' when followsJade is not provided", () => {
    expect(levelOfAwesomeness([])).toBe("Lame");
  });
});
