# React Query Demo

> NODE: 17.3
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

## Usage

> Throttling the internet speed in your browser will result in a better display of the lifecycle

1. Navigate to application

    `localhost:3000`

2. Open React Query Dev Tools

    - click the flower icon in the lower left of the screen