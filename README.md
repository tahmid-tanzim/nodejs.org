# Node.js v5.3.0
Learning in-depth Node.js

### 1. Installing [Node.js](https://nodejs.org/en/) via [nvm (Node Version Manager)](https://github.com/creationix/nvm) on Ubuntu Linux.
##### 1.1. Installing [NVM](https://github.com/creationix/nvm) :
```
sudo apt-get install git git-core curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```
By [GNU Wget](https://www.gnu.org/software/wget/) :
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```
##### 1.2. Append the NVM path in ~/.bashrc :
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
```
##### 1.3. Load ~/.bashrc and Check if NVM successfully installed :
```
source ~/.bashrc
nvm
```
##### 1.4. Installing [Node.js](https://nodejs.org/en/) and Set default [version](https://nodejs.org/en/download/releases/) :
```
nvm install 5.3.0
nvm alias default 5.3.0
node --version
nvm list
```

### 2. Node Core :
#### 2.1. The [Global](https://nodejs.org/api/globals.html) Objects
These objects are available in all modules. Some of these objects aren't actually in the global scope but in the module scope - this will be noted.
#### 2.2. [Process](https://nodejs.org/api/process.html): Argument variables with [process.argv](https://nodejs.org/api/process.html#process_process_argv)
An array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.
#### 2.3. [Process](https://nodejs.org/api/process.html): Standard input ([process.stdin](https://nodejs.org/api/process.html#process_process_stdin)) and Standard output ([process.stdout](https://nodejs.org/api/process.html#process_process_stdout))
A Readable Stream for stdin and A Writable Stream to stdout 

### 3. Node Modules :
#### 3.1. Core modules :
Like [path](https://nodejs.org/api/path.html), [util](https://nodejs.org/api/util.html), [v8](https://nodejs.org/api/v8.html)
#### 3.2. Collecting information with [Readline](https://nodejs.org/api/readline.html). 
#### 3.3. Handling [events](https://nodejs.org/api/events.html) with [EventEmitter](https://nodejs.org/api/events.html#events_class_events_eventemitter).
#### 3.4. Creating [child process](https://nodejs.org/api/child_process.html) with [exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback) and [spawn](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options).

### 4. The [File System](https://nodejs.org/api/fs.html) :
### 5. The HTTP Module
For https module you can create a self-certified certificate. Here's how to do it on a linux-based system:
First, generate a 1024 bit RSA key in agent2-key.pem
```
mkdir keys
openssl genrsa 1024 > keys/agent2-key.pem
```
Then, generate an SSL certificate with that key:
```
openssl req -x509 -new -key keys/agent2-key.pem > keys/agent2-cert.pem
```
### 6. Node Package Manager
- [Node-dev](https://www.npmjs.com/package/node-dev) automatically restarts the node process when a file is modified.
```
npm install -g node-dev
```
- [JSHint](https://www.npmjs.com/package/jshint) is a community-driven tool to detect errors and potential problems in JavaScript code
```
npm install -g jshint
```
- [httpster](https://www.npmjs.com/package/httpster) - Simple http server for static content
Globally Installed
```
npm install -g httpster
httpster -p 3000 -d ./public/
```
Locally Installed
```
npm install httpster
./node_modules/httpster/bin/httpster -p 3000 -d ./public/
```
### 7. Testing and Debugging
#### 7.1. Testing with [mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
```
npm install -g mocha
npm install --save-dev chai
```


