# v-webp

## Install 

```bash
npm i v-webp --save
```

```js
import Vue from 'vue';
import VueWebP from 'v-webp';

Vue.use(VueWebP);
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