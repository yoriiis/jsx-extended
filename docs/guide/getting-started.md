# Getting started

`jsx` works with a minimalist client Javascript library and a Babel plugin inherit from React.

## Installation

### Dependencies

First, install the library from [npm](https://www.npmjs.com/package/jsx).

In the folowing example we will use `npm` for installation but you can use `yarn` if you prefer.

```bash
npm i --save-dev jsx
```


Next, install the Babel plugin `@babel/plugin-transform-react-jsx` to allows JSX parsing inside your code.

```bash
npm i --save-dev @babel/plugin-transform-react-jsx
```

### Babel configuration

Update the Babel configuration file with the following options.

```js
const plugins = [
    [
        '@babel/plugin-transform-react-jsx',
        {
            pragma: 'jsx.createElement',
            pragmaFrag: '"fragment"'
        }
    ]
]
```

#### Pragma

Replace the function used when compiling JSX expressions. Use `jsx.createElement`. The function is exposed by `jsx`.

#### pragmaFrag

Replace the component used when compiling JSX fragments. Use simply `"fragment"` with double quote inside the string.

> More information about `@babel/plugin-transform-react-jsx` can be found on the [Babel documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx).