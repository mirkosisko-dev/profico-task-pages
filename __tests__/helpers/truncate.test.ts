import { truncate } from "@/helpers/truncate";

describe("truncate Function", () => {
  it("returns the original string if it is shorter than the maximum length", () => {
    const result = truncate("Hello, World!", 15);
    expect(result).toBe("Hello, World!");
  });

  it("returns the original string if it is equal to the maximum length", () => {
    const result = truncate("Hello, World!", 13);
    expect(result).toBe("Hello, World!");
  });

  it("truncates the string to the specified maximum length with ellipsis", () => {
    const result = truncate("Hello, World!", 10);
    expect(result).toBe("Hello, Wor...");
  });

  it("returns an empty string if the input string is empty", () => {
    const result = truncate("", 10);
    expect(result).toBe("");
  });

  it("handles special characters and unicode correctly", () => {
    const result = truncate("🚀 Special Characters ✨", 8);
    expect(result).toBe("🚀 Speci...");
  });
});
