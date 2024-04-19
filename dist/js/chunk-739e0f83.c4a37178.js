(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-739e0f83"],{"0075":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-row",{attrs:{gutter:24}},e._l(e.stats,(function(e,t){return a("a-col",{key:t,staticClass:"mb-24",attrs:{span:24,lg:12,xl:6}},[a("WidgetCounter",{attrs:{title:e.title,value:e.value,prefix:e.prefix,suffix:e.suffix,icon:e.icon,status:e.status}})],1)})),1),a("a-row",{attrs:{gutter:24}},e._l(e.stats,(function(t,s){return a("a-col",{key:s,staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[a("a-card",{staticClass:"card card-body border-0"},[a("div",{staticClass:"mb-4 text-right"},[a("a-button",{attrs:{type:"primary"},on:{click:e.showModal}},[e._v(" Créer un administrateur ")])],1),a("a-modal",{attrs:{width:e.width,title:"Creer un administrateur",visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-row",{attrs:{type:"flex",gutter:24}},[a("a-col",{attrs:{span:16,md:16}},[a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:e.form,hideRequiredMark:!0},on:{submit:e.AdminSubmit}},[a("a-row",{attrs:{type:"flex",gutter:24}},[a("a-col",{attrs:{span:12,md:12}},[a("a-form-item",{attrs:{label:"Nom du administrateur",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nom",{initialValue:e.nom,rules:[{required:!0,message:"Nom du administrateur est vide!"}]}],expression:"[\n                          'nom',\n                          {\n                            initialValue: nom,\n                            rules: [\n                              {\n                                required: true,\n                                message: 'Nom du administrateur est vide!',\n                              },\n                            ],\n                          },\n                        ]"}],attrs:{type:"text",placeholder:"Nom administrateur"},model:{value:e.nom,callback:function(t){e.nom=t},expression:"nom"}})],1)],1),a("a-col",{attrs:{span:12,md:12}},[a("a-form-item",{attrs:{label:"Prénom du administrateur",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["prenom",{initialValue:e.prenom,rules:[{required:!0,message:"Prénom du administrateur est vide!"}]}],expression:"[\n                          'prenom',\n                          {\n                            initialValue: prenom,\n                            rules: [\n                              {\n                                required: true,\n                                message: 'Prénom du administrateur est vide!',\n                              },\n                            ],\n                          },\n                        ]"}],attrs:{type:"text",placeholder:"Prénom administrateur"},model:{value:e.prenom,callback:function(t){e.prenom=t},expression:"prenom"}})],1)],1),a("a-col",{attrs:{span:12,md:12}},[a("a-form-item",{attrs:{label:"Adresse email",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"Adresse email est vide!"}]}],expression:"[\n                          'email',\n                          {\n                            rules: [\n                              {\n                                required: true,\n                                message: 'Adresse email est vide!',\n                              },\n                            ],\n                          },\n                        ]"}],attrs:{type:"email",placeholder:"Adresse email administrateur"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),a("a-col",{attrs:{span:12,md:12}},[a("a-form-item",{attrs:{label:"Numero de téléphone",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telephone",{rules:[{required:!0,message:"Numero de téléphone est vide!"}]}],expression:"[\n                          'telephone',\n                          {\n                            rules: [\n                              {\n                                required: true,\n                                message: 'Numero de téléphone est vide!',\n                              },\n                            ],\n                          },\n                        ]"}],attrs:{type:"number",placeholder:"numero de téléphone"},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}})],1)],1)],1)],1)],1),a("a-col",{staticClass:"mt-4",attrs:{span:8,md:8}},[a("a-card",{staticClass:"card-billing-info",attrs:{bordered:!1}},[a("div",{staticClass:"col-info"},[a("a-descriptions",{attrs:{title:"Information du administrateur",column:1}},[a("a-descriptions-item",{attrs:{label:"Nom"}},[e._v(" "+e._s(e.nom)+" ")]),a("a-descriptions-item",{attrs:{label:"Prenom"}},[e._v(" "+e._s(e.prenom)+" ")]),a("a-descriptions-item",{attrs:{label:"Adresse email"}},[e._v(" "+e._s(e.email)+" ")]),a("a-descriptions-item",{attrs:{label:"Numero de téléphone"}},[e._v(" "+e._s(e.telephone)+" ")]),a("a-descriptions-item",{attrs:{label:"Mot de passe"}},[e._v(" "+e._s(e.password)+" ")])],1)],1)])],1)],1)],1),a("a-table",{attrs:{columns:e.columns,"data-source":e.data},scopedSlots:e._u([{key:"operation",fn:function(t,s){return[a("a-row",[a("a-col",{attrs:{span:12}},[a("router-link",{staticClass:"mx-2",attrs:{to:{name:"Admin_detail",params:{id:s.key}}}},[a("a-button",{attrs:{type:"primary",size:"small"}},[e._v("Détail")])],1)],1)],1)]}}],null,!0)})],1)],1)})),1)],1)},r=[],n=a("bf22");const i=[{title:"Nombre d'administrateur",value:0,prefix:"",suffix:"",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n\t\t\t\t\t\t</svg>'}];var o={components:{WidgetCounter:n["a"]},beforeCreate(){this.form=this.$form.createForm(this,{name:"normal_login"})},data(){return{callback:"https://n2a.gescapro.net",token_admin:null,stats:i,width:1e3,columns:[],data:[],buttonText:"Détail",visible:!1,confirmLoading:!1,nom:null,prenom:null,username:null,telephone:null,email:null,code_secret:null,password:null}},mounted(){this.password="N2A@"+Math.floor(8999*Math.random()+1e3),this.code_secret=Math.floor(8999*Math.random()+1e3),this.columns=[{title:"Date de creation",dataIndex:"createdAt",key:"createdAt",scopedSlots:{customRender:"name"}},{title:"Nom/Prénom administrateur",dataIndex:"nom",key:"nom"},{title:"Numéro de téléphone",dataIndex:"numero",key:"numero"},{title:"Adresse emmail",dataIndex:"email",key:"email"},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}],this.listeAdmin()},methods:{showAlert(e,t,a){this.$notification[e]({message:t,description:a})},listeAdmin(){let e=localStorage;this.token_admin=e.getItem("token");let t={headers:{Authorization:this.token_admin}};this.$http.get(this.callback+"/admin/all",t).then(e=>{let t=e.body.admins;console.log(t),this.stats[0].value=t.length,this.data=[],console.log(t);for(let a=t.length-1;a>=0;a--)this.data.push({key:t[a].id,createdAt:new Date(t[a].createdAt).toLocaleString(),nom:`${t[a].nom} ${t[a].prenoms}`,numero:"(+228) "+t[a].telephone,email:t[a].email,status:!0})},e=>{this.showAlert("error","Error",e.body.message)})},block(e){let t=localStorage;this.token_admin=t.getItem("token");let a={headers:{Authorization:this.token_admin}};this.$http.post(`${this.callback}/gest/admin/change/state/${e}`,{},a).then(e=>{console.log(e),this.showAlert("success","Success",e.body.message),this.listeAdmin()},e=>{this.showAlert("error","Erreur",e.body.message)})},showModal(){this.visible=!0},handleOk(e){e.preventDefault(),this.form.validateFields((e,t)=>{e?console.log("error"):(console.log(t),this.confirmLoading=!0,this.AdminSubmit(t),setTimeout(()=>{this.listeAdmin(),this.visible=!1,this.confirmLoading=!1,this.form.resetFields()},2e3))})},handleCancel(e){console.log("Clicked cancel button"),this.visible=!1},AdminSubmit(){let e=localStorage;this.token_admin=e.getItem("token");let t={headers:{Authorization:this.token_admin}},a={nom:this.nom,prenoms:this.prenom,email:this.email,telephone:this.telephone,password:this.password,menu:"{}"};this.$http.post(this.callback+"/admin/create",a,t).then(e=>{console.log(e),200==e.body.status?this.showAlert("success","Success","Admin creer avec success"):this.showAlert("error","Error",e.body.message)},e=>{this.showAlert("error","Error",e.body.message)})}}},l=o,d=a("2877"),m=Object(d["a"])(l,s,r,!1,null,null,null);t["default"]=m.exports},bf22:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+e.status,attrs:{title:e.title,value:e.value,prefix:e.prefix,suffix:e.suffix,precision:0,groupSeparator:"."}}),a("div",{staticClass:"icon",domProps:{innerHTML:e._s(e.icon)}})],1)},r=[],n={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},i=n,o=a("2877"),l=Object(o["a"])(i,s,r,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-739e0f83.c4a37178.js.map