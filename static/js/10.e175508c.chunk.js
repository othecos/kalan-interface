(this["webpackJsonp@kalan/interface"]=this["webpackJsonp@kalan/interface"]||[]).push([[10],{1635:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1640:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1636),r=a(1637),i=function(){function e(){Object(n.a)(this,e),this.label="",this.key=""}return Object(r.a)(e,[{key:"setData",value:function(e){e&&(e.label&&(this.label=e.label),e.key&&(this.key=e.key))}},{key:"toJSON",value:function(){return{key:this.key,label:this.label}}}]),e}()},1654:function(e,t,a){"use strict";var n=a(33),r=a.n(n),i=a(64),c=a(28),o=a(34),l=a(0),s=a.n(l),u=a(461),m=a(1595),p=a(322),b=a(836),h=a(1604),f=a(1723),d=a(44),g=a(474),v=[{key:"bank",label:"Setor Banc\xe1rio"}],O=Object(u.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));t.a=function(e){e.className,Object(o.a)(e,["className"]);var t=Object(d.c)(),a=O(),n=Object(l.useRef)(null),u=Object(d.d)((function(e){return e.analysis})).sector,y=Object(l.useState)(!1),j=Object(c.a)(y,2),k=j[0],P=j[1];Object(l.useEffect)((function(){t(Object(g.b)(v[0]))}),[t]);var E=function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!1),e.next=3,t(Object(g.b)(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{ref:n,onClick:function(){return P(!0)}},s.a.createElement(p.a,{fontSize:"small",className:a.actionIcon},s.a.createElement(f.a,null)),null===u||void 0===u?void 0:u.label),s.a.createElement(b.a,{anchorEl:n.current,onClose:function(){return P(!1)},open:k,PaperProps:{className:a.menu},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},v.map((function(e){return s.a.createElement(h.a,{key:e.key,onClick:function(){return E(e)}},e.label)}))))}},1661:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(1636),r=a(1637),i=a(8),c=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2}),o=function(e){if("number"==typeof e)return c.format(e);if("string"==typeof e){var t=+e;if(!Object(i.isNaN)(t))return c.format(e)}return e},l=(a(1640),a(10)),s=a(3),u=a.n(s),m=function(){function e(){Object(n.a)(this,e),this.CAPM=0,this.beta=0,this.betaDetails="",this.divPerShare=0,this.growthRate="0%",this.riskFree="0%"}return Object(r.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.CAPM)||(this.CAPM=e.CAPM),Object(i.isNull)(e.beta)||(this.beta=e.beta),Object(i.isNull)(e.betaDetails)||(this.betaDetails=e.betaDetails),Object(i.isNull)(e.divPerShare)||(this.divPerShare=e.divPerShare),Object(i.isNull)(e.growthRate)||(this.growthRate=e.growthRate),Object(i.isNull)(e.riskFree)||(this.riskFree=e.riskFree))}},{key:"toJSON",value:function(){return{CAPM:this.CAPM,beta:this.beta,betaDetails:this.betaDetails,divPerShare:o(this.divPerShare),growthRate:this.growthRate,riskFree:this.riskFree}}}]),e}(),p=function(){function e(){Object(n.a)(this,e),this.value=0,this.premisses=new m}return Object(r.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.value)||(this.value=e.value),Object(i.isNull)(e.status)||(this.status=e.status),Object(i.isNull)(e.premisses)||this.premisses.setDataFromDB(e.premisses))}},{key:"toJSON",value:function(){return{value:o(this.value),status:this.status,premisses:this.premisses.toJSON()}}}]),e}(),b=function(){function e(){Object(n.a)(this,e),this.period=2019,this.yield="0%"}return Object(r.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.period)||(this.period=e.period),Object(i.isNull)(e.yield)||(this.yield=e.yield))}},{key:"toJSON",value:function(){return{period:this.period,yield:this.yield}}}]),e}(),h=function(){function e(){Object(n.a)(this,e),this.ticker="",this.category="",this.date="",this.lastPrice=0,this.name="",this.dividend=new b,this.href="app/analysis/stocks/",this.color=l.a.cyan[500],this.valuation=new p}return Object(r.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e._id)||(this._id=e._id),Object(i.isNull)(e.ticker)||(this.ticker=e.ticker,this.href+=e.ticker),Object(i.isNull)(e.name)||(this.name=e.name),Object(i.isNull)(e.category)||(this.category=e.category),Object(i.isNull)(e.date)||(this.date=e.date),Object(i.isNull)(e.lastPrice)||(this.lastPrice=e.lastPrice),Object(i.isNull)(e.dividend)||this.dividend.setDataFromDB(e.dividend),Object(i.isNull)(e.valuation)||this.valuation.setDataFromDB(e.valuation))}},{key:"toPreview",value:function(){return{key:"item_".concat(this._id),name:this.name,ticker:this.ticker,href:this.href}}},{key:"toListItem",value:function(){return{key:"item_".concat(this._id),name:this.name,ticker:this.ticker,href:this.href,price:o(this.lastPrice),valuation:this.valuation.toJSON()}}},{key:"toDetail",value:function(){var e;return{key:"item_".concat(this._id),name:this.name,ticker:this.ticker,href:this.href,date:(e=this.date,u()(e).format("DD/MM/YYYY")),price:o(this.lastPrice),dividend:this.dividend.toJSON(),fundamentus:this.valuation.premisses.toJSON(),valuation:this.valuation.toJSON(),diff:{value:this.getDiffPercentage(this.lastPrice,this.valuation.value),label:"".concat(this.getDiffPercentage(this.lastPrice,this.valuation.value).toFixed(2),"%")}}}},{key:"getDiffPercentage",value:function(e,t){try{var a=t-e,n=a/e*100;return Object(i.isNaN)(a)||Object(i.isNaN)(n)?0:n}catch(r){return 0}}}]),e}()},1683:function(e,t,a){"use strict";var n=a(0),r=a(242);t.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1684:function(e,t,a){"use strict";var n=a(0),r=a(242);t.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},1685:function(e,t,a){"use strict";var n=a(82),r=a(34),i=a(0),c=a.n(i),o=a(4),l=a(461),s=a(23),u=Object(l.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.d)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.d)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.d)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.d)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.d)(e.palette.warning.main,.08)}}}));function m(e){var t=e.className,a=e.color,i=e.children,l=(e.style,Object(r.a)(e,["className","color","children","style"])),s=u();return c.a.createElement("span",Object.assign({className:Object(o.a)(s.root,Object(n.a)({},s[a],a),t)},l),i)}m.defaultProps={className:"",color:"secondary"},t.a=m},1710:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(2),c=a.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=function(e){var t=e.color,a=e.size,n=l(e,["color","size"]);return r.a.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.a.createElement("polyline",{points:"12 5 19 12 12 19"}))};s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.defaultProps={color:"currentColor",size:"24"},t.a=s},1748:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a.n(n),i=a(64),c=a(28),o=a(82),l=a(0),s=a.n(l),u=a(461),m=a(1626),p=a(1578),b=a(473),h=(a(18),a(1635)),f=a(34),d=a(35),g=a(4),v=a(1627),O=a(1689),y=a(1609),j=a(150),k=a(1639),P=a.n(k),E=a(1654),w=Object(u.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var N=function(e){var t=e.className,a=Object(f.a)(e,["className"]),n=w();return s.a.createElement(v.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(g.a)(n.root,t)},a),s.a.createElement(v.a,{item:!0},s.a.createElement(O.a,{separator:s.a.createElement(P.a,{fontSize:"small"}),"aria-label":"breadcrumb"},s.a.createElement(y.a,{variant:"body1",color:"inherit",to:"/app/analysis",component:d.b},"An\xe1lises"),s.a.createElement(y.a,{variant:"body1",color:"inherit",to:"/app/analysis/stocks",component:d.b},"A\xe7\xf5es")),s.a.createElement(j.a,{variant:"h3",color:"textPrimary"},"Todas as a\xe7\xf5es")),s.a.createElement(v.a,{item:!0},s.a.createElement(E.a,null)))},x=a(472),S=a(52),C=a(244),R=a.n(C),B=a(1665),D=a(1733),I=a(1734),A=a(1735),F=a(1736),L=a(1737),z=a(322),T=a(1570),M=a(1752),J=a(2),_=a.n(J);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var G=function(e){var t=e.color,a=e.size,n=Y(e,["color","size"]);return s.a.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),s.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.a.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s.a.createElement("polyline",{points:"21 15 16 10 5 21"}))};G.propTypes={color:_.a.string,size:_.a.oneOfType([_.a.string,_.a.number])},G.defaultProps={color:"currentColor",size:"24"};var H=G,K=a(1710),q=a(1685),V=[{value:"updatedAt|desc",label:"Last update (newest first)"},{value:"updatedAt|asc",label:"Last update (oldest first)"},{value:"createdAt|desc",label:"Creation date (newest first)"},{value:"createdAt|asc",label:"Creation date (oldest first)"}];var Q=Object(u.a)((function(e){return{root:{},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},queryField:{width:500},categoryField:{flexBasis:200},availabilityField:{marginLeft:e.spacing(2),flexBasis:200},stockField:{marginLeft:e.spacing(2)},shippableField:{marginLeft:e.spacing(2)},imageCell:{fontSize:0,width:68,flexBasis:68,flexGrow:0,flexShrink:0},image:{height:68,width:68}}}));function U(e){var t=e.className,a=e.stocks,n=Object(f.a)(e,["className","stocks"]),r=Q(),i=Object(l.useState)([]),o=Object(c.a)(i,2),u=o[0],m=(o[1],Object(l.useState)(0)),b=Object(c.a)(m,2),h=b[0],v=b[1],O=Object(l.useState)(10),y=Object(c.a)(O,2),j=y[0],k=y[1],P=Object(l.useState)(""),E=Object(c.a)(P,2),w=(E[0],E[1],Object(l.useState)(V[0].value)),N=Object(c.a)(w,2),x=(N[0],N[1],Object(S.h)()),C=Object(l.useState)({category:null,availability:null,inStock:null,isShippable:null}),J=Object(c.a)(C,2),_=(J[0],J[1],function(e,t,a){return e.filter((function(e){return!0}))}(a)),W=function(e,t,a){return e.slice(t*a,t*a+a)}(_,h,j);return s.a.createElement(B.a,Object.assign({className:Object(g.a)(r.root,t)},n),s.a.createElement(R.a,null,s.a.createElement(p.a,{minWidth:800},s.a.createElement(D.a,null,s.a.createElement(I.a,null,s.a.createElement(A.a,null,s.a.createElement(F.a,null),s.a.createElement(F.a,null,"C\xf3digo"),s.a.createElement(F.a,null,"Nome"),s.a.createElement(F.a,null,"Pre\xe7o"),s.a.createElement(F.a,null,"Pre\xe7o Alvo / Valuation"),s.a.createElement(F.a,{align:"right"},"A\xe7\xf5es"))),s.a.createElement(L.a,null,W.map((function(e){var t,a=u.includes(e.key);return s.a.createElement(A.a,{hover:!0,key:e.key,selected:a},s.a.createElement(F.a,{className:r.imageCell},e.image?s.a.createElement("img",{alt:"Imagem ativo",src:e.image,className:r.image}):s.a.createElement(p.a,{p:2,bgcolor:"background.dark"},s.a.createElement(z.a,null,s.a.createElement(H,null)))),s.a.createElement(F.a,null,(t=e.ticker,s.a.createElement(q.a,{color:"success"},t))),s.a.createElement(F.a,null,e.name),s.a.createElement(F.a,null,e.price),s.a.createElement(F.a,null,e.valuation.value),s.a.createElement(F.a,{align:"right"},s.a.createElement(T.a,{component:d.b,to:"".concat(x.pathname,"/").concat(e.ticker)},s.a.createElement(z.a,{fontSize:"small"},s.a.createElement(K.a,null)))))})))),s.a.createElement(M.a,{component:"div",count:_.length,onChangePage:function(e,t){v(t)},onChangeRowsPerPage:function(e){k(e.target.value)},page:h,rowsPerPage:j,rowsPerPageOptions:[5,10,25]}))))}U.defaultProps={stocks:[]};var X=U,Z=a(1661),$=a(476),ee=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},container:Object(o.a)({},e.breakpoints.up("lg"),{paddingLeft:64,paddingRight:64})}}));t.default=function(e){var t=ee(),a=Object(h.a)(),n=Object(l.useState)(null),o=Object(c.a)(n,2),u=o[0],f=o[1],d=Object(l.useCallback)(Object(i.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/analysis/stocks");case 2:if(t=e.sent,!a.current){e.next=10;break}if(!t.data||!Array.isArray(t.data)){e.next=9;break}n=t.data.map((function(e){var t=new Z.a;return t.setDataFromDB(e),t.toListItem()})),f(n),e.next=10;break;case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)}))),[a]);return Object(l.useEffect)((function(){d()}),[d]),u?s.a.createElement(x.a,{className:t.root,title:"A\xe7\xf5es"},s.a.createElement(m.a,{maxWidth:!1},s.a.createElement(N,null),u&&s.a.createElement(p.a,{mt:3},s.a.createElement(X,{stocks:u})))):s.a.createElement($.a,null)}},1752:function(e,t,a){"use strict";var n=a(1),r=a(5),i=a(0),c=(a(2),a(4)),o=a(7),l=a(843),s=a(1604),u=a(1581),m=a(1736),p=a(1624),b=a(150),h=a(1683),f=a(1684),d=a(29),g=a(1570),v=i.createElement(f.a,null),O=i.createElement(h.a,null),y=i.createElement(h.a,null),j=i.createElement(f.a,null),k=i.forwardRef((function(e,t){var a=e.backIconButtonProps,c=e.count,o=e.nextIconButtonProps,l=e.onChangePage,s=e.page,u=e.rowsPerPage,m=Object(r.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),p=Object(d.a)();return i.createElement("div",Object(n.a)({ref:t},m),i.createElement(g.a,Object(n.a)({onClick:function(e){l(e,s-1)},disabled:0===s,color:"inherit"},a),"rtl"===p.direction?v:O),i.createElement(g.a,Object(n.a)({onClick:function(e){l(e,s+1)},disabled:-1!==c&&s>=Math.ceil(c/u)-1,color:"inherit"},o),"rtl"===p.direction?y:j))})),P=function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(-1===a?n:a," of ").concat(-1!==n?n:"more than ".concat(a))},E=[10,25,50,100],w=i.forwardRef((function(e,t){var a,o=e.ActionsComponent,h=void 0===o?k:o,f=e.backIconButtonProps,d=e.backIconButtonText,g=void 0===d?"Previous page":d,v=e.classes,O=e.className,y=e.colSpan,j=e.component,w=void 0===j?m.a:j,N=e.count,x=e.labelDisplayedRows,S=void 0===x?P:x,C=e.labelRowsPerPage,R=void 0===C?"Rows per page:":C,B=e.nextIconButtonProps,D=e.nextIconButtonText,I=void 0===D?"Next page":D,A=e.onChangePage,F=e.onChangeRowsPerPage,L=e.page,z=e.rowsPerPage,T=e.rowsPerPageOptions,M=void 0===T?E:T,J=e.SelectProps,_=void 0===J?{}:J,W=Object(r.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);w!==m.a&&"td"!==w||(a=y||1e3);var Y=_.native?"option":s.a;return i.createElement(w,Object(n.a)({className:Object(c.a)(v.root,O),colSpan:a,ref:t},W),i.createElement(p.a,{className:v.toolbar},i.createElement("div",{className:v.spacer}),M.length>1&&i.createElement(b.a,{color:"inherit",variant:"body2",className:v.caption},R),M.length>1&&i.createElement(u.a,Object(n.a)({classes:{select:v.select,icon:v.selectIcon},input:i.createElement(l.a,{className:Object(c.a)(v.input,v.selectRoot)}),value:z,onChange:F,inputProps:{"aria-label":R}},_),M.map((function(e){return i.createElement(Y,{className:v.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),i.createElement(b.a,{color:"inherit",variant:"body2",className:v.caption},S({from:0===N?0:L*z+1,to:-1!==N?Math.min(N,(L+1)*z):(L+1)*z,count:N,page:L})),i.createElement(h,{className:v.actions,backIconButtonProps:Object(n.a)({title:g,"aria-label":g},f),count:N,nextIconButtonProps:Object(n.a)({title:I,"aria-label":I},B),onChangePage:A,page:L,rowsPerPage:z})))}));t.a=Object(o.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(w)}}]);
//# sourceMappingURL=10.e175508c.chunk.js.map