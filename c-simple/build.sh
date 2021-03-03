#!/bin/bash

mkdir -p src/build

# Compile demo.c into WebAssembly using the Emscripten C Compiler (emcc)
# The outputted JavaScript is glue code to interface with the WASM module 
# better (for example printing to the console using printf is not natively
# supported in WASM so proxy JavaScript functions need to be made that
# call console.log whenever printf is called)
emcc -o src/build/demo.js src/demo.c -s WASM=1