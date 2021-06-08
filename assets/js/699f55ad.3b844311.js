(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(348)),a=["components"],c={title:"1.23.3 (clients only)",sidebar_label:"1.23.3 (clients only)"},l={unversionedId:"release-notes/1.23.3",id:"release-notes/1.23.3",isDocsHomePage:!1,title:"1.23.3 (clients only)",description:"Clients",source:"@site/../docs/release-notes/1.23.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.3",permalink:"/documentation/release-notes/1.23.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.3.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1623155723,formattedLastUpdatedAt:"6/8/2021",sidebar_label:"1.23.3 (clients only)",frontMatter:{title:"1.23.3 (clients only)",sidebar_label:"1.23.3 (clients only)"}},s=[{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],u={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"clients"},"Clients"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clients: ca_cert should not be mandatory ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3744"},"#3744")),Object(o.b)("li",{parentName:"ul"},"RSE Manager: GFAL implementation with CLI instead of API ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3537"},"#3537"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clients: do not skip CA check on retry ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3702"},"#3702")),Object(o.b)("li",{parentName:"ul"},"Clients: Infinte loop in retries ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3923"},"#3923")),Object(o.b)("li",{parentName:"ul"},"Clients: Upload fails on some sites due to wrong Filesize mismatch ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3927"},"#3927")),Object(o.b)("li",{parentName:"ul"},"Clients: Upload fails on Google storage ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3928"},"#3928"))))}p.isMDXComponent=!0},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);