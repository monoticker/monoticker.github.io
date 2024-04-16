"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58],{7058:function(e,t,_){_.r(t),_.d(t,{default:function(){return g}});var a=_(7437),n=_(2265);function s(e){if(8!==e.length||!/^\d{8}$/.test(e))throw Error("Invalid date format");let t=parseInt(e.substring(0,4),10),_=parseInt(e.substring(4,6),10),a=parseInt(e.substring(6,8),10);return"".concat(t,"년 ").concat(_,"월 ").concat(a,"일")}function l(e){let t=new Date(e),_=t.getFullYear(),a=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0");return"".concat(_).concat(a).concat(n)}_(971);var r=_(3015),c=_.n(r);function i(e){let{initialDateFirst:t,initialDateSecond:_,setDateRange:r}=e,i=new Date().getTime(),o=i-6048e5,u=l(i),d=l(o),[f,h]=(0,n.useState)(d),[g,p]=(0,n.useState)(u);(0,n.useEffect)(()=>{null!=t&&null!=_&&(h(t),p(_))},[]);let x=l(new Date().getTime()),m=l(new Date().getTime()+864e5);(0,n.useEffect)(()=>{f<=g?r(f,g):(r(g,f),h(g),p(f)),console.log("f: ",f,g)},[f,g]);let w=(e,t,_)=>{let s=l(t.toDate().getTime()),r=e.key;delete e.key;let c=[];return c.push("text-center"),s<=x&&c.push("hover:cursor-pointer"),f===s?c.push("bg-date-range bg-opacity-30 rounded-bl-xl rounded-tl-xl"):s===g?c.push("bg-date-range bg-opacity-30 rounded-br-xl rounded-tr-xl"):f<=s&&s<=g?c.push("bg-date-range bg-opacity-30 "):m==s?c.push("bg-gray-100 rounded-bl-xl rounded-tl-xl "):x<s&&c.push("bg-gray-100"),e.className="".concat(e.className," ").concat(c.join(" ")),(0,a.jsx)(n.Fragment,{children:(0,a.jsx)("td",{id:"temp",...e,style:{width:"1%",padding:0},children:t.date()})},r)};return(0,n.useEffect)(()=>{console.log(u),console.log(d),r(f,g)},[]),(0,a.jsxs)("div",{className:"flex flex-col  ",children:[(0,a.jsxs)("div",{className:"w-full flex flex-row",children:[(0,a.jsx)("div",{className:"w-24 text-center",children:"조회기간 "}),(0,a.jsxs)("div",{className:"w-full rounded bg-gray-100 px-2",children:[s(f)," 부터 ",s(g)," 까지"]})]}),(0,a.jsxs)("div",{className:"flex flex-row w-full",children:[(0,a.jsx)(c(),{className:"pr-2 w-full",input:!1,dateFormat:"시작날짜: YYYY-MM-DD",timeFormat:!1,locale:"ko",initialValue:new Date(o),onChange:e=>{let t=l(e.toDate().getTime());t<=x&&h(t)},renderDay:w}),(0,a.jsx)(c(),{className:"pl-2 w-full",input:!1,dateFormat:"끝날짜: YYYY-MM-DD",timeFormat:!1,locale:"ko",initialValue:new Date(i),onChange:e=>{let t=l(e.toDate().getTime());t<=x&&p(t)},renderDay:w})]})]})}var o=_(8792),u=_(4812);function d(e){let{tags:t,onChangeSelectedTags:_}=e,[s,l]=(0,n.useState)(!1),[r,c]=(0,n.useState)({}),[i,o]=(0,n.useState)([]),d=(0,n.useRef)(null);(0,n.useEffect)(()=>{null!=t&&o(t.split(",").map(e=>"#".concat(e)))},[]);let f=(e,t)=>{e.stopPropagation(),g(t)};(0,n.useEffect)(()=>{_(i)},[i]),(0,n.useEffect)(()=>{(async()=>{c(await (0,u.Ch)())})();let e=e=>{d.current&&!d.current.contains(e.target)&&l(!1)};return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[]);let h=e=>{let t=i.filter(e=>!0);t.push(e),o(t)},g=e=>{o(i.filter(t=>t!==e)),console.log("remove tag ",e)},p=e=>{i.indexOf(e,0)>-1?g(e):h(e)};return(0,a.jsxs)("div",{className:"flex flex-row",ref:d,children:[(0,a.jsx)("span",{className:"w-10",children:"태그"}),(0,a.jsxs)("div",{className:"w-full rounded bg-gray-100 hover:cursor-pointer flex flex-col",children:[(0,a.jsx)("div",{id:"temp",className:"w-full h-full",onClick:()=>{l(!s)},children:i.map((e,t)=>(0,a.jsx)(n.Fragment,{children:(0,a.jsxs)("span",{onClick:t=>f(t,e),className:"group leading-8 rounded bg-blue-100 hover:bg-red-100 p-1 my-3 mr-3",children:[(0,a.jsx)("span",{className:"hidden group-hover:inline ",children:"✂"}),e," ",(0,a.jsx)("span",{className:"hidden group-hover:inline ",children:"✂"})]})},t))}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("div",{className:"h-10 left-0 absolute ".concat(s?"":"hidden"),children:(0,a.jsx)("div",{className:"border bg-white flex flex-col p-3",children:void 0!==r.tgs&&r.tgs.map((e,t)=>(0,a.jsx)(n.Fragment,{children:(0,a.jsx)("span",{onClick:()=>p(e),className:"pb-1 ".concat(i.includes(e)?"bg-red-100 hover:bg-red-200":"hover:bg-blue-100"," "),children:e})},t))})})})]})]})}var f=_(7907);function h(e){let{initialSearchKeyword:t,onChangeSearchKeyword:_}=e,[s,l]=(0,n.useState)("");return(0,n.useEffect)(()=>{null!=t&&l(t)},[]),(0,a.jsxs)("div",{className:"flex flex-row py-2",children:[(0,a.jsx)("span",{className:"w-20",children:"제목 검색"}),(0,a.jsx)("div",{className:"w-full rounded h-full bg-gray-100",children:(0,a.jsx)("input",{className:"w-full h-full px-2 bg-transparent",defaultValue:s,onChange:e=>{let t=e.target.value;l(t),_(t)}})})]})}function g(e){let[t,_]=(0,n.useState)("/"),[s,l]=(0,n.useState)(),[r,c]=(0,n.useState)(),[u,g]=(0,n.useState)([]),[p,x]=(0,n.useState)(!1),[m,w]=(0,n.useState)(""),v=(0,f.useRouter)();return(0,n.useEffect)(()=>{let e="/search?",t=!0;void 0!==s&&void 0!==r&&(s<=r?e+="ds=".concat(s,"&de=").concat(r,"&"):t=!1),u.length>0&&(e+="tg="+u.map(e=>e.slice(1)).join(",")+"&"),void 0!==m&&void 0!==m&&""!==m&&(e+="key="+encodeURI(m)+"&"),t&&_(e)},[s,r,u,m]),(0,n.useEffect)(()=>{p&&(v.refresh(),v.push(t),x(!1))},[p]),(0,a.jsxs)("div",{className:" flex flex-row relative border p-5 mb-5",children:[(0,a.jsx)("div",{className:"w-2/5",children:(0,a.jsx)(i,{setDateRange:(e,t)=>{l(e),c(t)},initialDateFirst:e.dateStart,initialDateSecond:e.dateEnd})}),(0,a.jsxs)("div",{className:" px-5 w-3/5 flex flex-col",children:[(0,a.jsx)(h,{initialSearchKeyword:e.searchKeyword,onChangeSearchKeyword:w}),(0,a.jsx)(d,{tags:e.tags,onChangeSelectedTags:g}),(0,a.jsx)(o.default,{onClick:()=>{x(!0)},id:"link-to",href:t,className:"absolute right-0 bottom-0 p-5 hover:cursor-pointer hover:scale-110",children:"조회"})]})]})}},4812:function(e,t,_){_.d(t,{Fq:function(){return o},Ch:function(){return c},Nz:function(){return d},Cj:function(){return u},Gu:function(){return i}});var a=_(9079);let n="",s="https://monoticker.github.io/";_(4057).resolve(a.cwd());var l=JSON.parse('{"tgs":["#금융소식요약봇","#금융소식요약봇_고팍스","#금융소식요약봇_고팍스_공지사항","#금융소식요약봇_공정거래위원회","#금융소식요약봇_공정거래위원회_공정위소식","#금융소식요약봇_공정거래위원회_공정위소식_보도","#금융소식요약봇_공정거래위원회_공정위소식_보도_공시점검과","#금융소식요약봇_공정거래위원회_공정위소식_보도_국제협력과","#금융소식요약봇_공정거래위원회_공정위소식_보도_입찰담합조사과","#금융소식요약봇_국민권익위원회","#금융소식요약봇_국민권익위원회_보도자료","#금융소식요약봇_국민권익위원회_보도자료_교육운영과","#금융소식요약봇_국민권익위원회_보도자료_국민신문고과","#금융소식요약봇_국민권익위원회_보도자료_복지노동민원과","#금융소식요약봇_국회입법조사처","#금융소식요약봇_국회입법조사처_연구보고서","#금융소식요약봇_국회입법조사처_연구보고서_이슈와논점 2225호","#금융소식요약봇_국회입법조사처_연구보고서_이슈와논점 2226호","#금융소식요약봇_금융감독원","#금융소식요약봇_금융감독원_보도자료","#금융소식요약봇_금융감독원_보도자료_금융교육국","#금융소식요약봇_금융감독원_보도자료_금융사기대응단/민생침해대응총괄국/보험사기대응단/금융교육국","#금융소식요약봇_금융감독원_보도자료_금융소비자보호총괄국","#금융소식요약봇_금융감독원_보도자료_디지털혁신국","#금융소식요약봇_금융감독원_보도자료_보험감독국","#금융소식요약봇_금융감독원_보도자료_보험사기대응단","#금융소식요약봇_금융감독원_보도자료_분쟁조정1국/분쟁조정2국/금융민원국","#금융소식요약봇_금융위원회","#금융소식요약봇_금융위원회_고시/공고/훈령","#금융소식요약봇_금융위원회_고시/공고/훈령_담당부서 : 금융혁신과","#금융소식요약봇_금융위원회_금융정책","#금융소식요약봇_금융위원회_금융정책_담당부서 : 금융시장분석과","#금융소식요약봇_금융위원회_금융정책_담당부서 : 금융혁신과","#금융소식요약봇_금융위원회_보도자료","#금융소식요약봇_금융위원회_보도자료_담당부서 : 공정시장과","#금융소식요약봇_금융위원회_보도자료_담당부서 : 금융시장분석과","#금융소식요약봇_금융위원회_보도자료_담당부서 : 금융혁신과","#금융소식요약봇_금융위원회_자본시장정책","#금융소식요약봇_금융위원회_자본시장정책_담당부서 : 공정시장과","#금융소식요약봇_기획재정부","#금융소식요약봇_기획재정부_뉴스","#금융소식요약봇_기획재정부_뉴스_보도자료","#금융소식요약봇_기획재정부_뉴스_보도자료_경제분석과","#금융소식요약봇_기획재정부_뉴스_보도자료_금융재정지원팀","#금융소식요약봇_기획재정부_뉴스_보도자료_기획재정담당관","#금융소식요약봇_기획재정부_뉴스_보도자료_다자금융과","#금융소식요약봇_기획재정부_뉴스_보도자료_복지경제과","#금융소식요약봇_기획재정부_뉴스_보도자료_정책조정총괄과","#금융소식요약봇_기획재정부_뉴스_보도자료_혁신정책담당관","#금융소식요약봇_기획재정부_뉴스_보도자료_환경에너지세제과","#금융소식요약봇_대검찰청","#금융소식요약봇_대검찰청_검찰발표자료","#금융소식요약봇_대검찰청_검찰발표자료_대검찰청","#금융소식요약봇_방송통신위원회","#금융소식요약봇_방송통신위원회_보도자료","#금융소식요약봇_방송통신위원회_보도자료_디지털이용자기반과","#금융소식요약봇_방송통신위원회_보도자료_방송기반총괄과","#금융소식요약봇_방송통신위원회_보도자료_지역미디어정책과","#금융소식요약봇_방송통신위원회_보도자료_파견/휴직","#금융소식요약봇_법무부","#금융소식요약봇_법무부_보도자료","#금융소식요약봇_법무부_보도자료_보호관찰과","#금융소식요약봇_법무부_보도자료_소년보호과","#금융소식요약봇_산업통상자원부","#금융소식요약봇_산업통상자원부_보도참고자료","#금융소식요약봇_산업통상자원부_보도참고자료_기계로봇항공과","#금융소식요약봇_산업통상자원부_보도참고자료_기술규제정책과","#금융소식요약봇_산업통상자원부_보도참고자료_디스플레이가전팀","#금융소식요약봇_산업통상자원부_보도참고자료_무역진흥과","#금융소식요약봇_산업통상자원부_보도참고자료_미주통상과","#금융소식요약봇_산업통상자원부_보도참고자료_반도체과","#금융소식요약봇_산업통상자원부_보도참고자료_산업기술정책과","#금융소식요약봇_산업통상자원부_보도참고자료_산업정책과","#금융소식요약봇_산업통상자원부_보도참고자료_석유산업과","#금융소식요약봇_산업통상자원부_보도참고자료_수출입과","#금융소식요약봇_산업통상자원부_보도참고자료_에너지정책실","#금융소식요약봇_산업통상자원부_보도참고자료_에너지효율과","#금융소식요약봇_산업통상자원부_보도참고자료_원전환경과","#금융소식요약봇_산업통상자원부_보도참고자료_입지총괄과","#금융소식요약봇_산업통상자원부_보도참고자료_자동차과","#금융소식요약봇_산업통상자원부_보도참고자료_자유무역협정협상총괄과","#금융소식요약봇_산업통상자원부_보도참고자료_재생에너지정책과","#금융소식요약봇_산업통상자원부_보도참고자료_적합성정책국","#금융소식요약봇_산업통상자원부_보도참고자료_중견기업정책과","#금융소식요약봇_산업통상자원부_보도참고자료_통상법무기획과","#금융소식요약봇_산업통상자원부_보도참고자료_통상협정활용과","#금융소식요약봇_업비트","#금융소식요약봇_업비트_공지사항","#금융소식요약봇_업비트_공지사항_NFT","#금융소식요약봇_업비트_공지사항_디지털 자산","#금융소식요약봇_업비트_공지사항_안내","#금융소식요약봇_업비트_공지사항_입출금"],"kts":["715307538856970860","7701619701363003471","-3451623456785279033","-5584414612834054693","-7791122082232570738","7012178133751272204","1584621309072086483","1766160736086188772","-6204460774020871267","-254754117735682999","8112085255152775423","5266114185761052908","188854246397692816","-3400206157281239962","212546312660483688","6223218139099676914","6939918093943532195","2175461023249601345","-5428387418842996690","-2296622868705349536","3077967958045526800","7627057770778401270","-6908419320683287527","5687269914262055474","7903260737974322033","-4551147712697819236","-5663883070921035875","592847895151626889","8742103017419265907","3482706924804692977","7087792525638972453","1629429759116296700","9014016810263601196","9068450092240080094","3237801590388087456","-4973218823158553709","-8988768933764404932","455904269725458534","7679150848837521397","-670937276665114099","-1304769517739615747","-144291275904661144","6198260346934051132","9218102095092607417","-2518200031681267329","-2763653300028702145","7926989232255888072","5885178632804024910","1844208679017684272","803973126808164671","701584856928566474","-1370156559872017810","3516073208358870165","-7794578451780393413","-31602817168619274","6481947112185503899","-5747501462156119392","6549313562551075722","-8660391348725059124","-2633556707074258184","-4394447940909575825","7971588133359212316","2040433228674444030","-4099409330152038292","-3375497398176808655"]}'),r=JSON.parse('{"월렛 시스템 점검에 따른 코스모스(ATOM) 입출금 일시 중단 안내":["715307538856970860"],"2023년 자동차보험 사업실적":["7701619701363003471"],"’24년 상반기 금융교육 전문강사 양성연수자 모집 안내":["-3451623456785279033"],"중동사태 관련 대외경제점검회의 개최":["-5584414612834054693"],"(참고자료)이란의 이스라엘 공습에 따른 에너지\xb7무역\xb7공급망 등 국내 영향 긴급 점검":["-7791122082232570738"],"비상경제장관회의 개최":["7012178133751272204"],"마약류 단순 투약사범 ‘사법-치료-재활 연계모델’ 전국 확대 실시":["1584621309072086483"],"방통위, 방송광고 지원대상 혁신형 중소기업 선정     ":["1766160736086188772"],"\'2024 방송통신위원회 방송대상\' 국민심사단 모집     ":["-6204460774020871267"],"유류세 탄력세율 인하조치 2개월 연장":["-254754117735682999"],"「제2차 국민건강보험 종합계획」(2024~28)의 주요 내용과 쟁점 -건강보험의 ‘적정 보장성’과 ‘재정적 지속가능성’ 확보를 위한 과제-":["8112085255152775423"],"“국민이 제안하면, 정책이 됩니다!”":["5266114185761052908"],"“이제는 K-청렴! 권익위 반부패 정책, 전세계에...”":["188854246397692816"],"“공무원의 잘못된 안내로 아동수당 신청을 놓쳤다면... 아동수당 지급해야...”":["-3400206157281239962"],"온라인투자연계금융업 변경등록사항 공고. 금일 등록된 게시글":["212546312660483688"],"미국 경쟁당국(FTC, DOJ) 공동 주최 제3회 경쟁당국 수장회의 및 주요국 양자협의회 결과":["6223218139099676914","9068450092240080094"],"한-조지아 경제동반자협정(EPA) 회기간 협상 열려":["6939918093943532195"],"2024 기후산업국제박람회 국제에너지기구(IEA)와 공동 개최 결정":["2175461023249601345"],"산단 내 12.6조 원 투자 프로젝트의 원활한 추진 지원을 위한 관리제도 개선":["-5428387418842996690"],"지능형 스마트 방폐물 처분시설 구축하고, 연구용 지하연구시설 부지선정 추진":["-2296622868705349536"],"1분기 무역기술장벽(TBT) 1,194건, 2년 연속 최고치":["3077967958045526800"],"(참고자료)한미 첨단산업\xb7청정에너지 협력 확대, 대미 투자기업 지원 논의":["7627057770778401270"],"[보도참고] 중동사태 관련 긴급 시장점검회의 개최. 금일 등록된 게시글":["-6908419320683287527","5687269914262055474"],"「금융소비자와 함께 하는 민생금융 이야기」 간담회 개최":["7903260737974322033"],"수출 7천억불 달성을 위한 마중물･･･ 대규모 수출상담회 열려":["-4551147712697819236"],"[보도자료] 김소영 금융위원회 부위원장, IASB(국제회계기준위원회) 위원장 면담. 금일 등록된 게시글":["-5663883070921035875","592847895151626889"],"금년 80개 중견기업 대상 1조 원 우대금융 지원":["8742103017419265907"],"4월 수출상황 긴급점검, 중동 리스크 최소화":["3482706924804692977"],"2024년 3월 정보통신산업(ICT) 수출입 동향":["7087792525638972453"],"4월 2주차 GAS, VTHO 지급 안내":["1629429759116296700"],"금융감독원, 경찰청, 유관기관은 보험범죄 수사협의회를 통해 민생침해 보험사기 수사를 적극 지원하겠습니다":["9014016810263601196"],"미디어가 사랑한 낙타 그림의 주인공 드롭스":["3237801590388087456"],"(참고자료)중동정세 불안 심화에도 국민 생활에 영향 없도록 석유\xb7가스 비상 대응태세 가동":["-4973218823158553709"],"확대간부회의 개최":["-8988768933764404932"],"방통위 시청자권익보호위원회 위촉식 및 제1차 회의 개최     ":["455904269725458534"],"[이벤트] 캐리버스(CVTX) 제휴 이벤트 2탄 안내":["7679150848837521397"],"마약류 단순 투약사범 \'사법-치료-재활\' 연계모델 부처협업으로 전국 확대 시행한다":["-670937276665114099"],"전략적 인사교류 직위 협업과제 추진계획":["-1304769517739615747"],"최상목 부총리, 지역자활센터 및 알뜰주유소 현장방문":["-144291275904661144"],"업비트 실험실 주문고도화(최유리지정가, IOC, FOK) 전체 마켓 대상 지원 안내 - (4/22 적용 예정)":["6198260346934051132"],"최상목 부총리, 주요 20개국 재무장관회의 참석 위해 출국":["9218102095092607417"],"자동차부품 신시장 개척 확대로 \'24년 자동차산업 최대 수출실적 달성 도모":["-2518200031681267329"],"미국 보잉사와 국제 공동 연구개발(R&D), 보잉한국기술연구센터(BKETC) 인력 확대, 항공 분야 공급망 협력 등 추진":["-2763653300028702145"],"중동 사태 관련 관계부처 합동 비상상황점검회의 개최":["7926989232255888072"],"인구감소 시대， 인구 전담 부처 설치의 쟁점과 과제":["5885178632804024910"],"대규모기업집단 공시매뉴얼 개정":["1844208679017684272"],"상호인정으로 해외인증 국내 획득 지원 강화":["803973126808164671"],"FTA종합지원센터, FTA 활용지원을 넘어 수출기업 통상애로해소 종합지원기관으로 확대":["701584856928566474"],"우리 수출 기업의 해외 무역장벽 대응 지원":["-1370156559872017810"],"국제재생에너지기구(IRENA) 14차 총회 참석":["3516073208358870165"],"대출받은 후 14일 이내 취소하고 싶다면 대출 청약철회권을 적극 활용하세요[금융꿀팁 152]":["-7794578451780393413"],"방통위-개인정보위 정책협의회 발족, ‘안전한 디지털 이용환경 조성’ 에 힘 합친다     ":["-31602817168619274"],"반도체 전문가들과 ‘AI-반도체 이니셔티브’ 논의":["6481947112185503899"],"찾아가는 금융규제 샌드박스 간담회 광주광역시에 찾아가다":["-5747501462156119392"],"장관, ‘늘봄학교’ 일일 에너지 교사로 재능기부":["6549313562551075722"],"찾아가는 금융규제 샌드박스」 간담회 광주광역시에 찾아가다. 금일 등록된 게시글":["-8660391348725059124"],"[보도자료] 「찾아가는 금융규제 샌드박스」 간담회 광주광역시에 찾아가다. 금일 등록된 게시글":["-2633556707074258184"],"분쟁 신속처리 및 예방을 위한 보험권 CCO 간담회 개최":["-4394447940909575825"],"법무부장관 서울소년분류심사원, 안양소년원 정책현장 방문":["7971588133359212316"],"기업과 함께 신진연구자 성장 본격 지원":["2040433228674444030"],"군 장병 대상 \'찾아가는 경제교육\' 본격 시작":["-4099409330152038292"],"원스톱 수출 119, 수출 호조세 확산을 위해 화성시 수출기업 현장 목소리 경청":["-3375497398176808655"]}');function c(){return l}function i(){return r}async function o(e){let t={};try{t=await (await fetch("".concat(s,"/static/date/").concat(e,".json"))).json()}catch(e){}return t}async function u(e){let t={};try{t=await (await fetch("".concat(s,"/static/tags/").concat(e,".json"))).json()}catch(e){}return t}async function d(e){return await Promise.all(e.map(async e=>await (await fetch("".concat(s,"/static/post/").concat(e,".json"))).json()))}}}]);