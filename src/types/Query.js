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
  grids(
    sortBy: String,
    sortAscending: Boolean,
    aboveSpeed: Float,
    aboveDistanceToPlayer: Int,
    abovePCU: Int,
    aboveBlockCount: Int,
    belowBlockCount: Int,
    nameIncludes: String,
    nameDoesNotInclude: String,
    ownedBy: String,
    hasOwner: Boolean,
    isPowered: Boolean,
    isMoving: Boolean,
    entityId: ID,
    top: Int
  ): [Grid]
  
  "Get Floating Objects"
  floatingObjects(aboveSpeed: Int, aboveDistanceToPlayer: Int): [FloatingObject]
  
  "Query arbitrary GET endpoint"
  query(url: String): String
}`;