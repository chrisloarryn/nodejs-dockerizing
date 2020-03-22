# nodejs-dockerizing
        Testing docker in a simple nodejs api


## first command to exec
        `npm init` => create `package.json` to add dependencies or devDependencies to our project.

## Build docker image
        -> `docker build -t node-res-api .`

## docker images  
        -> `docker images`                => see docker images
        -> `docker rmi -f b90f60a5b587`   => delete docker image
        -> `docker run -it -p 7000:5010 node-res-api`   => run docker image

## docker containers
        -> `docker ps`                => see docker images
        -> `docker container kill bd6a7004477f`   => delete docker image

## Run tips: `-it => verbose () -d => no verbose || -p => set port`

## no interactive example: `docker run -d -p 7000:5010 node-rest-api`
        `only change -d by -it`

## now the port is 7000 at the localhost not the port defined in the api.
## if we need more images like databases we need to add it here.

  
