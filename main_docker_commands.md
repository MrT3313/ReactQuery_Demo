> TODO: turn into makefile

1. Run docker-compose.yml (builds new image)
`docker compose up --build -d`

2. Down docker-compose (and removes containers)
`docker compose down`

3. Enter psql Terminal
`psql -p 5432 -d react_query_demo_db -U docker`