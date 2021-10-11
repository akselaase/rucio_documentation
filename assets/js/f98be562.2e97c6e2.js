(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(359)),c=["components"],i={id:"concepts",title:"Concepts and terminology",sidebar_label:"Concepts"},l={unversionedId:"concepts",id:"concepts",isDocsHomePage:!1,title:"Concepts and terminology",description:"The following concepts define how data is organised, accessed, and",source:"@site/../docs/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/documentation/concepts",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/concepts.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1633962375,formattedLastUpdatedAt:"10/11/2021",sidebar_label:"Concepts",frontMatter:{id:"concepts",title:"Concepts and terminology",sidebar_label:"Concepts"},sidebar:"docs",previous:{title:"Requirements",permalink:"/documentation/requirements"},next:{title:"Release Policy",permalink:"/documentation/releasepolicy"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following concepts define how data is organised, accessed, and\ncatalogued by Rucio. Some concepts, such as accounts, data identifiers,\nor replication rules are fundamental for all types of users, while other\nconcepts, such as notifications or subscriptions are suitable for more\nadvanced use cases."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/Rucio_account"},"Rucio Account")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/File_dataset_container"},"File Dataset Container")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/Rucio_storage_element"},"Rucio_Storage_Element")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/metadata-attributes"},"Metadata Attributes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/Permission-model"},"Permission Model")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/Replica-management"},"Replica Management")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/replication_rules_examples"},"Examples of some replication rules")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/rse_expressions"},"Some RSE Expressions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/Accounting-and-quota"},"Accounting & quota")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/notifications"},"Notifications")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/subscriptions"},"Subscriptions"))))}p.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);