(function(e){function t(t){for(var r,l,s=t[0],o=t[1],c=t[2],u=0,h=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&h.push(i[l][0]),i[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},i={app:0},n=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/SIT120-Assignment3/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),i=a.n(r);i.a},"198c":function(e,t,a){"use strict";var r=a("84c7"),i=a.n(r);i.a},5565:function(e,t,a){"use strict";var r=a("604d"),i=a.n(r);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var r=a("2b0e"),i=a("5f5b");a("ab8b"),a("2dd8");r["default"].use(i["a"]);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"vld-parent"},[a("loading",{attrs:{active:e.isLoading,"can-cancel":!1,"is-full-page":e.fullPage},on:{"update:active":function(t){e.isLoading=t}}})],1),a("div",{staticClass:"d-flex h-100 p-3 mx-auto flex-column"},[a("div",[a("dynamic-nav",{attrs:{garage:e.garage,"logged-in":e.loggedIn,recalls:e.recalls},on:{"update-login":e.updateLoginEvent,"show-recall-alert":e.handleShowRecalled,"add-registered-vehicle":e.addRegisteredVehicle,"contact-us":e.handleContactUs,"simulate-loading":e.simulateLoading}})],1),a("header",{staticClass:"mb-auto"},[e.showRecalledVehicle?a("b-alert",{attrs:{dismissible:"",show:"",variant:"danger"}},[e._v(" "+e._s(e.getStringifiedText(this.searchedVehicle))+" has been recalled. If you own a vehicle like this, please contact your local dealership immediately! ")]):e._e()],1),e.showMain?a("main",{attrs:{role:"main"}},[a("h1",[e._v(e._s(e.mastheadContent))]),a("p",{staticClass:"lead",attrs:{id:"mastheadDescription"}},[e._v(e._s(e.mastheadDescription))]),e.loggedIn?e._e():a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[e._v("Register")]),a("register",{on:{"update-login":e.updateLoginEvent}}),e.loggedIn?a("garage",{attrs:{garage:e.garage,recalls:e.recalls}}):e._e()],1):e._e(),e.showContactUs?a("main",{attrs:{id:"contact-us",role:"main"}},[a("h1",[e._v("Contact us!")]),a("a",{attrs:{href:"https://github.com/Huskehhh/"}},[a("font-awesome-icon",{attrs:{icon:["fab","github-square"],size:"5x"}})],1),a("a",{attrs:{href:"mailto:newnhamj@deakin.edu.au"}},[a("font-awesome-icon",{attrs:{icon:["fas","envelope-square"],size:"5x"}})],1)]):e._e(),e._m(0)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"mt-auto"},[a("div",[a("p",[e._v("newnhamj@deakin.edu.au")])])])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{attrs:{fixed:"top",type:"dark",variant:"dark"}},[a("b-navbar-brand",{attrs:{href:"#"}},[e._v("iRecall")]),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",[a("b-button",{on:{click:function(t){return e.contactUs(!0)}}},[e._v("Home")])],1),e.loggedIn?e._e():a("b-nav-item",{on:{click:function(t){return e.click(!0)}}},[a("b-button",[e._v("Login")])],1),e.loggedIn?a("b-nav-item",{on:{click:function(t){return e.click(!1)}}},[a("b-button",[e._v("Logout")])],1):e._e(),a("b-nav-item",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.search",modifiers:{search:!0}}],attrs:{id:"search-recall"}},[e._v("Search Recalls")])],1),a("search-recalls",{attrs:{recalls:e.recalls},on:{"vehicle-recalled":e.showRecallModal,"simulate-loading":e.simulateLoading}}),e.loggedIn?a("b-nav-item",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.register-vehicle",modifiers:{"register-vehicle":!0}}],attrs:{id:"register-vehicle"}},[e._v("Register Vehicle")])],1):e._e(),a("register-vehicle",{attrs:{garage:e.garage},on:{"vehicle-registered":e.handleRegisteredVehicleEvent}}),a("b-nav-item",[a("b-button",{on:{click:function(t){return e.contactUs(!1)}}},[e._v("Contact us")])],1)],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{id:"search",title:"Search Recalls"},on:{hidden:e.resetModal,ok:e.handleOk,on:e.resetModal}},[a("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[a("b-form-group",{attrs:{state:e.yearState,"invalid-feedback":"Year is required",label:"Year","label-for":"year-input"}},[a("b-form-input",{attrs:{id:"year-input",state:e.yearState,required:""},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1),a("b-form-group",{attrs:{state:e.makeState,"invalid-feedback":"Make is required",label:"Make","label-for":"make-input"}},[a("b-form-input",{attrs:{id:"make-input",state:e.makeState,required:""},model:{value:e.make,callback:function(t){e.make=t},expression:"make"}})],1),a("b-form-group",{attrs:{state:e.modelState,"invalid-feedback":"Model is required",label:"Model","label-for":"model-input"}},[a("b-form-input",{attrs:{id:"model-input",state:e.modelState,required:""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)])},d=[],u=(a("caad"),a("ac1f"),a("2532"),a("466d"),a("5319"),{name:"SearchRecalls",data:function(){return{make:"",model:"",year:"",makeState:null,modelState:null,yearState:null}},props:{recalls:Array},methods:{validateForm:function(){var e=this.year.match(/\d+/g);return""!==this.make&&""!==this.model&&""!==this.year&&null!=e&&4===this.year.length},handleSubmit:function(){var e=this;if(this.validateForm()){var t=this.replaceAll(this.make," ",""),a=this.replaceAll(this.model," ",""),r=this.replaceAll(this.year," ",""),i={year:r,make:t,model:a};this.$nextTick((function(){e.$bvModal.hide("search")})),this.$emit("simulate-loading",300),this.isRecalled(i)?this.$emit("vehicle-recalled",i):alert("That vehicle has no recall attached to it!")}},handleOk:function(e){e.preventDefault(),this.handleSubmit()},resetModal:function(){this.make="",this.makeState=null,this.model="",this.modelState=null,this.year="",this.yearState=null},isRecalled:function(e){for(var t=0;t<this.recalls.length;t++){var a=this.recalls[t];if(this.equalsIgnoreCase(a.make,e.make)&&this.equalsIgnoreCase(a.model,e.model)&&this.equalsIgnoreCase(a.year,e.year))return!0}return!1},equalsIgnoreCase:function(e,t){return e.toLowerCase()===t.toLowerCase()},replaceAll:function(e,t,a){var r=e;while(r.includes(t))r=e.replace(t,a);return r}}}),h=u,m=a("2877"),f=Object(m["a"])(h,c,d,!1,null,"ffdf4ccc",null),g=f.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{id:"register-vehicle",title:"Register a vehicle!"},on:{hidden:e.resetModal,ok:e.handleOk,on:e.resetModal}},[a("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[a("b-form-group",{attrs:{state:e.yearState,"invalid-feedback":"Year is required",label:"Year","label-for":"year-input"}},[a("b-form-input",{attrs:{id:"year-input",state:e.yearState,required:""},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1),a("b-form-group",{attrs:{state:e.makeState,"invalid-feedback":"Make is required",label:"Make","label-for":"make-input"}},[a("b-form-input",{attrs:{id:"make-input",state:e.makeState,required:""},model:{value:e.make,callback:function(t){e.make=t},expression:"make"}})],1),a("b-form-group",{attrs:{state:e.modelState,"invalid-feedback":"Model is required",label:"Model","label-for":"model-input"}},[a("b-form-input",{attrs:{id:"model-input",state:e.modelState,required:""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)])},b=[],v=(a("fb6a"),{name:"RegisterVehicle",data:function(){return{make:"",model:"",year:"",makeState:null,modelState:null,yearState:null}},props:{garage:Array},methods:{validateForm:function(){var e=this.year.match(/\d+/g);return""!==this.make&&""!==this.model&&""!==this.year&&null!=e&&4===this.year.length},handleSubmit:function(){var e=this;if(this.validateForm()){var t=this.replaceAll(this.make," ",""),a=this.replaceAll(this.model," ",""),r=this.replaceAll(this.year," ","");t=this.capitaliseFirst(t),a=this.capitaliseFirst(a);var i={year:r,make:t,model:a};this.$nextTick((function(){e.$bvModal.hide("register-vehicle")})),this.isAlreadyRegistered(i)?alert("This vehicle is already registered on your account!"):this.$emit("vehicle-registered",i)}},handleOk:function(e){e.preventDefault(),this.handleSubmit()},resetModal:function(){this.make="",this.makeState=null,this.model="",this.modelState=null,this.year="",this.yearState=null},isAlreadyRegistered:function(e){for(var t=0;t<this.garage.length;t++){var a=this.garage[t];if(this.equalsIgnoreCase(a.make,e.make)&&this.equalsIgnoreCase(a.model,e.model)&&this.equalsIgnoreCase(a.year,e.year))return!0}return!1},equalsIgnoreCase:function(e,t){return e.toLowerCase()===t.toLowerCase()},replaceAll:function(e,t,a){var r=e;while(r.includes(t))r=e.replace(t,a);return r},capitaliseFirst:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}}),x=v,y=Object(m["a"])(x,p,b,!1,null,"5d5f290a",null),k=y.exports,w={name:"DynamicNav",components:{RegisterVehicle:k,SearchRecalls:g},props:{loggedIn:Boolean,recalls:Array,garage:Array},methods:{click:function(e){this.$emit("update-login",e)},showRecallModal:function(e){this.$emit("show-recall-alert",e)},handleRegisteredVehicleEvent:function(e){this.$emit("add-registered-vehicle",e)},contactUs:function(e){this.$emit("contact-us",e)},simulateLoading:function(e){this.$emit("simulate-loading",e)}}},S=w,_=(a("5565"),Object(m["a"])(S,s,o,!1,null,"92961f6c",null)),C=_.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{id:"modal-1",title:"Register"},on:{hidden:e.resetModal,ok:e.handleOk,on:e.resetModal}},[a("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[a("b-form-group",{attrs:{state:e.emailState,"invalid-feedback":"Email is required",label:"Email","label-for":"email-input"}},[a("b-form-input",{attrs:{id:"email-input",state:e.emailState,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("b-form-group",{attrs:{state:e.passwordState,"invalid-feedback":"Password is required",label:"Password","label-for":"password-input"}},[a("b-form-input",{attrs:{id:"password-input",state:e.passwordState,required:"",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)])},M=[],q={name:"Register",data:function(){return{email:"",password:"",emailState:null,passwordState:null}},methods:{validateForm:function(){return this.validateEmail(this.email)&&this.password.length>5},validateEmail:function(e){return/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(e)},handleSubmit:function(){var e=this;this.validateForm()&&(this.$emit("update-login",!0),this.$nextTick((function(){e.$bvModal.hide("modal-1")})))},handleOk:function(e){e.preventDefault(),this.handleSubmit()},resetModal:function(){this.email="",this.emailState=null,this.password="",this.passwordState=null}}},I=q,O=Object(m["a"])(I,R,M,!1,null,"6af95532",null),L=O.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.recalledVehicles,(function(t){return a("b-alert",{key:t,attrs:{show:"",variant:"danger"}},[e._v("Your "+e._s(t)+" has been recalled! Contact your local dealership immediately! ")])})),a("b-table",{attrs:{id:"cars",items:e.buildTable,hover:"",striped:""}}),a("p",[e._v("Legend: RED = recalled, GREEN = not recalled")])],2)},A=[],E={name:"Garage",components:{},props:{garage:Array,recalls:Array},methods:{getStringifiedText:function(e){return e.year+" "+e.make+" "+e.model},isRecalled:function(e){for(var t=0;t<this.recalls.length;t++){var a=this.recalls[t];if(this.equalsIgnoreCase(a.make,e.make)&&this.equalsIgnoreCase(a.model,e.model)&&this.equalsIgnoreCase(a.year,e.year))return!0}return!1},equalsIgnoreCase:function(e,t){return e.toLowerCase()===t.toLowerCase()}},computed:{recalledVehicles:function(){for(var e=[],t=0;t<this.garage.length;t++){var a=this.garage[t];this.isRecalled(a)&&e.push(this.getStringifiedText(a))}return e},buildTable:function(){for(var e=[],t=0;t<this.garage.length;t++){var a=this.garage[t],r={year:a.year,make:a.make,model:a.model,_rowVariant:"success"};this.isRecalled(a)&&(r._rowVariant="danger"),e.push(r)}return e}}},T=E,j=(a("af23"),Object(m["a"])(T,$,A,!1,null,"122bae88",null)),V=j.exports,D=a("ad3d"),P=a("9062"),U=a.n(P),F=(a("e40d"),{name:"Index",props:{},components:{Garage:V,DynamicNav:C,Register:L,FontAwesomeIcon:D["a"],Loading:U.a},data:function(){return{isLoading:!1,fullPage:!0,loggedIn:!1,mastheadContent:"About us!",mastheadDescription:"iRecall is a service that enables you to register an account complete with your personal vehicles. Once registered, we will track recalls that affect your vehicles and notify you if your vehicles are impacted.",buttonText:"Register now",showRecalledVehicle:!1,showMain:!0,showContactUs:!1,searchedVehicle:{},garage:[{make:"Toyota",model:"Camry",year:"2000"},{make:"Honda",model:"Civic",year:"2002"},{make:"Suzuki",model:"Swift",year:"1998"}],recalls:[{make:"Suzuki",model:"Swift",year:"1998",recalled:!0}]}},methods:{updateLoginEvent:function(e){this.simulateLoading(1500),this.loggedIn=e,this.loggedIn?(this.mastheadContent="Your garage:",this.mastheadDescription=""):(this.mastheadContent="About us!",this.mastheadDescription="iRecall is a service that enables you to register an account complete with your personal vehicles. Once registered, we will track recalls that affect your vehicles and notify you if your vehicles are impacted.")},simulateLoading:function(e){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1}),e)},handleShowRecalled:function(e){this.showRecalledVehicle=!0,this.searchedVehicle=e},addRegisteredVehicle:function(e){this.garage.push(e)},getStringifiedText:function(e){return e.year+" "+e.make+" "+e.model},handleContactUs:function(e){this.simulateLoading(250),e?(this.showContactUs=!1,this.showMain=!0):(this.showMain=!this.showMain,this.showContactUs=!this.showContactUs)}}}),N=F,Y=(a("034f"),a("198c"),Object(m["a"])(N,n,l,!1,null,"15b3cc18",null)),z=Y.exports,G=a("ecee"),H=a("f2d1"),J=a("c074");G["c"].add(H["a"],J["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(z)}}).$mount("#app")},"604d":function(e,t,a){},"7bbb":function(e,t,a){},"84c7":function(e,t,a){},"85ec":function(e,t,a){},af23:function(e,t,a){"use strict";var r=a("7bbb"),i=a.n(r);i.a}});
//# sourceMappingURL=app.70269544.js.map