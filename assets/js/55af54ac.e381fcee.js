(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{146:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return u})),t.d(e,"toc",(function(){return l})),t.d(e,"default",(function(){return p}));var r=t(3),o=t(7),c=(t(0),t(348)),i=["components"],a={title:"Running rucio-sonar"},u={unversionedId:"bin/rucio-sonar",id:"bin/rucio-sonar",isDocsHomePage:!1,title:"Running rucio-sonar",description:"`",source:"@site/../docs/bin/rucio-sonar.md",sourceDirName:"bin",slug:"/bin/rucio-sonar",permalink:"/documentation/bin/rucio-sonar",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-sonar.md",version:"current",frontMatter:{title:"Running rucio-sonar"}},l=[],s={toc:l};function p(n){var e=n.components,t=Object(o.a)(n,i);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"2021-06-08 12:41:47,137 root    1010    INFO    Starting sonar tests.\n2021-06-08 12:41:47,141 urllib3.connectionpool  1010    DEBUG   Starting new HTTPS connection (1): localhost:443\n2021-06-08 12:41:47,142 baseclient  1010    ERROR   ConnectionError: HTTPSConnectionPool(host='localhost', port=443): Max retries exceeded with url: /auth/userpass (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7f01d6801128>: Failed to establish a new connection: [Errno 111] Connection refused',))\n2021-06-08 12:41:47,143 urllib3.connectionpool  1010    DEBUG   Starting new HTTPS connection (2): localhost:443\n2021-06-08 12:41:47,144 baseclient  1010    ERROR   ConnectionError: HTTPSConnectionPool(host='localhost', port=443): Max retries exceeded with url: /auth/userpass (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7f01d6801b70>: Failed to establish a new connection: [Errno 111] Connection refused',))\n2021-06-08 12:41:47,145 urllib3.connectionpool  1010    DEBUG   Starting new HTTPS connection (3): localhost:443\n2021-06-08 12:41:47,146 baseclient  1010    ERROR   ConnectionError: HTTPSConnectionPool(host='localhost', port=443): Max retries exceeded with url: /auth/userpass (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7f01d6801e80>: Failed to establish a new connection: [Errno 111] Connection refused',))\n2021-06-08 12:41:47,146 baseclient  1010    ERROR   Cannot retrieve authentication token!\n")))}p.isMDXComponent=!0},348:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return f}));var r=t(0),o=t.n(r);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=o.a.createContext({}),s=function(n){var e=o.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=s(n.components);return o.a.createElement(l.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,c=n.originalType,i=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||c;return t?o.a.createElement(f,a(a({ref:e},l),{},{components:t})):o.a.createElement(f,a({ref:e},l))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=n,a.mdxType="string"==typeof n?n:r,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);