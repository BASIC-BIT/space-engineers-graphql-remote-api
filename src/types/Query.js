export default `{
  "Ping Space Engineers Remote API"
  ping: String
  
  "Get Server Information"
  server: Server
  
  "Get API Listing"
  api: String
  
  "Get Planets"
  planets: [Planet]
  
  "Get Asteroids"
  asteroids: [Asteroid]
  
  "Get Players"
  players: [Player]
  
  "Get Chat"
  chat: [ChatMessage]
  
  "Get Grids"
  grids(topBlocksCount: Int, topPCU: Int, aboveSpeed: Int): [Grid]
  
  "Get Floating Objects"
  floatingObjects(aboveSpeed: Int, aboveDistanceToPlayer: Int): [FloatingObject]
  
  "Query arbitrary GET endpoint"
  query(url: String): String
}`;