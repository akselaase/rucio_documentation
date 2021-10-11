(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(359)),c=["components"],o={title:"1.18.1",sidebar_label:"1.18.1"},s={unversionedId:"release-notes/1.18.1",id:"release-notes/1.18.1",isDocsHomePage:!1,title:"1.18.1",description:"General",source:"@site/../docs/release-notes/1.18.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.1",permalink:"/documentation/release-notes/1.18.1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.1.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1633962375,formattedLastUpdatedAt:"10/11/2021",sidebar_label:"1.18.1",frontMatter:{title:"1.18.1",sidebar_label:"1.18.1"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]},{value:"Bugs",id:"bugs-2",children:[]}]}],l={toc:u};function b(e){var t=e.components,n=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Transfers: Don't send checksum to FTS if verify_checksum is disabled ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1522"},"#1522"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Site attribute check for lan/wan selection needs to be optional ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1528"},"#1528")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Wrong handling of RSE restriction which crashes judge-repairer ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1551"},"#1551")),Object(a.b)("li",{parentName:"ul"},"Life time model: Python exception when specifying an ID to list_exceptions() ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1561"},"#1561")),Object(a.b)("li",{parentName:"ul"},"Life time model: Cannot update the state of lifetime exceptions with multiple datasets ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1569"},"#1569"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: New option for rucio list-rse-usage to list usage per account ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1218"},"#1218")),Object(a.b)("li",{parentName:"ul"},"Clients: Possibility to filter collection on empty state ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1273"},"#1273")),Object(a.b)("li",{parentName:"ul"},"Clients: Client should force xrdcp for zip content streaming ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1559"},"#1559")),Object(a.b)("li",{parentName:"ul"},"Clients: Resolve archives per default in clients ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1560"},"#1560")),Object(a.b)("li",{parentName:"ul"},"Clients: rucio list-dids -h should expose the list of available options ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/509"},"#509"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: wrong error message in clients ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1223"},"#1223")),Object(a.b)("li",{parentName:"ul"},"Clients: Client fails if auth type is x509_proxy and X509_USER_PROXY is not set ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1579"},"#1579"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: Summary page for used quotas for users ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/50"},"#50"))),Object(a.b)("h3",{id:"bugs-2"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: Problems with accessing the REST API and the WebUI in the development docker container ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1516"},"#1516")),Object(a.b)("li",{parentName:"ul"},"WebUI: Wrong z-index affecting top-bar drop-down menu ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1555"},"#1555"),"`")))}b.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,h=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return n?i.a.createElement(h,o(o({ref:t},u),{},{components:n})):i.a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<a;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);