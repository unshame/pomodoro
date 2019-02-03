<img align="right" alt="Pomodoro" src="./icons/icon_work.png">  

# Pomodoro  

Not feeling stressed enough from work? Why not add an angry tomato that bothers you every 25 minutes with cross-platform notifications!*  

\* notifications might not be cross-platform

### Usage:  

    ./bin/pomodoro [-d <number>] [-i <number>] [-n <string>]
    npm start --   [-d <number>] [-i <number>] [-n <string>]

### Options:
   
| Option                            | Description                                                 | Default  |
|-----------------------------------|-------------------------------------------------------------|----------|
| [-d \| --duration \<number>]      | the total timer duration in minutes, seconds, hours etc.    | 25       |
| [-i \| --interval \<number>]      | the interval of a minute, second, hour etc. in milliseconds | 60000    |
| [-n \| --interval-name \<string>] | the name of the interval                                    | "minute" |

### Can be used as a node module:

```javascript
const pomodoro = require('pomodoro');
await pomodoro(duration, interval, intervalName);
// do something else when it finishes
```