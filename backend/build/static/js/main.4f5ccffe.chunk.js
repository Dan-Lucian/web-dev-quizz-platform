(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{57:function(e,n,t){"use strict";t.r(n);var r,c,o,i,a,s,l,u,d,b,j,h,m,f,g,x,p,O,A,w,v,y,B,k,C,E,I,S,T,Q,F=t(1),M=t(29),z=t.n(M),L=t(9),J=t(4),q=t(5),R=t(2),U=t(3),Y=Object(R.b)(r||(r=Object(U.a)(["\n  ","\n  ","\n"])),"\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n","\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: 'IBM Plex Mono', monospace;\n    color: #fff;\n    background: #545E75;\n  }\n"),D=t(0),H=R.c.div(c||(c=Object(U.a)(["\n  @media (min-width: ",") {\n    font-size: 20px;\n  }\n\n  @media (min-width: ",") {\n    font-size: 22px;\n  }\n\n  @media (min-width: ",") {\n    font-size: 24px;\n  }\n"])),(function(e){return e.theme.screen.med}),(function(e){return e.theme.screen.lg}),(function(e){return e.theme.screen.xlg})),W=function(e){var n=e.children;return Object(D.jsx)(H,{children:n})},P=R.c.nav(o||(o=Object(U.a)(["\n  position: fixed;\n  z-index: 100;\n  padding: 16px 6%;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n"])),(function(e){return e.theme.color.bg})),N=Object(R.c)(P)(i||(i=Object(U.a)(["\n  display: none;\n"]))),X=function(e){var n=e.children;return e.hidden?Object(D.jsx)(N,{children:n}):Object(D.jsx)(P,{children:n})},G=R.c.img(a||(a=Object(U.a)(["\n  cursor: pointer;\n\n  @media (min-width: ",") {\n    width: 60px;\n    height: 60px;\n  }\n"])),(function(e){return e.theme.screen.xlg})),K=function(){return Object(D.jsx)(G,{onClick:function(){window.scrollTo(0,0)},width:"50px",height:"50px",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7d3BbRtXFEDRP3TaCLxLkCrEDgLv1YvpXrgX3IFchrMTXIfJiEGWyU2+YBIjzTnrISBRczV/8fBmWT5/Ow/gH+0G8K8EAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQfhprtIzH8/fTl8FmLO92d+M89mNlVhnIX3F8eH8YbMb54emw7Hb7sTKOWBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQllssjjv//vMyVubr/f3h+Yf6OPhPzzfIp1+Px8NYmVvcu54gEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBDm92JZ6rY5yxh3l9m1mc/cYnbrfDp9mrn+JcvppgOx1G2T9s+R7Mecw7i2yfvwJcvpHLEgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIKzzLbcv8Mf9/dWXiM1a68K1NX5Xa+UJAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBALhzcxi3cJltmrm+tMYj4NXTSAT1jh4yHU5YkEQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAiEN/MSz1+Ox2Xm+q/394fnD3wcr9wtfo/L2323+gJTTxAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCG9mFmvWaYzHNf53uMxWzVy/jHE3Jl1mq2auv3xXY6M2G8hvx+PjWOEf/hYDlFsdPHwJRywIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCJudxboFS91eP08QCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAhmsa7oFsvptrzU7RYEckVrXU7H/+eIBUEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBALBLNYVWRz3+nmCQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUCYnsVa3u3uzg9Ph5nPjA/vDwN+tMn78HLvXobXZswPK57Hftnt9nMfGYcBP9jzfTg3CDoZx4UjFgSBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAiEZfn87QUTKtd1Pp0+GXDcmIenw/Rs1Q14gkAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAWOUs1ljG4/n76ctgM/5e6rYfK7POQGAlHLEgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIPwJ+nCONSj/SXkAAAAASUVORK5CYII=",alt:"logo"})},V=R.c.header(s||(s=Object(U.a)(["\n  margin-bottom: 5em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"])),(function(e){return e.theme.colorBg})),Z=function(e){var n=e.children,t=e.style;return Object(D.jsx)(V,{style:t,children:n})},_=R.c.h1(l||(l=Object(U.a)(["\n  background: ",";\n  text-align: center;\n  display: block;\n  font-size: 2em;\n  font-weight: 700;\n  padding: 20px 10px;\n"])),(function(e){return e.theme.color.bgAccent})),$=function(e){var n=e.level,t=e.style,r=e.children,c="h".concat(n);return Object(D.jsx)(_,{style:t,as:c,children:r})},ee=R.c.main(u||(u=Object(U.a)([""]))),ne=function(){return Object(D.jsx)(ee,{children:Object(D.jsx)(Z,{style:{paddingTop:"8em"},children:Object(D.jsx)($,{level:2,children:"No such page :("})})})},te=R.c.footer(d||(d=Object(U.a)(["\n  background: ",";\n  padding: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  "," ~ & {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n  }\n"])),(function(e){return e.theme.color.bgAccent}),ee),re=function(e){var n=e.children;return Object(D.jsx)(te,{children:n})},ce=t(18),oe=R.c.ul(b||(b=Object(U.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n\n  li {\n    margin-left: 20px;\n  }\n\n  a:link,\n  a:visited,\n  a:active {\n    color: white;\n  }\n\n  a:hover {\n    opacity: 0.5;\n  }\n"]))),ie=function(){return Object(D.jsxs)(oe,{children:[Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://github.com/Dan-Lucian",children:Object(D.jsx)(ce.a,{size:30})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://www.linkedin.com/in/dan-lucian-gaina-74789b226/",children:Object(D.jsx)(ce.b,{size:30})})})]})},ae=R.c.ul(j||(j=Object(U.a)(["\n  display: flex;\n  justify-content: flex-end;\n  display: none;\n\n  @media (min-width: ",") {\n    display: block;\n  }\n\n  a {\n    margin-left: 60px;\n    padding: 2px;\n  }\n\n  a:link,\n  a:visited {\n    color: ",";\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.screen.med}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.bgAccent}),(function(e){return e.theme.color.text})),se=function(e){var n=e.children;return Object(D.jsx)(ae,{children:n})},le=R.c.div(h||(h=Object(U.a)(["\n  width: 36px;\n  height: 3px;\n  background-color: ",";\n  position: relative;\n  transition: transform 0.075s ease;\n\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    width: 36px;\n    height: 3px;\n    background-color: ",";\n    position: absolute;\n  }\n\n  &::before {\n    bottom: 10px;\n    transition: bottom 0.075s 0.12s ease;\n  }\n\n  &::after {\n    bottom: -10px;\n    transition: bottom 0.075s 0.12s ease, transform 0.075s ease;\n  }\n\n  ","\n"])),(function(e){return e.theme.color.hamburger}),(function(e){return e.theme.color.hamburger}),(function(e){return e.isMenuOpen&&"\n    transform: rotate(45deg);\n    transition-delay: 0.12s;\n\n    &::before {\n      bottom: 0;\n      transition: bottom 0.075s ease;\n    }\n\n    &::after {\n      bottom: 0;\n      transform: rotate(-90deg);\n      transition: bottom 0.075s ease, transform 0.075s 0.12s ease;\n    }\n  "})),ue=R.c.button(m||(m=Object(U.a)(["\n  height: 40px;\n  width: 50px;\n  background: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n"]))),de=function(e){var n=e.isMenuOpen,t=e.onClick;return Object(D.jsx)(ue,{onClick:t,children:Object(D.jsx)(le,{isMenuOpen:n})})},be=R.c.div(f||(f=Object(U.a)(["\n  background-color: ",";\n  color: ",";\n  position: absolute;\n  right: 0.5em;\n  top: 80%;\n  display: var(--display-menu, none);\n  flex-direction: column;\n  padding: 1.5em;\n  font-size: 1.3em;\n\n  a {\n    padding: 5px 2px;\n  }\n\n  a:first-child {\n    margin-bottom: 0.8em;\n  }\n\n  a:link,\n  a:visited {\n    color: ",";\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.bgAccent}),(function(e){return e.theme.color.bgAccent}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.bgAccent})),je=function(e){var n=e.children,t=e.isMenuOpen;return Object(D.jsx)(be,{style:{"--display-menu":t?"flex":"none"},children:n})},he=R.c.div(g||(g=Object(U.a)(["\n  @media (min-width: ",") {\n    display: none;\n  }\n"])),(function(e){return e.theme.screen.med})),me=function(e){var n=e.children,t=e.isMenuOpen,r=e.toggleMenuOpen,c=Object(F.useRef)(null),o=function(e){var n=Object(F.useState)(!1),t=Object(q.a)(n,2),r=t[0],c=t[1];return Object(F.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)?c(!0):c(!1)};return document.addEventListener("pointerdown",n),function(){document.removeEventListener("pointerdown",n)}}),[e]),r}(c);return Object(F.useEffect)((function(){o&&r(!1)}),[o,r]),Object(D.jsxs)(he,{ref:c,children:[Object(D.jsx)(de,{isMenuOpen:t,onClick:r}),Object(D.jsx)(je,{isMenuOpen:t,toggleMenuOpen:r,children:n})]})},fe={color:{bg:"#545E75",bgAccent:"#364057",hamburger:"#1b202b",text:"#fff",red:"#DA5C5C",green:"#21A179",bgBtn1:"#2DD4A0",textBtn1:"#fff",bgBtn2:"#F16529",textBtn2:"#fff",bgBtn3:"#2965F1",textBtn3:"#fff",bgBtn4:"#F7DF1E",textBtn4:"#000",bgBtn5:"#61DAFB",textBtn5:"#000"},screen:{med:"768px",lg:"1200px",xlg:"1800px"},isTouch:!1},ge=function(){var e=function(e){var n=Object(F.useState)(e),t=Object(q.a)(n,2),r=t[0],c=t[1];return[r,function(e){c((function(n){return"boolean"===typeof e?e:!n}))}]}(!1),n=Object(q.a)(e,2),t=n[0],r=n[1],c=function(e){var n=Object(F.useRef)(0),t=Object(F.useState)(e),r=Object(q.a)(t,2),c=r[0],o=r[1];return Object(F.useEffect)((function(){var e=function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>n.current?(n.current=e<=0?0:e,o("down")):(n.current=e<=0?0:e,o("up"))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),c}("up");return fe.isTouch=!!("ontouchstart"in window)||window.navigator.msMaxTouchPoints>0,Object(D.jsxs)(R.a,{theme:fe,children:[Object(D.jsx)(Y,{}),Object(D.jsxs)(W,{children:[Object(D.jsxs)(X,{hidden:"down"===c,children:[Object(D.jsx)(K,{}),Object(D.jsxs)(se,{children:[Object(D.jsx)(L.b,{to:"/",children:"_Home"}),Object(D.jsx)(L.b,{to:"/about",children:"_About"})]}),Object(D.jsxs)(me,{isMenuOpen:t,toggleMenuOpen:r,children:[Object(D.jsx)(L.b,{onClick:r,to:"/",children:"Home"}),Object(D.jsx)(L.b,{onClick:r,to:"/about",children:"About"})]})]}),Object(D.jsx)(J.a,{}),Object(D.jsxs)(re,{children:[Object(D.jsx)("p",{children:"Author: "}),Object(D.jsx)(ie,{})]})]})]})},xe=R.c.div(x||(x=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),pe=function(e){var n=e.children;return Object(D.jsx)(xe,{children:n})},Oe=R.c.button(p||(p=Object(U.a)(["\n  padding: 10px 30px;\n  text-align: center;\n  font-family: inherit;\n  border: 3px solid ",";\n  color: ",";\n  font-size: 1.5em;\n  background: ",";\n  box-shadow: 0 5px 0 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n\n  @media (hover: hover) {\n    &:hover {\n      background: ",";\n      border: 3px solid ",";\n      color: ",";\n    }\n  }\n\n  &:active {\n    transform: translateY(2px);\n    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.25);\n  }\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.bg}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.bg}),(function(e){return e.theme.color.bg})),Ae=function(e){var n=e.text,t=e.onClick;return Object(D.jsx)(Oe,{onClick:t,children:n})},we=t(33),ve=t(6),ye=R.c.button(O||(O=Object(U.a)(["\n  opacity: var(--btn-opacity, 0.5);\n  text-align: center;\n  font-family: inherit;\n  border: 0;\n  border-radius: 2px;\n  padding: 0;\n  font-weight: 700;\n  font-size: 1em;\n  cursor: pointer;\n  background-color: ",";\n  color: #fff;\n\n  @media (hover: hover) {\n    &:hover {\n      opacity: ",";\n    }\n  }\n\n  @media (min-width: ",") {\n    font-weight: 400;\n  }\n"])),(function(e){return e.theme.color.bgAccent}),(function(e){return e.theme.isTouch?"none":"1"}),(function(e){return e.theme.screen.med})),Be=Object(R.c)(ye)(A||(A=Object(U.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.color.bgBtn1}),(function(e){return e.theme.color.textBtn1})),ke=Object(R.c)(ye)(w||(w=Object(U.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.color.bgBtn2}),(function(e){return e.theme.color.textBtn2})),Ce=Object(R.c)(ye)(v||(v=Object(U.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.color.bgBtn3}),(function(e){return e.theme.color.textBtn3})),Ee=Object(R.c)(ye)(y||(y=Object(U.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.color.bgBtn4}),(function(e){return e.theme.color.textBtn4})),Ie=Object(R.c)(ye)(B||(B=Object(U.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.color.bgBtn5}),(function(e){return e.theme.color.textBtn5})),Se=function(e){var n=e.text,t=e.type,r=e.pressed,c={pressed:r,onClick:e.onClick,style:{"--btn-opacity":r?"1":"0.5"}};switch(t){case"1":return Object(D.jsx)(Be,Object(ve.a)(Object(ve.a)({},c),{},{children:n}));case"2":return Object(D.jsx)(ke,Object(ve.a)(Object(ve.a)({},c),{},{children:n}));case"3":return Object(D.jsx)(Ce,Object(ve.a)(Object(ve.a)({},c),{},{children:n}));case"4":return Object(D.jsx)(Ee,Object(ve.a)(Object(ve.a)({},c),{},{children:n}));case"5":return Object(D.jsx)(Ie,Object(ve.a)(Object(ve.a)({},c),{},{children:n}));default:return Object(D.jsx)(ye,Object(ve.a)(Object(ve.a)({},c),{},{children:n}))}},Te=R.c.section(k||(k=Object(U.a)(["\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 98px 98px 98px;\n  grid-template-rows: 40px 40px;\n  grid-gap: 20px;\n  flex-grow: 1;\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 45px);\n  }\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 60px);\n  }\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 60px);\n  }\n"])),(function(e){return e.theme.screen.med}),(function(e){return e.theme.screen.lg}),(function(e){return e.theme.screen.xlg})),Qe=function(e){var n=e.contents,t=n.mainTopic,r=n.secondaryTopics,c=e.selectedTopics,o=e.toggleTopic,i=e.type,a=[t].concat(Object(we.a)(r));return Object(D.jsx)(Te,{children:a.map((function(e,n){return Object(D.jsx)(Se,{pressed:c.includes(e.toLowerCase()),text:e,type:i,onClick:o},n)}))})},Fe=R.c.div(C||(C=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n"])),(function(e){return e.theme.screen.med})),Me=function(e){var n=e.dbTopics,t=e.selectedTopics,r=e.toggleTopic;return Object(D.jsx)(Fe,{children:n.map((function(e,n){return Object(D.jsx)(Qe,{type:"".concat(n+1),contents:e,selectedTopics:t,toggleTopic:r},n)}))})},ze=R.c.main(E||(E=Object(U.a)(["\n  width: 100%;\n  margin: 8em 0;\n\n  @media (min-width: ",") {\n    width: 725px;\n  }\n\n  @media (min-width: ",") {\n    width: 990px;\n  }\n\n  @media (min-width: ",") {\n    width: 1320px;\n  }\n"])),(function(e){return e.theme.screen.med}),(function(e){return e.theme.screen.lg}),(function(e){return e.theme.screen.xlg})),Le=function(e){var n=e.children;return Object(D.jsx)(ze,{children:n})},Je=R.c.div(I||(I=Object(U.a)(["\n  position: absolute;\n  bottom: -3em;\n  background-color: ",";\n  padding: 0.5em 1em;\n"])),(function(e){return e.theme.color.bgAccent})),qe=Object(R.c)(Je)(S||(S=Object(U.a)(["\n  color: ",";\n"])),(function(e){return e.theme.color.green})),Re=Object(R.c)(Je)(T||(T=Object(U.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.color.bgAccent}),(function(e){return e.theme.color.red})),Ue=function(e){var n=e.status,t=e.error;if(0===e.selectedTopics.length)return Object(D.jsx)(Re,{children:"No topics selected"});switch(n){case"pending":return Object(D.jsx)(qe,{children:"Making the test..."});case"rejected":return Object(D.jsx)(Re,{children:(null===t||void 0===t?void 0:t.response.data)||t.message});default:return null}},Ye=Object(R.c)(V)(Q||(Q=Object(U.a)(["\n  margin-bottom: 8em;\n  position: relative;\n"]))),De=function(e){var n=e.children;return Object(D.jsx)(Ye,{children:n})};var He,We,Pe,Ne,Xe,Ge,Ke,Ve,Ze,_e,$e,en,nn,tn,rn,cn,on,an,sn,ln,un,dn,bn,jn,hn,mn,fn,gn,xn,pn,On=function(e,n){switch(n.type){case"pending":return{status:"pending",data:null,error:null};case"resolved":return{status:"resolved",data:n.data,error:null};case"rejected":return{status:"rejected",data:null,error:n.error};default:throw new Error("Unhandled action type: ".concat(n.type))}},An=function(e){var n=Object(F.useReducer)(On,Object(ve.a)({status:"idle",data:null,error:null},e)),t=Object(q.a)(n,2),r=t[0],c=function(e){var n=Object(F.useRef)(!1);return Object(F.useLayoutEffect)((function(){return n.current=!0,function(){n.current=!1}}),[]),Object(F.useCallback)((function(){return n.current?e.apply(void 0,arguments):void 0}),[e])}(t[1]),o=r.data,i=r.error,a=r.status,s=Object(F.useCallback)((function(e){c({type:"pending"}),e.then((function(e){c({type:"resolved",data:e})}),(function(e){c({type:"rejected",error:e})}))}),[c]),l=Object(F.useCallback)((function(e){return c({type:"resolved",data:e})}),[c]),u=Object(F.useCallback)((function(e){return c({type:"rejected",error:e})}),[c]);return{setData:l,setError:u,error:i,status:a,data:o,run:s}},wn=t(17),vn=t.n(wn),yn={get:function(){return vn.a.get("".concat("")).then((function(e){return e.data}))},send:function(e){return vn.a.post("",e).then((function(e){return e.data}))}},Bn=[{mainTopic:"Internet",secondaryTopics:["HTTP","Websites","Security"],colorText:"#fff",colorBg:"#2DD4A0"},{mainTopic:"HTML",secondaryTopics:["Tags","Forms","Attributes","General"],colorText:"#fff",colorBg:"#F16529"},{mainTopic:"CSS",secondaryTopics:["Selectors","Units","Layout"],colorText:"#fff",colorBg:"#2965F1"},{mainTopic:"JavaScript",secondaryTopics:["Internals","Objects","Functions","Web data","DOM"],colorText:"#282C34",colorBg:"#F7DF1E"},{mainTopic:"React",secondaryTopics:["Concepts","Hooks","Classes","CRA"],colorText:"#282C34",colorBg:"#61DAFB"}],kn=function(e){return Bn.find((function(n){return n.mainTopic.toLowerCase()===e||n.secondaryTopics.map((function(e){return e.toLowerCase()})).includes(e)}))},Cn=function(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.serialize,c=void 0===r?JSON.stringify:r,o=t.deserialize,i=void 0===o?JSON.parse:o,a=Object(F.useState)((function(){var t=window.localStorage.getItem(e);return t?i(t):"function"===typeof n?n():n})),s=Object(q.a)(a,2),l=s[0],u=s[1],d=Object(F.useRef)(e);return Object(F.useEffect)((function(){var n=d.current;n!==e&&window.localStorage.removeItem(n),d.current=e,window.localStorage.setItem(e,c(l))}),[e,l,c]),[l,u]}("testTopics",[]),n=Object(q.a)(e,2),t=n[0],r=n[1],c=An({status:"idle"}),o=c.data,i=c.status,a=c.run,s=c.error,l=c.setError,u=Object(J.g)();Object(F.useEffect)((function(){"resolved"===i&&(o.forEach((function(e){var n=function(e){if(e){for(var n=e.slice(0),t=n.length-1;t>0;t-=1){var r=Math.floor(Math.random()*(t+1)),c=[n[r],n[t]];n[t]=c[0],n[r]=c[1]}return n.slice(0)}}(e.answers);e.answers=n})),u("/test",{state:o}))}),[u,o,l,i]);return Object(D.jsx)(pe,{children:Object(D.jsx)(Le,{children:Object(D.jsxs)(pe,{children:[Object(D.jsxs)(De,{children:[Object(D.jsx)($,{level:1,style:{marginBottom:"50px"},children:"Welcome there fellow believer"}),Object(D.jsx)(Ae,{onClick:function(){0!==t.length&&a(yn.send(t))},text:"Start the test"}),Object(D.jsx)(Ue,{selectedTopics:t,status:i,error:s,data:o})]}),Object(D.jsx)($,{level:1,style:{marginBottom:"20px",width:"100%"},children:"Choose your topics"}),Object(D.jsx)(Me,{dbTopics:Bn,selectedTopics:t,toggleTopic:function(e){var n=e.target.textContent.toLowerCase();if(t.includes(n))r((function(e){return e.filter((function(e){return e!==n}))}));else{var c=kn(n);c.mainTopic.toLowerCase()===n?r((function(e){return e.filter((function(e){return!c.secondaryTopics.map((function(e){return e.toLowerCase()})).includes(e)})).concat(n)})):r((function(e){return e.filter((function(e){return e!==c.mainTopic.toLowerCase()})).concat(n)}))}}})]})})})},En=R.c.h2(He||(He=Object(U.a)(["\n  width: 100%;\n  font-size: 1.5em;\n  height: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),In=Object(R.c)(En)(We||(We=Object(U.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.color.red})),Sn=Object(R.c)(En)(Pe||(Pe=Object(U.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.color.green})),Tn=function(e){var n=e.color,t=e.children,r=e.style;switch(n){case"red":return Object(D.jsx)(In,{style:r,children:t});case"green":return Object(D.jsx)(Sn,{style:r,children:t});default:return Object(D.jsx)(En,{style:r,children:t})}},Qn=R.c.main(Ne||(Ne=Object(U.a)(["\n  width: 100%;\n  margin: 8em 0;\n\n  @media (min-width: ",") {\n    width: 725px;\n  }\n\n  @media (min-width: ",") {\n    width: 990px;\n  }\n\n  @media (min-width: ",") {\n    width: 1320px;\n  }\n"])),(function(e){return e.theme.screen.med}),(function(e){return e.theme.screen.lg}),(function(e){return e.theme.screen.xlg})),Fn=function(e){var n=e.children;return Object(D.jsx)(Qn,{children:n})},Mn=R.c.div(Xe||(Xe=Object(U.a)(["\n  width: 100%;\n  padding: 2em 1.5em;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(e){return e.theme.color.bgAccent})),zn=Object(R.c)(Mn)(Ge||(Ge=Object(U.a)(["\n  border: 5px solid ",";\n"])),(function(e){return e.theme.color.red})),Ln=Object(R.c)(Mn)(Ke||(Ke=Object(U.a)(["\n  border: 5px solid ",";\n"])),(function(e){return e.theme.color.green})),Jn=function(e){var n=e.children,t=e.style;switch(e.color){case"red":return Object(D.jsx)(zn,{style:t,children:n});case"green":return Object(D.jsx)(Ln,{style:t,children:n});default:return Object(D.jsx)(Mn,{style:t,children:n})}},qn=R.c.section(Ve||(Ve=Object(U.a)(["\n  margin-top: 4em;\n"]))),Rn=function(e){var n=e.children;return Object(D.jsx)(qn,{children:n})},Un=function(){return Object(D.jsx)(pe,{children:Object(D.jsxs)(Fn,{children:[Object(D.jsx)($,{level:1,children:"What is this all about ?"}),Object(D.jsxs)(Rn,{children:[Object(D.jsx)(Tn,{color:"green",children:"Idea"}),Object(D.jsxs)(Jn,{color:"green",children:[Object(D.jsx)("p",{children:"We are living in the Google era and it is fairly easy to find stuff online, but you cannot search for what you don\u2019t even remember."}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("p",{children:"This is a platform that has access to a collection of questions about different web development related topics."}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("p",{children:"The purpose of this is to keep the memory of developers fresh about certain topics that they might forget. The topics and the questions will be as \u201cnitty-gritty\u201d as possible."}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("p",{children:"This is not intended for learning purposes, but for periodic refreshments of your memory."})]})]}),Object(D.jsxs)(Rn,{style:{width:"100%",marginBottom:"6em"},children:[Object(D.jsx)(Tn,{color:"red",children:"Mechanics"}),Object(D.jsxs)(Jn,{color:"red",children:[Object(D.jsx)("p",{children:"The questions are chosen at random based on the selected topics then the chosen questions are presented in a form of a test."}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("p",{children:"There are several major topics with their subtopics:"}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsxs)("ul",{style:{paddingLeft:"40px",listStyleType:"disc"},children:[Object(D.jsx)("li",{style:{marginBottom:"0.7em"},children:"In case you select a major topic (ex: javascript) the questions will be about the whole topic."}),Object(D.jsx)("li",{style:{marginBottom:"0.7em"},children:"In case you select a subtopic (ex: objects) the questions will be only about that subtopic."}),Object(D.jsx)("li",{style:{marginBottom:"0.7em"},children:"It is possible to mix subtopics from different major topics."}),Object(D.jsx)("li",{children:"It is possible to choose ALL topics or ALL subtopics."})]}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("p",{children:"This is not intended for learning purposes, but for periodic refreshments of your memory."})]})]})]})})},Yn=R.c.a(Ze||(Ze=Object(U.a)(["\n  background: ",";\n  text-decoration: none;\n  display: inline-block;\n  font-size: 0.9em;\n  text-decoration: underline;\n  padding: 0.3em;\n  border: none;\n\n  &:link,\n  &:visited,\n  &:active {\n    color: ",";\n  }\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.color.bg}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.bgAccent})),Dn=function(e){var n=e.text,t=e.href;return Object(D.jsx)(Yn,{href:t,children:n})},Hn=R.c.article(_e||(_e=Object(U.a)(["\n  padding: 1em 3em;\n  margin-top: 2em;\n  background-color: ",";\n  border: 3px solid ",";\n  display: flex;\n  flex-direction: column;\n"])),(function(e){return e.theme.color.bgAccent}),(function(e){return e.theme.color.red})),Wn=Object(R.c)(ye)($e||($e=Object(U.a)(["\n  box-shadow: 0 4px 0 rgba(255, 255, 255, 0.2);\n  opacity: 1;\n\n  &:active {\n    transform: translateY(2px);\n    box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2);\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      background: rgba(255, 255, 255, 0.8);\n      color: ",";\n    }\n  }\n\n  @media (min-width: ",") {\n    box-shadow: 0 6px 0 rgba(255, 255, 255, 0.2);\n\n    &:active {\n      transform: translateY(4px);\n      box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2);\n    }\n  }\n\n  "," & {\n    background-color: ",";\n    color: ",";\n    width: 100%;\n    padding: 1em;\n    opacity: 1;\n    box-shadow: none;\n\n    &:hover {\n      background: ",";\n    }\n\n    &:active {\n      transform: none;\n    }\n  }\n"])),(function(e){return e.theme.color.bgAccent}),(function(e){return e.theme.screen.lg}),Hn,(function(e){return e.theme.color.bg}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.green})),Pn=Object(R.c)(Wn)(en||(en=Object(U.a)(["\n  background-color: ",";\n\n  @media (hover: hover) {\n    &:hover {\n      background: ",";\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.color.green}),(function(e){return e.theme.color.green}),(function(e){return e.theme.color.text})),Nn=Object(R.c)(Wn)(nn||(nn=Object(U.a)(["\n  background-color: ",";\n\n  @media (hover: hover) {\n    &:hover {\n      background: ",";\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.color.red}),(function(e){return e.theme.color.red}),(function(e){return e.theme.color.text})),Xn=function(e){var n=e.text,t=e.onClick,r=e.isCorrect,c=e.isRevealed,o=e.disabled;return c?r?Object(D.jsx)(Pn,{disabled:o,onClick:t,children:n}):Object(D.jsx)(Nn,{disabled:o,onClick:t,children:n}):Object(D.jsx)(Wn,{disabled:o,onClick:t,children:n})},Gn=R.c.p(tn||(tn=Object(U.a)(["\n  &:nth-child(2) {\n    margin: 1.5em 0;\n  }\n"]))),Kn=function(e){var n=e.children;return Object(D.jsx)(Gn,{children:n})},Vn=function(e){var n=e.moreInfo,t=e.nextQuestion,r=e.hideFailWindow;return Object(D.jsxs)(Hn,{children:[Object(D.jsx)(Xn,{text:"Next question",onClick:function(){r(),t()}}),Object(D.jsx)(Kn,{children:"Seems like you need to recheck this."}),Object(D.jsxs)(Kn,{children:["Here\u2019s a useful ",Object(D.jsx)(Dn,{text:"link",href:n})]})]})},Zn=R.c.main(rn||(rn=Object(U.a)(["\n  margin-top: 6em;\n  width: 85vw;\n  max-width: 1320px;\n  margin-bottom: 10em;\n\n  @media (min-width: ",") {\n    width: 75vw;\n  }\n\n  @media (min-width: ",") {\n    width: 70vw;\n  }\n"])),(function(e){return e.theme.screen.med}),(function(e){return e.theme.screen.lg})),_n=function(e){var n=e.children;return Object(D.jsx)(Zn,{children:n})},$n=R.c.section(cn||(cn=Object(U.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 60px 60px 60px 60px;\n  grid-gap: 20px;\n  justify-content: center;\n\n  @media (min-width: ",") {\n    grid-template-rows: 60px 60px 60px 60px;\n  }\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 80px 80px;\n  }\n\n  @media (min-width: ",") {\n    grid-template-rows: 100px 100px;\n  }\n"])),(function(e){return e.theme.screen.med}),(function(e){return e.theme.screen.lg}),(function(e){return e.theme.screen.xlg})),et=function(e){var n=e.children;return Object(D.jsx)($n,{children:n})},nt=R.c.h1(on||(on=Object(U.a)(["\n  background: ",";\n  display: flex;\n  font-size: 1.5em;\n  font-weight: 700;\n  width: 100%;\n  padding: 0.5em;\n  margin-bottom: 1.3em;\n  line-height: 1.4em;\n\n  span {\n    display: block;\n    margin-right: 0.5em;\n  }\n"])),(function(e){return e.theme.color.bgAccent})),tt=function(e){var n=e.children;return Object(D.jsx)(nt,{children:n})},rt=function(){var e=Object(J.f)().state,n=Object(F.useState)(0),t=Object(q.a)(n,2),r=t[0],c=t[1],o=Object(F.useState)(!1),i=Object(q.a)(o,2),a=i[0],s=i[1],l=Object(J.g)(),u=Object(F.useRef)(JSON.parse(JSON.stringify(e))),d=Object(F.useState)(!1),b=Object(q.a)(d,2),j=b[0],h=b[1],m=function(){s((function(e){return!e}))},f=function(n){setTimeout((function(){if(m(),r+1===e.length)return console.log("questions ended"),void l("/results",{state:u.current});c((function(e){return e+1}))}),n)};return e?Object(D.jsx)(pe,{children:Object(D.jsxs)(_n,{children:[Object(D.jsxs)(tt,{level:1,children:[Object(D.jsxs)("span",{children:[r+1,"."]}),e[r].question]}),Object(D.jsx)(et,{children:e[r].answers.map((function(e,n){return Object(D.jsx)(Xn,{disabled:a,text:e.answer,onClick:e.correct?function(){m(),u.current[r].passed=!0,f(1e3)}:function(){m(),u.current[r].passed=!1,h(!0)},isCorrect:e.correct,isRevealed:a},n)}))}),j&&Object(D.jsx)(Vn,{moreInfo:e[r].moreInfo,nextQuestion:f,hideFailWindow:function(){h(!1)}})]})}):Object(D.jsx)(ne,{})},ct=R.c.h1(an||(an=Object(U.a)(["\n  background: ",";\n  font-size: 1.5em;\n  font-weight: 700;\n  padding: 0.5em;\n  width: 100%;\n  margin-bottom: 1.3em;\n  text-align: center;\n  line-height: 1.4em;\n"])),(function(e){return e.theme.color.bgAccent})),ot=function(e){var n=e.children;return Object(D.jsx)(ct,{children:n})},it=R.c.a(sn||(sn=Object(U.a)(["\n  background: ",";\n  text-decoration: none;\n  display: inline-block;\n  font-size: 0.9em;\n  padding: 0.7em 1.8em;\n\n  &:link,\n  &:visited,\n  &:active {\n    color: ",";\n  }\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.color.bg}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.bgAccent})),at=Object(R.c)(it)(ln||(ln=Object(U.a)(["\n  border: 3px solid ",";\n  align-self: flex-end;\n"])),(function(e){return e.theme.color.red})),st=Object(R.c)(it)(un||(un=Object(U.a)(["\n  border: 3px solid ",";\n  align-self: flex-end;\n"])),(function(e){return e.theme.color.green})),lt=function(e){var n=e.type,t=e.text,r={target:"_blank",href:e.href};switch(n){case"green":return Object(D.jsx)(st,Object(ve.a)(Object(ve.a)({},r),{},{children:t}));case"red":return Object(D.jsx)(at,Object(ve.a)(Object(ve.a)({},r),{},{children:t}));default:return Object(D.jsx)(it,Object(ve.a)(Object(ve.a)({},r),{},{children:t}))}},ut=R.c.li(dn||(dn=Object(U.a)(["\n  margin-bottom: 1.5em;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  &:last-of-type {\n    margin: 0;\n  }\n"]))),dt=R.c.p(bn||(bn=Object(U.a)(["\n  display: block;\n  padding: 0.8em;\n  line-height: 1.4em;\n  display: flex;\n\n  span {\n    margin-right: 0.5em;\n    display: block;\n  }\n"]))),bt=Object(R.c)(dt)(jn||(jn=Object(U.a)(["\n  background: ",";\n"])),(function(e){return e.theme.color.green})),jt=Object(R.c)(dt)(hn||(hn=Object(U.a)(["\n  background: ",";\n"])),(function(e){return e.theme.color.red})),ht=function(e){var n=e.result,t=e.number;return n.passed?Object(D.jsxs)(ut,{children:[Object(D.jsxs)(bt,{children:[Object(D.jsxs)("span",{children:[t,"."]}),n.question]}),Object(D.jsx)(lt,{text:"learn more",type:"green",href:n.moreInfo})]}):Object(D.jsxs)(ut,{children:[Object(D.jsxs)(jt,{children:[Object(D.jsxs)("span",{children:[t,"."]}),n.question]}),Object(D.jsx)(lt,{text:"learn more",type:"red",href:n.moreInfo})]})},mt=R.c.ol(mn||(mn=Object(U.a)(["\n  padding-bottom: 2em;\n  background-color: ",";\n"])),(function(e){return e.theme.color.bgAccent})),ft=function(e){var n=e.children;return Object(D.jsx)(mt,{children:n})},gt=R.c.main(fn||(fn=Object(U.a)(["\n  margin-top: 6em;\n  width: 85vw;\n  max-width: 1320px;\n  margin-bottom: 6em;\n\n  @media (min-width: ",") {\n    width: 75vw;\n  }\n\n  @media (min-width: ",") {\n    width: 70vw;\n  }\n"])),(function(e){return e.theme.screen.med}),(function(e){return e.theme.screen.lg})),xt=function(e){var n=e.children;return Object(D.jsx)(gt,{children:n})},pt=R.c.ul(gn||(gn=Object(U.a)(["\n  display: flex;\n  margin: 2em auto;\n  justify-content: flex-end;\n\n  a {\n    margin-left: 60px;\n    padding: 1em 2em;\n    background-color: ",";\n  }\n\n  a:link,\n  a:visited {\n    color: ",";\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.color.bgAccent}),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.bgAccent}),(function(e){return e.theme.color.text})),Ot=function(e){var n=e.children;return Object(D.jsx)(pt,{children:n})},At=function(){var e,n=Object(J.f)().state,t={correct:0,wrong:0};return n.forEach((function(e){e.passed?t.correct+=1:t.wrong+=1})),Object(D.jsx)(pe,{children:Object(D.jsxs)(xt,{children:[Object(D.jsxs)(ot,{children:[(e=t.correct,10===e?"Perfect!":e>=8?"Good job":e>=5?"Poor job":e>=2?"Very bad":"Awful")," ",Object(D.jsx)("br",{})," ","You got ".concat(t.correct,"/10")]}),Object(D.jsx)(ft,{children:n.map((function(e,n){return Object(D.jsx)(ht,{result:e,number:n+1},n)}))}),Object(D.jsx)(Ot,{children:Object(D.jsx)(L.b,{to:"/",children:"Return to homepage"})})]})})},wt=function(){var e=Object(J.f)().pathname;return Object(F.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},vt=R.c.main(xn||(xn=Object(U.a)(["\n  width: 100%;\n  margin: 5em 0;\n\n  @media (min-width: ",") {\n    width: 725px;\n  }\n\n  @media (min-width: ",") {\n    width: 990px;\n  }\n\n  @media (min-width: ",") {\n    width: 1320px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n\n    input,\n    textarea {\n      font-size: 1em;\n      margin-bottom: 1em;\n    }\n  }\n"])),(function(e){return e.theme.screen.med}),(function(e){return e.theme.screen.lg}),(function(e){return e.theme.screen.xlg})),yt=function(e){var n=e.children;return Object(D.jsx)(vt,{children:n})},Bt=R.c.h1(pn||(pn=Object(U.a)(["\n  background: ",";\n  font-size: 1.5em;\n  font-weight: 700;\n  padding: 0.5em;\n  width: 100%;\n  margin-bottom: 0.5em;\n  text-align: center;\n  line-height: 1.4em;\n"])),(function(e){return e.theme.color.bgAccent})),kt=function(e){var n=e.children;return Object(D.jsx)(Bt,{children:n})},Ct=function(){var e=Object(F.useState)(""),n=Object(q.a)(e,2),t=n[0],r=n[1],c=Object(F.useState)(""),o=Object(q.a)(c,2),i=o[0],a=o[1],s=Object(F.useState)(""),l=Object(q.a)(s,2),u=l[0],d=l[1],b=Object(F.useState)(""),j=Object(q.a)(b,2),h=j[0],m=j[1],f=Object(F.useState)(""),g=Object(q.a)(f,2),x=g[0],p=g[1],O=Object(F.useState)(""),A=Object(q.a)(O,2),w=A[0],v=A[1],y=Object(F.useState)(""),B=Object(q.a)(y,2),k=B[0],C=B[1],E=An(),I=E.data,S=E.status,T=E.run;return Object(D.jsx)(pe,{children:Object(D.jsxs)(yt,{children:[Object(D.jsx)(kt,{children:"Submit the question"}),Object(D.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),0===t.length||0===i.length||0===u.length||0===h.length||0===x.length||0===w.length||0===k.length)throw new Error("one input was empty");var n=w.split(",").map((function(e){return e.trim()}));n.forEach((function(e){if(!kn(e))throw new Error("invalid topic: ".concat(e))}));var r={question:t,answers:[{answer:i,correct:!0},{answer:u,correct:!1},{answer:h,correct:!1},{answer:x,correct:!1}],topics:n,moreInfo:k};console.log("data",r),T(yn.send(r))},children:[Object(D.jsx)("label",{htmlFor:"question",children:"Question"}),Object(D.jsx)("textarea",{onChange:function(e){return r(e.target.value)},value:t,id:"question"}),Object(D.jsx)("label",{htmlFor:"answer-correct",children:"Correct answer"}),Object(D.jsx)("input",{onChange:function(e){return a(e.target.value)},value:i,id:"answer-correct"}),Object(D.jsx)("label",{htmlFor:"answer-wrong",children:"Wrong answer"}),Object(D.jsx)("input",{onChange:function(e){return d(e.target.value)},value:u,id:"answer-wrong"}),Object(D.jsx)("label",{htmlFor:"answer-wrong",children:"Wrong answer"}),Object(D.jsx)("input",{onChange:function(e){return m(e.target.value)},value:h,id:"answer-wrong"}),Object(D.jsx)("label",{htmlFor:"answer-wrong",children:"Wrong answer"}),Object(D.jsx)("input",{onChange:function(e){return p(e.target.value)},value:x,id:"answer-wrong"}),Object(D.jsx)("label",{htmlFor:"topics",children:"Topics (comma delimited, lower case)"}),Object(D.jsx)("input",{onChange:function(e){return v(e.target.value)},value:w,id:"topics"}),Object(D.jsx)("label",{htmlFor:"more-info",children:"More info (link)"}),Object(D.jsx)("input",{onChange:function(e){return C(e.target.value)},value:k,id:"more-info"}),Object(D.jsx)("input",{type:"submit",value:"Submit"}),Object(D.jsx)("input",{type:"reset",value:"Reset",onClick:function(){r(""),a(""),d(""),m(""),p(""),v(""),C("")}}),Object(D.jsxs)("p",{children:["Status: ",S]}),Object(D.jsxs)("p",{children:["Reponse: ",JSON.stringify(I)]})]})]})})};z.a.render(Object(D.jsxs)(L.a,{children:[Object(D.jsx)(wt,{}),Object(D.jsx)(J.d,{children:Object(D.jsxs)(J.b,{path:"/",element:Object(D.jsx)(ge,{}),children:[Object(D.jsx)(J.b,{index:!0,element:Object(D.jsx)(Cn,{})}),Object(D.jsx)(J.b,{path:"about",element:Object(D.jsx)(Un,{})}),Object(D.jsx)(J.b,{path:"test",element:Object(D.jsx)(rt,{})}),Object(D.jsx)(J.b,{path:"results",element:Object(D.jsx)(At,{})}),Object(D.jsx)(J.b,{path:"submit",element:Object(D.jsx)(Ct,{})}),Object(D.jsx)(J.b,{path:"*",element:Object(D.jsx)(ne,{})})]})})]}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.4f5ccffe.chunk.js.map