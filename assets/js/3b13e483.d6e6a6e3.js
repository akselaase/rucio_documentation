(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(373)),o=["components"],c={title:"1.23.2",sidebar_label:"1.23.2"},s={unversionedId:"release-notes/1.23.2",id:"release-notes/1.23.2",isDocsHomePage:!1,title:"1.23.2",description:"General",source:"@site/../docs/release-notes/1.23.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.2",permalink:"/documentation/release-notes/1.23.2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.2.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1642085251,formattedLastUpdatedAt:"1/13/2022",sidebar_label:"1.23.2",frontMatter:{title:"1.23.2",sidebar_label:"1.23.2"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Add authentication options for multi-VO ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3855"},"#3855")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: geoip database: use licence key ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3812"},"#3812")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Expose limit parameter to REST API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3871"},"#3871")),Object(i.b)("li",{parentName:"ul"},"Deletion: Implement archival of deleted dids ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3879"},"#3879")),Object(i.b)("li",{parentName:"ul"},"Documentation: generic m-VO documentation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3897"},"#3897")),Object(i.b)("li",{parentName:"ul"},"Probes & Alarms: Lost files - make it uniqe ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2104"},"#2104")),Object(i.b)("li",{parentName:"ul"},"Testing: Change m-VO tests to use postgres ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3865"},"#3865"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Cannot update the account of a rule ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3794"},"#3794")),Object(i.b)("li",{parentName:"ul"},"Dirac: addfile method broken ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3876"},"#3876")),Object(i.b)("li",{parentName:"ul"},"Transfers: Conveyor submitter daemons are doing nothing if there are many requests with no sources. (Can reproduce) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3856"},"#3856"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Gfal logging ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3716"},"#3716")),Object(i.b)("li",{parentName:"ul"},"Clients: rucio mover is not retrying stageout 3 times as it should ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3805"},"#3805")),Object(i.b)("li",{parentName:"ul"},"Clients: stateReason not filled in the traces after timeout ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3835"},"#3835"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Client broken when extract_scope is used for user data for belleii schema ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3881"},"#3881"))))}b.isMDXComponent=!0},373:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(h,c(c({ref:t},u),{},{components:r})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);