(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{2906:function(e,t,a){Promise.resolve().then(a.bind(a,1489))},7058:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var s=a(7437),l=a(2265);function r(e){let t=new Date(e),a=t.getFullYear(),s=(t.getMonth()+1).toString().padStart(2,"0"),l=t.getDate().toString().padStart(2,"0");return"".concat(a).concat(s).concat(l)}a(971);var n=a(3015),c=a.n(n);function i(e){let{initialDateFirst:t,initialDateSecond:a,setDateRange:n}=e,i=new Date().getTime(),o=i-6048e5,d=r(i),u=r(o),[f,h]=(0,l.useState)(u),[m,x]=(0,l.useState)(d);(0,l.useEffect)(()=>{null!=t&&null!=a&&(h(t),x(a))},[]);let g=r(new Date().getTime());(0,l.useEffect)(()=>{f<=m?n(f,m):(n(m,f),h(m),x(f)),console.log("f: ",f,m)},[f,m]);let j=(e,t,a)=>{let n=r(t.toDate().getTime()),c=e.key;delete e.key;let i=[];return i.push("text-center"),i.push("rounded"),n<=g&&i.push("hover:cursor-pointer"),f<=n&&n<=m?i.push("bg-red-200"):g<n&&i.push("bg-gray-100"),e.className="".concat(e.className," ").concat(i.join(" ")),(0,s.jsx)(l.Fragment,{children:(0,s.jsx)("td",{...e,children:t.date()})},c)};return(0,l.useEffect)(()=>{console.log(d),console.log(u),n(f,m)},[]),(0,s.jsxs)("div",{id:"date-range-selector",className:"flex flex-row",children:[(0,s.jsx)(c(),{dateFormat:"시작날짜: YYYY-MM-DD",timeFormat:!1,locale:"ko",initialValue:new Date(o),onChange:e=>{let t=r(e.toDate().getTime());t<=g&&h(t)},renderDay:j}),(0,s.jsx)(c(),{dateFormat:"끝날짜: YYYY-MM-DD",timeFormat:!1,locale:"ko",initialValue:new Date(i),onChange:e=>{let t=r(e.toDate().getTime());t<=g&&x(t)},renderDay:j})]})}var o=a(8792),d=a(4812);function u(e){let{tags:t,onChangeSelectedTags:a}=e,[r,n]=(0,l.useState)(!1),[c,i]=(0,l.useState)({}),[o,u]=(0,l.useState)([]),f=(0,l.useRef)(null);(0,l.useEffect)(()=>{null!=t&&u(t.split(",").map(e=>"#".concat(e)))},[]);let h=(e,t)=>{e.stopPropagation(),x(t)};(0,l.useEffect)(()=>{a(o)},[o]),(0,l.useEffect)(()=>{(async()=>{i(await (0,d.Ch)())})();let e=e=>{f.current&&!f.current.contains(e.target)&&n(!1)};return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[]);let m=e=>{let t=o.filter(e=>!0);t.push(e),u(t)},x=e=>{u(o.filter(t=>t!==e)),console.log("remove tag ",e)},g=e=>{o.indexOf(e,0)>-1?x(e):m(e)};return(0,s.jsxs)("div",{className:"flex flex-row",ref:f,children:[(0,s.jsx)("span",{className:"w-10",children:"태그"}),(0,s.jsxs)("div",{className:"w-full rounded bg-gray-100 hover:cursor-pointer flex flex-col",children:[(0,s.jsx)("div",{id:"temp",className:"w-full h-full",onClick:()=>{n(!r)},children:o.map((e,t)=>(0,s.jsx)(l.Fragment,{children:(0,s.jsxs)("span",{onClick:t=>h(t,e),className:"group leading-8 rounded bg-blue-100 hover:bg-red-100 p-1 my-3 mr-3",children:[(0,s.jsx)("span",{className:"hidden group-hover:inline ",children:"✂"}),e," ",(0,s.jsx)("span",{className:"hidden group-hover:inline ",children:"✂"})]})},t))}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("div",{className:"h-10 left-0 absolute ".concat(r?"":"hidden"),children:(0,s.jsx)("div",{className:"border bg-white flex flex-col p-3",children:void 0!==c.tgs&&c.tgs.map((e,t)=>(0,s.jsx)(l.Fragment,{children:(0,s.jsx)("span",{onClick:()=>g(e),className:"pb-1 ".concat(o.includes(e)?"bg-red-100 hover:bg-red-200":"hover:bg-blue-100"," "),children:e})},t))})})})]})]})}var f=a(7907);function h(e){let{initialSearchKeyword:t,onChangeSearchKeyword:a}=e,[r,n]=(0,l.useState)("");return(0,l.useEffect)(()=>{null!=t&&n(t)},[]),(0,s.jsxs)("div",{className:"flex flex-row py-2",children:[(0,s.jsx)("span",{className:"w-20",children:"제목 검색"}),(0,s.jsx)("div",{className:"w-full rounded h-full bg-gray-100",children:(0,s.jsx)("input",{className:"w-full h-full px-2 bg-transparent",defaultValue:r,onChange:e=>{let t=e.target.value;n(t),a(t)}})})]})}function m(e){let[t,a]=(0,l.useState)("/"),[r,n]=(0,l.useState)(),[c,d]=(0,l.useState)(),[m,x]=(0,l.useState)([]),[g,j]=(0,l.useState)(!1),[w,v]=(0,l.useState)(""),p=(0,f.useRouter)();return(0,l.useEffect)(()=>{let e="/search?",t=!0;void 0!==r&&void 0!==c&&(r<=c?e+="ds=".concat(r,"&de=").concat(c,"&"):t=!1),m.length>0&&(e+="tg="+m.map(e=>e.slice(1)).join(",")+"&"),void 0!==w&&void 0!==w&&""!==w&&(e+="key="+encodeURI(w)+"&"),t&&(a(e),console.log("url: ",e))},[r,c,m,w]),(0,l.useEffect)(()=>{g&&(p.refresh(),p.push(t),j(!1))},[g]),(0,s.jsxs)("div",{className:" flex flex-row relative border p-5 mb-5",children:[(0,s.jsx)(i,{setDateRange:(e,t)=>{n(e),d(t)},initialDateFirst:e.dateStart,initialDateSecond:e.dateEnd}),(0,s.jsxs)("div",{className:" px-5 w-full flex flex-col",children:[(0,s.jsx)(h,{initialSearchKeyword:e.searchKeyword,onChangeSearchKeyword:v}),(0,s.jsx)(u,{tags:e.tags,onChangeSelectedTags:x}),(0,s.jsx)(o.default,{onClick:()=>{j(!0)},id:"link-to",href:t,className:"absolute right-0 bottom-0 p-5 hover:cursor-pointer hover:scale-110",children:"조회"})]})]})}},1489:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var s=a(7437),l=a(7907),r=a(7058),n=a(2265),c=a(4812);let i=e=>{let t=(e=String(e)).substring(0,4),a=e.substring(4,6),s=e.substring(6,8);return"".concat(t,"년 ").concat(a,"월 ").concat(s,"일")};function o(e){let{post:t}=e;return(0,s.jsx)("div",{className:"flex border px-4 hover:bg-gray-100",children:(0,s.jsxs)("div",{className:"w-full flex flex-col py-5",children:[(0,s.jsx)("div",{className:"w-full ",children:t.sid}),(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsxs)("span",{children:[" ",i(t.dat)," "]})}),(0,s.jsx)("a",{className:"",href:t.url,target:"_blank",children:(0,s.jsxs)("div",{className:"w-full p-4 border rounded-xl whitespace-pre-wrap flex flex-col my-2 hover:bg-blue-100",children:[(0,s.jsxs)("span",{children:[" ",t.ttl," "]}),(0,s.jsx)("hr",{className:"my-1 py-1"}),t.sum]})}),(0,s.jsx)("div",{className:"w-full flex flex-col",children:t.tgs.map((e,t)=>(0,s.jsx)(n.Fragment,{children:(0,s.jsx)("a",{className:"hover:text-blue-500 ",href:"/search?tg=".concat(e.substring(1)),children:e})},t))})]})})}async function d(e){!1==((void 0===e.dateStart||void 0!==e.dateEnd)&&(void 0!==e.dateStart||void 0===e.dateEnd))&&alert("문제잇으");let t=[];null!==e.keyToSummary&&void 0!==e.keyToSummary?t.push(e.keyToSummary):t=t.concat(await u(e)),t=t.filter((e,a)=>t.indexOf(e)===a);let a=await (0,c.Nz)(t),l=["dat","sid","ttl"];return a=a.sort((e,t)=>(l.forEach(a=>e[a]>t[a]?-1:e[a]<t[a]?1:void 0),0)),(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{children:["총 ",a.length," 개의 결과"]}),a.map((e,t)=>(0,s.jsx)(n.Fragment,{children:(0,s.jsx)(o,{post:e})},t))]})}async function u(e){let t=[],a=await (0,c.Ch)();if(t=null!==e.dateStart&&null!==e.dateEnd&&void 0!==e.dateStart&&void 0!==e.dateEnd?t.concat(await f(e.dateStart,e.dateEnd)):t.concat(a.kts.slice(0,100)),null!==e.tags&&void 0!==e.tags){let a=e.tags.split(","),s=[],l=a.map(async e=>{let t=(await (0,c.Cj)(e))["#".concat(e)].map(e=>String(e));return s=s.concat(t),!0});await Promise.all(l),t=t.filter(e=>s.includes(e))}if(null!==e.searchKeyword&&void 0!==e.searchKeyword&&""!==e.searchKeyword){let a=e.searchKeyword.split(" "),s=[],l=a.map(async e=>{let t=await (0,c.Gu)();Object.keys(t).filter(t=>t.includes(e)).forEach(e=>{s.push(...t[e])})});await Promise.all(l),s=s.filter((e,t)=>s.indexOf(e)===t),t=t.filter(e=>s.includes(e))}return t}async function f(e,t){let a=[],s=new Date("".concat(e.substring(0,4),"-").concat(e.substring(4,6),"-").concat(e.substring(6,8))),l=new Date("".concat(t.substring(0,4),"-").concat(t.substring(4,6),"-").concat(t.substring(6,8)));for(;s<l;s.setDate(s.getDate()+1)){var r;let e=s.toISOString().slice(0,10).replace(/-/g,""),t=e.substring(0,6),l=null!==(r=(await (0,c.Fq)(t))[Number(e)])&&void 0!==r?r:[];a=a.concat(l)}return a}function h(e){return void 0!==e.keyToSummary&&e.keyToSummary,(0,s.jsx)("div",{className:"flex flex-col w-full justify-center items-center",children:(0,s.jsxs)("div",{className:"flex flex-col w-full",style:{maxWidth:"1000px"},children:[(0,s.jsx)(r.default,{dateStart:e.dateStart,dateEnd:e.dateEnd,searchKeyword:e.searchKeyword,tags:e.tags,keyToSummary:e.keyToSummary}),(0,s.jsx)(d,{dateStart:e.dateStart,dateEnd:e.dateEnd,searchKeyword:e.searchKeyword,tags:e.tags,keyToSummary:e.keyToSummary})]})})}function m(){return(0,s.jsx)("div",{children:" Footer "})}var x=a(8792);function g(){return(0,s.jsx)("div",{className:"flex flex-col w-full justify-center items-center ",style:{height:"300px"},children:(0,s.jsxs)("div",{className:"flex w-full h-full relative items-center ",style:{maxWidth:"1000px"},children:[(0,s.jsxs)("div",{className:"absolute z-50 p-5 right-0 bottom-0 flex flex-row",children:[(0,s.jsx)("a",{href:"https://web.telegram.org/k/#@kr_press_release_bot",target:"_blank",children:(0,s.jsx)("img",{src:"icon_telegram.png",className:"w-10 object-cover"})}),(0,s.jsx)("a",{href:"https://twitter.com/monoticker365",target:"_blank",children:(0,s.jsx)("img",{src:"icon_x.png",className:"w-10 object-cover"})})]}),(0,s.jsxs)(x.default,{className:"absolute items-center flex w-full h-full left-0 top-0",href:"/",children:[(0,s.jsx)("div",{className:"text-right align-middle h-fit w-full text-5xl z-50 pr-5",children:"금융소식요약봇_Blog"}),(0,s.jsx)("img",{className:"absolute w-full h-full left-0 top-0 w-full h-full object-cover ",src:"monoticker_long.jpg"})]})]})})}function j(e){return(0,s.jsx)("div",{className:"w-full lg:min-w-2/3",children:(0,s.jsxs)("div",{className:"w-full flex flex-col",children:[(0,s.jsx)(g,{}),(0,s.jsx)(h,{dateStart:e.dateStart,dateEnd:e.dateEnd,searchKeyword:e.searchKeyword,tags:e.tags,keyToSummary:e.keyToSummary}),(0,s.jsx)(m,{})]})})}function w(){return(0,s.jsx)("div",{className:"w-full lg:max-w-4xl ",children:"left"})}function v(){return(0,s.jsx)("div",{className:"w-full lg:max-w-4xl ",children:"right"})}function p(e){return(0,s.jsxs)("div",{className:"w-full min-h-screen flex flex-col lg:flex-row",children:[(0,s.jsx)(w,{}),(0,s.jsx)(j,{dateStart:e.dateStart,dateEnd:e.dateEnd,searchKeyword:e.searchKeyword,tags:e.tags,keyToSummary:e.keyToSummary}),(0,s.jsx)(v,{})]})}function y(){let e=(0,l.useSearchParams)(),t=e.get("ds"),a=e.get("de"),r=e.get("key"),n=e.get("tg");return(0,s.jsx)(p,{dateStart:t,dateEnd:a,searchKeyword:r,tags:n})}function b(){return(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(y,{})})}},4812:function(e,t,a){"use strict";a.d(t,{Fq:function(){return d},Ch:function(){return i},Nz:function(){return f},Cj:function(){return u},Gu:function(){return o}});var s=a(9079);s.env.DEVELOPMENT_URL;let l="",r="https://monoticker.github.io/";a(4057).resolve(s.cwd());var n=JSON.parse('{"tgs":["#금융소식요약봇","#금융소식요약봇_업비트","#금융소식요약봇_업비트_공지사항","#금융소식요약봇_업비트_공지사항_입출금"],"kts":["715307538856970860"]}'),c=JSON.parse('{"월렛 시스템 점검에 따른 코스모스(ATOM) 입출금 일시 중단 안내":["715307538856970860"]}');function i(){return n}function o(){return c}async function d(e){let t={};try{t=await (await fetch("".concat(r,"/static/date/").concat(e,".json"))).json()}catch(e){}return t}async function u(e){let t={};try{t=await (await fetch("".concat(r,"/static/tags/").concat(e,".json"))).json()}catch(e){}return t}async function f(e){return await Promise.all(e.map(async e=>await (await fetch("".concat(r,"/static/post/").concat(e,".json"))).json()))}}},function(e){e.O(0,[990,594,971,69,744],function(){return e(e.s=2906)}),_N_E=e.O()}]);