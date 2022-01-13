(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{185:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(373)),c=["components"],o={title:"1.16.3",sidebar_label:"1.16.3"},s={unversionedId:"release-notes/1.16.3",id:"release-notes/1.16.3",isDocsHomePage:!1,title:"1.16.3",description:"General",source:"@site/../docs/release-notes/1.16.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.16.3",permalink:"/documentation/release-notes/1.16.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.16.3.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1642085251,formattedLastUpdatedAt:"1/13/2022",sidebar_label:"1.16.3",frontMatter:{title:"1.16.3",sidebar_label:"1.16.3"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Consistency checks: Auditor is not able to handle dumps on non-SRM endpoint ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/429"},"#429")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: dataset thread in kronos dies when RSE doesn't exist ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1184"},"#1184")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: Rework docker images for Kubernetes ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1086"},"#1086")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: server and daemons container builds are failing caused by pip install ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1190"},"#1190")),Object(i.b)("li",{parentName:"ul"},"Transfers: Fixes for replica selection in conveyor ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/667"},"#667"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: rucio set-metadata returns status code 0 for non-existing DID ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/493"},"#493")),Object(i.b)("li",{parentName:"ul"},"Consistency checks: Auditor does not work with certain HTTPS dumps ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/367"},"#367")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: DB exception occur after detach and attach DID repeatedly ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1004"},"#1004")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Credentials config/file should be optional not mandatory ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1144"},"#1144")),Object(i.b)("li",{parentName:"ul"},"Transfers: transfers: verify_checksum badly propagated ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1219"},"#1219"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Raise Meaningful Exception When Protocol Fails To Get Checksum ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1149"},"#1149")),Object(i.b)("li",{parentName:"ul"},"Clients: clients: workaround url signature for rucio download until download-api is deployed ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1208"},"#1208"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: ",Object(i.b)("inlineCode",{parentName:"li"},"rucio erase")," with wildcards ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/406"},"#406")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: RSE manager: remove .part from filename if adler32 is set and ignore_checksum is true ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1185"},"#1185"))))}b.isMDXComponent=!0},373:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,o(o({ref:t},u),{},{components:r})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);