#!/bin/bash

mkdir -p src/build

# Compile api.cpp into WebAssembly using the Emscripten C++ Compiler (em++)
# The --bind option indicates that the EM_BIND bindings are generated
em++ --bind -o src/build/api.js src/cpp/api.cpp -s WASM=1