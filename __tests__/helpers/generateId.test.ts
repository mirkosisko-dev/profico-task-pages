import { generateId } from "@/helpers/generateId";

describe("generateId Function", () => {
  it("returns the concatenation of publishedAt and url", () => {
    const publishedAt = "2023-01-01T12:00:00Z";
    const url = "/example-url";
    const result = generateId(publishedAt, url);
    expect(result).toBe(publishedAt + url);
  });

  it("handles empty string inputs correctly", () => {
    const result = generateId("", "");
    expect(result).toBe("");
  });

  it("handles different types of characters in inputs", () => {
    const publishedAt = "2023-01-01T12:00:00Z";
    const url = "/special-!@#$%^&*()-_=+[]{}|;:'\",.<>?`~characters";
    const result = generateId(publishedAt, url);
    expect(result).toBe(publishedAt + url);
  });
});
