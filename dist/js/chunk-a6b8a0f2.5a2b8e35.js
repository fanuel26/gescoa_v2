(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6b8a0f2"],{"2e92":function(e,t,n){"use strict";function r(e){return"[object Array]"===Object.prototype.toString.call(e)}function a(e,t){if(!e)throw new Error(t)}function o(e){return Object.keys(e)}function l(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}function i(e,t,n){var r="."+t,a=new RegExp("(\\".concat(t,")?$"));return n(e).replace(a,r)}function s(e){return"555xmlHello .  world!".trim().replace(/^([0-9,;]|(xml))+/,""),e.replace(/[^_a-zA-Z 0-9:\-\.]/g,"").replace(/^([ 0-9-:\-\.]|(xml))+/i,"").replace(/ +/g,"-")}function c(e){return Array(e+1).join(" ")}function u(e){return e.replace(/([<>&])/g,(function(e,t){switch(t){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";default:return""}}))}function d(e,t,n){switch(t){case"txt":var r="text/plain;charset=utf-8";return n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"css":r="text/css;charset=utf-8";return n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"html":r="text/html;charset=utf-8";return n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"json":r="text/json;charset=utf-8";return n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"csv":r="text/csv;charset=utf-8";return n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"xls":r="text/application/vnd.ms-excel;charset=utf-8";return n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"xml":r="text/application/xml;charset=utf-8";return n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);default:return""}}function m(e,t,n,r){void 0===n&&(n="download"),void 0===r&&(r=!0);var a=d(e,t,r),o=document.createElement("a");o.href=a,o.download=n,o.setAttribute("style","visibility:hidden"),document.body.appendChild(o),o.dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!1,view:window})),document.body.removeChild(o)}var p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)},f=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)l.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(a)throw a.error}}return l};function h(e){if(!e||r(e)&&!e.length||!r(e)&&!o(e).length)return function(e){return e};var t=r(e)?e.reduce((function(e,t){var n;return p(p({},e),(n={},n[t]=t,n))}),Object.create(null)):e;return function(e){return r(e)?e.map((function(e){return l(e).reduce((function(e,n){var r=f(n,2),a=r[0],o=r[1];return a in t&&(e[t[a]]=o),e}),Object.create(null))})).filter((function(e){return o(e).length})):l(e).reduce((function(e,n){var r=f(n,2),a=r[0],o=r[1];return a in t&&(e[t[a]]=o),e}),Object.create(null))}}function v(e){var t="Invalid export data. Please provide a valid JSON";try{return"string"===typeof e?JSON.parse(e):e}catch(n){throw new Error(t)}}function b(e,t,n){void 0===t&&(t=null);var r="Invalid export data. Please provide valid JSON object";try{return JSON.stringify(e,t,n)}catch(a){throw new Error(r)}}function g(e){return e.map(l).reduce((function(t,n,r){return n.reduce((function(t,n){var a=f(n,2),o=a[0],l=a[1],i=t[o]||Array.from({length:e.length}).map((function(e){return""}));return i[r]=("string"!==typeof l?JSON.stringify(l):l)||"",t[o]=i,t}),t)}),Object.create(null))}function y(e,t){return void 0===t&&(t=function(e){return e}),t(l(e).map((function(e){var t=f(e,2),n=t[0],r=t[1];return{fieldName:n,fieldValues:r}})))}function w(e){var t=/,|"|\n/.test(e)?'"':"",n=e.replace(/"/g,'""');return"".concat(t).concat(n).concat(t)}var x={beforeTableEncode:function(e){return e},delimiter:","};function C(e,t){void 0===t&&(t={});var n=p(p({},x),t),r=n.beforeTableEncode,a=n.delimiter;if(!e.length)return"";var o=g(e),l=y(o,r),i=l.map((function(e){var t=e.fieldName;return t})).join(a)+"\r\n",s=l.map((function(e){var t=e.fieldValues;return t})).map((function(e){return e.map(w)})),c=s.reduce((function(e,t){return e.map((function(e,n){return"".concat(e).concat(a).concat(t[n])}))}));return i+c.join("\r\n")}function k(e,t){a(e.length>0);var n=g(e),r=y(n,t),o=r.map((function(e){var t=e.fieldName;return t})).join("</b></th><th><b>"),l=r.map((function(e){var t=e.fieldValues;return t})).map((function(e){return e.map((function(e){return"<td>".concat(e,"</td>")}))})),i=l.reduce((function(e,t){return e.map((function(e,n){return"".concat(e).concat(t[n])}))}));return"\n    <table>\n      <thead>\n        <tr><th><b>".concat(o,"</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>").concat(i.join("</tr>\n        <tr>"),"</tr>\n      </tbody>\n    </table>\n  ")}var _={beforeTableEncode:function(e){return e}};function S(e,t){var n=p(p({},_),t).beforeTableEncode;if(!e.length)return"";var r='<html>\n  <head>\n    <meta charset="UTF-8" />\n  </head >\n  <body>\n    '.concat(k(e,n),"\n  </body>\n</html >\n");return r}function j(e){var t='<?xml version="1.0" encoding="utf-8"?><!DOCTYPE base>\n'.concat(O(e,"base"),"\n");return t}function O(e,t,n,a){void 0===n&&(n="element"),void 0===a&&(a=0);var o=s(t),i=c(a);if(null===e||void 0===e)return"".concat(i,"<").concat(o," />");var d=r(e)?e.map((function(e){return O(e,n,n,a+2)})).join("\n"):"object"===typeof e?l(e).map((function(e){var t=f(e,2),r=t[0],o=t[1];return O(o,r,n,a+2)})).join("\n"):i+"  "+u(String(e)),m="".concat(i,"<").concat(o,">\n").concat(d,"\n").concat(i,"</").concat(o,">");return m}var N={txt:"txt",css:"css",html:"html",json:"json",csv:"csv",xls:"xls",xml:"xml"};function q(e){var t=e.data,n=e.fileName,o=void 0===n?"download":n,l=e.extension,s=e.fileNameFormatter,c=void 0===s?function(e){return e.replace(/\s+/,"_")}:s,u=e.fields,d=e.exportType,p=void 0===d?"txt":d,f=e.replacer,g=void 0===f?null:f,y=e.space,w=void 0===y?4:y,x=e.processor,k=void 0===x?m:x,_=e.withBOM,O=void 0!==_&&_,N=e.beforeTableEncode,q=void 0===N?function(e){return e}:N,L=e.delimiter,E=void 0===L?",":L,R="Invalid export data. Please provide an array of objects",A="Can't export unknown data type ".concat(p,"."),U="Can't export string data to ".concat(p,".");if("string"===typeof t)switch(p){case"txt":case"css":case"html":return k(t,p,i(o,null!==l&&void 0!==l?l:p,c));default:throw new Error(U)}var I=h(u),M=I(v(t)),V=b(M,g,w);switch(p){case"txt":case"css":case"html":return k(V,p,i(o,null!==l&&void 0!==l?l:p,c));case"json":return k(V,p,i(o,null!==l&&void 0!==l?l:"json",c));case"csv":a(r(M),R);var P="\ufeff",D=C(M,{beforeTableEncode:q,delimiter:E}),T=O?P+D:D;return k(T,p,i(o,null!==l&&void 0!==l?l:"csv",c));case"xls":a(r(M),R);T=S(M,{beforeTableEncode:q});return k(T,p,i(o,null!==l&&void 0!==l?l:"xls",c));case"xml":T=j(M);return k(T,p,i(o,null!==l&&void 0!==l?l:"xml",c));default:throw new Error(A)}}q.types=N,q.processors={downloadFile:m};var L=q;t["a"]=L},"6d3d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-row",{attrs:{gutter:24}},e._l(e.stats,(function(e,t){return n("a-col",{key:t,staticClass:"mb-24",attrs:{span:24,lg:12,xl:6}},[n("WidgetCounter",{attrs:{title:e.title,value:e.value,prefix:e.prefix,suffix:e.suffix,icon:e.icon,status:e.status}})],1)})),1),n("a-row",{attrs:{gutter:24}},[n("a-col",{staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[n("a-card",{staticClass:"card card-body border-0",scopedSlots:e._u([{key:"title",fn:function(){return[n("h6",[e._v("Liste des controllers")])]},proxy:!0}])},[n("div",{staticClass:"d-flex justify-content-between align-items-center mb-24"},[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("a-button",{staticClass:"mx-2",on:{click:e.showModal}},[e._v("Creation du controller")])],1),n("a-modal",{attrs:{width:e.width,title:"Creer un controller",visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("a-row",{attrs:{type:"flex",gutter:24}},[n("a-col",{attrs:{span:16,md:16}},[n("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:e.form,hideRequiredMark:!0},on:{submit:e.chefSubmit}},[n("a-row",{attrs:{type:"flex",gutter:24}},[n("a-col",{attrs:{span:12,md:12}},[n("a-form-item",{attrs:{label:"Agence",colon:!1}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["agence",{initialValue:e.agence,rules:[{required:!0,message:"agence est vide!"}]}],expression:"[\n                          'agence',\n                          {\n                            initialValue: agence,\n                            rules: [\n                              {\n                                required: true,\n                                message: 'agence est vide!',\n                              },\n                            ],\n                          },\n                        ]"}]},e._l(e.agences,(function(t){return n("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.libelle)+" ")])})),1)],1)],1),n("a-col",{attrs:{span:12,md:12}},[n("a-form-item",{attrs:{label:"Quartier",colon:!1}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["quartier",{initialValue:e.quartier,rules:[{required:!0,message:"quartier est vide!"}]}],expression:"[\n                          'quartier',\n                          {\n                            initialValue: quartier,\n                            rules: [\n                              {\n                                required: true,\n                                message: 'quartier est vide!',\n                              },\n                            ],\n                          },\n                        ]"}]},e._l(e.quartiers,(function(t){return n("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.libelle)+" ")])})),1)],1)],1),n("a-col",{attrs:{span:12,md:12}},[n("a-form-item",{attrs:{label:"Nom controller",colon:!1}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nom",{initialValue:e.nom,rules:[{required:!0,message:"Nom du chef est vide!"}]}],expression:"[\n                          'nom',\n                          {\n                            initialValue: nom,\n                            rules: [\n                              {\n                                required: true,\n                                message: 'Nom du chef est vide!',\n                              },\n                            ],\n                          },\n                        ]"}],attrs:{type:"text",placeholder:"Nom agent chef"},model:{value:e.nom,callback:function(t){e.nom=t},expression:"nom"}})],1)],1),n("a-col",{attrs:{span:12,md:12}},[n("a-form-item",{attrs:{label:"Prenom controller",colon:!1}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["prenom",{initialValue:e.prenom,rules:[{required:!0,message:"Prenom du chef est vide!"}]}],expression:"[\n                          'prenom',\n                          {\n                            initialValue: prenom,\n                            rules: [\n                              {\n                                required: true,\n                                message: 'Prenom du chef est vide!',\n                              },\n                            ],\n                          },\n                        ]"}],attrs:{type:"text",placeholder:"Prenom agent chef"},model:{value:e.prenom,callback:function(t){e.prenom=t},expression:"prenom"}})],1)],1),n("a-col",{attrs:{span:12,md:12}},[n("a-form-item",{attrs:{label:"Numero de téléphone",colon:!1}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telephone",{initialValue:e.telephone,rules:[{required:!0,message:"Numero de téléphone est vide!"}]}],expression:"[\n                          'telephone',\n                          {\n                            initialValue: telephone,\n                            rules: [\n                              {\n                                required: true,\n                                message: 'Numero de téléphone est vide!',\n                              },\n                            ],\n                          },\n                        ]"}],attrs:{type:"number",placeholder:"Numero de téléphone"},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}})],1)],1),n("a-col",{attrs:{span:12,md:12}},[n("a-form-item",{attrs:{label:"Adresse email",colon:!1}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{initialValue:e.email,rules:[{required:!0,message:"Email est vide!"}]}],expression:"[\n                          'email',\n                          {\n                            initialValue: email,\n                            rules: [\n                              {\n                                required: true,\n                                message: 'Email est vide!',\n                              },\n                            ],\n                          },\n                        ]"}],attrs:{type:"email",placeholder:"Adresse email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1)],1)],1),n("a-col",{staticClass:"mt-4",attrs:{span:8,md:8}},[n("a-card",{staticClass:"card-billing-info",attrs:{bordered:!1}},[n("div",{staticClass:"col-info"},[n("a-descriptions",{attrs:{title:"Information du controller",column:1}},[n("a-descriptions-item",{attrs:{label:"Nom"}},[e._v(" "+e._s(e.nom)+" ")]),n("a-descriptions-item",{attrs:{label:"Prenom"}},[e._v(" "+e._s(e.prenom)+" ")]),n("a-descriptions-item",{attrs:{label:"Numero de téléphone"}},[e._v(" "+e._s(e.telephone)+" ")]),n("a-descriptions-item",{attrs:{label:"Email"}},[e._v(" "+e._s(e.email)+" ")]),n("a-descriptions-item",{attrs:{label:"Mot de passe"}},[e._v(" "+e._s(e.password)+" ")])],1)],1)])],1)],1)],1)],1),n("a-table",{attrs:{columns:e.columns,"data-source":e.data},scopedSlots:e._u([{key:"operation",fn:function(t,r){return[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"start"}},[n("router-link",{attrs:{to:{name:"Controle_view",params:{id:r.key}}}},[n("a-button",{attrs:{type:"primary",size:"small"}},[e._v("Détail")])],1),n("a-popconfirm",{attrs:{title:"Sûre de changer? Mot de passe: "+e.password},on:{confirm:function(){return e.passwordSubmit(r.key)}}},[n("a-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small"}},[e._v("Changer Password")])],1)],1)]}}])})],1)],1)],1)],1)},a=[],o=n("bf22"),l=n("2e92");const i=[{title:"Date de creation",dataIndex:"created_at",key:"created_at",scopedSlots:{customRender:"name"}},{title:"Nom agence",dataIndex:"nom_agence",key:"nom_agence"},{title:"Nom/Prénom controlleur",dataIndex:"nom",key:"nom"},{title:"Numero de téléphone",dataIndex:"telephone",key:"telephone"},{title:"Code secret",dataIndex:"code_secret",key:"code_secret"},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}];var s={created(){},components:{WidgetCounter:o["a"]},beforeCreate(){this.form=this.$form.createForm(this,{name:"normal_login"})},data(){return{callback:"https://dshfood.gescapro.net",token_admin:null,stats:[],width:1e3,columns:i,data:[],buttonText:"Détail",visible:!1,confirmLoading:!1,agences:[],quartiers:[],agence:null,quartier:null,nom:null,prenom:null,email:null,telephone:null,password:null,type:0}},mounted(){this.password="DSHFOOD@"+Math.floor(8999*Math.random()+1e3),this.stats=[{title:"Nombre de controlleur",value:0,prefix:"",suffix:"",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                              <path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n                              <path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n                          </svg>'}],this.listAgence(),this.listDemande()},methods:{showAlert(e,t,n){this.$notification[e]({message:t,description:n})},setController(e){console.log(e);let t=JSON.stringify(e);localStorage.setItem("dataController",t)},exportDataFromJSON(e){if(e)try{const t="exported-data",n=l["a"].types["xls"];Object(l["a"])({data:e,fileName:t,exportType:n})}catch(t){throw new Error("Parsing failed!")}},listAgence(){let e=localStorage;this.token_admin=e.getItem("token");let t={headers:{Authorization:this.token_admin}};this.$http.get(this.callback+"/agence/all",t).then(e=>{let t=e.body.agences;console.log(t),200==e.body.status&&(this.agences=t)}),this.$http.get(this.callback+"/quartiers/all",{},t).then(e=>{let t=e.body.allQuartier.quartiers;console.log(t),200==e.body.status&&(this.quartiers=t)})},listDemande(){let e=localStorage;this.token_admin=e.getItem("token");let t={headers:{Authorization:this.token_admin}};this.$http.get(this.callback+"/controlleur/allByAdmin",t).then(e=>{let t=e.body.controlleurs;console.log(t),this.stats[0].value=t.length,this.data=[],console.log(t);for(let n=0;n<t.length;n++)this.data.push({key:t[n].id,created_at:new Date(t[n].createdAt).toLocaleString(),nom_agence:t[n].agence.libelle,nom:`${t[n].nom} ${t[n].prenoms}`,email:t[n].email,telephone:t[n].telephone,code_secret:t[n].codeSecret,password:t[n].password})},e=>{this.showAlert("error","Erreur",e.body.message)})},showModal(){this.visible=!0},passwordSubmit(e){let t=localStorage;this.token_admin=t.getItem("token");let n={headers:{Authorization:this.token_admin}},r={newPassword:this.password};this.$http.put(`${this.callback}/controlleur/generateMdpControlleur/${e}`,r,n).then(e=>{let t=e.body;console.log(t),200==t.status?(this.showAlert("success","Success","Mot de passe generer avec succes! Mot de passe: "+this.password),this.password="DSHFOOD@"+Math.floor(8999*Math.random()+1e3)):this.showAlert("error","Erreur",t.message)},e=>{this.showAlert("error","Erreur",e.body.message)})},handleOk(e){e.preventDefault(),this.form.validateFields((e,t)=>{e?console.log("error"):(console.log(t),this.confirmLoading=!0,this.chefSubmit(t),setTimeout(()=>{this.visible=!1,this.confirmLoading=!1},2e3))})},handleCancel(e){console.log("Clicked cancel button"),this.visible=!1},chefSubmit(e){console.log(e);let t=localStorage;this.token_admin=t.getItem("token");let n={headers:{Authorization:this.token_admin}},r={nom:e.nom,prenoms:e.prenom,telephone:e.telephone,email:e.email,quartier:e.quartier,agence:e.agence,password:this.password};console.log(r),this.$http.post(this.callback+"/controlleur/create",r,n).then(e=>{console.log(e.body),200==e.body.status&&(this.showAlert("success","Compte Créer","Controlleur creer avec success"),this.listDemande())})}}},c=s,u=n("2877"),d=Object(u["a"])(c,r,a,!1,null,null,null);t["default"]=d.exports},bf22:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[n("a-statistic",{staticClass:"text-success",class:"text-"+e.status,attrs:{title:e.title,value:e.value,prefix:e.prefix,suffix:e.suffix,precision:0,groupSeparator:"."}}),n("div",{staticClass:"icon",domProps:{innerHTML:e._s(e.icon)}})],1)},a=[],o={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},l=o,i=n("2877"),s=Object(i["a"])(l,r,a,!1,null,null,null);t["a"]=s.exports}}]);
//# sourceMappingURL=chunk-a6b8a0f2.5a2b8e35.js.map