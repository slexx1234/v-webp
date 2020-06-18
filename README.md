# v-webp

## Install ES6

```bash
npm i v-webp --save
```

```js
import Vue from 'vue';
import VueWebP from 'v-webp';

Vue.use(VueWebP);
```

## Install ES5

```bash
npm i v-webp --save
```

```js
var Vue = require('vue');
var VueWebP = require('./node_modules/v-webp/es5.js');

Vue.use(VueWebP);
```

Use [browserify](http://browserify.org/)!

## Install Nuxt.js

It's important if using with Nuxt as a plugin that you use the client flag.

```bash
// nuxt.config.js

plugins: [
    { src: '@/plugins/v-webp.js', mode: 'client' }
]

```

## Usage

```html
<img v-webp="'/image.png'"/>
```

Or

```html
<img v-if="$webp" src="/image.webp"/>
<img v-else src="/image.png"/>
```

Or

```css
html.webp {
    /* ... */
}

html:not(.webp) {
    /* ... */
}
```
