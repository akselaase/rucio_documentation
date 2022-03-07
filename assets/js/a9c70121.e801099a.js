(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),s=n(7),a=(n(0),n(377)),o=["components"],l={title:"RSE Expressions"},i={unversionedId:"rse_expressions",id:"rse_expressions",isDocsHomePage:!1,title:"RSE Expressions",description:"An RSE Expression allows to select a set of RSEs, for example to",source:"@site/../docs/rse_expressions.md",sourceDirName:".",slug:"/rse_expressions",permalink:"/documentation/rse_expressions",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/rse_expressions.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646660126,formattedLastUpdatedAt:"3/7/2022",frontMatter:{title:"RSE Expressions"}},p=[{value:"Simple RSE Expressions",id:"simple-rse-expressions",children:[]},{value:"Operators",id:"operators",children:[]},{value:"Composing RSE Expressions",id:"composing-rse-expressions",children:[]}],c={toc:p};function b(e){var t=e.components,n=Object(s.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"An RSE Expression allows to select a set of RSEs, for example to\ncreate replication rules. The RSE Expression consists of one or more\nterms. A term can be a single RSE name or a condition over the RSE\nattributes. The RSE Expression Parser resolves each term to a set of\nRSEs. Terms can be connected by operators to form more complex\nexpressions. For example, users can write RSE expressions to address all\nTier 2 RSEs, all the RSEs in certain cloud, all Tier 2 RSEs not in\ncertain clouds, etc."),Object(a.b)("h2",{id:"simple-rse-expressions"},"Simple RSE Expressions"),Object(a.b)("p",null,"Rucio allows to test RSE Expressions, using the command list-rses.\nThe most simple RSE Expression is the one containing the name of a\nparticular RSE."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The following expression returns all RSEs:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --expression '*'\n\nIFIC-LCG2_LOCALGROUPDISK\nIFAE_PRODDISK\nPIC_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nCERN-PROD_TZDISK\nBNL-OSG2_MCTAPE\nBNL-OSG2_DATADISK\nIN2P3-CC_MCTAPE\nCERN-PROD_DERIVED\nCERN-PROD_DATADISK\nEELA-UNLP_DATADISK\nUAM-LCG2_SCRATCHDISK\nIFIC-LCG2_DATADISK LIP-COIMBRA_LOCALGROUPDISK\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Whereas the next expression only returns a set containing a single\nRSE:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --expression\n\nEELA-UNLP_SCRATCHDISK\nELA-UNLP_SCRATCHDISK\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Another simple RSE Expression allows to list the set of all the RSEs\nin a particular site:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --expression site=EELA-UNLP\n\nEELA-UNLP_PRODDISK\nEELA-UNLP_DATADISK\nEELA-UNLP_SCRATCHDISK\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Or all the RSEs who's type is ",Object(a.b)("inlineCode",{parentName:"p"},"SCRATCHDISK"),":"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --expression type=SCRATCHDISK\n\nUNI-SIEGEN-HEP_SCRATCHDISK\nNCG-INGRID-PT_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nINFN-T1_SCRATCHDISK\nFMPHI-UNIBA_SCRATCHDISK\nINFN-FRASCATI_SCRATCHDISK\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Or all the Spanish sites:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --expression SPAINSITES\n\nIFIC-LCG2_LOCALGROUPDISK\nIFAE_PRODDISK\nPIC_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nEELA-UNLP_DATADISK\nUAM-LCG2_SCRATCHDISK\nIFIC-LCG2_DATADISK\nLIP-COIMBRA_LOCALGROUPDISK\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Also numerical comparisons with ",Object(a.b)("inlineCode",{parentName:"p"},"<")," and ",Object(a.b)("inlineCode",{parentName:"p"},">")," are possible:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},'jbogadog@lxplus0058:~$ rucio list-rses --expression "freespace>3000"\n\nCERN-PROD_TZDISK\nBNL-OSG2_MCTAPE\nBNL-OSG2_DATADISK\nIN2P3-CC_MCTAPE\nCERN-PROD_DERIVED\nCERN-PROD_DATADISK\n')))),Object(a.b)("p",null,"Note that if the RSE Expression returns an empty set, Rucio returns an error as\nan RSE Expression must resolve to ",Object(a.b)("strong",{parentName:"p"},"at least one")," RSE. Thus, an error does not\nnecessarily mean that the syntax of the expression is wrong, it might just\nresult into an empty list."),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"3.")," and ",Object(a.b)("inlineCode",{parentName:"p"},"4."),", the RSE Expression refers to an attribute in the RSE that must\nbe equal to a given value to match the expression. While in ",Object(a.b)("inlineCode",{parentName:"p"},"2.")," and ",Object(a.b)("inlineCode",{parentName:"p"},"5."),", the\nexpression matches an RSE if the attribute is True. In ",Object(a.b)("inlineCode",{parentName:"p"},"6.")," a numerical term is\nused to resolve all RSEs with more than 3000 TB free space. It is possible to\nsee the list of attributes for a particular RSE with Rucio:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rse-attributes EELA-UNLP_SCRATCHDISK\n\nftstesting: https://fts3-pilot.cern.ch:8446\n\nALL: True\nESTIER2S: True\nphysgroup: None\nspacetoken: ATLASSCRATCHDISK\n\nfts: https://fts3.cern.ch:8446,https://lcgfts3.gridpp.rl.ac.uk:8446,https://fts.usatlas.bnl.gov:8446\n\nsite: EELA-UNLP\nEELA-UNLP_SCRATCHDISK: True\ndatapolicyt0disk: False\ncloud: ES\nSPAINSITES: True\ndatapolicyt0taskoutput: False\n\nfts_testing: https://fts3-pilot.cern.ch:8446\ntier: 3\ndatapolicyt0tape: False\ntype: SCRATCHDISK\nistape: False\n")),Object(a.b)("p",null,"Most of the RSEs share the same set of attributes, and is possible to create RSE\nExpressions based on all of them."),Object(a.b)("h2",{id:"operators"},"Operators"),Object(a.b)("p",null,"Operators are used to connect terms in order to get more complex RSE\nExpressions/terms. The syntactic functionality of the Rucio RSE Expressions\nParser allows the basic operations defined in mathematical set theory, Union,\nIntersection and Complement. Using an operator on two sets of RSEs will\nconstruct a new set based on the given sets."),Object(a.b)("p",null,"The symbols A and B in this table stand for a term."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Operator"),Object(a.b)("th",{parentName:"tr",align:null},"Meaning"),Object(a.b)("th",{parentName:"tr",align:null},"Interpretation"),Object(a.b)("th",{parentName:"tr",align:null},"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"A","|","B"),Object(a.b)("td",{parentName:"tr",align:null},"UNION"),Object(a.b)("td",{parentName:"tr",align:null},"A union B"),Object(a.b)("td",{parentName:"tr",align:null},"tier=1","|","tier=2")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"A&B"),Object(a.b)("td",{parentName:"tr",align:null},"INTERSECT"),Object(a.b)("td",{parentName:"tr",align:null},"A intersect B"),Object(a.b)("td",{parentName:"tr",align:null},"tier=1&country=us")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"A","\\","B"),Object(a.b)("td",{parentName:"tr",align:null},"COMPLEMENT"),Object(a.b)("td",{parentName:"tr",align:null},"A complement B"),Object(a.b)("td",{parentName:"tr",align:null},"cloud=ES","\\","type=SCRATCHDISK")))),Object(a.b)("h2",{id:"composing-rse-expressions"},"Composing RSE Expressions"),Object(a.b)("p",null,"Using the operators described above, it's possible to create expressions to\nselect whatever RSE you need to put your data in. Use the following list of\nexamples to build your own RSE Expressions."),Object(a.b)("p",null,"All Tier 2 sites in DE cloud:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --expression 'tier=2&cloud=DE'\nPRAGUELCG2_PPSLOCALGROUPDISK\nFMPHI-UNIBA_LOCALGROUPDISK\n...\nUNI-FREIBURG_DATADISK\nDESY-HH_PRODDISK\n")),Object(a.b)("p",null,"Note the use of the single quotes. Single quotes are needed to avoid the shell\ninterpret the ",Object(a.b)("inlineCode",{parentName:"p"},"&"),", the ",Object(a.b)("inlineCode",{parentName:"p"},"\\|")," or the ",Object(a.b)("inlineCode",{parentName:"p"},"\\\\")," as commands."),Object(a.b)("p",null,"All tier 1 but not the ones in country=us:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --expression 'tier=1\\country=us'\n\nINFN-T1_MCTAPE\nBNL-OSG2_DATATAPE\nBNL-OSG2_DDMTEST\nNIKHEF-ELPROD_PHYS-SUSY\n")),Object(a.b)("p",null,"However, take care of the subtle differences. While the first expression exclude\nUnited States' sites, the second doesn't:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --expression 'tier=1\\country=us'|wc -l\n115\n\njbogadog@lxplus0100:~$ rucio list-rses --expression 'tier=1\\country=US'|wc -l\n117\n")),Object(a.b)("p",null,"The filters are processed from left to right. Is possible to use parenthesis to\nforce the order of operation. See the following example to get all the\n",Object(a.b)("inlineCode",{parentName:"p"},"SCRATCHDISK"),"s in IT or FR clouds:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --expression \\\n  'cloud=IT|cloud=FR&type=SCRATCHDISK' | wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --expression \\\n  '(cloud=IT|cloud=FR)&type=SCRATCHDISK' | wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --expression \\\n  'type=SCRATCHDISK&(cloud=IT|cloud=FR)' | wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --expression \\\n  'type=SCRATCHDISK&cloud=IT|cloud=FR' | wc -l\n92\n")),Object(a.b)("p",null,"While the first three operations are equivalent, the last return sites in cloud\n",Object(a.b)("inlineCode",{parentName:"p"},"FR")," but not only the ",Object(a.b)("inlineCode",{parentName:"p"},"SCRATCHDISK"),"s but the ",Object(a.b)("inlineCode",{parentName:"p"},"GROUPDISK"),"s and ",Object(a.b)("inlineCode",{parentName:"p"},"DATADISK"),"s too,\namong other types."))}b.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=s.a.createContext({}),c=function(e){var t=s.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return s.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=c(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?s.a.createElement(d,l(l({ref:t},p),{},{components:n})):s.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);