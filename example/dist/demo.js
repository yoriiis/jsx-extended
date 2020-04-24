!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s="./example/src/demo.jsx")}({"./dist/jsx-extended.esm.js":function(e,t,n){"use strict";n.d(t,"createElement",(function(){return m})),n.d(t,"dispatchEvent",(function(){return r})),n.d(t,"render",(function(){return s}));
/*!
 * JSX Extended v1.0.0
 * (c) 2020-2020 Yoriiis
 * Released under the MIT License.
 */
const a={condition:"^if$",event:"^(on)([A-Z]{1}[a-z]+)+$",domAttribute:"^(?!(on|if$))([a-z]+|[a-z]+([A-Z]{1}[a-z]+)+|data(-[a-z]+)+|aria-[a-z]+)$"},c={animate:"animate",animateMotion:"animateMotion",animateTransform:"animateTransform",circle:"circle",clipPath:"clipPath","color-profile":"color-profile",defs:"defs",desc:"desc",discard:"discard",ellipse:"ellipse",feBlend:"feBlend",feColorMatrix:"feColorMatrix",feComponentTransfer:"feComponentTransfer",feComposite:"feComposite",feConvolveMatrix:"feConvolveMatrix",feDiffuseLighting:"feDiffuseLighting",feDisplacementMap:"feDisplacementMap",feDistantLight:"feDistantLight",feDropShadow:"feDropShadow",feFlood:"feFlood",feFuncA:"feFuncA",feFuncB:"feFuncB",feFuncG:"feFuncG",feFuncR:"feFuncR",feGaussianBlur:"feGaussianBlur",feImage:"feImage",feMerge:"feMerge",feMergeNode:"feMergeNode",feMorphology:"feMorphology",feOffset:"feOffset",fePointLight:"fePointLight",feSpecularLighting:"feSpecularLighting",feSpotLight:"feSpotLight",feTile:"feTile",feTurbulence:"feTurbulence",filter:"filter",foreignObject:"foreignObject",g:"g",hatch:"hatch",hatchpath:"hatchpath",image:"image",line:"line",linearGradient:"linearGradient",marker:"marker",mask:"mask",mesh:"mesh",meshgradient:"meshgradient",meshpatch:"meshpatch",meshrow:"meshrow",metadata:"metadata",mpath:"mpath",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",script:"script",set:"set",solidcolor:"solidcolor",stop:"stop",style:"style",svg:"svg",switch:"switch",symbol:"symbol",text:"text",textPath:"textPath",title:"title",tspan:"tspan",unknown:"unknown",use:"use",view:"view"};function l(e,t,n=!1){if(i(a,e)){const c=a[e];return Object.keys(t).filter(e=>n?e:new RegExp(c).test(e)).map(e=>({name:n?e:e.toLowerCase(),value:t[e]}))}return[]}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function r(e,t){t.dispatchEvent(new window.CustomEvent(e))}function o(e,t){return e.filter(e=>e!==t)}function s(e,t){t.appendChild(e)}function m(e,t={},...n){if(null!==t&&!1===function({attributes:e}){const t=l("condition",e);if(t.length)return t[0].value}({attributes:t}))return null;let a;if(e instanceof Function)a=e(t||{});else if("fragment"===e)a=document.createDocumentFragment();else{const n=i(c,e);a=n?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e),null!==t&&(function({element:e,attributes:t,isSvg:n}){l("domAttribute",t,n).map(({name:e,value:t})=>({name:"classname"===e?"class":e,value:t})).map(({name:t,value:n})=>{"style"===t&&n instanceof Object?Object.keys(n).map(t=>e.style[t]=n[t]):"dataset"===t?n instanceof Object&&!Array.isArray(n)&&Object.keys(n).map(t=>{e.dataset[t]=n[t]}):function(e,t){e.setAttribute(t.name,t.value)}(e,{name:t,value:n})})}({element:a,attributes:t,isSvg:n}),function({element:e,attributes:t}){l("event",t).map(({name:e,...t})=>({name:e.substr(2),...t})).map(t=>function(e,t){e.addEventListener(t.name,t.value,!1)}(e,t))}({element:a,attributes:t}))}const r=o(n,null);for(const e of r)if(null!==e)if(Array.isArray(e)){const t=o(e,null);a.append(...t)}else a.append(e);return a}},"./example/src/demo.css":function(e,t,n){},"./example/src/demo.jsx":function(e,t,n){"use strict";n.r(t);var a=n("./dist/jsx-extended.esm.js");n("./example/src/demo.css");function c(e){console.log("event",e.type,this)}console.log(a.createElement,a.render,a.dispatchEvent);const l=e=>Object(a.createElement)("input",{type:"text","data-name":e.name,value:e.name,onKeyup:c}),i=["John Doe","Mickael Emphys","Henry pleyd"],r=Object(a.createElement)("fragment",null,Object(a.createElement)("section",null,Object(a.createElement)("h3",{className:"sectionTitle"},"Conditional"),Object(a.createElement)("p",{if:i.length},"I'm visible"),Object(a.createElement)("p",{if:0===i.length},"I'm invisible")),Object(a.createElement)("section",null,Object(a.createElement)("h3",{className:"sectionTitle"},"SVG"),Object(a.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 48 48",width:"50px",height:"50px"},Object(a.createElement)("g",null,Object(a.createElement)("circle",{id:"Oval",class:"st0",cx:"24",cy:"24",r:"24",fill:"#fbd971"}),Object(a.createElement)("path",{class:"st1",d:"M24 41.1c-7.6 0-13.7-6.2-13.7-13.7 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 6.3 5.1 11.4 11.4 11.4s11.4-5.1 11.4-11.4c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1.2 7.6-5.9 13.7-13.5 13.7z",fill:"#d8b11a"}),Object(a.createElement)("path",{fill:"#e64c3c",d:"M14.3 12.2c.5-1.1 1.6-1.9 3-1.9 1.8 0 3.1 1.5 3.2 3.2 0 0 .1.4-.1 1.2-.3 1.1-.9 2-1.7 2.8l-4.4 3.8-4.3-3.8c-.8-.7-1.4-1.7-1.7-2.8-.2-.8-.1-1.2-.1-1.2.2-1.8 1.5-3.2 3.2-3.2 1.4 0 2.4.8 2.9 1.9z"}),Object(a.createElement)("path",{fill:"#e64c3c",d:"M33.6 12.2c.5-1.1 1.6-1.9 3-1.9 1.8 0 3.1 1.5 3.2 3.2 0 0 .1.4-.1 1.2-.3 1.1-.9 2-1.7 2.8l-4.4 3.8-4.3-3.8c-.8-.7-1.4-1.7-1.7-2.8-.2-.8-.1-1.2-.1-1.2.2-1.8 1.5-3.2 3.2-3.2 1.3 0 2.4.8 2.9 1.9z"})))),Object(a.createElement)("section",{style:{backgroundColor:"#272b30",color:"#fff"}},Object(a.createElement)("h3",{className:"sectionTitle"},"HTML attributes"),Object(a.createElement)("p",{style:"color: #ffe300;",class:"text",id:"text-1","data-type":"content","aria-label":"Text"},"I've multiple `data-attribute`")),Object(a.createElement)("section",null,Object(a.createElement)("h3",{className:"sectionTitle"},"Function component with props and events keyup"),Object(a.createElement)(l,{name:i[1]})),Object(a.createElement)("section",null,Object(a.createElement)("h3",{className:"sectionTitle"},"Loop"),Object(a.createElement)("ul",null,i.map((e,t)=>Object(a.createElement)("li",null,Object(a.createElement)("label",null,Object(a.createElement)("span",null,"Name ",Object(a.createElement)("em",{if:0===t},"I'm visible")),Object(a.createElement)(l,{if:t>0,name:e})))))),Object(a.createElement)("section",null,Object(a.createElement)("h3",{className:"sectionTitle"},"Test events click"),Object(a.createElement)("button",{class:"btn",onClick:c},"Submit")),Object(a.createElement)("section",{id:"section-custom-event",onHello:function(e){this.classList.toggle("colored")}},Object(a.createElement)("h3",{className:"sectionTitle"},"Test custom event"),Object(a.createElement)("button",{class:"btn",onClick:function(e){console.log("triggerCustomEvent",e.type,this),Object(a.dispatchEvent)("hello",document.querySelector("#section-custom-event"))}},"Submit")));Object(a.render)(r,document.getElementById("app"))}});