(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(301)},133:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),o=a.n(i),s=(a(133),a(16)),l=a(17),c=a(19),m=a(18),u=a(20),d=a(27),h=a(38),p=a(21),g=a(35),b=a.n(g),f=a(119),v=a.n(f),E=a(36),y=a.n(E),w=a(33),x=a.n(w),j=a(61),O=a.n(j),k=a(37),C=a.n(k),N=a(22),S=a.n(N),I=a(24),L=a.n(I);var T=Object(p.withStyles)(function(e){return{card:{margin:"auto",display:"block",maxWidth:600,maxHeight:700,marginTop:60},button:{margin:e.spacing.unit},img:{margin:"auto",display:"block",maxWidth:400,maxHeight:400,marginBottom:20,marginTop:20}}})(function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(L.a,{item:!0,xs:6,sm:!0,container:!0,style:{textAlign:"center"}},r.a.createElement(L.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},r.a.createElement(L.a,{item:!0,xs:!0},r.a.createElement(b.a,{className:t.card},r.a.createElement(v.a,null,r.a.createElement(O.a,{className:t.image,title:"Birthday Cake"}),r.a.createElement(x.a,null,r.a.createElement(S.a,{gutterBottom:!0,variant:"h5",component:"h2"},r.a.createElement("img",{className:t.img,alt:"complex",src:"../../../images/birthdaycake.jpg"}),"Welcome to Wishlist!"),r.a.createElement(S.a,{component:"p"},"Making Birthdays Memorable"))),r.a.createElement(y.a,{style:{textAlign:"center"}},r.a.createElement(L.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(d.b,{to:"/login",style:{textDecoration:"none"}},r.a.createElement(C.a,{className:t.button,variant:"contained",size:"medium",color:"primary"},"Login")),r.a.createElement(d.b,{to:"/signup",style:{textDecoration:"none"}},r.a.createElement(C.a,{className:t.button,variant:"contained",size:"medium",color:"primary"},"Signup")))))))))}),A=a(23),B=a(121),W=a.n(B),D=a(122),F=a.n(D),M=a(52),P=a.n(M),R=a(46),z=a(123),U=a.n(z),_=a(124),H=a.n(_),q=a(51),J=a.n(q),$=a(39),G=a.n($),K=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"doSomethingWithSearchTerms",value:function(e){var t=this;13===e.keyCode&&(console.log(e.target.value),console.log("Enter was pressed!!"),G.a.get("/api/search/",{params:{item:e.target.value}}).then(function(e){console.log(t.props),t.props.history.push({pathname:"/results",state:{items:e.data.results}})}).catch(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(J.a,{placeholder:"Search\u2026",classes:{root:this.props.classes.inputRoot,input:this.props.classes.inputInput},onKeyUp:function(t){e.doSomethingWithSearchTerms(t)}}))}}]),t}(r.a.Component),V=Object(p.withStyles)(function(e){return{inputRoot:{color:"inherit",width:"100%"},inputInput:Object(A.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(K);var Y=Object(p.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(A.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(A.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(R.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(R.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(W.a,{position:"static"},r.a.createElement(F.a,null,r.a.createElement(P.a,{className:t.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(U.a,null)),r.a.createElement(S.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},r.a.createElement(d.b,{to:"/",style:{textDecoration:"none",color:"white"}}," Wish List")),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(H.a,null)),r.a.createElement(V,{history:e.history})))))});var Q=function(e){return r.a.createElement("div",null,r.a.createElement(Y,{history:e.history}),r.a.createElement(T,null))},X=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y,{history:this.props.history}))}}]),t}(n.Component),Z=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Friends Route")}}]),t}(n.Component),ee=a(5),te=a.n(ee),ae=a(127),ne=a.n(ae),re=a(78),ie=a.n(re),oe=a(79),se=a.n(oe),le=a(125),ce=a.n(le),me=a(126),ue=a.n(me),de=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.handleLovedClick=function(){a.setState(function(e){return{loved:!e.loved}}),a.isLoveClicked()},a.isLoveClicked=function(){a.state.loved?console.log("I am not loved!"):console.log("I am loved!")},a.componentDidMount=function(){G.a.get("/api/images",{params:{item:a.props.listing_id}}).then(function(e){var t=e.data.results[0].url_fullxfull;a.setState({image:t})}).catch(function(e){console.log(e)})},a.state={expanded:!1,loved:!1,image:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.a,{className:e.card},r.a.createElement(O.a,{className:e.media,image:this.state.image,title:this.props.title}),r.a.createElement(x.a,null,r.a.createElement(S.a,{variant:"h6"},this.props.title)),r.a.createElement(y.a,{className:e.actions,disableActionSpacing:!0},r.a.createElement(P.a,{className:te()(e.isNotLoved,Object(A.a)({},e.isLoved,this.state.loved)),onClick:this.handleLovedClick,"aria-label":"Add to your list!"},r.a.createElement(ce.a,null)),r.a.createElement(S.a,{variant:"h6"},"$"+parseFloat(this.props.price)),r.a.createElement(P.a,{className:te()(e.expand,Object(A.a)({},e.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(ue.a,null))),r.a.createElement(ne.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(x.a,null,r.a.createElement(S.a,{variant:"p"},"Description:",this.props.description))))}}]),t}(n.Component),he=Object(p.withStyles)(function(e){return{card:{maxWidth:400},media:{height:0,paddingTop:"90.25%"},actions:{display:"flex"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},isLoved:{color:ie.a[500]},isNotLoved:{color:se.a}}})(de),pe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y,null),this.props.location.state.items.map(function(e){return r.a.createElement(he,{key:e.listing_id,listing_id:e.listing_id,title:e.title,tags:e.tags,price:e.price,description:e.description})}))}}]),t}(n.Component);var ge=function(){return r.a.createElement("div",null,"Likes Route")},be={isAuthenticated:function(){var e=localStorage.getItem("accessToken");return e&&null!==e},setToken:function(e){localStorage.setItem("accessToken",e)},destroyToken:function(){localStorage.removeItem("accessToken")},getToken:function(){return localStorage.getItem("accessToken")}},fe=function(){var e={};return be.isAuthenticated()&&(e.headers={Authorization:"Bearer ".concat(be.getToken())}),e},ve={login:function(e){return G.a.post("/api/auth/login",e,fe())},signup:function(e){return G.a.post("/api/auth/signup",e,fe())}},Ee=a(31),ye=a.n(Ee),we={card:{margin:"auto",display:"block",maxWidth:600,maxHeight:700,marginTop:60},form:{paddingBottom:20}},xe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.username&&a.state.password&&ve.login({username:a.state.username,password:a.state.password}).then(function(e){be.setToken(e.data.token),a.props.history.push("/users")}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{styles:we},r.a.createElement(L.a,{item:!0,xs:6,sm:!0,container:!0,style:{textAlign:"center"}},r.a.createElement(L.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},r.a.createElement(L.a,{item:!0,xs:!0},r.a.createElement(b.a,{className:e.card,style:{textAlign:"center"}},r.a.createElement(x.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0,variant:"h5",component:"h2",style:{textAlign:"center"}},"Login"),r.a.createElement("form",null,r.a.createElement("div",{className:e.form},r.a.createElement(ye.a,{value:this.state.username,onChange:this.handleInputChange,name:"username",placeholder:"(required)",id:"standard-name",label:"User Name",margin:"normal",variant:"outlined"})),r.a.createElement("div",{className:e.form},r.a.createElement(ye.a,{value:this.state.password,onChange:this.handleInputChange,name:"password",placeholder:"(required)",id:"standard-name",label:"Password",margin:"normal",variant:"outlined"})),r.a.createElement(y.a,{style:{justifyContent:"center"}},r.a.createElement(d.b,{to:"/user",style:{textDecoration:"none"}},r.a.createElement(C.a,{variant:"contained",size:"medium",color:"primary",onClick:this.handleFormSubmit},"Enter"))))))))))}}]),t}(r.a.Component),je=Object(p.withStyles)(we)(xe),Oe=a(60),ke=(a(300),{card:{margin:"auto",display:"block",maxWidth:600,maxHeight:700,marginTop:60},user:{paddingBottom:20,paddingTop:10},form:{paddingTop:10,paddingBottom:20,padding:10,spacing:20},about:{width:400},birthdate:{width:400}}),Ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(A.a)({},e,t.target.value))}},a.handleClickShowPassword=function(){a.setState(function(e){return{showPassword:!e.showPassword}})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.username&&a.state.password&&ve.signup({username:a.state.username,password:a.state.password,firstName:a.state.firstName,lastName:a.state.lastName,aboutMe:a.state.aboutMe,birthday:a.state.birthday}).then(function(e){be.setToken(e.data.token),a.props.history.push("/user"),console.log(e.data.token)}).catch(function(e){return console.log(e)})},a.handleDayClick=a.handleDayClick.bind(Object(Oe.a)(a)),a.state={username:"",password:"",firstName:"",lastName:"",aboutMe:"",birthday:void 0,redirect:!1,showPassword:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleDayClick",value:function(e){this.setState({birthday:e})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{styles:ke},r.a.createElement(L.a,{item:!0,xs:6,sm:!0,container:!0,style:{textAlign:"center"}},r.a.createElement(L.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},r.a.createElement(L.a,{item:!0,xs:!0},r.a.createElement(b.a,{className:e.card},r.a.createElement(x.a,null,r.a.createElement(S.a,{gutterBottom:!0,variant:"h5",component:"h2",color:"textSecondary",style:{textAlign:"center"}},"Sign Up with Wish List"),r.a.createElement("form",null,r.a.createElement("div",{className:(e.form,e.user),style:{textAlign:"center"}},r.a.createElement(ye.a,{value:this.state.firstName,variant:"outlined",onChange:this.handleInputChange,name:"firstName",label:"First Name"}),r.a.createElement(ye.a,{value:this.state.lastName,variant:"outlined",onChange:this.handleInputChange,label:"Last Name",name:"lastName"})),r.a.createElement("div",{className:(e.form,e.user),style:{textAlign:"center"}},r.a.createElement(ye.a,{value:this.state.username,variant:"outlined",onChange:this.handleInputChange,name:"username",label:"User Name",placeholder:"(required)"}),r.a.createElement(ye.a,{id:"outlined-adornment-password",className:(e.margin,e.textField),variant:"outlined",type:this.state.showPassword?"text":"password",label:"Password",value:this.state.password,onChange:this.handleChange("password")})),r.a.createElement("div",{className:e.form,style:{textAlign:"center"}},r.a.createElement(ye.a,{className:e.about,value:this.state.aboutMe,onChange:this.handleInputChange,variant:"outlined",name:"aboutMe",label:"About You",multiline:!0,rows:"4",placeholder:"Write a few words about yourself"})),r.a.createElement("div",{className:e.form,style:{textAlign:"center"}},r.a.createElement(ye.a,{variant:"outlined",id:"date",label:"Birthday",type:"date",defaultValue:"2017-05-24",className:e.birthdate,InputLabelProps:{shrink:!0}})),r.a.createElement(y.a,{style:{justifyContent:"center"}},r.a.createElement(d.b,{to:"/user",style:{textDecoration:"none"}},r.a.createElement(C.a,{variant:"contained",size:"medium",color:"primary",onClick:this.handleFormSubmit},"Enter"))))))))))}}]),t}(r.a.Component),Ne=Object(p.withStyles)(ke)(Ce),Se=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:Q}),r.a.createElement(h.a,{exact:!0,path:"/user",component:X}),r.a.createElement(h.a,{exact:!0,path:"/friends",component:Z}),r.a.createElement(h.a,{exact:!0,path:"/likes",component:ge}),r.a.createElement(h.a,{exact:!0,path:"/results",component:pe}),r.a.createElement(h.a,{exact:!0,path:"/login",component:je}),r.a.createElement(h.a,{exact:!0,path:"/signUp",component:Ne}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[128,1,2]]]);
//# sourceMappingURL=main.7dbfdc73.chunk.js.map