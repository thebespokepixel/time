# Bespoke Time Collection  
>A collection of utilities for Time and Space. 
>
>![Project status][project-badge]
[![Build Status][build-badge]][travis]
[![Dependency Status][david-badge]][david]
[![devDependency Status][david-dev-badge]][david-dev]  
[![npm Status][npm-badge]][npm]
[![XO code style][xo-badge]][xo]
[![Chat on Gitter][gitter-badge]][gitter]

### About

### Install

```sh
npm install @thebespokepixel/time --save
```

### Usage

```js
const bespokeTime = require('@thebespokepixel/time').bespokeTime
const bespokeTimeFormat = require('@thebespokepixel/time').bespokeTimeFormat

const now = bespokeTime()
console.log(bespokeTimeFormat(now, 'HH:mm:ss'))
```

###API
To do...


[project-badge]: http://img.shields.io/badge/status-alpha-red.svg?style=flat
[build-badge]: http://img.shields.io/travis/MarkGriffiths/date.svg?branch=master&style=flat
[david-badge]: http://img.shields.io/david/MarkGriffiths/date.svg?style=flat
[david-dev-badge]: http://img.shields.io/david/dev/MarkGriffiths/date.svg?style=flat
[npm-badge]: https://img.shields.io/npm/v/date.svg?style=flat
[xo-badge]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[gitter-badge]: https://badges.gitter.im/MarkGriffiths/help.svg

[travis]: https://travis-ci.org/MarkGriffiths/date
[david]: https://david-dm.org/MarkGriffiths/date
[david-dev]: https://david-dm.org/MarkGriffiths/date#info=devDependencies
[npm]: https://www.npmjs.com/package/@thebespokepixel/date
[xo]: https://github.com/sindresorhus/xo
[gitter]: https://gitter.im/MarkGriffiths/help?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
