# Portfolio
This is my portfolio (Jonas Sjödin) which is made with [Typescript](https://www.typescriptlang.org/) + 
[ReactJS](https://reactjs.org/) and a simple [NodeJS](https://nodejs.org/en/) email server. The website is made with 
the ReactJS server side rendering library NextJS for better performance and SEO. 

## Configuration
The server uses the following environment variables:

| Variable         | Value                                          |
| ---------------- | ---------------------------------------------- |
| `EMAIL_HOST`     | [email.hosting.com](http://email.hosting.com/) |
| `EMAIL_PORT`     | 465                                            |
| `EMAIL_USERNAME` | user@email.com                                 |
| `EMAIL_PASSWORD` | password                                       |

## Development

#### Server
To run and develop the server, all that is required is to run `yarn` and `yarn start`.

#### Client
To run and develop the client, the server needs to be ran. This can be done by running the `./run.sh` script in the 
project root. Then the client can be started by running `yarn start``
 
## Deployment
Deploying the website is the easiest with [Docker](https://www.docker.com/) and 
[Docker Compose](https://docs.docker.com/compose/). Deploying is done by running the `deploy.sh`  which builds and 
publishes the code to docker hub script.
 
```yaml
version: "3.4"
services:
  # The server
  server:
    image: jonaskop/portfolio-server:latest
    env_file: .env
    ports:
      - 4000:4000

  # The webapp
  app:
    image: jonaskop/portfolio-client:latest
    ports:
      - 3000:3000

  # For auto updating the running images. 
  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /home/user/.docker/config.json:/config.json
    command: --interval 30
```

