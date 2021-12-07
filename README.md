# React Query Demo

## Startup

1. Compose Docker Container

`docker compose up --build -d`

2. Run Migration On Docker Container

`docker exec reactquery_demo-server-1 npm run migrate`

3. Configure PGAdmin

- Login to PGAdmin
  - navigate to: `localhost:5050`
  - login:
    - username: `admin@admin.com`
    - password: `admin`
- Create & Configure Server
  - right click `Servers` > `Create` > `Server`
    - General > name: `reactQueryDemo`
    - Connection > Host
      - `db`
    - Connection > Port
      - `5432`
    - Connection > Username
      - `docker`
    - Connection > Password
      - `password`