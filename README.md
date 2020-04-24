# jsxCreateElement

![jsxCreateElement](https://img.shields.io/badge/jsx-create-element-master-001935.svg?style=for-the-badge) ![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/yoriiis/jsx-create-element/Build/master?style=for-the-badge)

## Introduction

Write templating in Javascript with the power of **JSX** without any framework built-in.

Web frameworks are trended, reactive and perfects for building complex single-page applications but sometimes a little overkills for your purposes. For better performance it is often more optimized to write the Javascript in vanilla to avoid an extra size of the final bundles and fastest render.

Introduced in ES2015, aka ES6, Template Literals offer a new way to declare strings but can be complex with multiple components, loops and deep conditions.

JSX introduced by React works perfectly with React but in standalone, the usage is more complicated.

Let's quickly look at the solutions available to us.

### Template Literals

Small example of component with template literals syntax, condition and loop, render in the `#app` element.

```js
const list = ['Apple', 'Pear', 'Watermelon', 'Cherry'];

const html = `<section
                    <h3>Some good fruits</h3>
                    ${list.length ? `
                        <ul>
                            ${list.map(item => `
                                <li>${item}</li>
                            `)}
                        </ul>`
                    : ''}
                </section>`;

document.querySelector('#app').insertAdjacentHTML('beforeend', html);
```

### JSX

The same example with JSX syntax.

```jsx
const list = ['Apple', 'Pear', 'Watermelon', 'Cherry'];

function List(props){
    if(props.items.length === 0){
        return null
    }
    return (<ul>
                ${props.items.map(item => `
                    <li>${item}</li>
                `)}
            </ul>);
}

const html = (
    <section>
        <h3>Some good fruits</h3>
        <List items={list} />
    </section>
)

document.querySelector('#app').insertAdjacentHTML('beforeend', html);
```

### Limitation

Template literals are not optimized for large string components and indentation issues are commons with formatter tools. Events listeners need to be declare separately and deep condition can make readability more complex.

JSX is more easy to write and the template can grow without problem. Events listeners are automatically managed but conditions and custom events are missing.

### Without React

Yes! With `jsxCreateElement`, JSX can be used without React with only the support of the Babel plugin `@babel/plugin-transform-react-jsx` to enabling JSX parsing. Main JSX features available in React are available without React, simply.

### Features

Popular JSX feature inside React are available with somes extra features.

* Usage out of React in standalone
* Single Babel plugin for JSX parsing
* No extra frameworks
* Functional component
* Fragment component
* Events listener with attributes
* Custom event listener with attributes
* HTML attributes
* Conditional rendering
* SVG support

## Getting started

jsxCreateElement works with a minimalist client Javascript library and a Babel plugin inherit from React.

### Installation

#### Dependencies

First, install the library from [npm](https://www.npmjs.com/package/jsx-create-element).

```bash
npm install jsx-create-element --save-dev
```

Next, install the Babel plugin `@babel/plugin-transform-react-jsx` to allows JSX parsing inside your code.

```bash
npm install @babel/plugin-transform-react-jsx --save-dev
```

#### Babel configuration

Update the Babel configuration file with the following options.

```js
const plugins = [
    [
        '@babel/plugin-transform-react-jsx',
        {
            pragma: 'createElement',
            pragmaFrag: '"fragment"'
        }
    ]
]
```

##### Pragma

Replace the function used when compiling JSX expressions. Use `createElement`. The function is exposed by jsxCreateElement.

##### pragmaFrag

Replace the component used when compiling JSX fragments. Use simply `"fragment"` with double quote inside the string.

> More information about `@babel/plugin-transform-react-jsx` can be found on the [Babel documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx).

## How it works

Now dependencies and configuration are done, let's write some JSX.

### HTML attributes

* camelCase syntax for all HTML attributes, except for `data-*`, `dataset` and `aria-*`
* `class` or `className`
* `dataset` with object datas

## Licence

`webpackBoilerplate` is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Created with ♥ by [@yoriiis](http://github.com/yoriiis).
