
# Overview
Hosting on Netlify means that updates to our content on Github automatically trigger (via GitHub webhooks) a rebuild and redploy of our site.

However, we want to be able to build locally.
This is useful for playing around and trying new things.

# Install Gatsby Persistently

ref: https://www.gatsbyjs.org/tutorial/part-zero/

We will use the same Docker for Node that we did to import content from Confluence.

This Container has a user called "node" (and root) - we will run as user "node".
Share a directory from host to "node"'s home dir
By default a container’s file system persists even after the container exits. We don't want to use the "--rm" option. 

```
sudo docker run -it --/home/node -v /home/chris_m11/openstemkids/:/home/node -node bash #run as root to install Gatsby

root@87f05297ad5b:/# npm install --global gatsby-cli
/usr/local/bin/gatsby -> /usr/local/lib/node_modules/gatsby-cli/lib/index.js
+ gatsby-cli@2.4.5
added 206 packages from 106 contributors in 9.234s

root@87f05297ad5b:/# gatsby --version
2.4.5
```

Check updated Container exists
```
sudo docker ps -a
CONTAINER ID        IMAGE                           COMMAND                  CREATED              STATUS                          PORTS               NAMES
44939e92a6a0        node                            "bash"                   About a minute ago   Exited (1) 8 seconds ago         

#save container as a new image name gatsby (lowercase required)
sudo docker commit 44939e92a6a0 gatsby
sha256:ad36fc58f9f707b3c0bace8e8a6f67d6f0408997cca2b79154d3c3ec8f2e9723

#verify updated image exists
sudo docker image ls
REPOSITORY                      TAG                 IMAGE ID            CREATED             SIZE
gatsby                          latest              ad36fc58f9f7        2 hours ago         910MB
node                            latest              e893e87c6b5c        7 days ago          894MB


sudo docker container ls -all
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                   PORTS               NAMES
44939e92a6a0        node                "bash"              2 hours ago         Exited (0) 2 hours ago                       eloquent_jepsen



```


# Run Gatsby

Start our Gatsby container
```
sudo docker start 44939e92a6a0 #start the container

sudo docker exec -it --user 1000 44939e92a6a0 bash #launch shell as user "node" 
```

In Container
```
node@44939e92a6a0:/$whoami   #in container
node

node@44939e92a6a0:/$ gatsby -v
2.4.5

```

Gatsby Hello World
```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
 cd hello-world/
 gatsby develop
```
https://github.com/aripalo/gatsby-docker/
docker run -it --rm -v $(pwd)/site:/site -p 8000:8000 aripalo/gatsby-docker develop

docker run --rm -ti -p 8000:8000 -v project-volume:/project -w /project g8tguy/gatsby gatsby develop --host 0.0.0.0