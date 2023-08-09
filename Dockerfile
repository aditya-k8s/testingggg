
# Use an official Node.js runtime as the base image
FROM node:18.13.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install -g npm@9.8.1
RUN npm install --force

# Copy the entire Node.js app to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world (if your app runs on port 3000)
#EXPOSE 3000

# Set the startup command
#CMD ["npm", "start"]

# Use NGINX as the production server
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=build /app/build /var/www//html

# Expose port 80 for NGINX
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]