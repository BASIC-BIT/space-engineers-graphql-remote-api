const { getPassthroughResolverForKeys } = require('../util/resolverUtils');

export default getPassthroughResolverForKeys([
  'SteamID',
  'DisplayName',
  'FactionName',
  'FactionTag',
  'PromoteLevel',
  'Ping',
]);