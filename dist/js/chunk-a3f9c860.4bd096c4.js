(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3f9c860"],{"70a7":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}})],1)},s=[],r={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},l=r,n=a("2877"),o=Object(n["a"])(l,i,s,!1,null,null,null);e["a"]=o.exports},bf22:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}}),a("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.icon)}})],1)},s=[],r={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},l=r,n=a("2877"),o=Object(n["a"])(l,i,s,!1,null,null,null);e["a"]=o.exports},c4cd:function(t,e,a){"use strict";a("d138")},cc08:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(t,e){return a("a-col",{key:e,staticClass:"mb-24",attrs:{span:24,lg:12,xl:8}},[a("WidgetCounter",{attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,icon:t.icon,status:t.status}})],1)})),1),a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(e,i){return a("a-col",{key:i,staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[a("a-card",{staticClass:"card card-body border-0"},[a("div",{staticStyle:{display:"flex","justify-content":"end","align-items":"center"}},[a("a-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("Retour")])],1),a("a-table",{staticStyle:{"margin-top":"20px"},attrs:{columns:t.columns,"data-source":t.data,pagination:!0},scopedSlots:t._u([{key:"operation",fn:function(e,i){return[a("div",{staticClass:"d-flex"},[a("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.openModal(i)}}},[t._v("Détail")])],1)]}}],null,!0)}),a("a-modal",{attrs:{width:t.width,title:"Parametre carnet",visible:t.visible,"confirm-loading":t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("div",t._l(t.typeCarnet,(function(e){return a("a-button",{key:e,staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return t.getParametre(e.id)}}},[t._v(" "+t._s(e.libelle)+" ")])})),1),a("div",{staticStyle:{"margin-top":"20px"}},[a("a-card",{staticClass:"p-4"})],1)])],1)],1)})),1)],1)},s=[],r=a("bf22"),l=a("70a7"),n={beforeCreate(){this.form=this.$form.createForm(this,{name:"carnet_create"})},components:{WidgetCounter:r["a"],WidgetCounterC:l["a"]},data(){return{callback:"https://n2a.gescapro.net",token_admin:null,stats:[],stats_carnet:[],width:700,columns:[],data:[],data_s:[],value:null,produitData:[],buttonText:"Détail",visible:!1,confirmLoading:!1,page:1,row:20,nom:null,prix:0,pr:0,nbr_jour:12,gain:0,produit:[],code_secret:null,prix_vente:0,prix_achat:0,total:0,prix_w:0,typeCarnet:[],idCarnet:0}},mounted(){this.columns=[{title:"Date de creation",dataIndex:"createdAt",key:"createdAt",scopedSlots:{customRender:"name"}},{title:"Nom du carnet",dataIndex:"libelle",key:"libelle"},{title:"Nombre jours",dataIndex:"nbr_mois",key:"nbr_mois"},{title:"Prix par jour (Fcfa)",dataIndex:"prix_jour",key:"prix_jour"},{title:"Nombre cotisation",dataIndex:"nbr_sell",key:"nbr_sell"},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}],this.stats=[{title:"Nombre de carnets créés",value:0,prefix:"",suffix:"",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                              <path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n                              <path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n                          </svg>'}],this.listeProduit(),this.listeCarnet()},methods:{openModal(t){console.log(t.data),this.typeCarnet=t.data.typeCarnets,this.idCarnet=t.data.id,console.log(this.idCarnet),this.showModal()},getParametre(t){console.log(t);let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}};this.$http.get(`${this.callback}/set-parametre/collecteur/parametreByCarnet?carnet=${this.idCarnet}&typeCarnet=${t}`,a).then(t=>{let e=t.body.data;console.log(e)},t=>{this.showAlert("error","Erreur","Aucun parametre trouver!")})},listeProduit(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.get(this.callback+"/type-carnet/all",e).then(t=>{let e=t.body.data;this.produitData=[];for(let a=0;a<e.length;a++)this.produitData.push({value:e[a].libelle,title:e[a].libelle,id:e[a].id,key:e[a].id,prix_achat:e[a].prix_achat,prix_vente:e[a].prix_vente})},t=>{flash(t.body.message,"Erreur","fa fa-times","danger")})},listeCarnet(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.get(`${this.callback}/collecteur/carnet/all/byClient/${this.$route.params.id}`,e).then(t=>{let e=t.body.carnets.carnets;console.log(e),this.stats[0].value=e.length,this.data=[],console.log("data"),console.log(e),console.log("data");for(let a=0;a<e.length;a++)this.data.push({key:e[a].id,createdAt:new Date(e[a].createdAt).toLocaleString(),libelle:e[a].uuid,nbr_mois:e[a].typeMise,prix_jour:e[a].mise,somme:e[a].montant,nbr_sell:e[a].nbrCotisation,status:e[a].status,data:e[a]}),this.data_s=this.data},t=>{this.showAlert("error","Error",t.body.message)})},generate(t){let e=this.produitData,a=this.produit;this.prix_vente=0,this.prix_achat=0;for(let i=0;i<e.length;i++)for(let t=0;t<a.length;t++)if(e[i].key==a[t]){this.prix_vente+=e[i].prix_vente,this.prix_achat+=e[i].prix_achat,this.stats_carnet[0].value=this.prix_achat,this.stats_carnet[1].value=this.prix_vente,this.pr=Math.round(this.prix_vente/372),this.stats_carnet[3].value=this.pr;for(let t=0;t<1e4;t++)if(this.pr<=25*t){this.prix=25*t,this.total=372*this.prix,this.stats_carnet[2].value=this.total,this.prix_w=this.prix;break}}},calcule_total(t){let e=t.target.value;this.prix_w=e,e>=this.pr?this.total=372*e:this.showAlert("error","Erreur","Ce prix ne vous est pas favorable, vous aurez des dettes!")},showModal(){this.visible=!0},handleOk(t){t.preventDefault(),this.form.validateFields((t,e)=>{t?(this.showAlert("error","Erreur","Veillez remplir tous les champs"),this.confirmLoading=!1):e.code_secret==localStorage.getItem("code_secret")?(this.confirmLoading=!0,this.CarnetSubmit(e),setTimeout(()=>{this.listeCarnet(),this.visible=!1,this.confirmLoading=!1},2e3)):(this.showAlert("error","Erreur","Code secret incorrect!"),this.confirmLoading=!1)})},handleCancel(t){this.visible=!1},showAlert(t,e,a){this.$notification[t]({message:e,description:a,placement:"bottomRight"})},CarnetSubmit(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}},i={libelle:t.libelle,frais:t.prix,benefice_carnet:t.benefice_carnet,nbr_jour:372,produits:this.produit};this.$http.post(this.callback+"/carnet/create",i,a).then(t=>{t&&(this.showAlert("success","Success","Creation de carnet effectuer avec success"),this.form.resetFields())},t=>{this.showAlert("error","Erreur",t.body.message)})},block(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}};this.$http.post(`${this.callback}/carnet/update/change-status/${t}`,{},a).then(t=>{t&&(this.showAlert("success","Success","Status du carnet changer avec success"),this.listeCarnet())},t=>{this.showAlert("error","Erreur",t.body.message)})},onSearch(){this.value=this.value.toLowerCase();let t=this.data_s;this.data=[];for(let e=0;e<t.length;e++){let a=t[e].libelle.toLowerCase();a.indexOf(this.value)>-1&&this.data.push(t[e])}}}},o=n,c=(a("c4cd"),a("2877")),u=Object(c["a"])(o,i,s,!1,null,null,null);e["default"]=u.exports},d138:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a3f9c860.4bd096c4.js.map