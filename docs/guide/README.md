# Introduction

Write templating in Javascript with the power of **JSX** without any framework built-in.

Web frameworks are trended, reactive and perfects for building complex single-page applications but sometimes a little overkills for your purposes. For better performance it is often more optimized to write the Javascript in vanilla to avoid an extra size of the final bundles and fastest render.

Introduced in ES2015, aka ES6, Template Literals offer a new way to declare strings but can be complex with multiple components, loops and deep conditions.

JSX introduced by React works perfectly with React but in standalone, the usage is more complicated.

Let's quickly look at the solutions available to us.

## Template Literals

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

## JSX

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

## Limitation

Template literals are not optimized for large string components and indentation issues are commons with formatter tools. Events listeners need to be declare separately and deep condition can make readability more complex.

JSX is more easy to write and the template can grow without problem. Events listeners are automatically managed but conditions and custom events are missing.

## Without React

Yes! With `jsx`, JSX can be used without React with only the support of the Babel plugin `@babel/plugin-transform-react-jsx` to enabling JSX parsing. Main JSX features available in React are available without React, simply.

## Features

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
