# DD2525-project-wasm

## Dependences
### Emscripten
First thing is to follow the installation guide of emcc (emscripten c compiler) so that you can build every challenge

### NodeJS
For some challenges NodeJS is needed, if some packages are missing during the execution of "npm start", you simply need to execute "npm install {name_of_package}"

### phantomJS
For some challenges a fake user trying to connect to the server must be started, for this we use phantomJS, on archLinux you can install it through the AUR (example : yay -Sy phantomjs)

## Build and execute
Challenges :

### Format String / Buffer Overflow / Buffer overread
```bash
cd Challenges
make bufferOverflow
make bufferOverread
make formatString
cd {Challenge_you_want_to_run}
python -m http.server
```

Then your server should be booted up, you can access it via any browser (tested on firefox v101.0)
to the address "localhost:8000"

### RCE
```bash
cd Challenges
make RCE
cd RCE
npm start
```
Then your server should be booted up, you can access it via any browser (tested on firefox v101.0)

### XSS
```bash
cd Challenges
make XSS
cd XSS
npm start
```
Then your server should be booted up, you can access it via any browser (tested on firefox v101.0)
To start the bot that acts as a fake user connecting to the server :
Then on another console :
```bash
cd Challenges
./bot_script.sh
```
If you changed the server address or port, you must update the file "xss-bot.js"

Note: you can also build all challenges all at a time with 
```bash
make all
```



