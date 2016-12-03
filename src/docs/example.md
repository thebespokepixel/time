#### Installation

```shell
npm install --save @thebespokepixel/time
```

#### Example (ES2015)

```js
import bTime from '@thebespokepixel/time'

const bespokeTime = bTime.bespokeTime
const bespokeMicrotime = bTime.bespokeMicrotime
const bespokeTimeFormat = bTime.bespokeTimeFormat

const now = bespokeTime()
console.log(bespokeTimeFormat(now, 'HH:mm:ss'))
```

#### Example (CommonJS)

```js
const bespokeTime = require('@thebespokepixel/time').bespokeTime
const bespokeMicrotime = require('@thebespokepixel/time').bespokeMicrotime
const bespokeTimeFormat = require('@thebespokepixel/time').bespokeTimeFormat

const now = bespokeTime()
console.log(bespokeTimeFormat(now, 'HH:mm:ss'))
```
