(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73a14884"],{7303:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(t,e){return a("a-col",{key:e,staticClass:"mb-24",attrs:{span:24,lg:12,xl:6}},[a("WidgetCounter",{attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,icon:t.icon,status:t.status}})],1)})),1),a("a-row",{attrs:{gutter:24}},[a("a-col",{staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[a("a-card",{staticClass:"card card-body border-0",scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"d-flex justify-content-between"},[a("h6",[t._v("Liste de tous les clients non visité")]),a("div",[a("a-range-picker",{attrs:{format:t.dateFormat},on:{change:t.listeClient},model:{value:t.valueDate,callback:function(e){t.valueDate=e},expression:"valueDate"}})],1),a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"Recherche ici"},on:{change:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]},proxy:!0}])},[a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:!1},scopedSlots:t._u([{key:"operation",fn:function(e,s){return[a("router-link",{attrs:{to:{name:"Client_detail",params:{id:s.key}}}},[a("a-button",{attrs:{type:"primary",size:"small"}},[t._v("Détail")])],1)]}}])}),a("div",{staticClass:"d-flex justify-content-between align-items-center mt-4"},[a("div",[a("p",[t._v("Page "+t._s(t.page)+"/"+t._s(t.total_page))])]),a("div",[t.page>1?a("a-button",{staticClass:"mx-2",on:{click:function(e){return t.preview()}}},[t._v(" Retour ")]):t._e(),t.page!=t.total_page?a("a-button",{staticClass:"mx-2",on:{click:function(e){return t.next()}}},[t._v(" Suivant ")]):t._e()],1)])],1)],1)],1)],1)},o=[],n=a("bf22"),i={components:{WidgetCounter:n["a"]},data(){return{callback:"https://dshfood.gescapro.net",token_admin:null,dateFormat:"YYYY/MM/DD",valueDate:null,stats:[],columns:[],data:[],row:5,page:1,nbr:0,total_page:0,value:null,buttonText:"Détail"}},mounted(){this.stats=[],this.columns=[{title:"Date de creation",dataIndex:"createdAt",key:"createdAt",scopedSlots:{customRender:"name"}},{title:"Nom/Prénom client",dataIndex:"nom",key:"nom"},{title:"Numéro de téléphone",dataIndex:"numero",key:"numero"},{title:"Profession",dataIndex:"profession",key:"profession"},{title:"Nombre carnet",dataIndex:"nbr_carnet",key:"nbr_carnet"},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}]},methods:{showAlert(t,e,a){this.$notification[t]({message:e,description:a})},listeClient(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.post(`${this.callback}/v2/client/not-visited/by-collector/${this.$route.params.id}?row=${this.row}&page=${this.page}`,{startDate:this.valueDate[0],endDate:this.valueDate[0]},e).then(t=>{let e=t.body.data;console.log(t),this.nbr=t.body.total,this.total_page=t.body.total_pages,console.log(this.nbr),this.data=[];for(let a=0;a<e.length;a++)this.data.push({key:e[a].id,createdAt:new Date(e[a].createdAt).toLocaleString(),nom:e[a].nom,numero:e[a].numero,profession:e[a].profession,nbr_carnet:e[a].nb_carnets})},t=>{this.showAlert("error","Error",t.body.message)})},next(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.page=this.page+1,this.$http.post(`${this.callback}/v2/client/not-visited/by-collector/${this.$route.params.id}?row=${this.row}&page=${this.page}`,{startDate:this.valueDate[0],endDate:this.valueDate[0]},e).then(t=>{let e=t.body.data;console.log(e),this.data=[];let a=Object.keys(e).map((function(t){return e[t]}));console.log(a);for(let s=0;s<a.length;s++)console.log(this.data),this.data.push({key:a[s].id,createdAt:a[s].createdAt,nom:a[s].nom,numero:a[s].numero,profession:a[s].profession,nbr_carnet:a[s].nb_carnets})},t=>{this.showAlert("error","Error",t.body.message)})},preview(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.page=this.page-1,this.$http.post(`${this.callback}/v2/client/not-visited/by-collector/${this.$route.params.id}?row=${this.row}&page=${this.page}`,{startDate:this.valueDate[0],endDate:this.valueDate[0]},e).then(t=>{let e=t.body.data;console.log(e),this.data=[];let a=Object.keys(e).map((function(t){return e[t]}));console.log(a);for(let s=0;s<a.length;s++)console.log(a[s]),this.data.push({key:a[s].id,createdAt:a[s].createdAt,nom:a[s].nom,numero:a[s].numero,profession:a[s].profession,nbr_carnet:a[s].nb_carnet})},t=>{this.showAlert("error","Error",t.body.message)})},onSearch(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.post(`${this.callback}/v2/client/not-visited/by-collector/${this.$route.params.id}?row=${this.row}&page=${this.page}`,{startDate:this.valueDate[0],endDate:this.valueDate[0]},e).then(t=>{let e=t.body.data;console.log(t.body),this.data=[];for(let a=0;a<e.length;a++)this.data.push({key:e[a].id,createdAt:e[a].createdAt,nom:e[a].nom,numero:e[a].numero,profession:e[a].profession,nbr_carnet:e[a].nb_carnet}),this.data_s=this.data},t=>{this.showAlert("error","Error",t.body.message)})}}},r=i,l=a("2877"),c=Object(l["a"])(r,s,o,!1,null,null,null);e["default"]=c.exports},bf22:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}}),a("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.icon)}})],1)},o=[],n={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},i=n,r=a("2877"),l=Object(r["a"])(i,s,o,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-73a14884.1f1c66b8.js.map