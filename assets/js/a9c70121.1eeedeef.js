(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var s=n(3),r=n(7),o=(n(0),n(359)),a=["components"],l={title:"RSE Expressions"},i={unversionedId:"rse_expressions",id:"rse_expressions",isDocsHomePage:!1,title:"RSE Expressions",description:"An RSE Expression allows to select a set of RSEs, for example to",source:"@site/../docs/rse_expressions.md",sourceDirName:".",slug:"/rse_expressions",permalink:"/documentation/rse_expressions",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/rse_expressions.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1633962375,formattedLastUpdatedAt:"10/11/2021",frontMatter:{title:"RSE Expressions"}},c=[{value:"Simple RSE Expressions",id:"simple-rse-expressions",children:[]},{value:"Operators",id:"operators",children:[]},{value:"Composing RSE Expressions",id:"composing-rse-expressions",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,a);return Object(o.b)("wrapper",Object(s.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An RSE Expression allows to select a set of RSEs, for example to\ncreate replication rules. The RSE Expression consists of one or more\nterms. A term can be a single RSE name or a condition over the RSE\nattributes. The RSE Expression Parser resolves each term to a set of\nRSEs. Terms can be connected by operators to form more complex\nexpressions. For example, users can write RSE expressions to address all\nTier 2 RSEs, all the RSEs in certain cloud, all Tier 2 RSEs not in\ncertain clouds, etc."),Object(o.b)("h2",{id:"simple-rse-expressions"},"Simple RSE Expressions"),Object(o.b)("p",null,"Rucio allows to test RSE Expressions, using the command list-rses.\nThe most simple RSE Expression is the one containing the name of a\nparticular RSE."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The following expression returns all RSEs:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --expression '*'\n\nIFIC-LCG2_LOCALGROUPDISK\nIFAE_PRODDISK\nPIC_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nCERN-PROD_TZDISK\nBNL-OSG2_MCTAPE\nBNL-OSG2_DATADISK\nIN2P3-CC_MCTAPE\nCERN-PROD_DERIVED\nCERN-PROD_DATADISK\nEELA-UNLP_DATADISK\nUAM-LCG2_SCRATCHDISK\nIFIC-LCG2_DATADISK LIP-COIMBRA_LOCALGROUPDISK\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Whereas the next expression only returns a set containing a single\nRSE:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"}," jbogadog@lxplus0058:~$ rucio list-rses --expression\n\n EELA-UNLP_SCRATCHDISK\n ELA-UNLP_SCRATCHDISK\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Another simple RSE Expression allows to list the set of all the RSEs\nin a particular site:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --expression site=EELA-UNLP\n\nEELA-UNLP_PRODDISK\nEELA-UNLP_DATADISK\nEELA-UNLP_SCRATCHDISK\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Or all the RSEs who\\'s type is SCRATCHDISK:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"}," jbogadog@lxplus0058:~$ rucio list-rses --expression type=SCRATCHDISK\n\nUNI-SIEGEN-HEP_SCRATCHDISK\nNCG-INGRID-PT_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nINFN-T1_SCRATCHDISK\nFMPHI-UNIBA_SCRATCHDISK\nINFN-FRASCATI_SCRATCHDISK\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Or all the Spanish sites:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --expression SPAINSITES\n\nIFIC-LCG2_LOCALGROUPDISK\nIFAE_PRODDISK\nPIC_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nEELA-UNLP_DATADISK\nUAM-LCG2_SCRATCHDISK\nIFIC-LCG2_DATADISK\nLIP-COIMBRA_LOCALGROUPDISK\n")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Also numerical comparisons with \\< and \\are possible:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'jbogadog@lxplus0058:~$ rucio list-rses --expression "freespace3000"\n\nCERN-PROD_TZDISK\nBNL-OSG2_MCTAPE\nBNL-OSG2_DATADISK\nIN2P3-CC_MCTAPE\nCERN-PROD_DERIVED\nCERN-PROD_DATADISK\n')),Object(o.b)("p",null,"Note that if the RSE Expression returns an empty set, Rucio returns an\nerror as an RSE Expression must resolve to at least one RSE. Thus, an\nerror does not necessarily mean that the syntax of the expression is\nwrong, it might just result into an empty list."),Object(o.b)("p",null,"In 3) and 4), the RSE Expression refers to an attribute in the RSE that\nmust be equal to a given value to match the expression. While in 2) and\n5), the expression matches an RSE if the attribute is True. In 6) a\nnumerical term is used to resolve all RSEs with more than 3000 TB free\nspace. It is possible to see the list of attributes for a particular RSE\nwith Rucio:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rse-attributes EELA-UNLP_SCRATCHDISK\n\nftstesting: https://fts3-pilot.cern.ch:8446\n\nALL: True\nESTIER2S: True\nphysgroup: None\nspacetoken: ATLASSCRATCHDISK\n\nfts: https://fts3.cern.ch:8446,https://lcgfts3.gridpp.rl.ac.uk:8446,https://fts.usatlas.bnl.gov:8446\n\nsite: EELA-UNLP\nEELA-UNLP_SCRATCHDISK: True\ndatapolicyt0disk: False\ncloud: ES\nSPAINSITES: True\ndatapolicyt0taskoutput: False\n\nfts_testing: https://fts3-pilot.cern.ch:8446\ntier: 3\ndatapolicyt0tape: False\ntype: SCRATCHDISK\nistape: False\n")),Object(o.b)("p",null,"Most of the RSEs share the same set of attributes, and is possible to\ncreate RSE Expressions based on all of them."),Object(o.b)("h2",{id:"operators"},"Operators"),Object(o.b)("p",null,"Operators are used to connect terms in order to get more complex RSE\nExpressions/terms. The syntactic functionality of the Rucio RSE\nExpressions Parser allows the basic operations defined in mathematical\nset theory, Union, Intersection and Complement. Using an operator on two\nsets of RSEs will construct a new set based on the given sets."),Object(o.b)("p",null,"The symbols A and B in this table stand for a term."),Object(o.b)("p",null,"Operator Meaning Interpretation Example"),Object(o.b)("hr",null),Object(o.b)("p",null,"A","|","B UNION A union B EELA-UNLP_SCRATCHDISK ","|"," EELA-UNLP_PRODDISK\nA&B INTERSECT A intersect B tier=1&country=us\nA","\\","B COMPLEMENT A complement B cloud=ES","\\","type=SCRATCHDISK"),Object(o.b)("h2",{id:"composing-rse-expressions"},"Composing RSE Expressions"),Object(o.b)("p",null,"Using the operators described above, it\\'s possible to create\nexpressions to select whatever RSE you need to put your data in. Use the\nfollowing list of examples to build your own RSE Expressions."),Object(o.b)("p",null,"All Tier 2 sites in DE cloud:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --expression 'tier=2&cloud=DE'\nPRAGUELCG2_PPSLOCALGROUPDISK\nFMPHI-UNIBA_LOCALGROUPDISK\n...\nUNI-FREIBURG_DATADISK\nDESY-HH_PRODDISK\n")),Object(o.b)("p",null,"Note the use of the single quotes. Single quotes are needed to avoid the\nshell interpret the &, the ","|"," or the ","\\"," as commands."),Object(o.b)("p",null,"All tier 1 but not the ones in country=us:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --expression 'tier=1\\country=us'\n\nINFN-T1_MCTAPE\nBNL-OSG2_DATATAPE\nBNL-OSG2_DDMTEST\nNIKHEF-ELPROD_PHYS-SUSY\n")),Object(o.b)("p",null,"However, take care of the subtle differences. While the first expression\nexclude United States\\' sites, the second doesn\\'t:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --expression 'tier=1\\country=us'|wc -l\n115\n\njbogadog@lxplus0100:~$ rucio list-rses --expression 'tier=1\\country=US'|wc -l\n117\n")),Object(o.b)("p",null,"The filters are processed from left to right. Is possible to use\nparenthesis to force the order of operation. See the following example\nto get all the SCRATCHDISKs in IT or FR clouds:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --expression 'cloud=IT|cloud=FR&type=SCRATCHDISK'|wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --expression '(cloud=IT|cloud=FR)&type=SCRATCHDISK'|wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --expression 'type=SCRATCHDISK&(cloud=IT|cloud=FR)'|wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --expression 'type=SCRATCHDISK&cloud=IT|cloud=FR'|wc -l\n92\n")),Object(o.b)("p",null,"While the first three operations are equivalent, the last return sites\nin cloud FR but not only the SCRATCHDISKs but the GROUPDISKs and\nDATADISKs too, among other types."))}u.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return E}));var s=n(0),r=n.n(s);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},S=r.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),S=s,E=u["".concat(a,".").concat(S)]||u[S]||b[S]||o;return n?r.a.createElement(E,l(l({ref:t},c),{},{components:n})):r.a.createElement(E,l({ref:t},c))}));function E(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=S;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}S.displayName="MDXCreateElement"}}]);