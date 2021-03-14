# Todo App
This is a more advanced demo that recreates the todo app example with the API
module written in C++. This example shows more advanced features of Emscripten
such as making bindings and managing JavaScript callback functions within C++.

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

If you want to rebuild the WebAssembly without restarting the Docker container
you can run the following command.

```
docker exec c-wasm-demo bash build.sh
```

## Development Environment

If you open up the C++ files you will probably find that you will get a bunch of
highlighted errors. This is because your IDE does not know where to locate
the emscripten header files since they're actually in the Docker container. 

For convenience I've setup a dev-container configuration for VS Code. This 
allows you to essentially open up VS Code within the Docker container and will
allow you to have proper intellisense for the C++ files.

To open the dev environment you need the following VS Code extension: 
[https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Next make sure the Docker environment is running:

```
docker-compose up --build
```

Then open the `todo-app` folder in VS Code, press `CTRL + P` and start
typing and select `Remote-Containers: Reopen in Container`. VS Code will now
reopen within the Docker container.

If you are interested in learning more about VS Code dev containers (which
I highly recommend) you can start by reading the documentation on it 
[here](https://code.visualstudio.com/docs/remote/containers).