(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a89957fc"],{"2e92":function(t,e,n){"use strict";function r(t){return"[object Array]"===Object.prototype.toString.call(t)}function a(t,e){if(!t)throw new Error(e)}function o(t){return Object.keys(t)}function c(t){return Object.keys(t).map((function(e){return[e,t[e]]}))}function i(t,e,n){var r="."+e,a=new RegExp("(\\".concat(e,")?$"));return n(t).replace(a,r)}function l(t){return"555xmlHello .  world!".trim().replace(/^([0-9,;]|(xml))+/,""),t.replace(/[^_a-zA-Z 0-9:\-\.]/g,"").replace(/^([ 0-9-:\-\.]|(xml))+/i,"").replace(/ +/g,"-")}function s(t){return Array(t+1).join(" ")}function u(t){return t.replace(/([<>&])/g,(function(t,e){switch(e){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";default:return""}}))}function d(t,e,n){switch(e){case"txt":var r="text/plain;charset=utf-8";return n?URL.createObjectURL(new Blob([t],{type:r})):"data:,".concat(r)+encodeURIComponent(t);case"css":r="text/css;charset=utf-8";return n?URL.createObjectURL(new Blob([t],{type:r})):"data:,".concat(r)+encodeURIComponent(t);case"html":r="text/html;charset=utf-8";return n?URL.createObjectURL(new Blob([t],{type:r})):"data:,".concat(r)+encodeURIComponent(t);case"json":r="text/json;charset=utf-8";return n?URL.createObjectURL(new Blob([t],{type:r})):"data:,".concat(r)+encodeURIComponent(t);case"csv":r="text/csv;charset=utf-8";return n?URL.createObjectURL(new Blob([t],{type:r})):"data:,".concat(r)+encodeURIComponent(t);case"xls":r="text/application/vnd.ms-excel;charset=utf-8";return n?URL.createObjectURL(new Blob([t],{type:r})):"data:,".concat(r)+encodeURIComponent(t);case"xml":r="text/application/xml;charset=utf-8";return n?URL.createObjectURL(new Blob([t],{type:r})):"data:,".concat(r)+encodeURIComponent(t);default:return""}}function f(t,e,n,r){void 0===n&&(n="download"),void 0===r&&(r=!0);var a=d(t,e,r),o=document.createElement("a");o.href=a,o.download=n,o.setAttribute("style","visibility:hidden"),document.body.appendChild(o),o.dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!1,view:window})),document.body.removeChild(o)}var p=function(){return p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},p.apply(this,arguments)},m=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,a,o=n.call(t),c=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)c.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(a)throw a.error}}return c};function h(t){if(!t||r(t)&&!t.length||!r(t)&&!o(t).length)return function(t){return t};var e=r(t)?t.reduce((function(t,e){var n;return p(p({},t),(n={},n[e]=e,n))}),Object.create(null)):t;return function(t){return r(t)?t.map((function(t){return c(t).reduce((function(t,n){var r=m(n,2),a=r[0],o=r[1];return a in e&&(t[e[a]]=o),t}),Object.create(null))})).filter((function(t){return o(t).length})):c(t).reduce((function(t,n){var r=m(n,2),a=r[0],o=r[1];return a in e&&(t[e[a]]=o),t}),Object.create(null))}}function v(t){var e="Invalid export data. Please provide a valid JSON";try{return"string"===typeof t?JSON.parse(t):t}catch(n){throw new Error(e)}}function b(t,e,n){void 0===e&&(e=null);var r="Invalid export data. Please provide valid JSON object";try{return JSON.stringify(t,e,n)}catch(a){throw new Error(r)}}function C(t){return t.map(c).reduce((function(e,n,r){return n.reduce((function(e,n){var a=m(n,2),o=a[0],c=a[1],i=e[o]||Array.from({length:t.length}).map((function(t){return""}));return i[r]=("string"!==typeof c?JSON.stringify(c):c)||"",e[o]=i,e}),e)}),Object.create(null))}function x(t,e){return void 0===e&&(e=function(t){return t}),e(c(t).map((function(t){var e=m(t,2),n=e[0],r=e[1];return{fieldName:n,fieldValues:r}})))}function g(t,e){var n=new RegExp("".concat(e,'|"|\n')),r=n.test(t)?'"':"",a=t.replace(/"/g,'""');return"".concat(r).concat(a).concat(r)}var y={beforeTableEncode:function(t){return t},delimiter:","};function w(t,e){void 0===e&&(e={});var n=p(p({},y),e),r=n.beforeTableEncode,a=n.delimiter;if(!t.length)return"";var o=C(t),c=x(o,r),i=c.map((function(t){var e=t.fieldName;return e})).join(a)+"\r\n",l=c.map((function(t){var e=t.fieldValues;return e})).map((function(t){return t.map((function(t){return g(t,a)}))})),s=l.reduce((function(t,e){return t.map((function(t,n){return"".concat(t).concat(a).concat(e[n])}))}));return i+s.join("\r\n")}function _(t,e){a(t.length>0);var n=C(t),r=x(n,e),o=r.map((function(t){var e=t.fieldName;return e})).join("</b></th><th><b>"),c=r.map((function(t){var e=t.fieldValues;return e})).map((function(t){return t.map((function(t){return"<td>".concat(t,"</td>")}))})),i=c.reduce((function(t,e){return t.map((function(t,n){return"".concat(t).concat(e[n])}))}));return"\n    <table>\n      <thead>\n        <tr><th><b>".concat(o,"</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>").concat(i.join("</tr>\n        <tr>"),"</tr>\n      </tbody>\n    </table>\n  ")}var j={beforeTableEncode:function(t){return t}};function k(t,e){var n=p(p({},j),e).beforeTableEncode;if(!t.length)return"";var r='<html>\n  <head>\n    <meta charset="UTF-8" />\n  </head >\n  <body>\n    '.concat(_(t,n),"\n  </body>\n</html >\n");return r}function L(t){var e='<?xml version="1.0" encoding="utf-8"?><!DOCTYPE base>\n'.concat(O(t,"base"),"\n");return e}function O(t,e,n,a){void 0===n&&(n="element"),void 0===a&&(a=0);var o=l(e),i=s(a);if(null===t||void 0===t)return"".concat(i,"<").concat(o," />");var d=r(t)?t.map((function(t){return O(t,n,n,a+2)})).join("\n"):"object"===typeof t?c(t).map((function(t){var e=m(t,2),r=e[0],o=e[1];return O(o,r,n,a+2)})).join("\n"):i+"  "+u(String(t)),f="".concat(i,"<").concat(o,">\n").concat(d,"\n").concat(i,"</").concat(o,">");return f}var S={txt:"txt",css:"css",html:"html",json:"json",csv:"csv",xls:"xls",xml:"xml"};function R(t){var e=t.data,n=t.fileName,o=void 0===n?"download":n,c=t.extension,l=t.fileNameFormatter,s=void 0===l?function(t){return t.replace(/\s+/,"_")}:l,u=t.fields,d=t.exportType,p=void 0===d?"txt":d,m=t.replacer,C=void 0===m?null:m,x=t.space,g=void 0===x?4:x,y=t.processor,_=void 0===y?f:y,j=t.withBOM,O=void 0!==j&&j,S=t.beforeTableEncode,R=void 0===S?function(t){return t}:S,E=t.delimiter,U=void 0===E?",":E,I="Invalid export data. Please provide an array of objects",D="Can't export unknown data type ".concat(p,"."),$="Can't export string data to ".concat(p,".");if("string"===typeof e)switch(p){case"txt":case"css":case"html":return _(e,p,i(o,null!==c&&void 0!==c?c:p,s));default:throw new Error($)}var N=h(u),A=N(v(e)),T=b(A,C,g);switch(p){case"txt":case"css":case"html":return _(T,p,i(o,null!==c&&void 0!==c?c:p,s));case"json":return _(T,p,i(o,null!==c&&void 0!==c?c:"json",s));case"csv":a(r(A),I);var M="\ufeff",F=w(A,{beforeTableEncode:R,delimiter:U}),P=O?M+F:F;return _(P,p,i(o,null!==c&&void 0!==c?c:"csv",s));case"xls":a(r(A),I);P=k(A,{beforeTableEncode:R});return _(P,p,i(o,null!==c&&void 0!==c?c:"xls",s));case"xml":P=L(A);return _(P,p,i(o,null!==c&&void 0!==c?c:"xml",s));default:throw new Error(D)}}R.types=S,R.processors={downloadFile:f};var E=R;e["a"]=E},bf22:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[n("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}}),n("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.icon)}})],1)},a=[],o={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},c=o,i=n("2877"),l=Object(i["a"])(c,r,a,!1,null,null,null);e["a"]=l.exports},d4d8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(t,e){return n("a-col",{key:e,staticClass:"mb-24",attrs:{span:24,lg:12,xl:6}},[n("WidgetCounter",{attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,icon:t.icon,status:t.status}})],1)})),1),n("a-row",{attrs:{gutter:24}},[n("a-col",{staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[n("a-card",{staticClass:"card card-body border-0",scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[n("h6",[t._v("Liste des controles du collecteur")]),n("a-button",{staticClass:"mx-2",attrs:{type:"primary",danger:""},on:{click:function(e){return t.exportDataFromJSON(t.data)}}},[t._v("Export")]),n("a-button",{staticClass:"mx-2",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Retour")])],1)]},proxy:!0}])},[n("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:!0},scopedSlots:t._u([{key:"etat",fn:function(e,r){return[1==r.etat?n("span",{staticClass:"text-success"},[t._v("Success")]):t._e(),0==r.etat?n("span",{staticClass:"text-danger"},[t._v("Problème")]):t._e()]}},{key:"operation",fn:function(e,r){return[0==r.etat?n("a-popconfirm",{attrs:{title:"Etes vous Sûr de resoudre?"},on:{confirm:function(){return t.resolve(r.key)}}},[n("a-button",{attrs:{type:"danger",size:"small"}},[t._v("Resoudre")])],1):t._e()]}}])})],1)],1)],1)],1)},a=[],o=n("bf22"),c=n("2e92");const i=[{title:"Date de creation",dataIndex:"created_at",key:"created_at",scopedSlots:{customRender:"name"}},{title:"Nom/Prénom collecteur",dataIndex:"nom_collecteur",key:"nom_collecteur"},{title:"Code carnet",dataIndex:"nom_carnet",key:"nom_carnet"},{title:"Cotisation controle (Fcfa)",dataIndex:"cotisation_c",key:"cotisation_c"},{title:"Cotisation réelle (Fcfa)",dataIndex:"cotisation",key:"cotisation"},{title:"Dette (Fcfa)",dataIndex:"dette",key:"dette"},{title:"Etat",dataIndex:"etat",key:"etat",scopedSlots:{customRender:"etat"}},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}];var l={created(){},components:{WidgetCounter:o["a"]},beforeCreate(){this.form=this.$form.createForm(this,{name:"normal_login"})},data(){return{callback:"https://n2a.gescapro.net",token_admin:null,stats:[],width:1e3,columns:i,data:[],buttonText:"Détail",visible:!1,confirmLoading:!1,collecteur:null,nom:null,prenom:null,numero:null,ville:null,quartier:null,password:null,dette:null,type:0}},mounted(){this.stats=[{title:"Nombre de controle",value:0,prefix:"",suffix:"",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                              <path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n                              <path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n                          </svg>'},{title:"Dette accumulée",value:0,prefix:"",suffix:"Fcfa",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                              <path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n                              <path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n                          </svg>'}],this.listDemande()},methods:{showAlert(t,e,n){this.$notification[t]({message:e,description:n})},exportDataFromJSON(t){if(t)try{const e="exported-data",n=c["a"].types["xls"];Object(c["a"])({data:t,fileName:e,exportType:n})}catch(e){throw new Error("Parsing failed!")}else message.warning("Data not found")},listDemande(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.get(`${this.callback}/make-controle/all/controlleur/${this.$route.params.id}`,e).then(t=>{let e=t.body.controles;this.stats[0].value=e.length,this.data=[],this.dette=0,console.log(e);for(let n=0;n<e.length;n++)0==e[n].validateDette&&(this.dette+=e[n].montantDette),this.stats[1].value=this.dette,this.data.push({key:e[n]._id,created_at:new Date(e[n].createdAt).toLocaleString(),nom_collecteur:`${e[n].carnet.collecteur.nom} ${e[n].carnet.collecteur.prenoms}`,nom_carnet:e[n].carnet.uuid,dette:e[n].montantDette,cotisation_c:e[n].nbrCotisation*e[n].carnet.mise,cotisation:e[n].nbrCotisationCollecteur*e[n].carnet.mise,etat:e[n].validateDette})},t=>{this.showAlert("error","Erreur",t.body.message)})},showModal(){this.visible=!0},handleOk(t){t.preventDefault(),this.form.validateFields((t,e)=>{t?console.log("error"):(console.log(e),this.confirmLoading=!0,this.chefSubmit(e),setTimeout(()=>{this.listechef(),this.visible=!1,this.confirmLoading=!1},2e3))})},handleCancel(t){console.log("Clicked cancel button"),this.visible=!1},resolve(t){let e=localStorage;this.token_admin=e.getItem("token");let n={headers:{Authorization:this.token_admin}};this.$http.put(`${this.callback}/make-controle/dette/controlleur/${this.$route.params.id}/controle/${t}`,{},n).then(t=>{let e=t.body;console.log(e),200==e.status?(this.showAlert("success","Success","Problem resolus avec success"),this.listDemande()):this.showAlert("danger","Erreur","Probleme non resolue suite une erreur")})}}},s=l,u=n("2877"),d=Object(u["a"])(s,r,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-a89957fc.75adc709.js.map