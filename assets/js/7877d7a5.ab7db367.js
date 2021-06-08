(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{184:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(348)),o=["components"],c={title:"1.14.2",sidebar_label:"1.14.2"},s={unversionedId:"release-notes/1.14.2",id:"release-notes/1.14.2",isDocsHomePage:!1,title:"1.14.2",description:"General",source:"@site/../docs/release-notes/1.14.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.2",permalink:"/documentation/release-notes/1.14.2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.2.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1623155723,formattedLastUpdatedAt:"6/8/2021",sidebar_label:"1.14.2",frontMatter:{title:"1.14.2",sidebar_label:"1.14.2"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: db: fix sqlalchemy text conversion ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/288"},"#288")),Object(i.b)("li",{parentName:"ul"},"Documentation: Adapt setup.py for buildthedocs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/285"},"#285")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: Include postgres client into the CC7 docker image ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/282"},"#282")),Object(i.b)("li",{parentName:"ul"},"Probes & Alarms: Upload/download probe for rucio-clients ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/272"},"#272")),Object(i.b)("li",{parentName:"ul"},"Release management: Add Extras dependency on the possible rucio backend (oracle, mysql, postgresql) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/281"},"#281")),Object(i.b)("li",{parentName:"ul"},"Testing: Enable travis postgresql tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/280"},"#280"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Make all queries fully postgresql compatible ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/265"},"#265")),Object(i.b)("li",{parentName:"ul"},"Documentation: Fixed badly merged conf.py file  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/307"},"#307"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Policy-based generation of RucioUI pages ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/245"},"#245"))))}b.isMDXComponent=!0},348:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);