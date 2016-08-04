/**
 * Copyright 2014 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var path = require("path");
var when = require("when");

var settings = module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 10000000,
    userDir: '/data',

    // Add the nodes in
    nodesDir: path.join(__dirname,"nodes"),

    //nodesExcludes:[ '36-rpi-gpio.js'],

    // Enable module reinstalls on start-up; this ensures modules installed
    // post-deploy are restored after a restage
    autoInstallModules: true,

    // Move the admin UI
    httpAdminRoot: '/red',

    // Serve up the welcome page
    httpStatic: path.join(__dirname,"public"),

    functionGlobalContext: { 
      process: process
    },
}

if (process.env.NODE_RED_USERNAME && process.env.NODE_RED_PASSWORD) {
  settings.adminAuth = {
    type: "credentials",
    users: function(username) {
      if (process.env.NODE_RED_USERNAME == username) {
        return when.resolve({username:username,permissions:"*"});
      } else {
        return when.resolve(null);
      }
    },
    authenticate: function(username, password) {
      if (process.env.NODE_RED_USERNAME == username && process.env.NODE_RED_PASSWORD == password) {
        return when.resolve({username:username,permissions:"*"});
      } else {
        return when.resolve(null);
      }
    }
  }
}