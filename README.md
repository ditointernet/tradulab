{
"lockfileVersion": 1
lock file in the versions of the full dependency tree
}

# Docker

Docker is a platform for developers and sysadmins to build, run, and share applications with containers
Use of containers to deploy application is called containerization.
A container is a running process, with some added encapsulation features applied to it in order to keep it isolated from the host and from other containers.
Each container interacts with its own private filesystem (Docker Image)
Docker Image - everything needed to run an application - the code or binary, runtimes, dependencies, and any other filesystem ocjects required

The kernel decides who will use these resources and for how long and when

Containers x Virtual Machines

## Commands

docker --version

docker run hello-world

docker image ls

creates a writeable container layer over the specified image and then starts it using the specified command
docker run

Docker Compose
Tool for defining and running multicontainer Docker applicaitons
a YAML file to configure your application's services
create and start all the services from your configuration

docker-compose.yml
Compose file format (version 2 - 1.10.0+) - Docker Engine Release
docker-compose up -d mongo
docker-compose down
docker-compose exec mongo mongo
