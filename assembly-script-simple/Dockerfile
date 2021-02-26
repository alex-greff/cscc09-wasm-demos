FROM node:15-alpine

WORKDIR /app

# Install global packages
RUN npm install -g http-server

# Copy in package.json and package-lock.json (if it exists)
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy in all files
COPY . .

# Start command that is automatically run
CMD [ "npm", "run", "start" ]