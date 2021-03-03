FROM emscripten/emsdk

WORKDIR /app

# Install global packages
RUN npm install -g browser-sync

COPY . .

RUN bash build.sh

# Build the WASM and run Browser-Sync
CMD [ "bash", "start.sh" ]