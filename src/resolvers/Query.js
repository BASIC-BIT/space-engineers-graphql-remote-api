const { query } = require('../broker/remoteRestApi');
import { sortNumericallyByKey } from "../util/sorters";
import { includes } from "../util/caseInsensitiveStringMatchers";

const FLOAT_TOLERANCE = 0.001;
async function gridsQueryResolver (parent, {
  sortBy,
  sortAscending = false,
  aboveSpeed,
  aboveDistanceToPlayer,
  abovePCU,
  nameIncludes,
  nameDoesNotInclude,
  ownedBy,
  hasOwner,
  isPowered,
  isMoving,
  entityId,
  top,
} = {}) {
  let outputGrids = (await query('v1/session/grids', { text: false })).Grids;

  if(aboveSpeed !== undefined) {
    outputGrids = outputGrids.filter(({ LinearSpeed }) => LinearSpeed - FLOAT_TOLERANCE > aboveSpeed);
  }

  if(aboveDistanceToPlayer) {
    outputGrids = outputGrids.filter(({ DistanceToPlayer }) => DistanceToPlayer > aboveDistanceToPlayer);
  }

  if(abovePCU) {
    outputGrids = outputGrids.filter(({ PCU }) => PCU > abovePCU);
  }

  if(nameIncludes) {
    outputGrids = outputGrids.filter(({ DisplayName }) => includes(DisplayName, nameIncludes));
  }

  if(nameDoesNotInclude) {
    outputGrids = outputGrids.filter(({ DisplayName }) => !includes(DisplayName, nameDoesNotInclude));
  }

  if(ownedBy) {
    outputGrids = outputGrids.filter(({ OwnerDisplayName }) => includes(OwnerDisplayName, ownedBy));
  }

  if(hasOwner !== undefined) {
    outputGrids = outputGrids.filter(({ OwnerDisplayName }) => hasOwner ? OwnerDisplayName.trim().length === 0 : OwnerDisplayName.trim().length > 0);
  }

  if(isPowered !== undefined) {
    outputGrids = outputGrids.filter(({ IsPowered }) => isPowered ? IsPowered : !IsPowered);
  }

  if(isMoving !== undefined) {
    outputGrids = outputGrids.filter(({ LinearSpeed }) => isMoving ? LinearSpeed - FLOAT_TOLERANCE > 0.0 : Math.abs(LinearSpeed) < FLOAT_TOLERANCE);
  }

  if(entityId) {
    outputGrids = outputGrids.filter(({ EntityId }) => EntityId == entityId);
  }

  if(sortBy) {
    outputGrids = outputGrids.sort(sortNumericallyByKey(sortBy, {
      descending: !sortAscending,
    }));
  }

  if(top) {
    return outputGrids.splice(0, top);
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