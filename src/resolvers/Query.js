const { query } = require('../broker/remoteRestApi');
import { sortNumericallyByKey } from "../util/sorters";

async function gridsQueryResolver (parent, {
  topBlocksCount,
  topPCU,
  aboveSpeed,
} = {}) {
  let outputGrids = (await query('v1/session/grids', { text: false })).Grids;

  if(aboveSpeed) {
    outputGrids = outputGrids.filter(({ LinearSpeed }) => LinearSpeed > aboveSpeed);
  }

  if(topBlocksCount) {
    return outputGrids.sort(sortNumericallyByKey('BlocksCount')).splice(0, topBlocksCount);
  }

  if(topPCU) {
    return outputGrids.sort(sortNumericallyByKey('PCU')).splice(0, topPCU);
  }

  return outputGrids;
}

async function floatingObjectsQueryResolver (parent, {
  aboveSpeed,
  aboveDistanceToPlayer,
} = {}) {
  let outputFloatingObjects = (await query('v1/session/floatingObjects', { text: false })).FloatingObjects;

  if(aboveSpeed) {
    outputFloatingObjects = outputFloatingObjects.filter(({ LinearSpeed }) => LinearSpeed > aboveSpeed);
  }

  if(aboveDistanceToPlayer) {
    outputFloatingObjects = outputFloatingObjects.filter(({ DistanceToPlayer }) => DistanceToPlayer > aboveDistanceToPlayer);
  }

  return outputFloatingObjects;
}

export default {
  ping: async () => (await query('v1/server/ping', { text: false })).Result,
  server: async () => (await query('v1/server', { text: false })),
  api: async () => (await query('api', { text: false })),
  planets: async () => (await query('v1/session/planets', { text: false })).Planets,
  asteroids: async () => (await query('v1/session/asteroids', { text: false })).Asteroids,
  players: async () => (await query('v1/session/players', { text: false })).Players,
  chat: async () => (await query('v1/session/chat', { text: false })).Messages,
  grids: gridsQueryResolver,
  floatingObjects: floatingObjectsQueryResolver,
  query: async (parent, { url }) => (await query(url)),
};