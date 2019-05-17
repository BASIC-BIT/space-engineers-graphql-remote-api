const { getPassthroughResolverForKeys } = require('../util/resolverUtils');

export default getPassthroughResolverForKeys([
  'apiVersion',
  'queryTime',
]);