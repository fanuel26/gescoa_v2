(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d85ccfa"],{"082e":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"header-solid h-full card-profile-information",attrs:{bordered:!1,bodyStyle:{paddingTop:0,paddingBottom:"16px"},headStyle:{paddingRight:0}},scopedSlots:e._u([{key:"title",fn:function(){return[a("h6",{staticClass:"font-semibold m-0"},[e._v("Information du compte")])]},proxy:!0}])},[a("a-button",{attrs:{slot:"extra",type:"link"},slot:"extra"},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"fill-muted",attrs:{d:"M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z",fill:"#111827"}}),a("path",{staticClass:"fill-muted",attrs:{d:"M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z",fill:"#111827"}})])]),a("p",{staticClass:"text-dark"},[e._v(" Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). ")]),a("hr",{staticClass:"my-25"}),a("a-descriptions",{attrs:{title:"Oliver Liam",column:1}},[a("a-descriptions-item",{attrs:{label:"Nom & Prénom"}},[e._v(" Sarah Emily Jacob ")]),a("a-descriptions-item",{attrs:{label:"Numéro de téléphone"}},[e._v(" (44) 123 1234 123 ")]),a("a-descriptions-item",{attrs:{label:"Adresse email"}},[e._v(" sarahjacob@mail.com ")]),a("a-descriptions-item",{attrs:{label:"Code secret"}},[e._v(" 1254 ")])],1)],1)},r=[],o={data(){return{}}},i=o,n=a("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);t["a"]=l.exports},"09c0":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"card-project"},[a("img",{attrs:{slot:"cover",alt:"example",src:e.cover},slot:"cover"}),a("div",{staticClass:"card-tag"},[e._v("Project #"+e._s(e.id))]),a("h5",[e._v(e._s(e.title))]),a("p",[e._v(" "+e._s(e.content)+" ")]),a("a-row",{staticClass:"card-footer",attrs:{type:"flex",gutter:6,align:"middle"}},[a("a-col",{attrs:{span:12}},[a("a-button",{attrs:{size:"small"}},[e._v("VIEW PROJECT")])],1),a("a-col",{staticClass:"text-right",attrs:{span:12}},[a("a-space",{staticClass:"avatar-chips",attrs:{size:-12}},e._l(e.team,(function(e,t){return a("a-avatar",{key:t,attrs:{size:"small",src:e}})})),1)],1)],1)],1)},r=[],o={props:{id:{type:Number,required:!0},title:{type:String,default:""},content:{type:String,default:""},cover:{type:String,default:""},team:{type:Array,default:()=>[]}},data(){return{}}},i=o,n=a("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);t["a"]=l.exports},"9bfa":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"profile-nav-bg",staticStyle:{"background-image":"url('/images/bg-profile.jpg')"}}),a("a-card",{staticClass:"card-profile-head",attrs:{bordered:!1,bodyStyle:{padding:0}},scopedSlots:e._u([{key:"title",fn:function(){return[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("a-col",{staticClass:"col-info",attrs:{span:24,md:12}},[a("a-avatar",{attrs:{size:74,shape:"square",src:"/images/logo1.png"}}),a("div",{staticClass:"avatar-info"},[a("h4",{staticClass:"font-semibold m-0"},[e._v(e._s(e.compte.nom))]),a("p",[e._v(e._s(e.compte.prenoms))])])],1),a("a-col",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end"},attrs:{span:24,md:12}})],1)]},proxy:!0}])}),a("a-row",{staticClass:"mb-24",attrs:{gutter:24}},[a("a-col",{staticClass:"mb-24",attrs:{span:12,md:8}},[a("a-card",{staticClass:"header-solid h-full card-profile-information",attrs:{bordered:!1,bodyStyle:{paddingTop:0,paddingBottom:"16px"},headStyle:{paddingRight:0}},scopedSlots:e._u([{key:"title",fn:function(){return[a("h6",{staticClass:"font-semibold m-0"},[e._v("Information du compte")])]},proxy:!0}])},[a("a-descriptions",{attrs:{title:e.compte.username,column:1}},[a("a-descriptions-item",{attrs:{label:"Nom & Prénom"}},[e._v(" "+e._s(e.compte.nom)+" "+e._s(e.compte.prenom)+" ")]),a("a-descriptions-item",{attrs:{label:"Adresse email"}},[e._v(" "+e._s(e.compte.email)+" ")]),a("a-descriptions-item",{attrs:{label:"N° de téléphone"}},[e._v(" "+e._s(e.compte.telephone)+" ")]),a("a-descriptions-item",{attrs:{label:"Code secret"}},[e._v(" "+e._s(e.compte.codeSecret)+" ")])],1)],1)],1),a("a-col",{attrs:{span:12,md:16}},[a("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{paddingTop:"16px",paddingBottom:"16px"}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{staticClass:"mb-24",attrs:{span:12,md:12}},[[a("h6",{staticClass:"font-semibold m-0"},[e._v("Generer code secret")])],a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:e.form_code_secret,hideRequiredMark:!0},on:{submit:e.codeSubmit}},[a("a-form-item",{attrs:{label:"Code secret generer",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code_secret_new",{initialValue:e.code_secret,rules:[{required:!0,message:"Code secret generer incorrect!"}]}],expression:"[\n                    'code_secret_new',\n                    {\n                      initialValue: code_secret,\n                      rules: [\n                        {\n                          required: true,\n                          message: 'Code secret generer incorrect!',\n                        },\n                      ],\n                    },\n                  ]"}],attrs:{disabled:"",type:"text",placeholder:"Code secret"}})],1),a("a-form-item",{attrs:{label:"Code secret",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code_secret",{rules:[{required:!0,message:"Code secret incorrect!"}]}],expression:"[\n                    'code_secret',\n                    {\n                      rules: [\n                        {\n                          required: true,\n                          message: 'Code secret incorrect!',\n                        },\n                      ],\n                    },\n                  ]"}],attrs:{type:"text",placeholder:"Code secret"}})],1),a("div",{staticClass:"mb-4 text-right"},[a("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"}},[e._v(" Generer ")])],1)],1)],2),a("a-col",{staticClass:"mb-24",attrs:{span:12,md:12}},[[a("h6",{staticClass:"font-semibold m-0"},[e._v("Generer mot de passe")])],a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:e.form_password,hideRequiredMark:!0},on:{submit:e.passwordSubmit}},[a("a-form-item",{attrs:{label:"Mot de passe generer",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{initialValue:e.password,rules:[{required:!0,message:"Mot de passe generer incorrect!"}]}],expression:"[\n                    'password',\n                    {\n                      initialValue: password,\n                      rules: [\n                        {\n                          required: true,\n                          message: 'Mot de passe generer incorrect!',\n                        },\n                      ],\n                    },\n                  ]"}],attrs:{disabled:"",type:"text",placeholder:"Mot de passe"}})],1),a("a-form-item",{attrs:{label:"Code secret",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code_secret",{rules:[{required:!0,message:"Code secret incorrect!"}]}],expression:"[\n                    'code_secret',\n                    {\n                      rules: [\n                        {\n                          required: true,\n                          message: 'Code secret incorrect!',\n                        },\n                      ],\n                    },\n                  ]"}],attrs:{type:"text",placeholder:"Code secret"}})],1),a("div",{staticClass:"mb-4 text-right"},[a("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"}},[e._v(" Generer ")])],1)],1)],2),a("a-col",{staticClass:"mb-24",attrs:{span:12,md:12}},[[a("h6",{staticClass:"font-semibold m-0"},[e._v("Changer le montant carnet")])],a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:e.form_montant,hideRequiredMark:!0},on:{submit:e.montantSubmit}},[a("a-form-item",{attrs:{label:"Montant carnet (Fcfa)",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["montantCarnet",{initialValue:e.montantCarnet,rules:[{required:!0,message:"montantCarnet est vide!"}]}],expression:"[\n                    'montantCarnet',\n                    {\n                      initialValue: montantCarnet,\n                      rules: [\n                        {\n                          required: true,\n                          message: 'montantCarnet est vide!',\n                        },\n                      ],\n                    },\n                  ]"}],attrs:{type:"text",placeholder:"Montant carnet"}})],1),a("a-form-item",{attrs:{label:"Code secret",colon:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code_secret",{rules:[{required:!0,message:"Code secret incorrect!"}]}],expression:"[\n                    'code_secret',\n                    {\n                      rules: [\n                        {\n                          required: true,\n                          message: 'Code secret incorrect!',\n                        },\n                      ],\n                    },\n                  ]"}],attrs:{type:"text",placeholder:"Code secret"}})],1),a("div",{staticClass:"mb-4 text-right"},[a("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"}},[e._v(" Modifier ")])],1)],1)],2)],1)],1)],1)],1),a("a",{attrs:{href:"https://wa.me/22892432861",target:"_brank"}},[a("a-button",{staticClass:"fab",attrs:{shape:"circle"}},[a("a-icon",{attrs:{type:"wechat",theme:"filled"}})],1)],1)],1)},r=[],o=a("e6c1"),i=a("082e"),n=a("bfa7"),l=a("09c0");const c=[{id:"1",title:"Sophie B.",code:"Hi! I need more information…",avatar:"/images/face-3.jpg"},{id:"2",title:"Anne Marie",code:"Awesome work, can you…",avatar:"/images/face-4.jpg"},{id:"3",title:"Ivan",code:"About files I can…",avatar:"/images/face-5.jpeg"},{id:"4",title:"Peterson",code:"Have a great afternoon…",avatar:"/images/face-6.jpeg"},{id:"5",title:"Nick Daniel",code:"Hi! I need more information…",avatar:"/images/face-2.jpg"}],d=[{id:1,title:"Modern",content:"As Uber works through a huge amount of internal management turmoil.",cover:"/images/home-decor-3.jpeg",team:["/images/face-1.jpg","/images/face-4.jpg","/images/face-2.jpg","/images/face-3.jpg"]},{id:2,title:"Scandinavian",content:"Music is something that every person has his or her own specific opinion about.",cover:"/images/home-decor-2.jpeg",team:["/images/face-1.jpg","/images/face-4.jpg","/images/face-2.jpg","/images/face-3.jpg"]},{id:3,title:"Minimalist",content:"Different people have different taste, and various types of music, Zimbali Resort.",cover:"/images/home-decor-1.jpeg",team:["/images/face-1.jpg","/images/face-4.jpg","/images/face-2.jpg","/images/face-3.jpg"]}];var m={components:{CardPlatformSettings:o["a"],CardProfileInformation:i["a"],CardConversations:n["a"],CardProject:l["a"]},beforeCreate(){this.form_code_secret=this.$form.createForm(this,{name:"normal_login"}),this.form_password=this.$form.createForm(this,{name:"normal_login"}),this.form_montant=this.$form.createForm(this,{name:"form_montant"})},data(){return{callback:"https://n2a.gescapro.net",token_admin:null,profileHeaderBtns:"overview",conversationsData:c,projects:d,compte:{},code_secret:null,password:null,montantCarnet:0,idParametre:0}},mounted(){this.password="N2A@"+Math.floor(8999*Math.random()+1e3),this.code_secret=Math.floor(8999*Math.random()+1e3),this.infoCompte()},methods:{showAlert(e,t,a){this.$notification[e]({message:t,description:a})},infoCompte(){let e=localStorage;this.token_admin=e.getItem("token");let t={headers:{Authorization:this.token_admin}};this.compte=JSON.parse(e.getItem("infoAdmin")),this.$http.get(this.callback+"/parametre/montantSell",t).then(e=>{let t=e.body.data;this.montantCarnet=t.montantCarnet,this.idParametre=t.id,console.log(t)},e=>{flash(e.body.message,"Erreur","fa fa-times","danger")})},codeSubmit(e){e.preventDefault(),this.form_code_secret.validateFields((e,t)=>{if(e)console.log(e);else if(console.log(t),t.code_secret==localStorage.getItem("code_secret")){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}},s={code_secret:this.compte.code_secret,newcode_secret:t.code_secret_new};this.$http.post(this.callback+"/change/code_secret",s,a).then(a=>{let s=a.body;console.log(s),1==s.status?(e.setItem("code_secret",t.code_secret_new),this.code_secret=Math.floor(8999*Math.random()+1e3),this.showAlert("success","Success","Code secret générer avec success! Code secret: "+t.code_secret_new),this.infoCompte()):this.showAlert("danger","Erreur",s.message)},e=>{this.showAlert("danger","Erreur",e.body.message)})}else this.showAlert("error","Erreur","Code secret incorrect")})},montantSubmit(e){console.log("coucou"),e.preventDefault(),this.form_montant.validateFields((e,t)=>{if(e)console.log("error");else if(console.log(t),t.code_secret==localStorage.getItem("code_secret")){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}},s={montantCarnet:t.montantCarnet};this.$http.put(`${this.callback}/parametre/update/${this.idParametre}`,s,a).then(e=>{let t=e.body;console.log(t),200==t.status?this.showAlert("success","Success",t.message):this.showAlert("error","Erreur",t.message)},e=>{this.showAlert("error","Erreur",e.body.message)})}else this.showAlert("error","Erreur","Code secret incorrect")})},passwordSubmit(e){e.preventDefault(),this.form_password.validateFields((e,t)=>{if(e)console.log("error");else if(console.log(t),t.code_secret==localStorage.getItem("code_secret")){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}},s={password:this.compte.password,newpassword:t.password};this.$http.post(this.callback+"/change/password",s,a).then(e=>{let a=e.body;console.log(a),1==a.status?(this.showAlert("success","Success","Mot de passe generer avec succes! Mot de passe: "+t.password),this.password="N2A@"+Math.floor(8999*Math.random()+1e3)):this.showAlert("error","Erreur",a.message)},e=>{this.showAlert("error","Erreur",e.body.message)})}else this.showAlert("error","Erreur","Code secret incorrect")})}}},p=m,u=a("2877"),h=Object(u["a"])(p,s,r,!1,null,null,null);t["default"]=h.exports},bfa7:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{paddingTop:0,paddingBottom:"16px"}},scopedSlots:e._u([{key:"title",fn:function(){return[a("h6",{staticClass:"font-semibold m-0"},[e._v("Conversations")])]},proxy:!0}])},[a("a-list",{staticClass:"conversations-list",attrs:{"item-layout":"horizontal",split:!1,"data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{},[a("a-button",{attrs:{slot:"actions",type:"link"},slot:"actions"},[e._v(" REPLY ")]),a("a-list-item-meta",{attrs:{title:t.title,description:t.code}},[a("a-avatar",{attrs:{slot:"avatar",size:48,shape:"square",src:t.avatar},slot:"avatar"})],1)],1)}}])})],1)},r=[],o={props:{data:{type:Array,default:()=>[]}},data(){return{}}},i=o,n=a("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);t["a"]=l.exports},e6c1:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{paddingTop:0,paddingBottom:0}},scopedSlots:e._u([{key:"title",fn:function(){return[a("h6",{staticClass:"font-semibold m-0"},[e._v("Platform Settings")])]},proxy:!0}])},[a("ul",{staticClass:"list settings-list"},[a("li",[a("h6",{staticClass:"list-header text-sm text-muted"},[e._v("ACCOUNT")])]),a("li",[a("a-switch",{model:{value:e.emailForFollows,callback:function(t){e.emailForFollows=t},expression:"emailForFollows"}}),a("span",[e._v("Email me when someone follows me")])],1),a("li",[a("a-switch",{model:{value:e.emailForAnswers,callback:function(t){e.emailForAnswers=t},expression:"emailForAnswers"}}),a("span",[e._v("Email me when someone answers me")])],1),a("li",[a("a-switch",{model:{value:e.emailForMentions,callback:function(t){e.emailForMentions=t},expression:"emailForMentions"}}),a("span",[e._v("Email me when someone mentions me")])],1),a("li",[a("h6",{staticClass:"list-header text-sm text-muted m-0"},[e._v("APPLICATION")])]),a("li",[a("a-switch",{model:{value:e.emailForNewProjects,callback:function(t){e.emailForNewProjects=t},expression:"emailForNewProjects"}}),a("span",[e._v("New launches and projects")])],1),a("li",[a("a-switch",{model:{value:e.emailForProductUpdates,callback:function(t){e.emailForProductUpdates=t},expression:"emailForProductUpdates"}}),a("span",[e._v("Monthly product updates")])],1),a("li",[a("a-switch",{model:{value:e.emailForNewsletter,callback:function(t){e.emailForNewsletter=t},expression:"emailForNewsletter"}}),a("span",[e._v("Subscribe to newsletter")])],1)])])},r=[],o={data(){return{emailForFollows:!0,emailForAnswers:!1,emailForMentions:!0,emailForNewProjects:!0,emailForProductUpdates:!1,emailForNewsletter:!0}}},i=o,n=a("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-0d85ccfa.2e2a5f71.js.map