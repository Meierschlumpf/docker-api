# Docker API

This application is a simple API that allows you to manage docker containers.

## Getting Started

To get started you need to run the following commands:

```bash
$ git clone https://github.com/Meierschlumpf/docker-api.git
$ cd docker-api
$ yarn install
$ yarn dev
```

## API

The API exposes the following endpoints:

### POST /api/containers/[id]/start

Starts a container.

### POST /api/containers/[id]/stop

Stops a container.

### POST /api/containers/[id]/restart

Restarts a container.

## Environment Variables

The following environment variables are required to run the application:

```env
DOCKER_HOST=<your docker host>
DOCKER_PORT=<your docker port>
```

You can simply create a `.env` file in the root directory of the project and add the variables there.
