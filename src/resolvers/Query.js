const { query } = require('../broker/remoteRestApi');

export default {
  ping: async () => (await query('v1/server/ping', { text: false })).Result,
  server: async () => (await query('v1/server', { text: false })),
  api: async () => (await query('api', { text: false })),
  planets: async () => (await query('v1/session/planets', { text: false })).Planets,
  asteroids: async () => (await query('v1/session/asteroids', { text: false })).Asteroids,
  players: async () => (await query('v1/session/players', { text: false })).Players,
  query: async (parent, { url }) => (await query(url)),
};