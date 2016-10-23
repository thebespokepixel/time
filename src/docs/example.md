#### Installation

```shell
npm install --save @thebespokepixel/time
```

#### Example

```js
const bespokeTime = require('@thebespokepixel/time').bespokeTime
const bespokeTimeFormat = require('@thebespokepixel/time').bespokeTimeFormat

const now = bespokeTime()
console.log(bespokeTimeFormat(now, 'HH:mm:ss'))
```
