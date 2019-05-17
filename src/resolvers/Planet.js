const { getPassthroughResolverForKeys } = require('../util/resolverUtils');

module.exports = getPassthroughResolverForKeys([
  'DisplayName',
  'EntityId',
]);