# nodejs-dockerizing
Testing docker in a simple nodejs api


## first command to exec

`npm init` => create `package.json` to add dependencies or devDependencies to our project.

## docker build -t node-res-api .
## docker images // docker rmi -f b90f60a5b587 //  for images.
## docker ps // docker container kill bd6a7004477f // for see and delete containers.

## -it => verbose () -d => no verbose || -p => set port
## docker run -it -p 7000:5010 node-res-api 
## or without expose deleting ports // now the port is 7000 at the localhost
## if we need more images like databases we need to add it here.

## no interactive: docker run -d -p 7000:5010 node-rest-api 
