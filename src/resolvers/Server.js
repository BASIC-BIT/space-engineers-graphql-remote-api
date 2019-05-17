const { getPassthroughResolverForKeys } = require('../util/resolverUtils');

module.exports = getPassthroughResolverForKeys([
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