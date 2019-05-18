const { query } = require('../broker/remoteRestApi');

export default {
  ping: async () => (await query('v1/server/ping', { text: false })).Result,
  server: async () => (await query('v1/server', { text: false })),
  api: async () => (await query('api', { text: false })),
  planets: async () => (await query('v1/session/planets', { text: false })).Planets,
  asteroids: async () => (await query('v1/session/asteroids', { text: false })).Asteroids,
  players: async () => (await query('v1/session/players', { text: false })).Players,
  chat: async () => (await query('v1/session/chat', { text: false })).Messages,
  grids: async () => (await query('v1/session/grids', { text: false })).Grids,
  floatingObjects: async () => (await query('v1/session/floatingObjects', { text: false })).FloatingObjects,
  query: async (parent, { url }) => (await query(url)),
};