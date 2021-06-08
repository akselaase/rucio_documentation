(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(348)),o=["components"],c={title:"1.23.7",sidebar_label:"1.23.7"},s={unversionedId:"release-notes/1.23.7",id:"release-notes/1.23.7",isDocsHomePage:!1,title:"1.23.7",description:"General",source:"@site/../docs/release-notes/1.23.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.7",permalink:"/documentation/release-notes/1.23.7",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.7.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1623155723,formattedLastUpdatedAt:"6/8/2021",sidebar_label:"1.23.7",frontMatter:{title:"1.23.7",sidebar_label:"1.23.7"}},l=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add functional Flask endpoints ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1817"},"#1817"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Provide a better error description for list_dataset_replicas_bulk client API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3981"},"#3981")),Object(i.b)("li",{parentName:"ul"},"Transfers: Protection for negative ranking needed in multihop resolve algorithm ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3997"},"#3997"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Incomplete XML returned when calling list_replicas with metalink option ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2029"},"#2029")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Problem handling unicode characters ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2915"},"#2915")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Caching collisions with rse_attributes and rse_info ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3998"},"#3998")),Object(i.b)("li",{parentName:"ul"},"Deletion: Integrity error when deleting last replica ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3965"},"#3965")),Object(i.b)("li",{parentName:"ul"},"Release management: Using the new pip resolver ends in an endless-loop ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4006"},"#4006")),Object(i.b)("li",{parentName:"ul"},"Transfers: source replica expression ignored for multi-hop transfers ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4029"},"#4029"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: xrootd: stat broken on py3 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4004"},"#4004"))))}b.isMDXComponent=!0},348:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);