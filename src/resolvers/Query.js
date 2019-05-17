const { query } = require('../broker/remoteRestApi');

module.exports = {
  ping: async () => (await query('v1/server/ping', { text: false })).Result,
  server: async () => (await query('v1/server', { text: false })),
  api: async () => (await query('api', { text: false })),
  planets: async () => (await query('v1/session/planets', { text: false })).Planets,
  query: async (parent, { url }) => (await query(url)),
};