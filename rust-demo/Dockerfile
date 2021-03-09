FROM rust

WORKDIR /app

# Install wasm-pack and wasm-pack-cli
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
RUN rustup target add wasm32-unknown-unknown

# Install node (for mostly just for browser-sync)
RUN curl -sL https://deb.nodesource.com/setup_15.x | bash - \
    && apt-get install -y nodejs

# Install browser-sync
RUN npm install -g browser-sync

# Copy in our files to the container
COPY . .

# Build the WASM and run Browser-Sync
CMD [ "bash", "start.sh" ]