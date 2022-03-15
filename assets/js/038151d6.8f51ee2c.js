(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{378:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(378)),o=["components"],c={title:"1.27.3",sidebar_label:"1.27.3"},l={unversionedId:"release-notes/1.27.3",id:"release-notes/1.27.3",isDocsHomePage:!1,title:"1.27.3",description:"General",source:"@site/../docs/release-notes/1.27.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.3",permalink:"/documentation/release-notes/1.27.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.3.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1647351017,formattedLastUpdatedAt:"3/15/2022",sidebar_label:"1.27.3",frontMatter:{title:"1.27.3",sidebar_label:"1.27.3"}},s=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Database: Create a prototype workflow with temporary tables ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5130"},"#5130")),Object(i.b)("li",{parentName:"ul"},"Verify the value of ",Object(i.b)("inlineCode",{parentName:"li"},"expires_at")," for bad/temporary unavailable replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5071"},"#5071"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Transfers: Revisit "rses" filter for request retrieval ',Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4405"},"#4405"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Monitoring & Logging: Incorrect variable type passed to request.core.get_next counter ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5025"},"#5025")),Object(i.b)("li",{parentName:"ul"},"Multi VO: PolicyPackageNotFound: Module rucio.common.permission.generic_multi_vo not found ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4579"},"#4579")),Object(i.b)("li",{parentName:"ul"},"Replicas: GEOIP Maxmindb daily download limit reached ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5077"},"#5077")),Object(i.b)("li",{parentName:"ul"},"Transfers: Default multihop tombstone is effectively None ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5110"},"#5110")),Object(i.b)("li",{parentName:"ul"},"Transfers: ",Object(i.b)("inlineCode",{parentName:"li"},"bring_online")," parameter is submitted as a string, instead of int, to FTS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5146"},"#5146"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: option for expiry date instead of lifetime ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5069"},"#5069"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Download client does not filter out tape sources ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5122"},"#5122"))))}b.isMDXComponent=!0}}]);