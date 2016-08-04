numikan-node-red
===================

A [Node-RED](http://nodered.org) instance for Heroku with pre-installed Particle nodes.

To add additional functionality, `git pull` the repo locally, use npm to install any packages you may want and the `git push` back to Heroku.

A fork from [node-red-heroku](https://github.com/joeartsea/) as it use MongoDB to store flows. This is needed as flows are typically store on the disk but are whipped out each time Heroku restarts dynos.

### Deploy to Heroku

Deploy this app to Heroku for free and have it up and running in a matter of minutes.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/ozzieg/numikan-node-red)

### Flow Editor Credentials

The flow editor UI (/red) is password protected **if** you include the following environment variables:

* NODE_RED_USERNAME
* NODE_RED_PASSWORD
