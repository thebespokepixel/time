#### Installation

```shell
npm install --save @thebespokepixel/time
```

#### Example (ES2015)

```js
import bTime from '@thebespokepixel/time'

const bespokeTime = bTime.bespokeTime
const bespokeTimeFormat = bTime.bespokeTimeFormat

const now = bespokeTime()
console.log(bespokeTimeFormat(now, 'HH:mm:ss'))
```

#### Example (CommonJS)

```js
const bespokeTime = require('@thebespokepixel/time').bespokeTime
const bespokeTimeFormat = require('@thebespokepixel/time').bespokeTimeFormat

const now = bespokeTime()
console.log(bespokeTimeFormat(now, 'HH:mm:ss'))
```
