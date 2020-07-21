# minihtml

Tiny dom generator module

```
npm install minihtml
```

## Usage

Just a little function to avoid all the `document.createElement` boilerplate.

``` js
const h = require('minihtml')

h('div', { class: 'someClass', onclick: () => { console.log('clicked it')}}, [
  'a text node',
  h('input', { value: 'Input field...'})
])
```

## API

#### `domElement = h(nameOrElement, [attrs,] [children])`

Make a new dom element. Children can be a list of text nodes and dom elements.

## License

MIT
