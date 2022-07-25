"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[6827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const o={},s="What are the future use cases for Fedimint?",a={unversionedId:"FAQs/FutureUseCases",id:"FAQs/FutureUseCases",title:"What are the future use cases for Fedimint?",description:"This Guide is being actively worked on!",source:"@site/docs/FAQs/FutureUseCases.md",sourceDirName:"FAQs",slug:"/FAQs/FutureUseCases",permalink:"/wiki_fedimint/docs/FAQs/FutureUseCases",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/FAQs/FutureUseCases.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backups",permalink:"/wiki_fedimint/docs/FAQs/Backups"},next:{title:"The history of Fedimint",permalink:"/wiki_fedimint/docs/FAQs/HistroyofFedimint"}},u={},l=[{value:"Is it possible to perform \u201cDeFi\u201d on Fedimints?",id:"is-it-possible-to-perform-defi-on-fedimints",level:2},{value:"Can stablecoins be used on fedmints?",id:"can-stablecoins-be-used-on-fedmints",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-are-the-future-use-cases-for-fedimint"},"What are the future use cases for Fedimint?"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This Guide is being actively worked on!")),(0,r.kt)("p",null,"There are many speculative use cases for Fedimints that will likely be explored in the next few years. "),(0,r.kt)("p",null,"It is worth remembering that Fedimint is an open protocol and as such no permission is required to build and deploy new modules or business models as you see fit. "),(0,r.kt)("p",null,"Inclusion of use cases in this list, doesn't indicate any specific interest or promotion by the contributors to fedimint."),(0,r.kt)("h2",{id:"is-it-possible-to-perform-defi-on-fedimints"},"Is it possible to perform \u201cDeFi\u201d on Fedimints?"),(0,r.kt)("p",null,"Yes, \u201cFeDeFi\u201d is possible."),(0,r.kt)("p",null,"As the federation is not a blockchain, it is not limited in what can be run on it.\xa0 In theory, arbitrary code such as P2P exchange, lending, and automated market making could be run within a federation or by a user of federation using their mobile app or computer - all off main chain and off lightning network.\xa0 In addition, in combination with the lightning network, inter-federation applications such as arbitrage and liquidity mirroring could be performed by users who are connected to multiple federations.\xa0"),(0,r.kt)("p",null,'One can think of Fedimint as "trusted smart contracting". You replace mining with trust in a federation.'),(0,r.kt)("h2",{id:"can-stablecoins-be-used-on-fedmints"},"Can stablecoins be used on fedmints?"),(0,r.kt)("p",null,"In theory, stablecoins on Fedimint would be possible.\xa0 Liquid Tether (L-BTC) or potentially (once mature) Lightning Lab\u2019s Taro would be examples of systems that could be implemented.\xa0 If included, FeDeFi functionality such as P2P exchange could be used to enable the exchange between Bitcoin and stablecoins within the federation while intra exchange arbitrage over lightning could further enhance this capability."))}d.isMDXComponent=!0}}]);