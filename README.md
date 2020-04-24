# JSX Extended

![jsxExtended](https://img.shields.io/badge/jsx--extended-master-001935.svg?style=for-the-badge) ![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/yoriiis/jsx-extended/ci/master?style=for-the-badge)

## Introduction

> The current repository expose an extended and standalone usage of JSX without any framework. Extra features like custom event listeners and conditional statements are added.
>
> Severals libraries already exist on npm, use this to inspire you.

Write templating in Javascript with the power of **JSX** without any framework built-in.

Web frameworks are trended, reactive and perfects for building complex single-page applications but sometimes a little overkills for your purposes. For better performance it is often more optimized to write native Javascript to avoid an extra size of the final bundles and fastest render.

Introduced in ES2015, aka ES6, Template Literals offer a new way to declare strings but can be complex with multiple components, loops and deep conditions.

JSX introduced by React works perfectly with React but in standalone, the usage is more complicated. Also, features like custom event listeners and conditional statements are not available.

Let's quickly look at the solutions available to us.

### Template Literals

Small example of component with template literals syntax, condition and loop, render in the `#app` element.

```javascript
const list = ["Apple", "Pear", "Watermelon", "Cherry"];

/* prettier-ignore */
const elements = `<section
                    <h3>Some good fruits</h3>
                    ${list.length ? `
                        <ul>
                            ${list.map(item => `
                                <li>${item}</li>
                            `)}
                        </ul>
                    ` : ""}
                </section>`;

document.getElementById("#app").insertAdjacentHTML("beforeend", elements);
```

### JSX

The same example with JSX syntax.

```javascript
const list = ["Apple", "Pear", "Watermelon", "Cherry"];

/* prettier-ignore */
function List(props) {
  if (props.items.length === 0) {
    return null;
  }
  return (
    <ul>
        ${props.items.map(item => `
            <li>${item}</li>
        `)}
    </ul>
  );
}

const elements = (
  <section>
    <h3>Some good fruits</h3>
    <List items={list} />
  </section>
);

document.getElementById("#app").insertAdjacentHTML("beforeend", elements);
```

### Limitation

Template literals are not optimized for large string components and indentation issues are commons with formatter tools. Events listeners need to be declare separately and deep condition can make readability more complex.

JSX is more easy to write and the template can grow without problem. Events listeners are automatically managed but conditions and custom events are missing.

### Without React

Yes! JSX can be used without React with the support of the Babel plugin `@babel/plugin-transform-react-jsx` to enabling JSX parsing and a custom `createElement` function.

### Features

Popular JSX feature inside React are available with somes extra features.

- Usage out of React in standalone
- Single Babel plugin for JSX parsing
- No extra frameworks
- Functional component
- Fragment component
- Events listener with attributes
- Custom event listener with attributes
- HTML attributes
- Conditional rendering
- SVG support

### JSX extended example

The same example with JSX extended syntax.

```javascript
import { createElement, render } from "../../dist/jsx-extended.esm.js";

const list = ["Apple", "Pear", "Watermelon", "Cherry"];

/* prettier-ignore */
const elements = (
  <section>
    <h3>Some good fruits</h3>
    <ul if={items.length > 0}>
        ${items.map(item => `
            <li>${item}</li>
        `)}
    </ul>
  </section>
);

render(elements, document.getElementById("#app"));
```

## Demo

Online demo is available on [yoriiis.github.io/jsx-extended](https://yoriiis.github.io/jsx-extended)

The project includes also example of implementation in the `./example/` directory.

## Getting started

### Installation

#### Dependencies

First, import the library from the `./dist/jsx-extended.esm.js`.

> ESM and CJS exports are available in the `./dist/` directory

Next, install the Babel plugin `@babel/plugin-transform-react-jsx` to allows JSX parsing inside your code.

```bash
npm install @babel/plugin-transform-react-jsx --save-dev
```

#### Babel configuration

Update the Babel configuration file with the following options.

```javascript
const plugins = [
  [
    "@babel/plugin-transform-react-jsx",
    {
      pragma: "createElement",
      pragmaFrag: '"fragment"'
    }
  ]
];
```

##### Pragma

Replace the function used when compiling JSX expressions. Use `createElement`. The function is exposed by the library.

##### pragmaFrag

Replace the component used when compiling JSX fragments. Use simply `"fragment"` with double quote inside the string.

> More information about `@babel/plugin-transform-react-jsx` can be found on the [Babel documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx).

## How it works

### HTML attributes

- camelCase syntax for all HTML attributes, except for `data-*`, `dataset` and `aria-*` and SVG tags
- `class` or `className` attributes
- `dataset` with object datas

### Condition

Conditional statements can be achieve with the `if` attribute.

```javascript
const persons = ["John Doe", "Mickael Emphys", "Henry pleyd"];
```

```jsx
<div if={persons.length}>I'm visible</div>
```

### Event listeners

Event listeners can be achieve with the events from object property syntax.

```javascript
function handleEvent(e) {
  console.log("Button clicked");
}
```

```jsx
<button onClick={handleEvent}>Submit</button>
```

### Custom event listeners

Custom event listeners can be achieve like native event listeners.

```jsx
<button id="button" onHello={handleCustomEvent}>
  Submit
</button>
```

Dispatch the custom event with the `dispatchEvent` function.

```javascript
dispatchEvent("hello", document.getElementById("#button"));
```

### Fragment

Fragments look like empty JSX tags. They let you group a list of children without adding extra nodes to the DOM:

```javascript
const element = (
  <>
    Some text.
    <h2>A heading</h2>
  </>
);
```

### SVG support

SVG tags are functional, the list below includes supported tags.

```text
animate animateMotion animateTransform circle clipPath color-profil defs desc discard ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter foreignObject g hatch hatchpath image line linearGradient marker mask mesh meshgradient meshpatch meshrow metadata mpath path pattern polygon polyline radialGradient rect script set solidcolor stop style svg switch symbol text textPath title tspan unknown use view
```

## Available methods

### createElement

The `createElement` function is used by the Babel plugin `@babel/plugin-transform-react-jsx`. Import the function on the top of each JSX files.

```javascript
import { createElement } from "../../dist/jsx-extended.esm.js";
```

### render

The `render` function inject JSX elements into the DOM.

```javascript
import { render } from "../../dist/jsx-extended.esm.js";

const elements = <div>Hello</div>;
render(elements, document.getElementById("app"));
```

### dispatchEvent

The `dispatchEvent` function dispatch custom event listeners.

```jsx
import { dispatchEvent } from "../../dist/jsx-extended.esm.js";

dispatchEvent("hello", document.getElementById("#button"));
```

## License

jsxExtended is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Created with ♥ by [@yoriiis](http://github.com/yoriiis).
