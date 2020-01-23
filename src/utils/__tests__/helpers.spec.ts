import { isLastIndex } from "../helpers";

describe("isLastIndex helper function", () => {
  it("returns correct value", () => {
    const testArray = [1, 2, 3];
    const testIndex = 2;
    expect(isLastIndex(testArray, testIndex)).toBeTruthy();
  });
});
