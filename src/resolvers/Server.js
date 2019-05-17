const { getPassthroughResolverForKeys } = require('../util/resolverUtils');

export default getPassthroughResolverForKeys([
  'Game',
  'IsReady',
  'PirateUsedPCU',
  'Players',
  'ServerId',
  'ServerName',
  'SimSpeed',
  'SimulationCpuLoad',
  'TotalTime',
  'UsedPCU',
  'Version',
  'WorldName',
]);