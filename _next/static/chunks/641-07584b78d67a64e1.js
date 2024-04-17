"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{4773:function(e,t,_){_.r(t),_.d(t,{default:function(){return f}});var a=_(7437),n=_(2265);function l(e){if(8!==e.length||!/^\d{8}$/.test(e))throw Error("Invalid date format");let t=parseInt(e.substring(0,4),10),_=parseInt(e.substring(4,6),10),a=parseInt(e.substring(6,8),10);return"".concat(t,"년 ").concat(_,"월 ").concat(a,"일")}function r(e){let t=new Date(e),_=t.getFullYear(),a=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0");return"".concat(_).concat(a).concat(n)}_(971);var s=_(3015),i=_.n(s);function c(e){let{initialDateFirst:t,initialDateSecond:_,setDateRange:s}=e,c=new Date().getTime(),o=c-6048e5,d=r(c),u=r(o),[g,h]=(0,n.useState)(u),[f,x]=(0,n.useState)(d);(0,n.useEffect)(()=>{null!=t&&null!=_&&(h(t),x(_))},[]);let A=r(new Date().getTime()),m=r(new Date().getTime()+864e5);(0,n.useEffect)(()=>{g<=f?s(g,f):(s(f,g),h(f),x(g)),console.log("f: ",g,f)},[g,f]);let p=(e,t,_)=>{let l=r(t.toDate().getTime()),s=e.key;delete e.key;let i=[];return i.push("text-center"),l<=A&&i.push("hover:cursor-pointer"),g===l&&l===f?i.push("bg-date-range bg-opacity-30 rounded-bl-xl rounded-tl-xl rounded-br-xl rounded-tr-xl"):g===l?i.push("bg-date-range bg-opacity-30 rounded-bl-xl rounded-tl-xl"):l===f?i.push("bg-date-range bg-opacity-30 rounded-br-xl rounded-tr-xl"):g<=l&&l<=f?i.push("bg-date-range bg-opacity-30 "):m==l?i.push("bg-gray-100 rounded-bl-xl rounded-tl-xl "):A<l&&i.push("bg-gray-100"),e.className="".concat(e.className," ").concat(i.join(" ")),(0,a.jsx)(n.Fragment,{children:(0,a.jsx)("td",{id:"temp",...e,style:{width:"1%",padding:0},children:t.date()})},s)};return(0,n.useEffect)(()=>{console.log(d),console.log(u),s(g,f)},[]),(0,a.jsxs)("div",{className:"flex flex-col  ",children:[(0,a.jsxs)("div",{className:"w-full flex flex-row border items-center rounded px-2 py-1 bg-gray-400 bg-opacity-20 ",children:[(0,a.jsx)("div",{className:"w-32 text-center",children:"\uD83D\uDDD2️ 조회기간"}),(0,a.jsxs)("div",{className:"w-full text-center text-base rounded bg-white bg-opacity-50  p-1",children:[l(g)," - ",l(f)]})]}),(0,a.jsxs)("div",{className:"border mt-3 p-2 flex flex-row w-full",children:[(0,a.jsx)(i(),{className:"pr-2 w-full",input:!1,dateFormat:"시작날짜: YYYY-MM-DD",timeFormat:!1,locale:"ko",initialValue:new Date(o),onChange:e=>{let t=r(e.toDate().getTime());t<=A&&h(t)},renderDay:p}),(0,a.jsx)(i(),{className:"pl-2 w-full",input:!1,dateFormat:"끝날짜: YYYY-MM-DD",timeFormat:!1,locale:"ko",initialValue:new Date(c),onChange:e=>{let t=r(e.toDate().getTime());t<=A&&x(t)},renderDay:p})]})]})}var o=_(8792),d=_(4812);function u(e){let{tags:t,onChangeSelectedTags:_}=e,[l,r]=(0,n.useState)(!1),[s,i]=(0,n.useState)({}),[c,o]=(0,n.useState)([]),u=(0,n.useRef)(null);(0,n.useEffect)(()=>{null!=t&&o(t.split(",").map(e=>"#".concat(e)))},[]);let g=(e,t)=>{e.stopPropagation(),f(t)};(0,n.useEffect)(()=>{_(c)},[c]),(0,n.useEffect)(()=>{i((0,d.Ch)());let e=e=>{u.current&&!u.current.contains(e.target)&&r(!1)};return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[]);let h=e=>{let t=c.filter(e=>!0);t.push(e),o(t)},f=e=>{o(c.filter(t=>t!==e)),console.log("remove tag ",e)},x=e=>{c.indexOf(e,0)>-1?f(e):h(e)};return(0,a.jsxs)("div",{className:"w-full flex flex-row",ref:u,children:[(0,a.jsxs)("div",{className:"w-24 flex flex-row items-center justify-center ",children:[(0,a.jsx)("img",{className:"w-4 object-contain",src:"/_next/static/media/tagicon.5df230e9.png"}),(0,a.jsx)("span",{children:"Tag"})]}),(0,a.jsxs)("div",{className:"w-full rounded bg-gray-100 hover:cursor-pointer flex flex-col",children:[(0,a.jsx)("div",{id:"temp",className:"w-full h-full",onClick:()=>{r(!l)},children:c.map((e,t)=>(0,a.jsx)(n.Fragment,{children:(0,a.jsxs)("span",{onClick:t=>g(t,e),className:"group leading-8 rounded bg-blue-100 hover:bg-red-100 p-1 my-3 mr-3",children:[(0,a.jsx)("span",{className:"hidden group-hover:inline ",children:"✂"}),e," ",(0,a.jsx)("span",{className:"hidden group-hover:inline ",children:"✂"})]})},t))}),(0,a.jsx)("div",{id:"tag-dropdown",className:" relative",children:(0,a.jsx)("div",{className:"h-10 left-0 absolute ".concat(l?"":"hidden"),children:(0,a.jsx)("div",{className:"border bg-white flex flex-col p-3 overflow-y-auto",style:{maxHeight:"50vh"},children:void 0!==s.tgs&&s.tgs.map((e,t)=>(0,a.jsx)(n.Fragment,{children:(0,a.jsx)("span",{onClick:()=>x(e),className:"pb-1 ".concat(c.includes(e)?"bg-red-100 hover:bg-red-200":"hover:bg-blue-100"," "),children:e})},t))})})})]})]})}var g=_(7907);function h(e){let{initialSearchKeyword:t,onChangeSearchKeyword:_}=e,[l,r]=(0,n.useState)("");return(0,n.useEffect)(()=>{null!=t&&r(t)},[]),(0,a.jsxs)("div",{className:"w-full flex flex-row py-2",children:[(0,a.jsx)("span",{className:"w-24 flex items-center justify-center ",children:(0,a.jsx)("div",{children:"제목 검색"})}),(0,a.jsx)("div",{className:"w-full rounded h-full bg-gray-100",children:(0,a.jsx)("input",{className:"w-full h-full px-2 bg-transparent",defaultValue:l,onChange:e=>{let t=e.target.value;r(t),_(t)}})})]})}function f(e){let[t,_]=(0,n.useState)("/"),[l,r]=(0,n.useState)(),[s,i]=(0,n.useState)(),[d,f]=(0,n.useState)([]),[x,A]=(0,n.useState)(!1),[m,p]=(0,n.useState)(""),w=(0,g.useRouter)();return(0,n.useEffect)(()=>{let e="/search?",t=!0;void 0!==l&&void 0!==s&&(l<=s?e+="ds=".concat(l,"&de=").concat(s,"&"):t=!1),d.length>0&&(e+="tg="+d.map(e=>e.slice(1)).join(",")+"&"),void 0!==m&&void 0!==m&&""!==m&&(e+="key="+encodeURI(m)+"&"),t&&_(e)},[l,s,d,m]),(0,n.useEffect)(()=>{x&&(w.refresh(),w.push(t),A(!1))},[x]),(0,a.jsxs)("div",{className:" flex flex-row relative border p-2 mb-5",children:[(0,a.jsx)("div",{className:"w-5/12 pr-2 border-r ",children:(0,a.jsx)(c,{setDateRange:(e,t)=>{r(e),i(t)},initialDateFirst:e.dateStart,initialDateSecond:e.dateEnd})}),(0,a.jsxs)("div",{className:"w-7/12 flex flex-col items-center",children:[(0,a.jsx)(h,{initialSearchKeyword:e.searchKeyword,onChangeSearchKeyword:p}),(0,a.jsx)(u,{tags:e.tags,onChangeSelectedTags:f}),(0,a.jsx)("div",{id:"spacer",className:"h-full"}),(0,a.jsx)(o.default,{onClick:()=>{A(!0)},id:"link-to",href:t,className:"w-48 h-24 bg-blue-500 rounded hover:cursor-pointer hover:scale-105 text-center flex justify-center items-center ",children:(0,a.jsx)("div",{className:"text-white text-lg",children:"조회하기"})})]})]})}},4812:function(e,t,_){_.d(t,{Fq:function(){return o},Ch:function(){return i},Nz:function(){return u},Cj:function(){return d},Gu:function(){return c}});var a=_(9079);let n="",l="https://monoticker.github.io/";_(4057).resolve(a.cwd());var r=JSON.parse('{"tgs":["#금융소식요약봇","#금융소식요약봇_고팍스","#금융소식요약봇_고팍스_공지사항","#금융소식요약봇_공정거래위원회","#금융소식요약봇_공정거래위원회_공정위소식","#금융소식요약봇_공정거래위원회_공정위소식_보도","#금융소식요약봇_공정거래위원회_공정위소식_보도_공시점검과","#금융소식요약봇_공정거래위원회_공정위소식_보도_국제협력과","#금융소식요약봇_공정거래위원회_공정위소식_보도_디지털경제정책과","#금융소식요약봇_공정거래위원회_공정위소식_보도_입찰담합조사과","#금융소식요약봇_공정거래위원회_공정위소식_보도_제조카르텔조사과","#금융소식요약봇_국민권익위원회","#금융소식요약봇_국민권익위원회_보도자료","#금융소식요약봇_국민권익위원회_보도자료_교육운영과","#금융소식요약봇_국민권익위원회_보도자료_국민신문고과","#금융소식요약봇_국민권익위원회_보도자료_복지노동민원과","#금융소식요약봇_국회입법조사처","#금융소식요약봇_국회입법조사처_연구보고서","#금융소식요약봇_국회입법조사처_연구보고서_이슈와논점 2225호","#금융소식요약봇_국회입법조사처_연구보고서_이슈와논점 2226호","#금융소식요약봇_국회입법조사처_연구보고서_이슈와논점 2227호","#금융소식요약봇_금융감독원","#금융소식요약봇_금융감독원_보도자료","#금융소식요약봇_금융감독원_보도자료_금융교육국","#금융소식요약봇_금융감독원_보도자료_금융사기대응단/민생침해대응총괄국/보험사기대응단/금융교육국","#금융소식요약봇_금융감독원_보도자료_금융소비자보호총괄국","#금융소식요약봇_금융감독원_보도자료_디지털혁신국","#금융소식요약봇_금융감독원_보도자료_보험감독국","#금융소식요약봇_금융감독원_보도자료_보험검사3국/보험리스크관리국","#금융소식요약봇_금융감독원_보도자료_보험사기대응단","#금융소식요약봇_금융감독원_보도자료_분쟁조정1국/분쟁조정2국/금융민원국","#금융소식요약봇_금융감독원_보도자료_은행검사2국","#금융소식요약봇_금융위원회","#금융소식요약봇_금융위원회_고시/공고/훈령","#금융소식요약봇_금융위원회_고시/공고/훈령_담당부서 : 금융혁신과","#금융소식요약봇_금융위원회_금융정책","#금융소식요약봇_금융위원회_금융정책_담당부서 : 금융데이터정책과","#금융소식요약봇_금융위원회_금융정책_담당부서 : 금융시장분석과","#금융소식요약봇_금융위원회_금융정책_담당부서 : 금융혁신과","#금융소식요약봇_금융위원회_금융정책_담당부서 : 산업금융과","#금융소식요약봇_금융위원회_보도자료","#금융소식요약봇_금융위원회_보도자료_담당부서 : 공정시장과","#금융소식요약봇_금융위원회_보도자료_담당부서 : 금융데이터정책과","#금융소식요약봇_금융위원회_보도자료_담당부서 : 금융시장분석과","#금융소식요약봇_금융위원회_보도자료_담당부서 : 금융혁신과","#금융소식요약봇_금융위원회_보도자료_담당부서 : 산업금융과","#금융소식요약봇_금융위원회_보도자료_담당부서 : 은행과","#금융소식요약봇_금융위원회_입법예고/규정변경예고","#금융소식요약봇_금융위원회_입법예고/규정변경예고_구분 : 규정변경예고","#금융소식요약봇_금융위원회_자본시장정책","#금융소식요약봇_금융위원회_자본시장정책_담당부서 : 공정시장과","#금융소식요약봇_기획재정부","#금융소식요약봇_기획재정부_뉴스","#금융소식요약봇_기획재정부_뉴스_보도자료","#금융소식요약봇_기획재정부_뉴스_보도자료_거시정책과","#금융소식요약봇_기획재정부_뉴스_보도자료_경제분석과","#금융소식요약봇_기획재정부_뉴스_보도자료_공공혁신기획과","#금융소식요약봇_기획재정부_뉴스_보도자료_국방예산과","#금융소식요약봇_기획재정부_뉴스_보도자료_국채과","#금융소식요약봇_기획재정부_뉴스_보도자료_금융재정지원팀","#금융소식요약봇_기획재정부_뉴스_보도자료_금융협력과","#금융소식요약봇_기획재정부_뉴스_보도자료_기획재정담당관","#금융소식요약봇_기획재정부_뉴스_보도자료_다자금융과","#금융소식요약봇_기획재정부_뉴스_보도자료_복지경제과","#금융소식요약봇_기획재정부_뉴스_보도자료_정책조정총괄과","#금융소식요약봇_기획재정부_뉴스_보도자료_혁신정책담당관","#금융소식요약봇_기획재정부_뉴스_보도자료_환경에너지세제과","#금융소식요약봇_대검찰청","#금융소식요약봇_대검찰청_검찰발표자료","#금융소식요약봇_대검찰청_검찰발표자료_대검찰청","#금융소식요약봇_방송통신위원회","#금융소식요약봇_방송통신위원회_보도자료","#금융소식요약봇_방송통신위원회_보도자료_디지털이용자기반과","#금융소식요약봇_방송통신위원회_보도자료_방송기반총괄과","#금융소식요약봇_방송통신위원회_보도자료_지역미디어정책과","#금융소식요약봇_방송통신위원회_보도자료_파견/휴직","#금융소식요약봇_법무부","#금융소식요약봇_법무부_보도자료","#금융소식요약봇_법무부_보도자료_법조인력과","#금융소식요약봇_법무부_보도자료_보호관찰과","#금융소식요약봇_법무부_보도자료_소년보호과","#금융소식요약봇_산업통상자원부","#금융소식요약봇_산업통상자원부_보도참고자료","#금융소식요약봇_산업통상자원부_보도참고자료_기계로봇항공과","#금융소식요약봇_산업통상자원부_보도참고자료_기술규제정책과","#금융소식요약봇_산업통상자원부_보도참고자료_디스플레이가전팀","#금융소식요약봇_산업통상자원부_보도참고자료_무역진흥과","#금융소식요약봇_산업통상자원부_보도참고자료_미주통상과","#금융소식요약봇_산업통상자원부_보도참고자료_바이오융합산업과","#금융소식요약봇_산업통상자원부_보도참고자료_반도체과","#금융소식요약봇_산업통상자원부_보도참고자료_산업기술정책과","#금융소식요약봇_산업통상자원부_보도참고자료_산업정책과","#금융소식요약봇_산업통상자원부_보도참고자료_석유산업과","#금융소식요약봇_산업통상자원부_보도참고자료_수출입과","#금융소식요약봇_산업통상자원부_보도참고자료_신통상전략과","#금융소식요약봇_산업통상자원부_보도참고자료_에너지정책실","#금융소식요약봇_산업통상자원부_보도참고자료_에너지효율과","#금융소식요약봇_산업통상자원부_보도참고자료_원전산업정책과","#금융소식요약봇_산업통상자원부_보도참고자료_원전환경과","#금융소식요약봇_산업통상자원부_보도참고자료_입지총괄과","#금융소식요약봇_산업통상자원부_보도참고자료_자동차과","#금융소식요약봇_산업통상자원부_보도참고자료_자유무역협정협상총괄과","#금융소식요약봇_산업통상자원부_보도참고자료_재생에너지정책과","#금융소식요약봇_산업통상자원부_보도참고자료_적합성정책국","#금융소식요약봇_산업통상자원부_보도참고자료_제품안전정보과","#금융소식요약봇_산업통상자원부_보도참고자료_중견기업정책과","#금융소식요약봇_산업통상자원부_보도참고자료_첨단민군협력지원과","#금융소식요약봇_산업통상자원부_보도참고자료_통상법무기획과","#금융소식요약봇_산업통상자원부_보도참고자료_통상협정활용과","#금융소식요약봇_업비트","#금융소식요약봇_업비트_공지사항","#금융소식요약봇_업비트_공지사항_NFT","#금융소식요약봇_업비트_공지사항_디지털 자산","#금융소식요약봇_업비트_공지사항_안내","#금융소식요약봇_업비트_공지사항_입출금"],"kts":["715307538856970860","7701619701363003471","-3451623456785279033","-5584414612834054693","-7791122082232570738","7012178133751272204","1584621309072086483","1766160736086188772","-6204460774020871267","-254754117735682999","8112085255152775423","5266114185761052908","188854246397692816","-3400206157281239962","212546312660483688","6223218139099676914","6939918093943532195","2175461023249601345","-5428387418842996690","-2296622868705349536","3077967958045526800","7627057770778401270","-6908419320683287527","5687269914262055474","7903260737974322033","-4551147712697819236","-5663883070921035875","592847895151626889","8742103017419265907","3482706924804692977","7087792525638972453","1629429759116296700","9014016810263601196","9068450092240080094","3237801590388087456","-4973218823158553709","-8988768933764404932","455904269725458534","7679150848837521397","-670937276665114099","-1304769517739615747","-144291275904661144","6198260346934051132","9218102095092607417","-2518200031681267329","-2763653300028702145","7926989232255888072","5885178632804024910","1844208679017684272","803973126808164671","701584856928566474","-1370156559872017810","3516073208358870165","-7794578451780393413","-31602817168619274","6481947112185503899","-5747501462156119392","6549313562551075722","-8660391348725059124","-2633556707074258184","-4394447940909575825","7971588133359212316","2040433228674444030","-4099409330152038292","-3375497398176808655","-7374001777180245832","6504424513775111660","6603181299452501710","5523123715423260030","3283993909070673424","1238001406013928649","-5130707729828421659","3971492299645056978","3016335311625877579","-2967973118605475909","7052552582708394252","7713914996186402062","1615675300789291458","3556107144659718135","2503894657212973383","-7300407500135054647","-8373500256706417426","505128769454003214","1662239387441009251","-5102722252662246662","6869031725195244013","-3809007089205365260","2642912717251246697","-8544275550641024808","-5474425516757771092","2855415102792713119","2924108113757234700","-4402802195017926407","-2479199355932069711","-2719152372353124741","-4099572840685212501","-5263854377239556225","-550608777534850536","6858392996019063965"]}'),s=JSON.parse('{"월렛 시스템 점검에 따른 코스모스(ATOM) 입출금 일시 중단 안내":["715307538856970860"],"2023년 자동차보험 사업실적":["7701619701363003471"],"’24년 상반기 금융교육 전문강사 양성연수자 모집 안내":["-3451623456785279033"],"중동사태 관련 대외경제점검회의 개최":["-5584414612834054693"],"(참고자료)이란의 이스라엘 공습에 따른 에너지\xb7무역\xb7공급망 등 국내 영향 긴급 점검":["-7791122082232570738"],"비상경제장관회의 개최":["7012178133751272204"],"마약류 단순 투약사범 ‘사법-치료-재활 연계모델’ 전국 확대 실시":["1584621309072086483"],"방통위, 방송광고 지원대상 혁신형 중소기업 선정     ":["1766160736086188772"],"\'2024 방송통신위원회 방송대상\' 국민심사단 모집     ":["-6204460774020871267"],"유류세 탄력세율 인하조치 2개월 연장":["-254754117735682999"],"「제2차 국민건강보험 종합계획」(2024~28)의 주요 내용과 쟁점 -건강보험의 ‘적정 보장성’과 ‘재정적 지속가능성’ 확보를 위한 과제-":["8112085255152775423"],"“국민이 제안하면, 정책이 됩니다!”":["5266114185761052908"],"“이제는 K-청렴! 권익위 반부패 정책, 전세계에...”":["188854246397692816"],"“공무원의 잘못된 안내로 아동수당 신청을 놓쳤다면... 아동수당 지급해야...”":["-3400206157281239962"],"온라인투자연계금융업 변경등록사항 공고. 금일 등록된 게시글":["212546312660483688"],"미국 경쟁당국(FTC, DOJ) 공동 주최 제3회 경쟁당국 수장회의 및 주요국 양자협의회 결과":["6223218139099676914","9068450092240080094"],"한-조지아 경제동반자협정(EPA) 회기간 협상 열려":["6939918093943532195"],"2024 기후산업국제박람회 국제에너지기구(IEA)와 공동 개최 결정":["2175461023249601345"],"산단 내 12.6조 원 투자 프로젝트의 원활한 추진 지원을 위한 관리제도 개선":["-5428387418842996690"],"지능형 스마트 방폐물 처분시설 구축하고, 연구용 지하연구시설 부지선정 추진":["-2296622868705349536"],"1분기 무역기술장벽(TBT) 1,194건, 2년 연속 최고치":["3077967958045526800"],"(참고자료)한미 첨단산업\xb7청정에너지 협력 확대, 대미 투자기업 지원 논의":["7627057770778401270"],"[보도참고] 중동사태 관련 긴급 시장점검회의 개최. 금일 등록된 게시글":["-6908419320683287527","5687269914262055474"],"「금융소비자와 함께 하는 민생금융 이야기」 간담회 개최":["7903260737974322033"],"수출 7천억불 달성을 위한 마중물･･･ 대규모 수출상담회 열려":["-4551147712697819236"],"[보도자료] 김소영 금융위원회 부위원장, IASB(국제회계기준위원회) 위원장 면담. 금일 등록된 게시글":["-5663883070921035875","592847895151626889"],"금년 80개 중견기업 대상 1조 원 우대금융 지원":["8742103017419265907"],"4월 수출상황 긴급점검, 중동 리스크 최소화":["3482706924804692977"],"2024년 3월 정보통신산업(ICT) 수출입 동향":["7087792525638972453"],"4월 2주차 GAS, VTHO 지급 안내":["1629429759116296700"],"금융감독원, 경찰청, 유관기관은 보험범죄 수사협의회를 통해 민생침해 보험사기 수사를 적극 지원하겠습니다":["9014016810263601196"],"미디어가 사랑한 낙타 그림의 주인공 드롭스":["3237801590388087456"],"(참고자료)중동정세 불안 심화에도 국민 생활에 영향 없도록 석유\xb7가스 비상 대응태세 가동":["-4973218823158553709"],"확대간부회의 개최":["-8988768933764404932"],"방통위 시청자권익보호위원회 위촉식 및 제1차 회의 개최     ":["455904269725458534"],"[이벤트] 캐리버스(CVTX) 제휴 이벤트 2탄 안내":["7679150848837521397"],"마약류 단순 투약사범 \'사법-치료-재활\' 연계모델 부처협업으로 전국 확대 시행한다":["-670937276665114099"],"전략적 인사교류 직위 협업과제 추진계획":["-1304769517739615747"],"최상목 부총리, 지역자활센터 및 알뜰주유소 현장방문":["-144291275904661144"],"업비트 실험실 주문고도화(최유리지정가, IOC, FOK) 전체 마켓 대상 지원 안내 - (4/22 적용 예정)":["6198260346934051132"],"최상목 부총리, 주요 20개국 재무장관회의 참석 위해 출국":["9218102095092607417"],"자동차부품 신시장 개척 확대로 \'24년 자동차산업 최대 수출실적 달성 도모":["-2518200031681267329"],"미국 보잉사와 국제 공동 연구개발(R&D), 보잉한국기술연구센터(BKETC) 인력 확대, 항공 분야 공급망 협력 등 추진":["-2763653300028702145"],"중동 사태 관련 관계부처 합동 비상상황점검회의 개최":["7926989232255888072"],"인구감소 시대， 인구 전담 부처 설치의 쟁점과 과제":["5885178632804024910"],"대규모기업집단 공시매뉴얼 개정":["1844208679017684272","-7374001777180245832"],"상호인정으로 해외인증 국내 획득 지원 강화":["803973126808164671"],"FTA종합지원센터, FTA 활용지원을 넘어 수출기업 통상애로해소 종합지원기관으로 확대":["701584856928566474"],"우리 수출 기업의 해외 무역장벽 대응 지원":["-1370156559872017810"],"국제재생에너지기구(IRENA) 14차 총회 참석":["3516073208358870165"],"대출받은 후 14일 이내 취소하고 싶다면 대출 청약철회권을 적극 활용하세요[금융꿀팁 152]":["-7794578451780393413"],"방통위-개인정보위 정책협의회 발족, ‘안전한 디지털 이용환경 조성’ 에 힘 합친다     ":["-31602817168619274"],"반도체 전문가들과 ‘AI-반도체 이니셔티브’ 논의":["6481947112185503899"],"찾아가는 금융규제 샌드박스 간담회 광주광역시에 찾아가다":["-5747501462156119392"],"장관, ‘늘봄학교’ 일일 에너지 교사로 재능기부":["6549313562551075722"],"찾아가는 금융규제 샌드박스」 간담회 광주광역시에 찾아가다. 금일 등록된 게시글":["-8660391348725059124"],"[보도자료] 「찾아가는 금융규제 샌드박스」 간담회 광주광역시에 찾아가다. 금일 등록된 게시글":["-2633556707074258184"],"분쟁 신속처리 및 예방을 위한 보험권 CCO 간담회 개최":["-4394447940909575825"],"법무부장관 서울소년분류심사원, 안양소년원 정책현장 방문":["7971588133359212316"],"기업과 함께 신진연구자 성장 본격 지원":["2040433228674444030"],"군 장병 대상 \'찾아가는 경제교육\' 본격 시작":["-4099409330152038292"],"원스톱 수출 119, 수출 호조세 확산을 위해 화성시 수출기업 현장 목소리 경청":["-3375497398176808655"],"국채 백서, 「국채 2023」 발간":["6504424513775111660"],"제13회 변호사시험 합격자 1,745명 발표":["6603181299452501710"],"[보도참고] 김소영 금융위원회 부위원장, ISSB(국제지속가능성기준위원회) 부위원장 면담. 금일 등록된 게시글":["5523123715423260030","3283993909070673424"],"김병환 1차관, 인구감소지역 소규모 관광단지 후보지(제천시) 현장방문":["1238001406013928649"],"김윤상 제2차관, 육군 701특공연대 현장방문":["-5130707729828421659"],"아이오텍스(IOTX) 하드포크에 따른 입출금 일시 중단 안내 (완료)":["3971492299645056978"],"[보도참고] IMF 4월 세계 경제전망 발표":["3016335311625877579"],"경영인정기보험 관련 불완전판매 우려 및 불건전 영업행위에 대한 소비자 경보 발령":["-2967973118605475909"],"한일 재무장관 양자면담 결과":["7052552582708394252"],"특별자치도\xb7특별자치시 성공을 위한 재정특례 방안":["7713914996186402062"],"원자력발전포럼, 국민과 함께하는 성과보고회 열려":["1615675300789291458"],"우수 바이오기업 투자유치 설명회 열려":["3556107144659718135"],"[보도자료] 김주현 금융위원장, 미래에너지펀드 조성 협약식 참석. 금일 등록된 게시글":["2503894657212973383","-7300407500135054647"],"2023년도 공공기관 고객만족도 조사결과":["-8373500256706417426"],"용인 반도체 국가산단, 중앙‧지방‧ 기업･LH 상생협약 체결로 산단 조성에 박차":["505128769454003214"],"희토류 등 공급망 위기, 인도태평양경제프레임워크(IPEF) 공급망협정으로 돌파구 찾는다":["1662239387441009251"],"텐앤텐 대상 100만 원 이상 디지털 자산 입출금 지원 중단 안내 (4/22 10:00)":["-5102722252662246662"],"｢금융회사 지배구조 감독규정 일부개정고시안｣ 규정변경예고":["6869031725195244013"],"자발적 리콜은 기업의 사회적 책임을 다하는 수단입니다":["-3809007089205365260"],"불법스팸 근절 위한 「전송자격인증제」 시동     ":["2642912717251246697"],"적극적인 제보가 보험사기 적발로 이어집니다!":["-8544275550641024808"],"강원도개발공사 발주 알펜시아리조트 자산 매각 입찰 관련 6개 사업자의 부당한 공동행위 제재":["-5474425516757771092"],"카바(KAVA) 네트워크 업그레이드에 따른 입출금 일시 중단 안내 (04/24 18시 ~)":["2855415102792713119"],"방산 생태계 경쟁력 강화로 방산수출 뒷받침한다":["2924108113757234700"],"모바일상품권 민관협의체 출범식 개최":["-4402802195017926407"],"파일코인(FIL) 네트워크 업그레이드에 따른 입출금 일시 중단 안내 (04/24 18시 ~)":["-2479199355932069711"],"제7차 금융위원회 정례회의(\'24.4.17.) 대구은행에 대한 조치안 의결":["-2719152372353124741"],"보이스피싱 피해 예방을 위한 「금융거래 안심차단 서비스」 도입 추진":["-4099572840685212501"],"[보도자료] 보이스피싱 피해 예방을 위한 ｢금융거래 안심차단 서비스｣ 도입 추진. 금일 등록된 게시글":["-5263854377239556225","-550608777534850536"],"[보도참고] 제7차 금융위원회 정례회의(’24.4.17.), 대구은행에 대한 조치안 의결. 금일 등록된 게시글":["6858392996019063965"]}');function i(){return r}function c(){return s}async function o(e){let t={};try{t=await (await fetch("".concat(l,"/static/date/").concat(e,".json"))).json()}catch(e){}return t}async function d(e){let t={};try{t=await (await fetch("".concat(l,"/static/tags/").concat(e,".json"))).json()}catch(e){}return t}async function u(e){return await Promise.all(e.map(async e=>await (await fetch("".concat(l,"/static/post/").concat(e,".json"))).json()))}},8361:function(e,t,_){_.r(t),t.default={src:"/_next/static/media/link_to_kakaotalk.98d49eb9.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA20lEQVR42lWPu05CURREt17xUngC51BYWvgPVv6JhTYmSo212tjR+EgobDQmWvgLFr56CghQQcIbQm5uAQWvRfZpCMVOJrN2JjOy6NqYgYMoA30HPa9RT5kwdIzrad4LIbmLgNxlwOdzkknDokxmLUv+OsF+RhBZ3+3VDvO2RSq/hvOTbUrfhuLXHm9PodfZ0wBlEtXSHB9tkb9J8PoQ8lFI8ni3S/YsYFRJIYwc1X+zEX94IJR/DMpEWy+7lpf7kOqfoV1MMW1Zher7h3jatL4QkVPg5y46VifHK3B/m+qSMmQQAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},8212:function(e,t,_){_.r(t),t.default={src:"/_next/static/media/link_to_telegram.4f7189c9.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA60lEQVR42iVOvUoDYRAcOwtBESvFH5SoaW3FF/BhfAx7QUSD5vsOEeztxBwaFG1txORuIxKQRGLk0JB8l8BklwwsLDszOwPDlJMiylKdcTJciyRf9fKAcroNgy7FeSfd9UiI85Q4qRNnCaed/Ci3hQUvVZQS4qgW9q8/6F7afEyysOKFuEhjqCs/uGnytfnHWqvHVhb42ekTpwkXvQyg7vzw7ovx+y+fJaPh9q1LHNdZiFSw7OVec+1dMMH/YMTSUzvozQQVWJFZJ52dywbt7d5Vg7s6avhe8lKAYc7Jpgpjy1Sir70qG9GEHAPGh53gR+MztwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},1871:function(e,t,_){_.r(t),t.default={src:"/_next/static/media/link_to_twitter.116c7565.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42iWMMQ5AQBBF36kVonMAFQ2JyimEQiGCRkUh4QAKFQk2azKbmbyXTOZ/GLE6n3JAUBKwimtmoexJTEpDoX8Y0UKKrxHjDhceOROWF8FNwkZGxOE6Wi3bCanE9Jp9lJbuB4wZNy0YxQcqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}}]);