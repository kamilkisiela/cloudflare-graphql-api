# Cloudflare GraphQL API

[GraphQL Mesh](https://the-guild.dev/graphql/mesh) converts [OpenAPI schema](https://github.com/cloudflare/api-schemas) to GraphQL schema.

It uses;

- [GraphQL Mesh's OpenAPI Handler](https://the-guild.dev/graphql/mesh/docs/handlers/openapi) to convert OAS to GraphQL
- [Response Caching Plugin](https://the-guild.dev/graphql/mesh/docs/plugins/response-caching) to cache the responses with TTL to reduce the network traffic and latency
- [KV Cache](https://the-guild.dev/graphql/mesh/docs/cache/cfwKv) to store cache entries
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-cloudflare-workers) which is a platform-agnostic JavaScript GraphQL Server
