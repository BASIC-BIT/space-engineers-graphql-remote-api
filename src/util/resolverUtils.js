const getPassthroughResolverForKeys = (keys) => {
  return keys
  .map(key => ({ [key]: (parent) => parent[key] }))
  .reduce((acc, cur) => ({ ...acc, ...cur }));
};

export {
  getPassthroughResolverForKeys,
};