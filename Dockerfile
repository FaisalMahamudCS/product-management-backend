FROM node:alpine

# Create and set working directory
RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app
WORKDIR /usr/src/node-app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Switch to non-root user
USER node

# Install dependencies
RUN yarn install --pure-lockfile

# Copy the rest of the application code
COPY --chown=node:node . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["yarn", "start"]
