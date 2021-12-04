> TODO: turn this into makefile

1. Build Image
`docker build . --tag react-query-demo-node-server`

2. Run Image
`docker run --name react-query-demo-node-server -p 8080:8080 -d react-query-demo-node-server`

3. Navigate Container Files
`docker exec -it react-query-demo-node-server bash`

4. Add User
`curl -X POST localhost:8080/users -d "name=me_3"`