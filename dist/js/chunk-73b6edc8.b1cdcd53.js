(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73b6edc8"],{bf22:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}}),a("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.icon)}})],1)},s=[],i={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},o=i,l=a("2877"),n=Object(l["a"])(o,r,s,!1,null,null,null);e["a"]=n.exports},ee47:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(t,e){return a("a-col",{key:e,staticClass:"mb-24",attrs:{span:24,lg:12,xl:6}},[a("WidgetCounter",{attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,icon:t.icon,status:t.status}})],1)})),1),a("a-row",{attrs:{gutter:24}},[a("a-col",{staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[a("a-card",{staticClass:"card card-body border-0"},[a("div",{staticClass:"mb-4 text-right"},[a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"Recherche ici"},on:{change:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("router-link",{attrs:{to:{name:"Produit_classement"}}},[a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"}},[t._v(" Classement produit ")])],1),a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:t.showModal}},[t._v(" Créer un produit ")])],1),a("a-modal",{attrs:{width:t.width,title:"Creer un produit",visible:t.visible,"confirm-loading":t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form,hideRequiredMark:!0},on:{submit:t.produitSubmit}},[a("a-row",{attrs:{type:"flex",gutter:24}},[a("a-col",{attrs:{span:12,md:12}},[a("a-form-item",{attrs:{label:"Nom du produit",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["libelle",{rules:[{required:!0,message:"Nom du produit est vide!"}]}],expression:"[\n                      'libelle',\n                      {\n                        rules: [\n                          {\n                            required: true,\n                            message: 'Nom du produit est vide!',\n                          },\n                        ],\n                      },\n                    ]"}],attrs:{type:"text",placeholder:"Nom produit"}})],1)],1),a("a-col",{attrs:{span:12,md:12}},[a("a-form-item",{attrs:{label:"Montant du produit",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["montant",{rules:[{required:!0,message:"Montant du produit est vide!"}]}],expression:"[\n                      'montant',\n                      {\n                        rules: [\n                          {\n                            required: true,\n                            message: 'Montant du produit est vide!',\n                          },\n                        ],\n                      },\n                    ]"}],attrs:{type:"text",placeholder:"Montant produit"}})],1)],1),a("a-col",{attrs:{span:12,md:12}},[a("a-form-item",{attrs:{label:"Code secret",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code_secret",{rules:[{required:!0,message:"Code secret est vide!"}]}],expression:"[\n                      'code_secret',\n                      {\n                        rules: [\n                          {\n                            required: true,\n                            message: 'Code secret est vide!',\n                          },\n                        ],\n                      },\n                    ]"}],attrs:{type:"number",placeholder:"Code secret"}})],1)],1)],1)],1)],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:!0},scopedSlots:t._u([{key:"operation",fn:function(e,r){return[a("div",{staticClass:"d-flex"},[a("router-link",{attrs:{to:{name:"Produit_detail",params:{id:r.key}}}},[a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",size:"small"}},[t._v("Detail")])],1),0==r.etat?a("a-popconfirm",{attrs:{title:"Etes vous Sûr de bloquer?"},on:{confirm:function(){return t.deleteProduit(r.key,r.etat)}}},[a("a-button",{attrs:{type:"danger",size:"small"}},[t._v("Bloquer")])],1):t._e(),1==r.etat?a("a-popconfirm",{attrs:{title:"Etes vous Sûr de debloquer?"},on:{confirm:function(){return t.deleteProduit(r.key,r.etat)}}},[a("a-button",{attrs:{type:"success",size:"small"}},[t._v("Debloquer")])],1):t._e()],1)]}}])})],1)],1)],1)],1)},s=[],i=a("bf22"),o={components:{WidgetCounter:i["a"]},beforeCreate(){this.form=this.$form.createForm(this,{name:"normal_login"})},data(){return{callback:"https://n2a.gescapro.net",token_admin:null,stats:[],width:1e3,columns:[],data:[],data_s:[],row:5,page:1,total_page:0,value:null,buttonText:"Détail",visible:!1,confirmLoading:!1}},mounted(){this.stats=[{title:"Nombre de produit",value:0,prefix:"",suffix:"",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n\t\t\t\t\t\t</svg>'}],this.columns=[{title:"Date de creation",dataIndex:"createdAt",key:"createdAt",scopedSlots:{customRender:"name"}},{title:"Libelle produit",dataIndex:"libelle",key:"libelle"},{title:"Montant (FCFA)",dataIndex:"montant",key:"montant"},{title:"Etat",dataIndex:"etat",key:"etat"},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}],this.listeProduit()},methods:{showAlert(t,e,a){this.$notification[t]({message:e,description:a})},listeProduit(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.get(this.callback+"/type-carnet/allByAdmin",e).then(t=>{let e=t.body.typeCarnets.typeCarnets;this.stats[0].value=e.length,this.data=[],console.log(e);for(let a=e.length-1;a>=0;a--)this.data.push({key:e[a].id,createdAt:new Date(e[a].createdAt).toLocaleString(),libelle:e[a].libelle,montant:e[a].montant,etat:e[a].isBlocked}),this.data_s=this.data},t=>{this.showAlert("error","Error",t.body.message)})},onSearch(){console.log(this.value),this.value=this.value.toLowerCase();let t=this.data_s;this.data=[];for(let e=0;e<t.length;e++){let a=t[e].libelle.toLowerCase().indexOf(this.value);a>-1&&this.data.push(t[e])}},showModal(){this.visible=!0},handleOk(t){t.preventDefault(),this.form.validateFields((t,e)=>{t?console.log("error"):e.code_secret==localStorage.getItem("code_secret")?(console.log(e),this.confirmLoading=!0,this.produitSubmit(e),setTimeout(()=>{this.confirmLoading=!1,this.visible=!1,this.form.resetFields()},1500)):this.showAlert("error","Erreur","Code secret incorrect")})},handleCancel(t){console.log("Clicked cancel button"),this.confirmLoading=!1,this.visible=!1},produitSubmit(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}},r={libelle:t.libelle,montant:parseInt(t.montant)};this.$http.post(this.callback+"/type-carnet/create",r,a).then(t=>{console.log(t),this.showAlert("success","Success","Produit creer avec success"),this.form.resetFields(),this.listeProduit()},t=>{this.showAlert("error","Error",t.body.message)})},deleteProduit(t,e){let a=localStorage;this.token_admin=a.getItem("token");let r={headers:{Authorization:this.token_admin}};this.$http.put(this.callback+"/type-carnet/toggleBlockTypeCarnet",{typeCarnet:t,isBlocked:1!=e},r).then(t=>{t&&(this.showAlert("success","Success","Operation effectuer avec success"),this.listeProduit())},t=>{t&&this.showAlert("error","Erreur","Erreur lors de l'operation")})}}},l=o,n=a("2877"),d=Object(n["a"])(l,r,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-73b6edc8.b1cdcd53.js.map