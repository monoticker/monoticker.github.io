"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58],{7058:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7437),s=a(2265);function l(e){if(8!==e.length||!/^\d{8}$/.test(e))throw Error("Invalid date format");let t=parseInt(e.substring(0,4),10),a=parseInt(e.substring(4,6),10),n=parseInt(e.substring(6,8),10);return"".concat(t,"년 ").concat(a,"월 ").concat(n,"일")}function r(e){let t=new Date(e),a=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0");return"".concat(a).concat(n).concat(s)}a(971);var _=a(3015),c=a.n(_);function i(e){let{initialDateFirst:t,initialDateSecond:a,setDateRange:_}=e,i=new Date().getTime(),o=i-6048e5,u=r(i),d=r(o),[f,h]=(0,s.useState)(d),[g,p]=(0,s.useState)(u);(0,s.useEffect)(()=>{null!=t&&null!=a&&(h(t),p(a))},[]);let x=r(new Date().getTime()),m=r(new Date().getTime()+864e5);(0,s.useEffect)(()=>{f<=g?_(f,g):(_(g,f),h(g),p(f)),console.log("f: ",f,g)},[f,g]);let w=(e,t,a)=>{let l=r(t.toDate().getTime()),_=e.key;delete e.key;let c=[];return c.push("text-center"),l<=x&&c.push("hover:cursor-pointer"),f===l?c.push("bg-date-range bg-opacity-30 rounded-bl-xl rounded-tl-xl"):l===g?c.push("bg-date-range bg-opacity-30 rounded-br-xl rounded-tr-xl"):f<=l&&l<=g?c.push("bg-date-range bg-opacity-30 "):m==l?c.push("bg-gray-100 rounded-bl-xl rounded-tl-xl "):x<l&&c.push("bg-gray-100"),e.className="".concat(e.className," ").concat(c.join(" ")),(0,n.jsx)(s.Fragment,{children:(0,n.jsx)("td",{id:"temp",...e,style:{width:"1%",padding:0},children:t.date()})},_)};return(0,s.useEffect)(()=>{console.log(u),console.log(d),_(f,g)},[]),(0,n.jsxs)("div",{className:"flex flex-col  ",children:[(0,n.jsxs)("div",{className:"w-full flex flex-row",children:[(0,n.jsx)("div",{className:"w-24 text-center",children:"조회기간 "}),(0,n.jsxs)("div",{className:"w-full rounded bg-gray-100 px-2",children:[l(f)," 부터 ",l(g)," 까지"]})]}),(0,n.jsxs)("div",{className:"flex flex-row w-full",children:[(0,n.jsx)(c(),{className:"pr-2 w-full",input:!1,dateFormat:"시작날짜: YYYY-MM-DD",timeFormat:!1,locale:"ko",initialValue:new Date(o),onChange:e=>{let t=r(e.toDate().getTime());t<=x&&h(t)},renderDay:w}),(0,n.jsx)(c(),{className:"pl-2 w-full",input:!1,dateFormat:"끝날짜: YYYY-MM-DD",timeFormat:!1,locale:"ko",initialValue:new Date(i),onChange:e=>{let t=r(e.toDate().getTime());t<=x&&p(t)},renderDay:w})]})]})}var o=a(8792),u=a(4812);function d(e){let{tags:t,onChangeSelectedTags:a}=e,[l,r]=(0,s.useState)(!1),[_,c]=(0,s.useState)({}),[i,o]=(0,s.useState)([]),d=(0,s.useRef)(null);(0,s.useEffect)(()=>{null!=t&&o(t.split(",").map(e=>"#".concat(e)))},[]);let f=(e,t)=>{e.stopPropagation(),g(t)};(0,s.useEffect)(()=>{a(i)},[i]),(0,s.useEffect)(()=>{(async()=>{c(await (0,u.Ch)())})();let e=e=>{d.current&&!d.current.contains(e.target)&&r(!1)};return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[]);let h=e=>{let t=i.filter(e=>!0);t.push(e),o(t)},g=e=>{o(i.filter(t=>t!==e)),console.log("remove tag ",e)},p=e=>{i.indexOf(e,0)>-1?g(e):h(e)};return(0,n.jsxs)("div",{className:"flex flex-row",ref:d,children:[(0,n.jsx)("span",{className:"w-10",children:"태그"}),(0,n.jsxs)("div",{className:"w-full rounded bg-gray-100 hover:cursor-pointer flex flex-col",children:[(0,n.jsx)("div",{id:"temp",className:"w-full h-full",onClick:()=>{r(!l)},children:i.map((e,t)=>(0,n.jsx)(s.Fragment,{children:(0,n.jsxs)("span",{onClick:t=>f(t,e),className:"group leading-8 rounded bg-blue-100 hover:bg-red-100 p-1 my-3 mr-3",children:[(0,n.jsx)("span",{className:"hidden group-hover:inline ",children:"✂"}),e," ",(0,n.jsx)("span",{className:"hidden group-hover:inline ",children:"✂"})]})},t))}),(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)("div",{className:"h-10 left-0 absolute ".concat(l?"":"hidden"),children:(0,n.jsx)("div",{className:"border bg-white flex flex-col p-3",children:void 0!==_.tgs&&_.tgs.map((e,t)=>(0,n.jsx)(s.Fragment,{children:(0,n.jsx)("span",{onClick:()=>p(e),className:"pb-1 ".concat(i.includes(e)?"bg-red-100 hover:bg-red-200":"hover:bg-blue-100"," "),children:e})},t))})})})]})]})}var f=a(7907);function h(e){let{initialSearchKeyword:t,onChangeSearchKeyword:a}=e,[l,r]=(0,s.useState)("");return(0,s.useEffect)(()=>{null!=t&&r(t)},[]),(0,n.jsxs)("div",{className:"flex flex-row py-2",children:[(0,n.jsx)("span",{className:"w-20",children:"제목 검색"}),(0,n.jsx)("div",{className:"w-full rounded h-full bg-gray-100",children:(0,n.jsx)("input",{className:"w-full h-full px-2 bg-transparent",defaultValue:l,onChange:e=>{let t=e.target.value;r(t),a(t)}})})]})}function g(e){let[t,a]=(0,s.useState)("/"),[l,r]=(0,s.useState)(),[_,c]=(0,s.useState)(),[u,g]=(0,s.useState)([]),[p,x]=(0,s.useState)(!1),[m,w]=(0,s.useState)(""),v=(0,f.useRouter)();return(0,s.useEffect)(()=>{let e="/search?",t=!0;void 0!==l&&void 0!==_&&(l<=_?e+="ds=".concat(l,"&de=").concat(_,"&"):t=!1),u.length>0&&(e+="tg="+u.map(e=>e.slice(1)).join(",")+"&"),void 0!==m&&void 0!==m&&""!==m&&(e+="key="+encodeURI(m)+"&"),t&&a(e)},[l,_,u,m]),(0,s.useEffect)(()=>{p&&(v.refresh(),v.push(t),x(!1))},[p]),(0,n.jsxs)("div",{className:" flex flex-row relative border p-5 mb-5",children:[(0,n.jsx)("div",{className:"w-2/5",children:(0,n.jsx)(i,{setDateRange:(e,t)=>{r(e),c(t)},initialDateFirst:e.dateStart,initialDateSecond:e.dateEnd})}),(0,n.jsxs)("div",{className:" px-5 w-3/5 flex flex-col",children:[(0,n.jsx)(h,{initialSearchKeyword:e.searchKeyword,onChangeSearchKeyword:w}),(0,n.jsx)(d,{tags:e.tags,onChangeSelectedTags:g}),(0,n.jsx)(o.default,{onClick:()=>{x(!0)},id:"link-to",href:t,className:"absolute right-0 bottom-0 p-5 hover:cursor-pointer hover:scale-110",children:"조회"})]})]})}},4812:function(e,t,a){a.d(t,{Fq:function(){return o},Ch:function(){return c},Nz:function(){return d},Cj:function(){return u},Gu:function(){return i}});var n=a(9079);let s="",l="https://monoticker.github.io/";a(4057).resolve(n.cwd());var r=JSON.parse('{"tgs":["#금융소식요약봇","#금융소식요약봇_고팍스","#금융소식요약봇_고팍스_공지사항","#금융소식요약봇_공정거래위원회","#금융소식요약봇_공정거래위원회_공정위소식","#금융소식요약봇_공정거래위원회_공정위소식_보도","#금융소식요약봇_공정거래위원회_공정위소식_보도_국제협력과","#금융소식요약봇_공정거래위원회_공정위소식_보도_입찰담합조사과","#금융소식요약봇_국민권익위원회","#금융소식요약봇_국민권익위원회_보도자료","#금융소식요약봇_국민권익위원회_보도자료_교육운영과","#금융소식요약봇_국민권익위원회_보도자료_국민신문고과","#금융소식요약봇_국민권익위원회_보도자료_복지노동민원과","#금융소식요약봇_국회입법조사처","#금융소식요약봇_국회입법조사처_연구보고서","#금융소식요약봇_국회입법조사처_연구보고서_이슈와논점 2225호","#금융소식요약봇_금융감독원","#금융소식요약봇_금융감독원_보도자료","#금융소식요약봇_금융감독원_보도자료_금융교육국","#금융소식요약봇_금융감독원_보도자료_금융사기대응단/민생침해대응총괄국/보험사기대응단/금융교육국","#금융소식요약봇_금융감독원_보도자료_보험감독국","#금융소식요약봇_금융감독원_보도자료_보험사기대응단","#금융소식요약봇_금융위원회","#금융소식요약봇_금융위원회_고시/공고/훈령","#금융소식요약봇_금융위원회_고시/공고/훈령_담당부서 : 금융혁신과","#금융소식요약봇_금융위원회_금융정책","#금융소식요약봇_금융위원회_금융정책_담당부서 : 금융시장분석과","#금융소식요약봇_금융위원회_보도자료","#금융소식요약봇_금융위원회_보도자료_담당부서 : 공정시장과","#금융소식요약봇_금융위원회_보도자료_담당부서 : 금융시장분석과","#금융소식요약봇_금융위원회_자본시장정책","#금융소식요약봇_금융위원회_자본시장정책_담당부서 : 공정시장과","#금융소식요약봇_기획재정부","#금융소식요약봇_기획재정부_뉴스","#금융소식요약봇_기획재정부_뉴스_보도자료","#금융소식요약봇_기획재정부_뉴스_보도자료_경제분석과","#금융소식요약봇_기획재정부_뉴스_보도자료_기획재정담당관","#금융소식요약봇_기획재정부_뉴스_보도자료_정책조정총괄과","#금융소식요약봇_기획재정부_뉴스_보도자료_혁신정책담당관","#금융소식요약봇_기획재정부_뉴스_보도자료_환경에너지세제과","#금융소식요약봇_대검찰청","#금융소식요약봇_대검찰청_검찰발표자료","#금융소식요약봇_대검찰청_검찰발표자료_대검찰청","#금융소식요약봇_방송통신위원회","#금융소식요약봇_방송통신위원회_보도자료","#금융소식요약봇_방송통신위원회_보도자료_방송기반총괄과","#금융소식요약봇_방송통신위원회_보도자료_지역미디어정책과","#금융소식요약봇_방송통신위원회_보도자료_파견/휴직","#금융소식요약봇_법무부","#금융소식요약봇_법무부_보도자료","#금융소식요약봇_법무부_보도자료_보호관찰과","#금융소식요약봇_산업통상자원부","#금융소식요약봇_산업통상자원부_보도참고자료","#금융소식요약봇_산업통상자원부_보도참고자료_기술규제정책과","#금융소식요약봇_산업통상자원부_보도참고자료_디스플레이가전팀","#금융소식요약봇_산업통상자원부_보도참고자료_무역진흥과","#금융소식요약봇_산업통상자원부_보도참고자료_미주통상과","#금융소식요약봇_산업통상자원부_보도참고자료_산업정책과","#금융소식요약봇_산업통상자원부_보도참고자료_석유산업과","#금융소식요약봇_산업통상자원부_보도참고자료_수출입과","#금융소식요약봇_산업통상자원부_보도참고자료_에너지효율과","#금융소식요약봇_산업통상자원부_보도참고자료_원전환경과","#금융소식요약봇_산업통상자원부_보도참고자료_입지총괄과","#금융소식요약봇_산업통상자원부_보도참고자료_자유무역협정협상총괄과","#금융소식요약봇_산업통상자원부_보도참고자료_중견기업정책과","#금융소식요약봇_업비트","#금융소식요약봇_업비트_공지사항","#금융소식요약봇_업비트_공지사항_NFT","#금융소식요약봇_업비트_공지사항_디지털 자산","#금융소식요약봇_업비트_공지사항_입출금"],"kts":["715307538856970860","7701619701363003471","-3451623456785279033","-5584414612834054693","-7791122082232570738","7012178133751272204","1584621309072086483","1766160736086188772","-6204460774020871267","-254754117735682999","8112085255152775423","5266114185761052908","188854246397692816","-3400206157281239962","212546312660483688","6223218139099676914","6939918093943532195","2175461023249601345","-5428387418842996690","-2296622868705349536","3077967958045526800","7627057770778401270","-6908419320683287527","5687269914262055474","7903260737974322033","-4551147712697819236","-5663883070921035875","592847895151626889","8742103017419265907","3482706924804692977","7087792525638972453","1629429759116296700","9014016810263601196","9068450092240080094","3237801590388087456","-4973218823158553709","-8988768933764404932","455904269725458534","7679150848837521397","-670937276665114099","-1304769517739615747"]}'),_=JSON.parse('{"월렛 시스템 점검에 따른 코스모스(ATOM) 입출금 일시 중단 안내":["715307538856970860"],"2023년 자동차보험 사업실적":["7701619701363003471"],"’24년 상반기 금융교육 전문강사 양성연수자 모집 안내":["-3451623456785279033"],"중동사태 관련 대외경제점검회의 개최":["-5584414612834054693"],"(참고자료)이란의 이스라엘 공습에 따른 에너지\xb7무역\xb7공급망 등 국내 영향 긴급 점검":["-7791122082232570738"],"비상경제장관회의 개최":["7012178133751272204"],"마약류 단순 투약사범 ‘사법-치료-재활 연계모델’ 전국 확대 실시":["1584621309072086483"],"방통위, 방송광고 지원대상 혁신형 중소기업 선정     ":["1766160736086188772"],"\'2024 방송통신위원회 방송대상\' 국민심사단 모집     ":["-6204460774020871267"],"유류세 탄력세율 인하조치 2개월 연장":["-254754117735682999"],"「제2차 국민건강보험 종합계획」(2024~28)의 주요 내용과 쟁점 -건강보험의 ‘적정 보장성’과 ‘재정적 지속가능성’ 확보를 위한 과제-":["8112085255152775423"],"“국민이 제안하면, 정책이 됩니다!”":["5266114185761052908"],"“이제는 K-청렴! 권익위 반부패 정책, 전세계에...”":["188854246397692816"],"“공무원의 잘못된 안내로 아동수당 신청을 놓쳤다면... 아동수당 지급해야...”":["-3400206157281239962"],"온라인투자연계금융업 변경등록사항 공고. 금일 등록된 게시글":["212546312660483688"],"미국 경쟁당국(FTC, DOJ) 공동 주최 제3회 경쟁당국 수장회의 및 주요국 양자협의회 결과":["6223218139099676914","9068450092240080094"],"한-조지아 경제동반자협정(EPA) 회기간 협상 열려":["6939918093943532195"],"2024 기후산업국제박람회 국제에너지기구(IEA)와 공동 개최 결정":["2175461023249601345"],"산단 내 12.6조 원 투자 프로젝트의 원활한 추진 지원을 위한 관리제도 개선":["-5428387418842996690"],"지능형 스마트 방폐물 처분시설 구축하고, 연구용 지하연구시설 부지선정 추진":["-2296622868705349536"],"1분기 무역기술장벽(TBT) 1,194건, 2년 연속 최고치":["3077967958045526800"],"(참고자료)한미 첨단산업\xb7청정에너지 협력 확대, 대미 투자기업 지원 논의":["7627057770778401270"],"[보도참고] 중동사태 관련 긴급 시장점검회의 개최. 금일 등록된 게시글":["-6908419320683287527","5687269914262055474"],"「금융소비자와 함께 하는 민생금융 이야기」 간담회 개최":["7903260737974322033"],"수출 7천억불 달성을 위한 마중물･･･ 대규모 수출상담회 열려":["-4551147712697819236"],"[보도자료] 김소영 금융위원회 부위원장, IASB(국제회계기준위원회) 위원장 면담. 금일 등록된 게시글":["-5663883070921035875","592847895151626889"],"금년 80개 중견기업 대상 1조 원 우대금융 지원":["8742103017419265907"],"4월 수출상황 긴급점검, 중동 리스크 최소화":["3482706924804692977"],"2024년 3월 정보통신산업(ICT) 수출입 동향":["7087792525638972453"],"4월 2주차 GAS, VTHO 지급 안내":["1629429759116296700"],"금융감독원, 경찰청, 유관기관은 보험범죄 수사협의회를 통해 민생침해 보험사기 수사를 적극 지원하겠습니다":["9014016810263601196"],"미디어가 사랑한 낙타 그림의 주인공 드롭스":["3237801590388087456"],"(참고자료)중동정세 불안 심화에도 국민 생활에 영향 없도록 석유\xb7가스 비상 대응태세 가동":["-4973218823158553709"],"확대간부회의 개최":["-8988768933764404932"],"방통위 시청자권익보호위원회 위촉식 및 제1차 회의 개최     ":["455904269725458534"],"[이벤트] 캐리버스(CVTX) 제휴 이벤트 2탄 안내":["7679150848837521397"],"마약류 단순 투약사범 \'사법-치료-재활\' 연계모델 부처협업으로 전국 확대 시행한다":["-670937276665114099"],"전략적 인사교류 직위 협업과제 추진계획":["-1304769517739615747"]}');function c(){return r}function i(){return _}async function o(e){let t={};try{t=await (await fetch("".concat(l,"/static/date/").concat(e,".json"))).json()}catch(e){}return t}async function u(e){let t={};try{t=await (await fetch("".concat(l,"/static/tags/").concat(e,".json"))).json()}catch(e){}return t}async function d(e){return await Promise.all(e.map(async e=>await (await fetch("".concat(l,"/static/post/").concat(e,".json"))).json()))}}}]);