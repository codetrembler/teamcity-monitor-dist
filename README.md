# teamcity-monitor-dist
TeamCity Monitor Distribution Package

# Running the TeamCity Monitor
To run the TeamCity Monitor you must have an actual installation of Node.js.
You can download it here: https://nodejs.org.

Then you have to install two additional Node.js Packages using the following commands.
```
npm install express
npm install cors
```

Afterwards the server can be started by running the command
```
node server.js
```

# Configure your Server
The configuration of the TeamCity Monitor is stored in the config.json file.
Here is an example of a valid configuration file:
```
{
  "hostname": "teamcity.jetbrains.com",
  "port": 8080,
  "tls": true,
  "buildTypes": [
    "bt218",
    "bt219",
    "IdeaVim_Deploy"
  ]
}
```

## Options
The following keys are allowed in the options file.

### hostname
The host name of the TeamCity server whose builds are monitored.

### port
The host's port.

### tls
A boolean that controls whether to use the http or https protocol.
true: use https, false: use http

### buildTypes
A list of buildTypes that are monitored by the application.
