(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){},164:function(e,t,a){e.exports=a(434)},169:function(e,t,a){},317:function(e,t,a){},434:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(25),r=a.n(s),l=(a(169),a(13)),i=a(14),c=a(16),u=a(15),m=a(17),p=a(27),h=a.n(p),g=a(38),d=a.n(g),E=a(46),f=a.n(E),b=a(37),v=a.n(b),y=a(29),C=a.n(y),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",isLogged:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t=this,a={email:this.state.email,password:this.state.password};C.a.post("https://expense-manager-t.herokuapp.com/api/login",a,{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){if(console.log(e),200===e.status){console.log("login successfull");var a=e.data.categories;console.log(a);var n=e.data.id;t.setState({isLoggged:!0}),t.props.appContext.props.history.push({pathname:"/expense",state:{isLogged:!0,Categories:a,userId:n}})}else 400===e.status&&(console.log("Email and password dont match"),alert("Email or password dont match"))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(f.a,{title:"Login",showMenuIconButton:!1}),o.a.createElement(v.a,{hintText:"Enter your email",floatingLabelText:"Email",onChange:function(t,a){e.setState({email:a})}}),o.a.createElement("br",null),o.a.createElement(v.a,{type:"password",hintText:"Enter your password",floatingLabelText:"Password",onChange:function(t,a){e.setState({password:a})}}),o.a.createElement("br",null),o.a.createElement(d.a,{label:"Submit",primary:!0,style:O,onClick:function(t){return e.handleClick(t)}}))))}}]),t}(n.Component),O={margin:15},w=k,j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t=this;console.log("Values",this.state.email,this.state.password);var a={email:this.state.email,password:this.state.password};C.a.post("https://expense-manager-t.herokuapp.com/api/users",a,{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){if(201===e.status){console.log("Registration sucessfull");var a=[];a.push(o.a.createElement(w,{parentContext:this})),t.props.parentContext.setState({loginscreen:a,buttonLabel:"Register",isLogin:!0})}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(f.a,{title:"Register",showMenuIconButton:!1}),o.a.createElement(v.a,{hintText:"Enter your Email",type:"email",floatingLabelText:"Email",onChange:function(t,a){e.setState({email:a})}}),o.a.createElement("br",null),o.a.createElement(v.a,{hintText:"Enter your Password",type:"password",floatingLabelText:"Password",onChange:function(t,a){return e.setState({password:a})}}),o.a.createElement("br",null),o.a.createElement(d.a,{label:"Submit",primary:!0,style:x,onClick:function(t){return e.handleClick(t)}}))))}}]),t}(n.Component),x={margin:15},L=j,S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",loginscreen:[],buttonLabel:"Register",isLogin:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=[];e.push(o.a.createElement(w,{parentContext:this,appContext:this.props.appContext})),this.setState({loginscreen:e})}},{key:"handleClick",value:function(e){if(this.state.isLogin){var t=[];console.log(this.props),t.push(o.a.createElement(L,{parentContext:this})),this.setState({loginscreen:t,buttonLabel:"Login",isLogin:!1})}else{(t=[]).push(o.a.createElement(w,{parentContext:this})),this.setState({loginscreen:t,buttonLabel:"Register",isLogin:!0})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"loginscreen"},this.state.loginscreen,o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(d.a,{label:this.state.buttonLabel,primary:!0,style:T,onClick:function(t){return e.handleClick(t)}})))))}}]),t}(n.Component),T={margin:15},M=S,I=(a(317),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loginPage:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=[];e.push(o.a.createElement(M,{appContext:this})),this.setState({loginPage:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.loginPage)}}]),t}(n.Component)),A=a(155),N=a.n(A),P=a(157),W=a.n(P),B=a(158),R=a.n(B),U=a(151),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onOpenModal=function(){a.setState({open:!0})},a.onCloseModal=function(){a.setState({open:!1})},a.state={content:"",price:"",category:"",categories:a.props.categories,open:!1,CategoryName:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t="https://expense-manager-t.herokuapp.com/api/categories/"+this.state.category+"/",a={content:this.state.content,price:this.state.price};C.a.post(t+"items",a,{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){console.log(e),200===e.status?(console.log("item posted succesfull"),console.log(this.props.HasToUpdate),this.props.HasToUpdate=!0):400===e.status&&(console.log("Item was not added"),alert("Item not added"))})}},{key:"handleModalClick",value:function(e){var t="http://localhost:4000/api/users/"+this.props.userid+"/",a=this,n={name:this.state.CategoryName};C.a.post(t+"categories",n,{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){201===e.status?(a.props.categories.push(e.data),console.log(a.props.categories),a.onCloseModal()):400===e.status&&(console.log("Item was not added"),alert("Item not added"))})}},{key:"render",value:function(){var e=this;return console.log(this.state.category),o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(N.a,{htmlFor:"category-native-simple"},"Category:"),o.a.createElement("select",{style:V,value:this.state.category,onChange:function(t){e.setState({category:t.target.value})}},this.state.categories.map(function(e){return o.a.createElement("option",{value:e.id},e.name)})),o.a.createElement(W.a,{variant:"fab",color:"primary","aria-label":"Add",style:F,onClick:this.onOpenModal},o.a.createElement(R.a,null)),o.a.createElement(U.a,{open:this.state.open,onClose:this.onCloseModal,center:!0},o.a.createElement("div",null,o.a.createElement(v.a,{hintText:"Enter category name",floatingLabelText:"category",onChange:function(t,a){e.setState({CategoryName:a})},margin:"normal"}),o.a.createElement("br",null),o.a.createElement(d.a,{label:"Submit",primary:!0,style:J,onClick:function(t){return e.handleModalClick(t)}}))),o.a.createElement("br",null),o.a.createElement(v.a,{hintText:"Enter item",floatingLabelText:"Item",onChange:function(t,a){e.setState({content:a})},margin:"normal"}),o.a.createElement("br",null),o.a.createElement(v.a,{hintText:"Enter value",type:"number",floatingLabelText:"Value",onChange:function(t,a){e.setState({price:a})},margin:"normal"}),o.a.createElement("br",null),o.a.createElement(d.a,{label:"Submit",primary:!0,style:J,onClick:function(t){return e.handleClick(t)}}))))}}]),t}(n.Component),J={margin:15},V={"margin-top":20,"margin-left":10},F={"margin-left":15,"margin-top":10},$=H,q=a(159),z=a.n(q),D=a(161),G=a.n(D),K=a(39),Q=a.n(K),X=a(160),Y=a.n(X),Z=a(100),_=a.n(Z),ee=(a(150),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={categories:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;C.a.get("https://expense-manager-t.herokuapp.com/api/users/"+this.props.userid+"/categories").then(function(t){console.log(t.data),e.setState({categories:t.data})}),console.log(this.state.categories)}},{key:"componentWillUpdate",value:function(){var e=this;C.a.get("https://expense-manager-t.herokuapp.com/api/users/"+this.props.userid+"/categories").then(function(t){console.log(t.data),e.setState({categories:t.data}),e.props.update=!1}),console.log(this.state.categories)}},{key:"render",value:function(){return o.a.createElement("div",{className:"table"},o.a.createElement(z.a,null,o.a.createElement(Y.a,null,o.a.createElement(_.a,null,o.a.createElement(Q.a,{numeric:!0},"Id"),o.a.createElement(Q.a,null,"Item"),o.a.createElement(Q.a,{numeric:!0},"Price (L)"),o.a.createElement(Q.a,null,"Category"))),o.a.createElement(G.a,null,this.state.categories.map(function(e,t){if(null!=e.items)return e.items.map(function(t){return o.a.createElement(_.a,{key:e.id},o.a.createElement(Q.a,{component:"th",scope:"row",numeric:!0},t.id),o.a.createElement(Q.a,null,t.content),o.a.createElement(Q.a,{numeric:!0},t.price),o.a.createElement(Q.a,null,e.name))})}))))}}]),t}(n.Component)),te=a(437),ae=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={userid:"",categories:[],update:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return null==this.props.history.location.state?o.a.createElement(te.a,{to:"/"}):null!=this.props.history.location.state?1==this.props.history.location.state.isLogged?(this.state.categories=this.props.history.location.state.Categories,this.state.userid=this.props.history.location.state.userId,console.log(this.state.userid),o.a.createElement("div",{className:"ExpenseScreen"},o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(f.a,{title:"Expense Manager",showMenuIconButton:!1}),o.a.createElement($,{categories:this.state.categories,userid:this.state.userid,update:this.state.update}),o.a.createElement(ee,{userid:this.state.userid,update:this.state.update}))))):o.a.createElement(te.a,{to:"/"}):void 0}}]),t}(n.Component),ne=a(436),oe=a(435);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(163),re=a.n(se),le=o.a.createElement(ne.a,null,o.a.createElement(re.a,null,o.a.createElement(oe.a,{exact:!0,path:"/",component:I}),o.a.createElement(oe.a,{path:"/expense",component:ae})));r.a.render(le,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[164,2,1]]]);
//# sourceMappingURL=main.7bcd9674.chunk.js.map