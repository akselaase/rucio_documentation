(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(373)),s=["components"],i={title:"Replication rule examples"},c={unversionedId:"replication_rules_examples",id:"replication_rules_examples",isDocsHomePage:!1,title:"Replication rule examples",description:"Replica management is based on replication rules defined on data",source:"@site/../docs/replication_rules_examples.md",sourceDirName:".",slug:"/replication_rules_examples",permalink:"/documentation/replication_rules_examples",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/replication_rules_examples.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1642085251,formattedLastUpdatedAt:"1/13/2022",frontMatter:{title:"Replication rule examples"}},l=[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,s);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Replica management is based on replication rules defined on data\nidentifiers. A replication rule gets resolved and issues replica locks\non the physical replicas."),Object(o.b)("p",null,"A replication rule consists (besides other parameters) of a factor\nrepresenting the numbers of replicas wanted and a Rucio Storage Element\nExpression that allows to select a set of probable RSEs to store the\nreplicas."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/documentation/rse_expressions"},Object(o.b)("strong",{parentName:"a"},"RSE Expression"))," gets resolved into a set of\nRSEs, which are possible destination RSEs for the number of replicas the\nuser wants to create."),Object(o.b)("p",null,"Is possible to find detailed information and examples about how to write\nRSE Expressions ",Object(o.b)("a",{parentName:"p",href:"/documentation/rse_expressions"},Object(o.b)("strong",{parentName:"a"},"here")),"."),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"I want to have 2 replicas of first_dataset and second_dataset on Tier 1 RSEs")),Object(o.b)("p",null,"The number 2 ",Object(o.b)("em",{parentName:"p"},"second_dataset")," is the number of copies expected. At the\nend, the RSE Expression select all the Tier 1 RSEs as possible targets\nto store the replicas.:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'tier=1'\n")),Object(o.b)("p",null,"To see all the possible targets, ",Object(o.b)("strong",{parentName:"p"},"rucio list-rses")," command can be\nused:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio list-rses --rses 'tier=1'\n")),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"I want to have 2 replicas on whatever T2 RSEs in the UK but it\nshouldn\\'t be Glasgow"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'country=uk\\site=GLASGOW'\n")))}u.isMDXComponent=!0},373:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);