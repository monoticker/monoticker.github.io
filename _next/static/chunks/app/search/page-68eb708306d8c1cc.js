(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{2906:function(e,t,s){Promise.resolve().then(s.bind(s,1489))},1489:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var a=s(7437),l=s(7907),r=s(4773),c=s(2265),n=s(4812),i=s(3185);let d=e=>{let t=(e=String(e)).substring(0,4),s=e.substring(4,6),a=e.substring(6,8);return"".concat(t,"년 ").concat(s,"월 ").concat(a,"일")};function o(e){let{post:t}=e;return(0,a.jsx)("div",{className:"flex border px-4 hover:bg-gray-100 hover:bg-opacity-50 ",children:(0,a.jsxs)("div",{className:"w-full flex flex-col py-5 relative",children:[(0,a.jsxs)("span",{className:"text-2xl ",children:[" ",t.ttl," "]}),(0,a.jsxs)("div",{className:"w-full flex flex-row items-center text-gray-400",children:[(0,a.jsx)("div",{className:"",children:t.sid.split("-").join(" > ")}),(0,a.jsx)("div",{className:"px-1",children:"|"}),(0,a.jsxs)("span",{children:[" ",d(t.dat)," "]})]}),(0,a.jsx)("div",{className:"w-full whitespace-pre-wrap flex flex-col ",children:t.sum}),(0,a.jsx)("hr",{className:"my-2"}),(0,a.jsx)("div",{className:"w-full flex flex-col",children:t.tgs.map((e,t)=>(0,a.jsx)(c.Fragment,{children:(0,a.jsx)("a",{className:"hover:text-blue-500 w-fit",href:"/search?tg=".concat(i[e]),children:e})},t))}),(0,a.jsx)("div",{className:"absolute right-0 bottom-0 pb-5 flex flex-row",children:(0,a.jsx)("a",{href:t.url,target:"_blank",className:"border rounded p-1 mx-2 hover:bg-gray-200 hover:scale-102 hover:text-blue-500",children:"원문보기 →"})})]})})}var u=s(7057);async function h(e){!1==((void 0===e.dateStart||void 0!==e.dateEnd)&&(void 0!==e.dateStart||void 0===e.dateEnd))&&alert("문제잇으");let t=[];null!==e.keyToSummary&&void 0!==e.keyToSummary?t.push(e.keyToSummary):t=t.concat(await x(e)),t=t.filter((e,s)=>t.indexOf(e)===s);let s=await (0,n.Nz)(t),l=["dat","sid","ttl"];return s=s.sort((e,t)=>(l.forEach(s=>e[s]>t[s]?-1:e[s]<t[s]?1:void 0),0)),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{children:["총 ",s.length," 개의 결과"]}),s.map((e,t)=>(0,a.jsx)(c.Fragment,{children:(0,a.jsx)(o,{post:e})},t))]})}async function x(e){let t=[],s=(0,n.Ch)();if(t=null!==e.dateStart&&null!==e.dateEnd&&void 0!==e.dateStart&&void 0!==e.dateEnd?t.concat(await f(e.dateStart,e.dateEnd)):t.concat(s.kts.slice(0,100)),null!==e.taghashs&&void 0!==e.taghashs){let s=e.taghashs.split(","),a=[],l=s.filter(e=>e in u).map(async e=>{let t=u[e],s=(await (0,n.Cj)(e))[t].map(e=>String(e));return a=a.concat(s),!0});await Promise.all(l),t=t.filter(e=>a.includes(e))}if(null!==e.searchKeyword&&void 0!==e.searchKeyword&&""!==e.searchKeyword){let s=e.searchKeyword.split(" "),a=[],l=s.map(async e=>{let t=await (0,n.Gu)();Object.keys(t).filter(t=>t.includes(e)).forEach(e=>{a.push(...t[e])})});await Promise.all(l),a=a.filter((e,t)=>a.indexOf(e)===t),t=t.filter(e=>a.includes(e))}return t}async function f(e,t){let s=[],a=new Date("".concat(e.substring(0,4),"-").concat(e.substring(4,6),"-").concat(e.substring(6,8))),l=new Date("".concat(t.substring(0,4),"-").concat(t.substring(4,6),"-").concat(t.substring(6,8)));for(;a<=l;a.setDate(a.getDate()+1)){var r;let e=a.toISOString().slice(0,10).replace(/-/g,""),t=e.substring(0,6),l=null!==(r=(await (0,n.Fq)(t))[Number(e)])&&void 0!==r?r:[];s=s.concat(l)}return s}function m(e){return void 0!==e.keyToSummary&&e.keyToSummary,(0,a.jsx)("div",{className:"flex flex-col w-full justify-center items-center",children:(0,a.jsxs)("div",{className:"flex flex-col w-full",style:{maxWidth:"1000px"},children:[(0,a.jsx)(r.default,{dateStart:e.dateStart,dateEnd:e.dateEnd,searchKeyword:e.searchKeyword,taghashs:e.taghashs,keyToSummary:e.keyToSummary}),(0,a.jsx)(h,{dateStart:e.dateStart,dateEnd:e.dateEnd,searchKeyword:e.searchKeyword,taghashs:e.taghashs,keyToSummary:e.keyToSummary})]})})}function g(){return(0,a.jsx)("div",{children:" "})}var j=s(8792),w=s(8361),y=s(8212),v=s(1871);function b(){return(0,a.jsx)("div",{className:"flex flex-col w-full justify-center items-center ",style:{height:"300px"},children:(0,a.jsxs)("div",{className:"flex w-full h-full relative items-center ",style:{maxWidth:"1000px"},children:[(0,a.jsxs)("div",{className:"absolute z-10 p-5 right-0 bottom-0 flex flex-row",children:[(0,a.jsx)("div",{className:"bg-white rounded-full",children:(0,a.jsx)("a",{href:"https://web.telegram.org/k/#@monoticker",target:"_blank",children:(0,a.jsx)("img",{src:y.default.src,className:"w-10 object-cover"})})}),(0,a.jsx)("div",{className:"bg-white rounded-full",children:(0,a.jsx)("a",{href:"https://twitter.com/monoticker365",target:"_blank",children:(0,a.jsx)("img",{src:v.default.src,className:"w-10 object-cover"})})}),(0,a.jsx)("div",{className:"bg-white rounded-full",children:(0,a.jsx)("a",{href:"",target:"_blank",children:(0,a.jsx)("img",{src:w.default.src,className:"w-10 object-cover"})})})]}),(0,a.jsxs)(j.default,{className:"absolute items-center flex w-full h-full left-0 top-0",href:"/",children:[(0,a.jsx)("p",{className:"text-right tracking-widest text-bold text-white align-middle h-fit w-full text-5xl z-10 pr-5",children:"금융소식요약봇_Blog"}),(0,a.jsx)("img",{className:"absolute w-full h-full left-0 top-0 w-full h-full object-cover ",src:"monoticker_long.jpg"})]})]})})}function N(e){return(0,a.jsx)("div",{className:"w-full lg:min-w-2/3",children:(0,a.jsxs)("div",{className:"w-full flex flex-col",children:[(0,a.jsx)(b,{}),(0,a.jsx)(m,{dateStart:e.dateStart,dateEnd:e.dateEnd,searchKeyword:e.searchKeyword,taghashs:e.taghashs,keyToSummary:e.keyToSummary}),(0,a.jsx)(g,{})]})})}function p(){return(0,a.jsx)("div",{className:"w-full lg:max-w-4xl "})}function S(){return(0,a.jsx)("div",{className:"w-full lg:max-w-4xl "})}function k(e){return(0,a.jsxs)("div",{className:"w-full min-h-screen flex flex-col lg:flex-row",children:[(0,a.jsx)(p,{}),(0,a.jsx)(N,{dateStart:e.dateStart,dateEnd:e.dateEnd,searchKeyword:e.searchKeyword,taghashs:e.taghashs,keyToSummary:e.keyToSummary}),(0,a.jsx)(S,{})]})}function E(){let e=(0,l.useSearchParams)(),t=e.get("ds"),s=e.get("de"),r=e.get("key"),c=e.get("tg");return(0,a.jsx)("div",{className:"w-full h-full relative",children:(0,a.jsx)(k,{dateStart:t,dateEnd:s,searchKeyword:r,taghashs:c})})}function K(){return(0,a.jsxs)("div",{className:"w-full h-full relative",children:[(0,a.jsx)("div",{className:"w-screen h-screen absolute flex items-center justify-center bg-gray-100 bg-opacity-50 z-50 ",children:(0,a.jsx)("img",{className:"rounded-full w-48",src:"/monoticker.jpg"})}),(0,a.jsx)(k,{})]})}function T(e){let{isLoading:t}=e;return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)(K,{}),!t&&(0,a.jsx)(E,{})]})}function _(){return(0,a.jsx)(c.Suspense,{fallback:(0,a.jsx)(T,{isLoading:!0}),children:(0,a.jsx)(T,{isLoading:!1})})}}},function(e){e.O(0,[990,594,641,971,69,744],function(){return e(e.s=2906)}),_N_E=e.O()}]);