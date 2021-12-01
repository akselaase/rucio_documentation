(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{198:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(371)),o=["components"],c={title:"1.18.5",sidebar_label:"1.18.5"},s={unversionedId:"release-notes/1.18.5",id:"release-notes/1.18.5",isDocsHomePage:!1,title:"1.18.5",description:"General",source:"@site/../docs/release-notes/1.18.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.5",permalink:"/documentation/release-notes/1.18.5",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.5.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1638368920,formattedLastUpdatedAt:"12/1/2021",sidebar_label:"1.18.5",frontMatter:{title:"1.18.5",sidebar_label:"1.18.5"}},l=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:l};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Implement missing update_account method ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1685"},"#1685"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: please provide expiration time of the token in HTTP header ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1731"},"#1731")),Object(a.b)("li",{parentName:"ul"},"Consistency checks: Automatically add dark data to quarantine table ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/368"},"#368")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: metalink: make glfn optional ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1535"},"#1535")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: REST API migration to python3  ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1738"},"#1738")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Protection in rucio-admin rse delete ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/26"},"#26")),Object(a.b)("li",{parentName:"ul"},"Messaging: Add top-level attribute EVENT_TYPE to messages ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1281"},"#1281")),Object(a.b)("li",{parentName:"ul"},"Probes & Alarms: Probe to cancel FTS jobs for site in long downtime ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/543"},"#543")),Object(a.b)("li",{parentName:"ul"},"Transfers: Throttler must not release WAITING requests on blacklisted sites ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1710"},"#1710"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: parse_json not python3 compatible ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1490"},"#1490")),Object(a.b)("li",{parentName:"ul"},"Clients: set_metadata exception handler broken ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/942"},"#942")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: metalink: glfn for xcache should point to the file ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1483"},"#1483")),Object(a.b)("li",{parentName:"ul"},"Core & Internals:  listing archived replicas returns wrong filemeta if RSE expression ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1613"},"#1613")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Problem with deleting RSE after deleting attribute ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1689"},"#1689")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: RSE existence check should consider deleted flag ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1703"},"#1703")),Object(a.b)("li",{parentName:"ul"},'Core & Internals: adler32 function should open file in "with" env and propagate the exception correctly ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1718"},"#1718")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Scope name validation regex allows single quotes ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1739"},"#1739")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: add_key broken on mySQL ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/705"},"#705")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Unhandled exception in list_replicas ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/730"},"#730")),Object(a.b)("li",{parentName:"ul"},"Subscriptions: transmogrifier misbehaving with zero subscriptions ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1765"},"#1765")),Object(a.b)("li",{parentName:"ul"},"Traces: Add a protection against bad regular expression for suspicious files in Kronos ",Object(a.b)("inlineCode",{parentName:"li"},"#1755 <https://github.com/rucio/rucio/issues/1755>"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: set-distance exeption not handled correctly ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1725"},"#1725"))))}b.isMDXComponent=!0},371:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(h,c(c({ref:t},l),{},{components:r})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);