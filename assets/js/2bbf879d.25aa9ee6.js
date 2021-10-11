(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(359)),o=["components"],c={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},s={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"Prerequisites",source:"@site/../docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/documentation/configuration",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/configuration.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1633962375,formattedLastUpdatedAt:"10/11/2021",sidebar_label:"Configuration",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Creating new users",id:"creating-new-users",children:[]},{value:"Creating scope",id:"creating-scope",children:[]},{value:"Creating new RSEs",id:"creating-new-rses",children:[]},{value:"Setting quota and permissions",id:"setting-quota-and-permissions",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"You need to have a Rucio server up and running with the root account created. Please refer to ",Object(i.b)("a",{parentName:"p",href:"installing_server.html"},"installation documentation")," for further information"),Object(i.b)("h2",{id:"creating-new-users"},"Creating new users"),Object(i.b)("p",null,"The first step is to create new accounts:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe\n")),Object(i.b)("p",null,"You can choose from different types in the list USER, GROUP, SERVICE. Different policies/permissions can be set depending on the account type.  Once the account is created, you need to create and attach an identity to this account:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin identity add --type X509 --id "/DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe" --email jdoe@blahblih.com --account jdoe\n')),Object(i.b)("p",null,"The list of possible identity types is X509, GSS, USERPASS, SSH, OIDC:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-identities jdoe\n  Identity: /DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe,        type: X509\n")),Object(i.b)("p",null,"You can set attributes to the users:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add-attribute --key country --value xyz jdoe\n")),Object(i.b)("p",null,"And list these attributes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-attributes jdoe\n  +---------+-------+\n  | Key     | Value |\n  |---------+-------|\n  | country | xyz   |\n  +---------+-------+\n")),Object(i.b)("p",null,"You can also list all the accounts matching a certain attribute using the filter option:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin account list --filters "country=xyz"\n  jdoe\n')),Object(i.b)("h2",{id:"creating-scope"},"Creating scope"),Object(i.b)("p",null,"One needs then to create some scopes associated with the accounts:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope add --account jdoe --scope user.jdoe\n")),Object(i.b)("p",null,"Only the owner of the scope or privileged users can write into the scope."),Object(i.b)("p",null,"To list all the scopes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope list\n  user.janedoe\n  user.jdoe\n")),Object(i.b)("h2",{id:"creating-new-rses"},"Creating new RSEs"),Object(i.b)("p",null,"To create a new RSE:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse add SITE3_DISK\n  Added new RSE: SITE3_DISK\n")),Object(i.b)("p",null,"Then you can attach protocols to this RSE. In the following example, a file protocol is added to the site created previously:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin rse add-protocol --hostname blahblah --scheme file --impl rucio.rse.protocols.posix.Default --domain-json \'{"wan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}, "lan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}}\' --prefix /tmp/SITE3_DISK/ SITE3_DISK\n')),Object(i.b)("p",null,"The different parameters are explained in more details if you use the --help option."),Object(i.b)("p",null,"Last step is to create RSE attributes that can be used to build RSE expressions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin rse set-attribute --rse SITE3_DISK --key tier --value 1\n  Added new RSE attribute for SITE3_DISK: tier-1\n  $ rucio-admin rse set-attribute --rse SITE3_DISK --key disk --value 1\n  Added new RSE attribute for SITE3_DISK: disk-1\n  $ rucio list-rses --expression "disk=1&tier=1"\n  SITE3_DISK\n')),Object(i.b)("p",null,"Let's check that everything is properly defined:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse info SITE3_DISK\n  Settings:\n  =========\n    third_party_copy_protocol: 1\n    rse_type: DISK\n    domain: [u'lan', u'wan']\n    availability_delete: True\n    delete_protocol: 1\n    rse: SITE3_DISK\n    deterministic: True\n    write_protocol: 1\n    read_protocol: 1\n    staging_area: False\n    credentials: None\n    availability_write: True\n    lfn2pfn_algorithm: default\n    availability_read: True\n    volatile: False\n    id: 4079d6873603462b8867e4a49674cc11\n  Attributes:\n  ===========\n    tier: True\n    disk: True\n    istape: False\n    SITE3_DISK: True\n  Protocols:\n  ==========\n    file\n      extended_attributes: None\n      hostname: blahblih\n      prefix: /tmp/SITE3_DISK/\n      domains: {u'wan': {u'read': 1, u'write': 1, u'third_party_copy': 0, u'delete': 1}, u'lan': {u'read': 1, u'write': 1, u'delete': 1}}\n      scheme: file\n      port: 0\n      impl: rucio.rse.protocols.posix.Default\n  Usage:\n  ======\n    rucio\n      used: 0\n      rse: SITE3_DISK\n      updated_at: 2018-02-22 13:05:45\n      free: None\n      source: rucio\n      total: 0\n")),Object(i.b)("h2",{id:"setting-quota-and-permissions"},"Setting quota and permissions"),Object(i.b)("p",null,"The root account has all the privileges. You can define other admin accounts by setting the account attribute admin:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin account add-attribute --key admin --value 1 jdoe\n  $ rucio-admin account list --filter "admin=1"\n  jdoe\n')),Object(i.b)("p",null,"The permissions are easily tunable by overloading the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/lib/rucio/core/permission/generic.py"},"generic permission file"),"."),Object(i.b)("p",null,"This is an advanced feature that is not explained there, for more details get in touch with the developers."),Object(i.b)("p",null,"To set the quota for one account on a given RSE:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account set-limits jdoe SITE3_DISK 10000000000000\n  Set account limit for account jdoe on SITE3_DISK: 10.000 TB\n  $ rucio-admin account get-limits jdoe SITE3_DISK\n  Quota on SITE3_DISK for jdoe : 10 TB\n")))}d.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);