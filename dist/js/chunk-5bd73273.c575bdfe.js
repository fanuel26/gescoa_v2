(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bd73273"],{"70a7":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}})],1)},i=[],r={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},l=r,n=a("2877"),o=Object(n["a"])(l,s,i,!1,null,null,null);e["a"]=o.exports},bf22:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}}),a("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.icon)}})],1)},i=[],r={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},l=r,n=a("2877"),o=Object(n["a"])(l,s,i,!1,null,null,null);e["a"]=o.exports},fd7a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(t,e){return a("a-col",{key:e,staticClass:"mb-24",attrs:{span:24,lg:12,xl:6}},[a("WidgetCounter",{attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,icon:t.icon,status:t.status}})],1)})),1),a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(e,s){return a("a-col",{key:s,staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[a("a-card",{staticClass:"card card-body border-0"},[a("div",{staticClass:"mb-4 d-flex justify-content-between align-items-center"},[a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"Recherche ici"},on:{change:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("div"),a("a-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("Retour")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.data},scopedSlots:t._u([{key:"operation",fn:function(e,s){return[a("div",{staticClass:"d-flex"},[1==s.status?a("a-button",{staticClass:"mx-2",attrs:{type:"primary",size:"small"}},[t._v("Deja livrés ")]):t._e(),0==s.status?a("a-popconfirm",{attrs:{title:"Sûre de livrés?","cancel-text":"annuler","ok-text":"Valider"},on:{confirm:function(){return t.block(s.key)}}},[a("a-button",{staticClass:"mx-2",attrs:{size:"small"}},[t._v("livrés")])],1):t._e()],1)]}}],null,!0)})],1)],1)})),1)],1)},i=[],r=a("bf22"),l=a("70a7"),n={beforeCreate(){this.form=this.$form.createForm(this,{name:"carnet_create"})},components:{WidgetCounter:r["a"],WidgetCounterC:l["a"]},data(){return{callback:"https://dshfood.gescapro.net",token_admin:null,stats:[],stats_carnet:[],width:1e3,columns:[],data:[],data_s:[],value:null,produitData:[],buttonText:"Détail",dateFormat:"YYYY/MM/DD",valueDate:null,visible:!1,confirmLoading:!1,page:1,row:20,nom:null,prix:0,pr:0,nbr_jour:12,produit:[],code_secret:null,prix_vente:0,prix_achat:0,total:0,prix_w:0}},mounted(){this.columns=[{title:"Date de creation",dataIndex:"createdAt",key:"createdAt",scopedSlots:{customRender:"name"}},{title:"Nom du carnet",dataIndex:"libelle",key:"libelle"},{title:"Prix par jour (Fcfa)",dataIndex:"prix_jour",key:"prix_jour"},{title:"Somme total (Fcfa)",dataIndex:"somme",key:"somme"},{title:"Nom du client",dataIndex:"nom_client",key:"nom_client"},{title:"Numero du client",dataIndex:"numero_client",key:"numero_client"},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}],this.stats=[{title:"Nombre de carnets livrés",value:0,prefix:"",suffix:"",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n\t\t\t\t\t\t</svg>'}],this.listeCarnet()},methods:{listeCarnet(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.post(this.callback+"/v2/classement/carnet-finis/list?all=true",{},e).then(t=>{let e=t.body.data;console.log(e),this.stats[0].value=e.length,this.data=[];for(let a=0;a<e.length;a++)this.data.push({key:e[a].id,createdAt:new Date(e[a].createdAt).toLocaleString(),libelle:e[a].carnet.libelle,prix_jour:e[a].carnet.tarif,somme:e[a].carnet.tarif*e[a].carnet.period,nom_client:`${e[a].client.nom} ${e[a].client.prenom}`,numero_client:e[a].client.numero,status:e[a].is_delivered});this.data_s=this.data},t=>{this.showAlert("error","Error",t.body.message)})},showAlert(t,e,a){this.$notification[t]({message:e,description:a,placement:"bottomRight"})},block(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}};this.$http.post(`${this.callback}/v2/carnets/set-delivered-status/${t}`,{},a).then(t=>{t&&(this.showAlert("success","Success","Status du carnet changer avec success"),this.listeCarnet())},t=>{this.showAlert("error","Erreur",t.body.message)})},onSearch(){this.value=this.value.toLowerCase();let t=this.data_s;this.data=[];for(let e=0;e<t.length;e++){let a=t[e].libelle.toLowerCase(),s=t[e].nom_client.toLowerCase(),i=t[e].numero_client.toLowerCase();(a.indexOf(this.value)>-1||s.indexOf(this.value)>-1||i.indexOf(this.value)>-1)&&this.data.push(t[e])}}}},o=n,c=a("2877"),u=Object(c["a"])(o,s,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5bd73273.c575bdfe.js.map