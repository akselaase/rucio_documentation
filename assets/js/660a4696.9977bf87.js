(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(377)),i=["components"],c={title:"1.21.1",sidebar_label:"1.21.1"},l={unversionedId:"release-notes/1.21.1",id:"release-notes/1.21.1",isDocsHomePage:!1,title:"1.21.1",description:"General",source:"@site/../docs/release-notes/1.21.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.1",permalink:"/documentation/release-notes/1.21.1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.1.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1647450089,formattedLastUpdatedAt:"3/16/2022",sidebar_label:"1.21.1",frontMatter:{title:"1.21.1",sidebar_label:"1.21.1"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],s={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Testing: Stale files after test ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3118"},"#3118"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: UniqueViolation PSQL driver problem ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3108"},"#3108")),Object(o.b)("li",{parentName:"ul"},"Core & Internals: Broken backwards compatibility for account usage and limits ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3127"},"#3127")),Object(o.b)("li",{parentName:"ul"},"Transfers: Problem when multihop is done through a non-deterministic endpoint ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3128"},"#3128"))))}p.isMDXComponent=!0},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);