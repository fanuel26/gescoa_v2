(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bbf6117"],{3906:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(t,e){return a("a-col",{key:e,staticClass:"mb-24",attrs:{span:24,lg:12,xl:6}},[a("WidgetCounter",{attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,icon:t.icon,status:t.status}})],1)})),1),a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(e,r){return a("a-col",{key:r,staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[a("a-card",{staticClass:"card card-body border-0"},[a("div",{staticClass:"mb-4 d-flex justify-content-between align-items-center"},[a("h6",[t._v("Carnets les plus vendus")]),a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"Recherche ici"},on:{change:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("div",[a("a-button",{staticClass:"mx-2",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Retour")])],1)],1),a("a-modal",{attrs:{width:t.width,title:"Creer un carnet",visible:t.visible,"confirm-loading":t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-form",{staticClass:"carnet-form",attrs:{form:t.form,hideRequiredMark:!0},on:{submit:t.CarnetSubmit}},[a("a-row",{attrs:{type:"flex",gutter:24}},[a("a-col",{attrs:{span:24,md:24}},[a("a-form-item",{attrs:{label:"Produits"}},[a("a-select",{attrs:{mode:"multiple","search-placeholder":"Selectionnez le produit",options:t.produitData},model:{value:t.produit,callback:function(e){t.produit=e},expression:"produit"}})],1)],1),a("a-col",{attrs:{span:8,md:8}},[a("a-form-item",{attrs:{label:"Nom du carnet",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["libelle",{initialValue:null,rules:[{required:!0,message:"Nom du carnet est vide!"}]}],expression:"[\n                                        'libelle',\n                                        {\n                                            initialValue: null,\n                                            rules: [\n                                                {\n                                                    required: true,\n                                                    message: 'Nom du carnet est vide!',\n                                                },\n                                            ],\n                                        },\n                                    ]"}],attrs:{type:"text",placeholder:"Nom carnet"}})],1)],1),a("a-col",{attrs:{span:8,md:8}},[a("a-form-item",{attrs:{label:"Mise du jour (Fcfa)",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["prix",{rules:[{required:!0,message:"Prix définitive est vide!"}]}],expression:"[\n                                        'prix',\n                                        {\n                                            rules: [\n                                                {\n                                                    required: true,\n                                                    message: 'Prix définitive est vide!',\n                                                },\n                                            ],\n                                        },\n                                    ]"}],attrs:{type:"number",placeholder:"Prix définitive"},on:{change:t.calcule_total},model:{value:t.prix_w,callback:function(e){t.prix_w=e},expression:"prix_w"}})],1)],1),a("a-col",{attrs:{span:8,md:8}},[a("a-form-item",{attrs:{label:"Code secret",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code_secret",{initialValue:null,rules:[{required:!0,message:"Code secret est vide!"}]}],expression:"[\n                                        'code_secret',\n                                        {\n                                            initialValue: null,\n                                            rules: [\n                                                {\n                                                    required: true,\n                                                    message: 'Code secret est vide!',\n                                                },\n                                            ],\n                                        },\n                                    ]"}],attrs:{type:"number",placeholder:"Code secret"}})],1)],1)],1)],1)],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.data},scopedSlots:t._u([{key:"operation",fn:function(e,r){return[a("div",{staticClass:"d-flex"},[a("router-link",{attrs:{to:{name:"Carnets_detail",params:{id:r.key}}}},[a("a-button",{attrs:{type:"primary",size:"small"}},[t._v("Détail")])],1),1==r.status?a("a-popconfirm",{attrs:{title:"Sûre de descactiver?","cancel-text":"annuler","ok-text":"Valider"},on:{confirm:function(){return t.block(r.key)}}},[a("a-button",{staticClass:"mx-2",attrs:{type:"danger",size:"small"}},[t._v("Descactiver")])],1):t._e(),0==r.status?a("a-popconfirm",{attrs:{title:"Sûre d'activé?","cancel-text":"annuler","ok-text":"Valider"},on:{confirm:function(){return t.block(r.key)}}},[a("a-button",{staticClass:"mx-2",attrs:{type:"success",size:"small"}},[t._v("Activé")])],1):t._e()],1)]}}],null,!0)})],1)],1)})),1)],1)},s=[],i=a("bf22"),l=a("70a7"),n={beforeCreate(){this.form=this.$form.createForm(this,{name:"carnet_create"})},components:{WidgetCounter:i["a"],WidgetCounterC:l["a"]},data(){return{callback:"https://n2a.gescapro.net",token_admin:null,stats:[],stats_carnet:[],width:1e3,columns:[],data:[],data_s:[],value:null,produitData:[],buttonText:"Détail",visible:!1,confirmLoading:!1,page:1,row:20,nom:null,prix:0,pr:0,nbr_jour:12,produit:[],code_secret:null,prix_vente:0,prix_achat:0,total:0,prix_w:0}},mounted(){this.columns=[{title:"Date de creation",dataIndex:"createdAt",key:"createdAt",scopedSlots:{customRender:"name"}},{title:"Nom du carnet",dataIndex:"libelle",key:"libelle"},{title:"Nombre mois",dataIndex:"nbr_mois",key:"nbr_mois"},{title:"Prix par jour (Fcfa)",dataIndex:"prix_jour",key:"prix_jour"},{title:"Somme total (Fcfa)",dataIndex:"somme",key:"somme"},{title:"Nombre vendus",dataIndex:"nbr_sell",key:"nbr_sell"},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}],this.stats=[{title:"Nombre de carnets créés",value:0,prefix:"",suffix:"",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n\t\t\t\t\t\t</svg>'}],this.listeProduit(),this.listeCarnet()},methods:{listeProduit(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.post(this.callback+"/produit/list?all=true",{},e).then(t=>{let e=t.body.data;this.produitData=[];for(let a=0;a<e.length;a++)this.produitData.push({value:e[a].libelle,title:e[a].libelle,id:e[a].id,key:e[a].id,prix_achat:e[a].prix_achat,prix_vente:e[a].prix_vente})},t=>{flash(t.body.message,"Erreur","fa fa-times","danger")})},listeCarnet(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};console.log(this.$route.params.id),this.$http.post(`${this.callback}/v2/classement/carnet/by-collector/${this.$route.params.id}?all=true`,{},e).then(t=>{let e=t.body.data;this.data=[],console.log(e);for(let a=0;a<e.length;a++)0!=e[a].vente&&(this.data.push({key:e[a].id,createdAt:new Date(e[a].createdAt).toLocaleString(),libelle:e[a].libelle,nbr_mois:e[a].period/31,prix_jour:e[a].tarif,somme:e[a].tarif*e[a].period,nbr_sell:e[a].vente,status:e[a].status}),this.stats[0].value=this.data.length,this.data_s=this.data)},t=>{this.showAlert("error","Error",t.body.message)})},generate(t){let e=this.produitData,a=this.produit;this.prix_vente=0,this.prix_achat=0;for(let r=0;r<e.length;r++)for(let t=0;t<a.length;t++)if(e[r].key==a[t]){this.prix_vente+=e[r].prix_vente,this.prix_achat+=e[r].prix_achat,this.stats_carnet[0].value=this.prix_achat,this.stats_carnet[1].value=this.prix_vente,this.pr=Math.round(this.prix_vente/372),this.stats_carnet[3].value=this.pr;for(let t=0;t<1e4;t++)if(this.pr<=25*t){this.prix=25*t,this.total=372*this.prix,this.stats_carnet[2].value=this.total,this.prix_w=this.prix;break}}},calcule_total(t){let e=t.target.value;this.prix_w=e,e>=this.pr?this.total=372*e:this.showAlert("error","Erreur","Ce prix ne vous est pas favorable, vous aurez des dettes!")},showModal(){this.visible=!0},handleOk(t){t.preventDefault(),this.form.validateFields((t,e)=>{t?(this.showAlert("error","Erreur","Veillez remplir tous les champs"),this.confirmLoading=!1):e.code_secret==localStorage.getItem("code_secret")?(this.confirmLoading=!0,this.CarnetSubmit(e),setTimeout(()=>{this.listeCarnet(),this.visible=!1,this.confirmLoading=!1},2e3)):(this.showAlert("error","Erreur","Code secret incorrect!"),this.confirmLoading=!1)})},handleCancel(t){this.visible=!1},showAlert(t,e,a){this.$notification[t]({message:e,description:a,placement:"bottomRight"})},CarnetSubmit(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}},r={libelle:t.libelle,frais:t.prix,nbr_jour:372,produits:this.produit};this.$http.post(this.callback+"/carnet/create",r,a).then(t=>{t&&(this.showAlert("success","Success","Creation de carnet effectuer avec success"),this.form.resetFields())},t=>{this.showAlert("error","Erreur",t.body.message)})},block(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}};this.$http.post(`${this.callback}/carnet/update/change-status/${t}`,{},a).then(t=>{t&&(this.showAlert("success","Success","Status du carnet changer avec success"),this.listeCarnet())},t=>{this.showAlert("error","Erreur",t.body.message)})},onSearch(){this.value=this.value.toLowerCase();let t=this.data_s;this.data=[];for(let e=0;e<t.length;e++){let a=t[e].libelle.toLowerCase();a.indexOf(this.value)>-1&&this.data.push(t[e])}}}},o=n,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},"70a7":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}})],1)},s=[],i={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},l=i,n=a("2877"),o=Object(n["a"])(l,r,s,!1,null,null,null);e["a"]=o.exports},bf22:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}}),a("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.icon)}})],1)},s=[],i={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},l=i,n=a("2877"),o=Object(n["a"])(l,r,s,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-5bbf6117.957172d8.js.map