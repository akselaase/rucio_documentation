(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{275:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return _})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),i=(n(0),n(378)),l=["components"],O={id:"installing_daemons",title:"Installing Rucio Daemons"},_={unversionedId:"installing_daemons",id:"installing_daemons",isDocsHomePage:!1,title:"Installing Rucio Daemons",description:"Prerequisites",source:"@site/../docs/installing_daemons.md",sourceDirName:".",slug:"/installing_daemons",permalink:"/documentation/installing_daemons",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/installing_daemons.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1647351017,formattedLastUpdatedAt:"3/15/2022",frontMatter:{id:"installing_daemons",title:"Installing Rucio Daemons"},sidebar:"docs",previous:{title:"Installing Rucio Server",permalink:"/documentation/installing_server"},next:{title:"Monitoring",permalink:"/documentation/monitoring"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install via pip",id:"install-via-pip",children:[]},{value:"Install via Docker",id:"install-via-docker",children:[]},{value:"Environment Variables",id:"environment-variables",children:[{value:"RUCIO_DAEMON",id:"rucio_daemon",children:[]},{value:"RUCIO_DAEMON_ARGS",id:"rucio_daemon_args",children:[]},{value:"RUCIO_ENABLE_LOGS",id:"rucio_enable_logs",children:[]},{value:"RUCIO_CFG configuration parameters",id:"rucio_cfg-configuration-parameters",children:[]}]}],b={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"The Rucio daemons run on Python 2.7, 3.6 and 3.7 on any Unix-like\nplatform."),Object(i.b)("h2",{id:"install-via-pip"},"Install via pip"),Object(i.b)("p",null,"Heads up: We recommend to use the docker-based install (see next\nsection) as it will configure many things for you automatically. Only\nuse the pip-based install if you have a good reason and know how to\nconfigure your web service manually:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pip install rucio\n")),Object(i.b)("p",null,"This will pull the latest release from\n",Object(i.b)("a",{parentName:"p",href:"https://pypi.python.org/pypi/rucio/"},Object(i.b)("strong",{parentName:"a"},"PyPi")),". The Rucio server also needs\nseveral Python dependencies. These are all listed in the file\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/requirements.txt"},Object(i.b)("inlineCode",{parentName:"a"},"requirements.txt")),"\nand will be pulled in as necessary."),Object(i.b)("h2",{id:"install-via-docker"},"Install via Docker"),Object(i.b)("p",null,"This image provides the Rucio daemons. Each daemon has to be run in a\nseparate container. It supports MySQL, PostgreSQL, Oracle, and SQLite as\ndatabase backends."),Object(i.b)("p",null,"This image expects that there is an already initialised Rucio DB. To\nstart a simple ",Object(i.b)("inlineCode",{parentName:"p"},"judge-cleaner")," daemon using a database on\n",Object(i.b)("inlineCode",{parentName:"p"},"mysql.db")," without any additional parameters just run this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'docker run --name=rucio-judge-cleaner \\\n  -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" \\\n  -e RUCIO_DAEMON=judge-cleaner \\\n  rucio/rucio-daemons\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"RUCIO_DAEMON")," environment variable gives the name of\nthe rucio daemon."),Object(i.b)("p",null,"Rucio can be configured fully using environment variables like\n",Object(i.b)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". If you want to instead use a\ncomplete rucio.cfg it can also be mounted. This will then ignore the\n",Object(i.b)("inlineCode",{parentName:"p"},"RUCIO_CFG")," environment variables:"),Object(i.b)("p",null,"The rucio.cfg is used to configure the database backend and the daemons:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-judge-cleaner \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -e RUCIO_DAEMON=judge-cleaner \\\n  rucio/rucio-daemons\n")),Object(i.b)("p",null,"By default the daemon logs are written to stdout and stderr if you want\nto write to a file you can use ",Object(i.b)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_LOGS")," like\nthis:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-judge-cleaner \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -v /tmp/logs:/var/log/rucio -e RUCIO_DAEMON=judge-cleaner \\\n  -e RUCIO_ENABLE_LOGS=True \\\n  rucio/rucio-daemons\n")),Object(i.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"As shown in the examples above the rucio-daemon image can be configured\nusing environment variables that are passed with ","[docker\nrun]","{.title-ref}. Below is a list of all available variables and their\nbehaviour:"),Object(i.b)("h3",{id:"rucio_daemon"},"RUCIO_DAEMON"),Object(i.b)("p",null,"This variable is mandatory and it specifies the name of the daemon,\ne.g., ",Object(i.b)("inlineCode",{parentName:"p"},"hermes"),", ",Object(i.b)("inlineCode",{parentName:"p"},"kronos"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"judge-evaluator"),", etc."),Object(i.b)("h3",{id:"rucio_daemon_args"},"RUCIO_DAEMON_ARGS"),Object(i.b)("p",null,"Any additional command line parameter can be specified here, e.g.,\n",Object(i.b)("inlineCode",{parentName:"p"},"\\--run-once")," This field is optional."),Object(i.b)("h3",{id:"rucio_enable_logs"},"RUCIO_ENABLE_LOGS"),Object(i.b)("p",null,"By default, the log output of the daemon is written to stdout and\nstderr. If you set this variable to ",Object(i.b)("inlineCode",{parentName:"p"},"True")," the output will\nbe written to ",Object(i.b)("inlineCode",{parentName:"p"},"access_log")," and ",Object(i.b)("inlineCode",{parentName:"p"},"error_log")," under\n",Object(i.b)("inlineCode",{parentName:"p"},"/var/log/rucio")),Object(i.b)("h3",{id:"rucio_cfg-configuration-parameters"},"RUCIO_CFG configuration parameters"),Object(i.b)("p",null,"Environment variables can be used to set values for the auto-generated\nrucio.cfg. The names are derived from the actual names in the\nconfiguration file prefixed by ",Object(i.b)("inlineCode",{parentName:"p"},"RUCIO_CFG"),", e.g., the\n",Object(i.b)("inlineCode",{parentName:"p"},"default")," value in the ",Object(i.b)("inlineCode",{parentName:"p"},"database")," section\nbecomes ",Object(i.b)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". All available\nenvironment variables are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_ACCOUNTS_SPECIAL_ACCOUNTS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGDIR"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGLEVEL"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_MAILTEMPLATEDIR"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_DEFAULT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_ECHO"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RECYCLE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_SIZE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_TIMEOUT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_MAX_OVERFLOW"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERACCOUNT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERPASSWORD"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_SERVER"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_PORT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_USER_SCOPE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_POLICY"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SCHEMA"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT_RUCIO"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SITES"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SLEEP_TIME"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_DATASET_LIFETIME"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SET_METADATA"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_AUDITOR_RESULTS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_AUDITOR_CACHE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_SCHEME"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_TRANSFERTOOL"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_FTSHOSTS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_CACERT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USERCERT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_CACHE_TIME"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USE_DETERMINISTIC_ID"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_POLL_TIMEOUT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_SUBMIT_TIMEOUT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_BRING_ONLINE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_QUEUE_MODE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USING_MEMCACHE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_FTSMONHOSTS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_PORT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_SSL_KEY_FILE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_SSL_CERT_FILE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_DESTINATION"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_BROKERS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_VONAME"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_USERNAME"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_PASSWORD"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_PORT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_NONSSL_PORT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_USE_SSL"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_SSL_KEY_FILE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_SSL_CERT_FILE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_DESTINATION"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_BROKERS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_VONAME"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_EMAIL_FROM"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_EMAIL_TEST"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_BROKERS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_PORT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SSL_KEY_FILE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SSL_CERT_FILE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_QUEUE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_PREFETCH_SIZE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_CHUNKSIZE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SUBSCRIPTION_ID"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_USE_SSL"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_RECONNECT_ATTEMPTS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_EXCLUDED_USRDNS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_USERNAME"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_PASSWORD"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_DATASET_WAIT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_PORT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_SSL_KEY_FILE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_SSL_CERT_FILE"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_DESTINATION"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_BROKERS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_VONAME"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_ACCOUNT"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CREDENTIALS_GCS"),Object(i.b)("li",{parentName:"ul"},"RUCIO_CFG_CREDENTIALS_SIGNATURE_LIFETIME")))}o.isMDXComponent=!0},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):O(O({},t),e)),n},o=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},C=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=_(e,["components","mdxType","originalType","parentName"]),o=b(n),C=a,p=o["".concat(l,".").concat(C)]||o[C]||u[C]||i;return n?r.a.createElement(p,O(O({ref:t},c),{},{components:n})):r.a.createElement(p,O({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=C;var O={};for(var _ in t)hasOwnProperty.call(t,_)&&(O[_]=t[_]);O.originalType=e,O.mdxType="string"==typeof e?e:a,l[1]=O;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}C.displayName="MDXCreateElement"}}]);