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

### 2. Node Core:
#### 2.1. The [Global](https://nodejs.org/api/globals.html) Objects
These objects are available in all modules. Some of these objects aren't actually in the global scope but in the module scope - this will be noted.
#### 2.2. [Process](https://nodejs.org/api/process.html): Argument variables with [process.argv](https://nodejs.org/api/process.html#process_process_argv)
An array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.
#### 2.3. [Process](https://nodejs.org/api/process.html): Standard input ([process.stdin](https://nodejs.org/api/process.html#process_process_stdin)) and Standard output ([process.stdout](https://nodejs.org/api/process.html#process_process_stdout))
A Readable Stream for stdin and A Writable Stream to stdout 

### 3. Node Modules:
#### 3.1. Core modules
* [path](https://nodejs.org/api/path.html)
* [util](https://nodejs.org/api/util.html)
* [v8](https://nodejs.org/api/v8.html)