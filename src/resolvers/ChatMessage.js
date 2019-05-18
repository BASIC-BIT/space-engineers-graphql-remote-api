const { getPassthroughResolverForKeys } = require('../util/resolverUtils');

export default getPassthroughResolverForKeys([
  'SteamID',
  'DisplayName',
  'Content',
  'Timestamp',
]);