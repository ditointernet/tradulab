<<<<<<< HEAD:README.md
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> add commands
=======
# Main Commands

>>>>>>> changes:docs/docker.md
docker-compose up -d

docker-compose run web npm start

docker-compose run api npm start

docker-compose down

# Iniciar o cotainer do mongo

docker-compose up -d mongo

docker-compose exec mongo mongo

<<<<<<< HEAD
# LockFileVersion

Lockfile is the version of the full dependency tree

# Docker

Is a platform for developers and sysadmins to build, run, and share applications with {containers};

Use of containers to deploy application is called {containerization};

## Container

Is a running process, with some added encapsulation features applied to it in order to keep it isolated from the host and from other containers;

Each container interacts with its own private filesystem {Docker Image};

## Docker Image

Is everything needed to run an application - the code or binary, runtimes, dependencies, and any other filesystem ocjects required;

The {kernel} decides who will use these resources and for how long and when;

## Containers x Virtual Machines

A container runs natively on Linus and shares the kernel of the host machine with other containers.It runs a discrete process, taking no more memory than any other executable, making it lighweight;

{Virtual Machine} runs a full-blown guest operating system with virtual access to host resources through a {hypervisor}

### Hypervisor - Virtual Machine Monito

Is a software that creats and runs virtual machines, allows one host computer to support multiple guest VMs by virtually sharing its resources, such as memory and processing;

Make it possible to use more of a system's available resources and provide greater IT mobity since the guest VMs are independent of the host hardware, can be easily moved between different servers;

## Build and Run a Image

creating the images that your containers will be based on. Remember, a Docker image captures the private filesystem that your containerized processes will run in; you need to create an image that contains just what your application needs to run.

Create and test individual containers for each component of your application by first creating Docker images.

Assemble your containers and supporting infrastructure into a complete application.

Test, share, and deploy your complete containerized application.

Create Images

Build an image from a Dockerfile
docker build [OPTIONS] PATH | URL |
docker build --tag tradulab:1.0 .

Run the following command to start a container based on your new image
[host:container]
docker run --detach --name tradulab tradulab:1.0
--publish 8000:8080
--detach asks Docker to run this container in the background.

-name specifies a name with which you can refer to your container in subsequent commands, in this case bb

Visit your application in a browser at localhost:8000. You should see your bulletin board application up and running.

docker stop bb
docker rm --force bb

---

## Dockefile

A text file that contains all commands, in order, needed to build a given image;

Describes how to assemble a private filesystem for a container and has some metadata describing how to run a container based on this image;

A Docker image consists of read-only layers each of which represents a Dockerfile instruction. The layers are stacked and each one is a delta of the changes from the previous layer;

FROM ubuntu:18.04
COPY . /app
RUN make /app
CMD python /app/app.py

FROM creates a layer from the ubuntu:18.04 Docker image.
COPY adds files from your Docker client’s current directory.
RUN builds your application with make.
CMD specifies what command to run within the container.

## Multi-stage builds

Problem: keep the image size down;

Each instruction in the Dockerfile adds a layer to the image, and you need to remember to clean up any artifacts you don’t need before moving on to the next layer;

When you run the build.sh script, it needs to build the first image, create a container from it to copy the artifact out, then build the second image;

With multi-stage builds, you use multiple FROM statements in your Dockerfile. Each FROM instruction can use a different base, and each of them begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don’t want in the final image;

## Docker Compose

Is a tool for defining and running multi-container Docker applications;

A service definition contains configuration that is applied to each container started for that service, much like passing command-line parameters to docker run;

Compose has commands for managing the whole lifecycle of your application:

    Start, stop, and rebuild services;
    View the status of running services;
    Stream the log output of running services;
    Run a one-off command on a service;

Multiple isolated environments on a single host;

Compose uses a project name to isolate environments from each other;

The default project name is the basename of the project directory. You can set a custom project name by using the -p

Preserve volume data when containers are created🔗

Docker-compose offers you the possibility to launch all these services in a single command.

Docker is used to manage an individual container (service) for your application.

Docker-Compose is used to manage several containers at the same time for the same application.

Compose preserves all volumes used by your services. When docker-compose up runs, if it finds any containers from previous runs, it copies the volumes from the old container to the new container. This process ensures that any data you’ve created in volumes isn’t lost.

Only recreate containers that have changed

docker-compose [-f <arg>...] [options] [COMMAND] [ARGS...]

1 service = 1 container.
For example, a service maybe, a server, a client, a database...

The keyword "build" will allow you to define # the path to the Dockerfile to use to create the image # that will allow you to execute the service.

[port we want on our machine]:[port we want to retrieve in the container]

## Volume

Volumes are the preferred mechanism for persisting data generated by and used by Docker containers.
can manage volumes using Docker CLI commands or the Docker API
volumes are often a better choice than persisting data in a container’s writable layer, because a volume does not increase the size of the containers using it, and the volume’s contents exist outside the lifecycle of a given container

Manage application data :

When you use a bind mount, a file or directory on the host machine is mounted into a container.. The file or directory is referenced by its absolute path on the host machine. By contrast, when you use a volume, a new directory is created within Docker’s storage directory on the host machine, and Docker manages that directory’s contents.

If you start a container with a volume that does not yet exist, Docker creates the volume for you

you can create and manage volumes outside the scope of any container.
docker volume create tradulab
docker volume ls
docker volume inspect tradulab

docker volume rm tradulab
=======
{
"lockfileVersion": 1
lock file in the versions of the full dependency tree
}
=======
=======
>>>>>>> add commands
# LockFileVersion

Lockfile is the version of the full dependency tree
>>>>>>> Create API and WEB Images

# Docker

Is a platform for developers and sysadmins to build, run, and share applications with {containers};

Use of containers to deploy application is called {containerization};

## Container

Is a running process, with some added encapsulation features applied to it in order to keep it isolated from the host and from other containers;

Each container interacts with its own private filesystem {Docker Image};

## Docker Image

Is everything needed to run an application - the code or binary, runtimes, dependencies, and any other filesystem ocjects required;

<<<<<<< HEAD
Containers x Virtual Machines
>>>>>>> docker
=======
The {kernel} decides who will use these resources and for how long and when;
>>>>>>> Create API and WEB Images

## Containers x Virtual Machines

A container runs natively on Linus and shares the kernel of the host machine with other containers.It runs a discrete process, taking no more memory than any other executable, making it lighweight;

{Virtual Machine} runs a full-blown guest operating system with virtual access to host resources through a {hypervisor}

### Hypervisor - Virtual Machine Monito

Is a software that creats and runs virtual machines, allows one host computer to support multiple guest VMs by virtually sharing its resources, such as memory and processing;

Make it possible to use more of a system's available resources and provide greater IT mobity since the guest VMs are independent of the host hardware, can be easily moved between different servers;

## Build and Run a Image

creating the images that your containers will be based on. Remember, a Docker image captures the private filesystem that your containerized processes will run in; you need to create an image that contains just what your application needs to run.

Create and test individual containers for each component of your application by first creating Docker images.

Assemble your containers and supporting infrastructure into a complete application.

Test, share, and deploy your complete containerized application.

Create Images

Build an image from a Dockerfile
docker build [OPTIONS] PATH | URL |
docker build --tag tradulab:1.0 .

Run the following command to start a container based on your new image
[host:container]
docker run --detach --name tradulab tradulab:1.0
--publish 8000:8080
--detach asks Docker to run this container in the background.

-name specifies a name with which you can refer to your container in subsequent commands, in this case bb

Visit your application in a browser at localhost:8000. You should see your bulletin board application up and running.

docker stop bb
docker rm --force bb

---

## Dockefile

A text file that contains all commands, in order, needed to build a given image;

Describes how to assemble a private filesystem for a container and has some metadata describing how to run a container based on this image;

A Docker image consists of read-only layers each of which represents a Dockerfile instruction. The layers are stacked and each one is a delta of the changes from the previous layer;

FROM ubuntu:18.04
COPY . /app
RUN make /app
CMD python /app/app.py

FROM creates a layer from the ubuntu:18.04 Docker image.
COPY adds files from your Docker client’s current directory.
RUN builds your application with make.
CMD specifies what command to run within the container.

## Multi-stage builds

Problem: keep the image size down;

Each instruction in the Dockerfile adds a layer to the image, and you need to remember to clean up any artifacts you don’t need before moving on to the next layer;

When you run the build.sh script, it needs to build the first image, create a container from it to copy the artifact out, then build the second image;

With multi-stage builds, you use multiple FROM statements in your Dockerfile. Each FROM instruction can use a different base, and each of them begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don’t want in the final image;

## Docker Compose

Is a tool for defining and running multi-container Docker applications;

A service definition contains configuration that is applied to each container started for that service, much like passing command-line parameters to docker run;

Compose has commands for managing the whole lifecycle of your application:

    Start, stop, and rebuild services;
    View the status of running services;
    Stream the log output of running services;
    Run a one-off command on a service;

Multiple isolated environments on a single host;

Compose uses a project name to isolate environments from each other;

The default project name is the basename of the project directory. You can set a custom project name by using the -p

Preserve volume data when containers are created🔗

Docker-compose offers you the possibility to launch all these services in a single command.

Docker is used to manage an individual container (service) for your application.

Docker-Compose is used to manage several containers at the same time for the same application.

Compose preserves all volumes used by your services. When docker-compose up runs, if it finds any containers from previous runs, it copies the volumes from the old container to the new container. This process ensures that any data you’ve created in volumes isn’t lost.

Only recreate containers that have changed

docker-compose [-f <arg>...] [options] [COMMAND] [ARGS...]

1 service = 1 container.
For example, a service maybe, a server, a client, a database...

The keyword "build" will allow you to define # the path to the Dockerfile to use to create the image # that will allow you to execute the service.

[port we want on our machine]:[port we want to retrieve in the container]

## Volume

Volumes are the preferred mechanism for persisting data generated by and used by Docker containers.
can manage volumes using Docker CLI commands or the Docker API
volumes are often a better choice than persisting data in a container’s writable layer, because a volume does not increase the size of the containers using it, and the volume’s contents exist outside the lifecycle of a given container

Manage application data :

When you use a bind mount, a file or directory on the host machine is mounted into a container.. The file or directory is referenced by its absolute path on the host machine. By contrast, when you use a volume, a new directory is created within Docker’s storage directory on the host machine, and Docker manages that directory’s contents.

If you start a container with a volume that does not yet exist, Docker creates the volume for you

you can create and manage volumes outside the scope of any container.
docker volume create tradulab
docker volume ls
docker volume inspect tradulab

docker volume rm tradulab

If you remove the container all your data will be lost, and the next time you run the image the database will be reinitialized. To avoid this loss of data, you should mount a volume that will persist even after the container is removed.

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
<<<<<<< HEAD
<<<<<<< HEAD

docker-compose images
docker-compose run web npm start
=======

docker-compose images
<<<<<<< HEAD
>>>>>>> Create API and WEB Images
=======
docker-compose run web npm start
>>>>>>> fix

Lists containers.
$ docker-compose ps
Executes a command in a running container (example: ‘docker-compose exec server ls’).
$ docker-compose exec [service name] [command]
Stops containers and removes containers, images… created by ‘docker-compose up’.
$ docker-compose down
Displays log output from services (example: ‘docker-compose logs -f client’).
$ docker-compose logs -f [service name]

## Docker Commands

Builds, (re)creates, starts, and attaches to [_containers_](https://docs.docker.com/get-started/) for a service: **docker-compose up -d mongo**
_{
**-d --detach** asks Docker to run this container in the background,
**--name** specifies a name with which you can refer to your container in subsequent commands]
}_
Stops _containers_ and removes containers, networks, volumes, and images created by up: **docker-compose down**
Run a command in a running _container_: **docker-compose exec mongo mongo**
List all Docker containers: **docker container ls -a**
Stop a specific container: **docker container stop [container_id]**
Remove a stopped container: **docker container rm [container_id]**
List all Docker images: **docker image ls**
Remove images: **docker image rm [image_id1] [image_id2]**
Create a volume: **docker volume create [my-vol]**
List volumes: **docker volume ls**
Inspect a volume: **docker volume inspect [my-vol]**
Remove a volume: **docker volume rm [my-vol]**
<<<<<<< HEAD
=======
>>>>>>> docker
=======
>>>>>>> Create API and WEB Images
