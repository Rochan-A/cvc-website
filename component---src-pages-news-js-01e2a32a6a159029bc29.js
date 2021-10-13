/*! For license information please see component---src-pages-news-js-01e2a32a6a159029bc29.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[3],{3630:function(e,t,n){var r=n(7462),a=n(5987),i=n(7294),l=(n(7301),n(5505)),s=n(4071),c=i.forwardRef((function(e,t){var n=e.cellHeight,s=void 0===n?180:n,c=e.children,o=e.classes,u=e.className,m=e.cols,d=void 0===m?2:m,f=e.component,p=void 0===f?"ul":f,h=e.spacing,g=void 0===h?4:h,v=e.style,y=(0,a.Z)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return i.createElement(p,(0,r.Z)({className:(0,l.Z)(o.root,u),ref:t,style:(0,r.Z)({margin:-g/2},v)},y),i.Children.map(c,(function(e){if(!i.isValidElement(e))return null;var t=e.props.cols||1,n=e.props.rows||1;return i.cloneElement(e,{style:(0,r.Z)({width:"".concat(100/d*t,"%"),height:"auto"===s?"auto":s*n+g,padding:g/2},e.props.style)})})))}));t.Z=(0,s.Z)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(c)},8124:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(5987),i=n(2982),l=n(7294),s=n(5505);var c=n(4071);var o=function(e,t){var n,r,a,l;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((n=e.classList).remove.apply(n,(0,i.Z)(t.imgFullWidth.split(" "))),(r=e.classList).add.apply(r,(0,i.Z)(t.imgFullHeight.split(" ")))):((a=e.classList).remove.apply(a,(0,i.Z)(t.imgFullHeight.split(" "))),(l=e.classList).add.apply(l,(0,i.Z)(t.imgFullWidth.split(" ")))))};var u=l.forwardRef((function(e,t){var n=e.children,i=e.classes,c=e.className,u=(e.cols,e.component),m=void 0===u?"li":u,d=(e.rows,(0,a.Z)(e,["children","classes","className","cols","component","rows"])),f=l.useRef(null);return l.useEffect((function(){!function(e,t){e&&(e.complete?o(e,t):e.addEventListener("load",(function(){o(e,t)})))}(f.current,i)})),l.useEffect((function(){var e=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var l=this,s=function(){e.apply(l,a)};clearTimeout(t),t=setTimeout(s,n)}return r.clear=function(){clearTimeout(t)},r}((function(){o(f.current,i)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[i]),l.createElement(m,(0,r.Z)({className:(0,s.Z)(i.root,c),ref:t},d),l.createElement("div",{className:i.tile},l.Children.map(n,(function(e){return l.isValidElement(e)?"img"===e.type||(t=e,n=["Image"],l.isValidElement(t)&&-1!==n.indexOf(t.type.muiName))?l.cloneElement(e,{ref:f}):e:null;var t,n}))))})),m=(0,c.Z)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(u)},1846:function(e,t){var n=60103,r=60106,a=60107,i=60108,l=60114,s=60109,c=60110,o=60112,u=60113,m=60120,d=60115,f=60116,p=60121,h=60122,g=60117,v=60129,y=60131;if("function"==typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element"),r=w("react.portal"),a=w("react.fragment"),i=w("react.strict_mode"),l=w("react.profiler"),s=w("react.provider"),c=w("react.context"),o=w("react.forward_ref"),u=w("react.suspense"),m=w("react.suspense_list"),d=w("react.memo"),f=w("react.lazy"),p=w("react.block"),h=w("react.server.block"),g=w("react.fundamental"),v=w("react.debug_trace_mode"),y=w("react.legacy_hidden")}function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case l:case i:case u:case m:return e;default:switch(e=e&&e.$$typeof){case c:case o:case f:case d:case s:return e;default:return t}}case r:return t}}}},7301:function(e,t,n){n(1846)},3246:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(7294),a=n(5444),i=n(6324),l=n(3630),s=n(8124),c=function(e){var t=e.newsTiles;return r.createElement("div",{className:"publications-class",id:"news",style:{background:"white",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"left"}},r.createElement("div",{style:{margin:"0 auto",maxWidth:1050,paddingBottom:"1.45rem",marginLeft:"1.25rem",marginRight:"1.25rem",width:"100%"}},r.createElement("h4",{className:"header-subtitle",style:{color:"#787575",fontSize:"1.0rem",fontWeight:"600",margin:"auto",paddingBottom:"1.0rem",paddingTop:"2.0rem",marginBottom:"1rem"}},"Publications"),r.createElement(l.Z,{cols:1},t.map((function(e){return r.createElement(s.Z,{key:e.name},r.createElement("div",{className:"Card"},r.createElement(a.Link,{style:{color:"#333f48",textDecoration:"none",fontSize:".73rem"},to:e.link},r.createElement("div",{className:"lower-container-pubs"},r.createElement("h3",null," ",e.name," "),r.createElement("h4",null," ",e.description,"  ")))))})))))},o=function(e){e.children;var t=(0,a.useStaticQuery)("1568326283");return r.createElement(i.Z,null,r.createElement(c,{id:"news",newsTiles:t.site.siteMetadata.newsTiles}))}}}]);
//# sourceMappingURL=component---src-pages-news-js-01e2a32a6a159029bc29.js.map