## docker build -t node-res-api .
## docker images // docker rmi -f b90f60a5b587 //  for images.
## docker ps // docker container kill bd6a7004477f // for see and delete containers.

## -it => verbose () -d => no verbose || -p => set port
## docker run -it -p 7000:5010 node-res-api 
## or without expose deleting ports // now the port is 7000 at the localhost
## if we need more images like databases we need to add it here.

## no interactive: docker run -d -p 7000:5010 node-rest-api 

FROM node:10

# Create app directory
WORKDIR /app

## --chown=msi:docker

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
## docker build -t Documents/node/app .

# Bundle app source
COPY . .

## EXPOSE 8080
## EXPOSE 3000:3002

CMD [ "npm", "start" ]