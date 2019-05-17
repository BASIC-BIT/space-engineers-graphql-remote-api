const { getPassthroughResolverForKeys } = require('../util/resolverUtils');

module.exports = getPassthroughResolverForKeys([
  'apiVersion',
  'queryTime',
]);