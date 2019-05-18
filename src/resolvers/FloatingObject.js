const { getPassthroughResolverForKeys } = require('../util/resolverUtils');

export default getPassthroughResolverForKeys([
  'DisplayName',
  'EntityId',
  'Kind',
  'Mass',
  'LinearSpeed',
  'DistanceToPlayer',
  'Position',
]);