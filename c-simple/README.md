# Emscripten C Simple Demo

This is a demo showing how to compile C to WebAssembly using Emscripten.

## Prerequisites

Setting up Emscripten is a little more involved than AssemblyScript. For
convenience the environment has been Dockerized. As such, you will need
Docker and Docker-Compose installed on your machine before you can run this
demo.

## Instructions

Start the Docker environment up. This handles building the WebAssembly code
and starting up the Browser-Sync server.

```
docker-compose up --build
```

Connect to `localhost:3000` to see the demo.

## Rebuild the WebAssembly

If you want to rebuild the WebAssembly without restarting the Docker containers
you can run the following command.

```
docker exec demo-c bash build.sh
```