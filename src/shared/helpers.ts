const generateId = (publishedAt: string, url: string) => {
  return publishedAt + url;
};

export { generateId };
