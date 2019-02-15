#### Installation

```shell
npm install --save @thebespokepixel/time
```

#### Example

```js
import {
  bespokeTime,
  bespokeTimeFormat,
  DateTime,
  Interval,
  Duration
} from '@thebespokepixel/time'

const now = bespokeTime()
console.log(bespokeTimeFormat(now, 'HH:mm:ss'))
```

See [Moment Docs](https://momentjs.com) for `bespokeTime`  
See [dateformat](https://github.com/felixge/node-dateformat) for `bespokeTimeFormat`  
See [Luxon Docs](https://moment.github.io/luxon/) for `DateTime`, `Interval` and `Duration`
