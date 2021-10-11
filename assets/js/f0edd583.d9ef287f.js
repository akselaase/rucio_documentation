(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{334:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(359)),o=["components"],c={title:"1.22.6",sidebar_label:"1.22.6"},s={unversionedId:"release-notes/1.22.6",id:"release-notes/1.22.6",isDocsHomePage:!1,title:"1.22.6",description:"General",source:"@site/../docs/release-notes/1.22.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.6",permalink:"/documentation/release-notes/1.22.6",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.22.6.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1633962375,formattedLastUpdatedAt:"10/11/2021",sidebar_label:"1.22.6",frontMatter:{title:"1.22.6",sidebar_label:"1.22.6"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: rucio.cfg config options for OIDC. New Feature: automatic token refresh on the client side.  ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3572"},"#3572")),Object(a.b)("li",{parentName:"ul"},"Messaging: conveyor-receiver only works with ssl/certificates ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3592"},"#3592")),Object(a.b)("li",{parentName:"ul"},"Rules: add sharded apply_rule function to rule_grouping ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3461"},"#3461")),Object(a.b)("li",{parentName:"ul"},"Testing: Mock transfer tool ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3552"},"#3552")),Object(a.b)("li",{parentName:"ul"},"Transfers: Move config.yml to ./etc directory with other rucio configuration files ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3350"},"#3350")),Object(a.b)("li",{parentName:"ul"},"Transfers: Add possibility to ask for Staging from DISK RSEs ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3583"},"#3583"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC fix oauth_manager ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3566"},"#3566")),Object(a.b)("li",{parentName:"ul"},"Clients: Can't display global quota from CLI ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3200"},"#3200")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Python 3 DB initialisation fails due to VO table ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3480"},"#3480")),Object(a.b)("li",{parentName:"ul"},"Traces: kronos breaks if RSE does not exist ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3593"},"#3593"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Specify client configuration file via env var and/or CLI option ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3377"},"#3377"))))}b.isMDXComponent=!0},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,f=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(f,c(c({ref:t},u),{},{components:r})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);