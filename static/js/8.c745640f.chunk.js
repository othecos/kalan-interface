(this["webpackJsonp@kalan/interface"]=this["webpackJsonp@kalan/interface"]||[]).push([[8],{1635:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1640:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(1636),n=a(1637),i=function(){function e(){Object(r.a)(this,e),this.label="",this.key=""}return Object(n.a)(e,[{key:"setData",value:function(e){e&&(e.label&&(this.label=e.label),e.key&&(this.key=e.key))}},{key:"toJSON",value:function(){return{key:this.key,label:this.label}}}]),e}()},1643:function(e,t,a){"use strict";var r=a(28),n=a(0),i=a.n(n),c=a(461),s=a(1605),l=a(1570),o=a(836),u=a(1604),m=a(1705),h=a(1608),d=a(1655),f=a.n(d),b=a(1656),v=a.n(b),p=a(1657),O=a.n(p),y=a(1658),j=a.n(y),g=a(1659),N=a.n(g),k=Object(c.a)((function(){return{menu:{width:256,maxWidth:"100%"}}}));t.a=Object(n.memo)((function(e){var t=k(),a=Object(n.useRef)(null),c=Object(n.useState)(!1),d=Object(r.a)(c,2),b=d[0],p=d[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"More options"},i.a.createElement(l.a,Object.assign({},e,{onClick:function(){p(!0)},ref:a}),i.a.createElement(f.a,{fontSize:"small"}))),i.a.createElement(o.a,{anchorEl:a.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){p(!1)},open:b,PaperProps:{className:t.menu},transformOrigin:{vertical:"top",horizontal:"left"}},i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(v.a,null)),i.a.createElement(h.a,{primary:"Import"})),i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(O.a,null)),i.a.createElement(h.a,{primary:"Copy"})),i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(j.a,null)),i.a.createElement(h.a,{primary:"Export"})),i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(N.a,null)),i.a.createElement(h.a,{primary:"Achive"}))))}))},1644:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e,t){return e.length>t?e.substring(0,t)+"...":e}},1645:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var r=a(1636),n=a(1637),i=a(8),c=a(1644),s=a(1640),l=function(){function e(){Object(r.a)(this,e),this.href="",this.text=""}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.href)||(this.href=e.href),Object(i.isNull)(e.text)||(this.text=e.text))}},{key:"toJSON",value:function(){return{href:this.href,text:this.text}}}]),e}(),o=function(){function e(){Object(r.a)(this,e),this.score="",this.label=""}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.score)||(this.score=e.score),Object(i.isNull)(e.label)||(this.label=e.label))}},{key:"toJSON",value:function(){return{score:this.score,label:this.label}}}]),e}(),u=function(){function e(){Object(r.a)(this,e),this.sentiment=new o,this.text="",this.relevance=0,this.count=0}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.sentiment)||this.sentiment.setDataFromDB(e.sentiment),Object(i.isNull)(e.text)||(this.text=e.text),Object(i.isNull)(e.relevance)||(this.relevance=e.relevance),Object(i.isNull)(e.count)||(this.count=e.count))}},{key:"toJSON",value:function(){return{sentiment:this.sentiment.toJSON(),text:this.text,relevance:this.relevance,count:this.count}}}]),e}(),m=function(){function e(){Object(r.a)(this,e),this.datetime="",this.source="",this.query=""}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.datetime)||(this.datetime=e.datetime),Object(i.isNull)(e.source)||(this.source=e.source),Object(i.isNull)(e.query)||(this.query=e.query))}},{key:"toJSON",value:function(){return{datetime:this.datetime,source:this.source,query:this.query}}}]),e}(),h=function(){function e(){Object(r.a)(this,e),this.value=-2,this.label="N\xe3o analisado",this.terms=[],this.sector=new s.a,this.color="action",this.sector.setData({key:"bank",label:"Banc\xe1rio"})}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){if(e){if(!Object(i.isNull)(e.value))switch(this.value=e.value,this.value){case-2:this.color="action";break;case-1:this.color="error";break;case 0:this.color="secondary";break;case 1:this.color="primary"}Object(i.isNull)(e.label)||(this.label=e.label),Object(i.isNull)(e.terms)||(this.terms=e.terms)}}},{key:"toJSON",value:function(){return{value:this.value,label:this.label,terms:this.terms,sector:this.sector.toJSON(),color:this.color}}}]),e}(),d=function(){function e(){Object(r.a)(this,e),this._id="",this.title=new l,this.resume="",this.metadata=new m,this.score=new h,this.keywords=[]}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){var t=this;e&&(Object(i.isNull)(e._id)||(this._id=e._id),Object(i.isNull)(e.resume)||(this.resume=e.resume),Object(i.isNull)(e.title)||this.title.setDataFromDB(e.title),Object(i.isNull)(e.metadata)||this.metadata.setDataFromDB(e.metadata),Object(i.isNull)(e.score)||this.score.setDataFromDB(e.score),!Object(i.isNull)(e.keywords)&&Array.isArray(e.keywords)&&e.keywords.forEach((function(e){var a=new u;a.setDataFromDB(e),t.keywords.push(a)})))}},{key:"toListItem",value:function(){return{_id:this._id,title:this.title.toJSON(),metadata:this.metadata.toJSON(),resume:this.resume,score:this.score.toJSON()}}},{key:"toPreview",value:function(){return{_id:this._id,title:this.title.toJSON(),metadata:this.metadata.toJSON(),resume:this.resume,score:this.score.toJSON()}}},{key:"toDetail",value:function(){return{header:{title:Object(c.a)(this.title.text,30),score:this.score.toJSON()},article:{title:this.title.toJSON(),resume:this.resume},sentiments:{title:this.title.toJSON(),score:this.score.toJSON()},keywords:this.keywords.map((function(e){return e.toJSON()}))}}},{key:"toDetailPreview",value:function(){}}]),e}(),f=function(){function e(){Object(r.a)(this,e),this.colors=[],this.data=[],this.labels=[]}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isUndefined)(e.labels)||Object(i.isNull)(e.labels)||(this.labels=e.labels),Object(i.isUndefined)(e.data)||Object(i.isNull)(e.data)||(this.data=e.data),Object(i.isUndefined)(e.colors)||Object(i.isNull)(e.colors)||(this.colors=e.colors))}},{key:"toJSON",value:function(){return{title:"Sentimento da noticias",datasets:[{data:this.data.map((function(e){return e.toFixed(2)})),backgroundColor:this.colors}],labels:this.labels}}}]),e}()},1650:function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1654:function(e,t,a){"use strict";var r=a(33),n=a.n(r),i=a(64),c=a(28),s=a(34),l=a(0),o=a.n(l),u=a(461),m=a(1595),h=a(322),d=a(836),f=a(1604),b=a(1723),v=a(44),p=a(474),O=[{key:"bank",label:"Setor Banc\xe1rio"}],y=Object(u.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));t.a=function(e){e.className,Object(s.a)(e,["className"]);var t=Object(v.c)(),a=y(),r=Object(l.useRef)(null),u=Object(v.d)((function(e){return e.analysis})).sector,j=Object(l.useState)(!1),g=Object(c.a)(j,2),N=g[0],k=g[1];Object(l.useEffect)((function(){t(Object(p.b)(O[0]))}),[t]);var E=function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!1),e.next=3,t(Object(p.b)(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{ref:r,onClick:function(){return k(!0)}},o.a.createElement(h.a,{fontSize:"small",className:a.actionIcon},o.a.createElement(b.a,null)),null===u||void 0===u?void 0:u.label),o.a.createElement(d.a,{anchorEl:r.current,onClose:function(){return k(!1)},open:N,PaperProps:{className:a.menu},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},O.map((function(e){return o.a.createElement(f.a,{key:e.key,onClick:function(){return E(e)}},e.label)}))))}},1655:function(e,t,a){"use strict";var r=a(333);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,r(a(471)).default)(n.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=i},1656:function(e,t,a){"use strict";var r=a(333);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,r(a(471)).default)(n.default.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");t.default=i},1657:function(e,t,a){"use strict";var r=a(333);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,r(a(471)).default)(n.default.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.default=i},1658:function(e,t,a){"use strict";var r=a(333);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,r(a(471)).default)(n.default.createElement("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}),"PictureAsPdf");t.default=i},1659:function(e,t,a){"use strict";var r=a(333);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,r(a(471)).default)(n.default.createElement("path",{d:"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"}),"ArchiveOutlined");t.default=i},1661:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(1636),n=a(1637),i=a(8),c=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2}),s=function(e){if("number"==typeof e)return c.format(e);if("string"==typeof e){var t=+e;if(!Object(i.isNaN)(t))return c.format(e)}return e},l=(a(1640),a(10)),o=a(3),u=a.n(o),m=function(){function e(){Object(r.a)(this,e),this.CAPM=0,this.beta=0,this.betaDetails="",this.divPerShare=0,this.growthRate="0%",this.riskFree="0%"}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.CAPM)||(this.CAPM=e.CAPM),Object(i.isNull)(e.beta)||(this.beta=e.beta),Object(i.isNull)(e.betaDetails)||(this.betaDetails=e.betaDetails),Object(i.isNull)(e.divPerShare)||(this.divPerShare=e.divPerShare),Object(i.isNull)(e.growthRate)||(this.growthRate=e.growthRate),Object(i.isNull)(e.riskFree)||(this.riskFree=e.riskFree))}},{key:"toJSON",value:function(){return{CAPM:this.CAPM,beta:this.beta,betaDetails:this.betaDetails,divPerShare:s(this.divPerShare),growthRate:this.growthRate,riskFree:this.riskFree}}}]),e}(),h=function(){function e(){Object(r.a)(this,e),this.value=0,this.premisses=new m}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.value)||(this.value=e.value),Object(i.isNull)(e.status)||(this.status=e.status),Object(i.isNull)(e.premisses)||this.premisses.setDataFromDB(e.premisses))}},{key:"toJSON",value:function(){return{value:s(this.value),status:this.status,premisses:this.premisses.toJSON()}}}]),e}(),d=function(){function e(){Object(r.a)(this,e),this.period=2019,this.yield="0%"}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e.period)||(this.period=e.period),Object(i.isNull)(e.yield)||(this.yield=e.yield))}},{key:"toJSON",value:function(){return{period:this.period,yield:this.yield}}}]),e}(),f=function(){function e(){Object(r.a)(this,e),this.ticker="",this.category="",this.date="",this.lastPrice=0,this.name="",this.dividend=new d,this.href="app/analysis/stocks/",this.color=l.a.cyan[500],this.valuation=new h}return Object(n.a)(e,[{key:"setDataFromDB",value:function(e){e&&(Object(i.isNull)(e._id)||(this._id=e._id),Object(i.isNull)(e.ticker)||(this.ticker=e.ticker,this.href+=e.ticker),Object(i.isNull)(e.name)||(this.name=e.name),Object(i.isNull)(e.category)||(this.category=e.category),Object(i.isNull)(e.date)||(this.date=e.date),Object(i.isNull)(e.lastPrice)||(this.lastPrice=e.lastPrice),Object(i.isNull)(e.dividend)||this.dividend.setDataFromDB(e.dividend),Object(i.isNull)(e.valuation)||this.valuation.setDataFromDB(e.valuation))}},{key:"toPreview",value:function(){return{key:"item_".concat(this._id),name:this.name,ticker:this.ticker,href:this.href}}},{key:"toListItem",value:function(){return{key:"item_".concat(this._id),name:this.name,ticker:this.ticker,href:this.href,price:s(this.lastPrice),valuation:this.valuation.toJSON()}}},{key:"toDetail",value:function(){var e;return{key:"item_".concat(this._id),name:this.name,ticker:this.ticker,href:this.href,date:(e=this.date,u()(e).format("DD/MM/YYYY")),price:s(this.lastPrice),dividend:this.dividend.toJSON(),fundamentus:this.valuation.premisses.toJSON(),valuation:this.valuation.toJSON(),diff:{value:this.getDiffPercentage(this.lastPrice,this.valuation.value),label:"".concat(this.getDiffPercentage(this.lastPrice,this.valuation.value).toFixed(2),"%")}}}},{key:"getDiffPercentage",value:function(e,t){try{var a=t-e,r=a/e*100;return Object(i.isNaN)(a)||Object(i.isNaN)(r)?0:r}catch(n){return 0}}}]),e}()},1690:function(e,t,a){"use strict";var r=a(33),n=a.n(r),i=a(64),c=a(28),s=a(34),l=a(0),o=a.n(l),u=a(4),m=a(461),h=a(1665),d=a(1704),f=a(1600),b=a(1578),v=a(150),p=(a(1643),a(18),a(473)),O=a(1635),y=a(56),j=a(379),g=a(29);var N=function(e){var t=e.data,a=Object(s.a)(e,["data"]),r=Object(g.a)(),n={datasets:t.datasets.map((function(e){return Object(y.a)({},e,{borderWidth:8,borderColor:r.palette.background.default,hoverBorderColor:r.palette.background.default})})),labels:t.labels},i={responsive:!0,maintainAspectRatio:!1,animation:!1,cutoutPercentage:80,legend:{display:!1},layout:{padding:0},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:r.palette.divider,backgroundColor:r.palette.background.dark,titleFontColor:r.palette.text.primary,bodyFontColor:r.palette.text.secondary,footerFontColor:r.palette.text.secondary,callbacks:{label:function(e,t){var a=t.labels[e.index],r=t.datasets[0].data[e.index];return"".concat(a,": ").concat(r,"%")}}}};return o.a.createElement(j.b,Object.assign({data:n,options:i},a))},k=a(1645),E=Object(m.a)((function(e){return{root:{},item:{textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(3,2),"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}}}));t.a=function(e){var t=e.className,a=Object(s.a)(e,["className"]),r=E(),m=Object(O.a)(),y=Object(l.useState)(null),j=Object(c.a)(y,2),g=j[0],x=j[1],D=Object(l.useCallback)(Object(i.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/analysis/news/graph");case 3:t=e.sent,m.current&&t.data&&((a=new k.b).setDataFromDB(t.data),x(a.toJSON())),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[m]);return Object(l.useEffect)((function(){D()}),[D]),g?o.a.createElement(h.a,Object.assign({className:Object(u.a)(r.root,t)},a),o.a.createElement(d.a,{title:g.title}),o.a.createElement(f.a,null),o.a.createElement(b.a,{p:3,position:"relative",minHeight:320},o.a.createElement(N,{data:g})),o.a.createElement(f.a,null),o.a.createElement(b.a,{display:"flex"},g.labels.map((function(e,t){return o.a.createElement("div",{key:e,className:r.item},o.a.createElement(v.a,{variant:"h4",color:"textPrimary"},g.datasets[0].data[t],"%"),o.a.createElement(v.a,{variant:"overline",color:"textSecondary"},e))})))):null}},1704:function(e,t,a){"use strict";var r=a(1),n=a(5),i=a(0),c=(a(2),a(4)),s=a(7),l=a(150),o=i.forwardRef((function(e,t){var a=e.action,s=e.avatar,o=e.classes,u=e.className,m=e.component,h=void 0===m?"div":m,d=e.disableTypography,f=void 0!==d&&d,b=e.subheader,v=e.subheaderTypographyProps,p=e.title,O=e.titleTypographyProps,y=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),j=p;null==j||j.type===l.a||f||(j=i.createElement(l.a,Object(r.a)({variant:s?"body2":"h5",className:o.title,component:"span",display:"block"},O),j));var g=b;return null==g||g.type===l.a||f||(g=i.createElement(l.a,Object(r.a)({variant:s?"body2":"body1",className:o.subheader,color:"textSecondary",component:"span",display:"block"},v),g)),i.createElement(h,Object(r.a)({className:Object(c.a)(o.root,u),ref:t},y),s&&i.createElement("div",{className:o.avatar},s),i.createElement("div",{className:o.content},j,g),a&&i.createElement("div",{className:o.action},a))}));t.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(o)},1705:function(e,t,a){"use strict";var r=a(1),n=a(5),i=a(0),c=(a(2),a(4)),s=a(7),l=a(102),o=i.forwardRef((function(e,t){var a=e.classes,s=e.className,o=Object(n.a)(e,["classes","className"]),u=i.useContext(l.a);return i.createElement("div",Object(r.a)({className:Object(c.a)(a.root,s,"flex-start"===u.alignItems&&a.alignItemsFlexStart),ref:t},o))}));t.a=Object(s.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(o)},1724:function(e,t,a){"use strict";var r=a(333);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,r(a(471)).default)(n.default.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");t.default=i},1742:function(e,t,a){"use strict";a.r(t);var r=a(82),n=a(0),i=a.n(n),c=a(461),s=a(1626),l=a(1627),o=a(472),u=a(34),m=a(4),h=a(1689),d=a(150),f=a(1639),b=a.n(f),v=a(1654),p=Object(c.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var O=function(e){var t=e.className,a=Object(u.a)(e,["className"]),r=p();return i.a.createElement(l.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(m.a)(r.root,t)},a),i.a.createElement(l.a,{item:!0},i.a.createElement(h.a,{separator:i.a.createElement(b.a,{fontSize:"small"}),"aria-label":"breadcrumb"},i.a.createElement(d.a,{variant:"body1",color:"textPrimary"},"An\xe1lises"))),i.a.createElement(l.a,{item:!0},i.a.createElement(v.a,null)))},y=a(28),j=a(35),g=(a(3),a(244)),N=a.n(g),k=a(1665),E=a(1704),x=a(1600),D=a(1578),w=a(1733),S=(a(1734),a(1735)),P=a(1736),C=a(1605),F=(a(1751),a(1737)),M=a(1595),z=(a(18),a(1650),a(1635));a(1643),Object(c.a)((function(e){return{root:{},technology:{height:30,"& + &":{marginLeft:e.spacing(1)}},navigateNextIcon:{marginLeft:e.spacing(1)}}}));var B=a(33),J=a.n(B),_=a(64),I=a(1563),H=a(473),R=a(1562),A=a(1608),V=a(1570),L=a(1724),W=a.n(L),T=a(10),q=a(1633),$=Object(c.a)((function(e){return{root:{display:"flex",paddingLeft:20},avatar:{border:"3px solid ".concat(e.palette.background.default),marginLeft:-20,"&:hover":{zIndex:2}},more:{backgroundColor:T.a.red[600],color:T.a.common.white}}}));function U(e){var t=e.avatars,a=e.limit,r=e.className,n=Object(u.a)(e,["avatars","limit","className"]),c=$(),s=0,l=t.slice(0,a).map((function(e){return i.a.createElement(C.a,{key:++s,title:"View"},i.a.createElement(q.a,{className:c.avatar,src:e}))}));return t.length>a&&l.push(i.a.createElement(q.a,{key:++s,className:Object(m.a)(c.avatar,c.more)},i.a.createElement(d.a,{color:"inherit",variant:"subtitle2"},"+",t.length-a))),i.a.createElement("div",Object.assign({className:Object(m.a)(c.root,r)},n),l)}U.defaultProps={avatars:[],limit:3};Object(n.memo)(U);var Y=a(52),G=Object(c.a)((function(e){return{root:{},viewButton:{marginLeft:e.spacing(2)}}}));var K=function(e){var t=e.stock,a=e.className,r=Object(u.a)(e,["stock","className"]),n=G(),c=Object(Y.h)();return i.a.createElement(R.a,Object.assign({className:Object(m.a)(n.root,a)},r),i.a.createElement(l.a,{container:!0},i.a.createElement(l.a,{item:!0,xs:4,md:7},i.a.createElement(A.a,{className:n.listItemText,primary:t.name,primaryTypographyProps:{variant:"h6",noWrap:!0},secondary:t.ticker})),i.a.createElement(l.a,{container:!0,spacing:2,xs:8,item:!0,md:5,alignItems:"center",justify:"flex-end"},i.a.createElement(l.a,{item:!0},i.a.createElement(C.a,{title:"Visualizar a\xe7\xe3o"},i.a.createElement(V.a,{component:j.b,to:"".concat(c.pathname,"/stocks/").concat(t.ticker),className:n.viewButton},i.a.createElement(W.a,{fontSize:"small"})))))))},Q=a(1661),X=a(1618),Z=Object(c.a)((function(e){return{root:{alignItems:"center",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",left:0,padding:e.spacing(3),position:"relative",top:0,width:"100%"}}}));var ee=function(){var e=Z();return i.a.createElement("div",{className:e.root},i.a.createElement(D.a,{display:"flex",justifyContent:"center"},i.a.createElement(X.a,null)))},te=Object(c.a)((function(){return{root:{}}}));var ae=function(e){var t=e.className,a=Object(u.a)(e,["className"]),r=te(),c=Object(z.a)(),s=Object(n.useState)(null),l=Object(y.a)(s,2),o=l[0],h=l[1],d=Object(n.useCallback)(Object(_.a)(J.a.mark((function e(){var t,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("/analysis/stocks/");case 2:t=e.sent,c.current&&t.data&&(a=t.data.map((function(e){var t=new Q.a;return t.setDataFromDB(e),t.toPreview()})),h(a));case 4:case"end":return e.stop()}}),e)}))),[c]);return Object(n.useEffect)((function(){d()}),[d]),o?i.a.createElement(k.a,Object.assign({className:Object(m.a)(r.root,t)},a),i.a.createElement(E.a,{title:"A\xe7\xf5es"}),i.a.createElement(x.a,null),i.a.createElement(N.a,null,i.a.createElement(D.a,null,i.a.createElement(I.a,null,o.map((function(e,t){return i.a.createElement(K,{divider:t<o.length-1,key:e.key,stock:e})})))))):i.a.createElement(ee,null)},re=Object(c.a)((function(e){return{root:{width:56,height:56},"@keyframes progress":{"0%":{strokeDasharray:"0 100"}},circle1:{stroke:"dark"===e.palette.type?"rgba(0,0,0,0.15)":"rgba(0,0,0,0.05)",fill:"none",strokeWidth:4},circle2:{stroke:"#4b9e86",fill:"none",strokeWidth:4,animation:"$progress 1s ease-out forwards"},circleNegative:{stroke:"#b658f5",fill:"none",strokeWidth:4,animation:"$progress 1s ease-out forwards"},circleNeutral:{stroke:"#3d72eb",fill:"none",strokeWidth:4,animation:"$progress 1s ease-out forwards"}}}));var ne=function(e){var t=e.value,a=e.className,r=e.color,n=Object(u.a)(e,["value","className","color"]),c=re(t);return i.a.createElement("div",Object.assign({className:Object(m.a)(c.root,a)},n),"neutral"==r?i.a.createElement("svg",{viewBox:"0 0 36 36"},i.a.createElement("path",{className:c.circle1,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"100, 100"}),i.a.createElement("path",{className:c.circleNeutral,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"".concat(t,", 100")})):"negative"==r?i.a.createElement("svg",{viewBox:"0 0 36 36"},i.a.createElement("path",{className:c.circle1,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"100, 100"}),i.a.createElement("path",{className:c.circleNegative,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"".concat(t,", 100")})):i.a.createElement("svg",{viewBox:"0 0 36 36"},i.a.createElement("path",{className:c.circle1,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"100, 100"}),i.a.createElement("path",{className:c.circle2,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"".concat(t,", 100")})))},ie=a(44),ce=a(1645),se=a(1644),le=Object(c.a)((function(e){return{root:{},image:{flexShrink:0,height:56,width:56},subscriptions:{fontWeight:e.typography.fontWeightMedium},value:{color:T.a.green[600],fontWeight:e.typography.fontWeightMedium},navigateNextIcon:{marginLeft:e.spacing(1)}}}));var oe=function(e){var t=e.className,a=Object(u.a)(e,["className"]),r=le(),c=Object(z.a)(),s=(Object(ie.d)((function(e){return e.analysis})).sector,Object(n.useState)(null)),l=Object(y.a)(s,2),o=l[0],h=l[1],f=Object(n.useCallback)(Object(_.a)(J.a.mark((function e(){var t,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("/analysis/news/");case 2:if(t=e.sent,!c.current){e.next=10;break}if(!t.data||!Array.isArray(t.data)){e.next=9;break}a=t.data.slice(0,5).map((function(e){var t=new ce.a;return t.setDataFromDB(e),t.toPreview()})),h(a),e.next=10;break;case 9:return e.abrupt("return",null);case 10:case 11:case"end":return e.stop()}}),e)}))),[c]);return Object(n.useEffect)((function(){f()}),[f]),o?i.a.createElement(k.a,Object.assign({className:Object(m.a)(r.root,t)},a),i.a.createElement(E.a,{title:"Noticias"}),i.a.createElement(x.a,null),i.a.createElement(N.a,null,i.a.createElement(D.a,null,i.a.createElement(w.a,null,i.a.createElement(F.a,null,o.map((function(e){var t;return i.a.createElement(S.a,{hover:!0,key:e._id},i.a.createElement(P.a,null,i.a.createElement(D.a,{display:"flex",alignItems:"center",justifyContent:"space-between"},i.a.createElement(D.a,{ml:2},i.a.createElement(d.a,{variant:"h6",color:"textPrimary"},Object(se.a)(e.title.text,30)),i.a.createElement(d.a,{variant:"body2",color:"textSecondary"},i.a.createElement("span",{className:r.subscriptions},e.metadata.source))),i.a.createElement(D.a,{display:"flex",alignItems:"center",mr:2},i.a.createElement(D.a,{mr:2},i.a.createElement(d.a,{align:"right",variant:"h6",color:"textPrimary"},null===e||void 0===e||null===(t=e.score)||void 0===t?void 0:t.label)),i.a.createElement(V.a,{component:j.b,to:"/app/analysis/sentiments/".concat(e._id)},i.a.createElement(ne,{value:100,color:-1==e.score.value?"negative":0==e.score.value?"neutral":"positive"}))))))})))))),i.a.createElement(D.a,{p:2,display:"flex",justifyContent:"flex-end"},i.a.createElement(M.a,{component:j.b,size:"small",to:"/app/analysis/sentiments/"},"Ver todas",i.a.createElement(b.a,{className:r.navigateNextIcon})))):null},ue=a(1690),me=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},container:Object(r.a)({},e.breakpoints.up("lg"),{paddingLeft:64,paddingRight:64})}}));t.default=function(){var e=me();return i.a.createElement(o.a,{className:e.root,title:"An\xe1lises"},i.a.createElement(s.a,{maxWidth:!1,className:e.container},i.a.createElement(O,null),i.a.createElement(l.a,{container:!0,spacing:3},i.a.createElement(l.a,{item:!0,md:12,xs:12},i.a.createElement(ae,null)),i.a.createElement(l.a,{item:!0,md:6,xs:12},i.a.createElement(ue.a,null)),i.a.createElement(l.a,{item:!0,md:6,xs:12},i.a.createElement(oe,null)))))}},1751:function(e,t,a){"use strict";var r=a(1),n=a(5),i=a(0),c=(a(2),a(4)),s=a(242),l=Object(s.a)(i.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),o=a(7),u=a(470),m=a(9),h=i.forwardRef((function(e,t){var a=e.active,s=void 0!==a&&a,o=e.children,h=e.classes,d=e.className,f=e.direction,b=void 0===f?"asc":f,v=e.hideSortIcon,p=void 0!==v&&v,O=e.IconComponent,y=void 0===O?l:O,j=Object(n.a)(e,["active","children","classes","className","direction","hideSortIcon","IconComponent"]);return i.createElement(u.a,Object(r.a)({className:Object(c.a)(h.root,d,s&&h.active),component:"span",disableRipple:!0,ref:t},j),o,p&&!s?null:i.createElement(y,{className:Object(c.a)(h.icon,h["iconDirection".concat(Object(m.a)(b))])}))}));t.a=Object(o.a)((function(e){return{root:{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,"& $icon":{opacity:.5}},"&$active":{color:e.palette.text.primary,"&& $icon":{opacity:1,color:e.palette.text.secondary}}},active:{},icon:{fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},iconDirectionDesc:{transform:"rotate(0deg)"},iconDirectionAsc:{transform:"rotate(180deg)"}}}),{name:"MuiTableSortLabel"})(h)}}]);
//# sourceMappingURL=8.c745640f.chunk.js.map