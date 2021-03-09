FROM emscripten/emsdk

WORKDIR /app

# Install global packages
RUN npm install -g browser-sync

# Copy in our files to the container
COPY . .

# Build the WASM and run Browser-Sync
CMD [ "bash", "start.sh" ]