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
  
  "Query arbitrary GET endpoint"
  query(url: String): String
}`;