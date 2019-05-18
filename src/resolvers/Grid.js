const { getPassthroughResolverForKeys } = require('../util/resolverUtils');

export default getPassthroughResolverForKeys([
  'DisplayName',
  'EntityId',
  'GridSize',
  'BlocksCount',
  'Mass',
  'LinearSpeed',
  'DistanceToPlayer',
  'OwnerSteamId',
  'OwnerDisplayName',
  'IsPowered',
  'PCU',
  'Position',
]);