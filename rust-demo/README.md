# Emscripten C Simple Demo

This is a demo showing how to compile Rust to WebAssembly using the wasm-bindgen

## Prerequisites

Setting up Rust is a little more involved than AssemblyScript. For
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
docker exec rust-wasm-demo bash build.sh
```

## Learn More

To learn more about compiling Rust to WebAssembly, checkout the official [documentation](https://rustwasm.github.io/docs/book/introduction.html) for it.

This demo was derived from the wasm-bindgen [Hello World](https://rustwasm.github.io/docs/wasm-bindgen/examples/hello-world.html) example.