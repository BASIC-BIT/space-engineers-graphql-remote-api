export default `{
  "Don't be shy, say hello!"
  hello: String
  
  "Ping Space Engineers Remote API"
  ping: String
  
  "Get Server Information"
  server: Server
  
  "Get API Listing"
  api: String
  
  "Get Planets"
  planets: [Planet]
  
  "Query arbitrary GET endpoint"
  query(url: String): String
}`;