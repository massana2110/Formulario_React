(this.webpackJsonpformulario_react=this.webpackJsonpformulario_react||[]).push([[0],{16:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(2),l=a(3),c=a(5),s=a(4),o=a(6),i=a(0),u=a.n(i),m=a(11),d=a.n(m),h=(a(22),a(14)),E=a(15),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).addEvents=function(e){a.state.registros.push(e),a.setState({registros:a.state.registros})},a.updateRegistry=function(e){a.setState({registros:e})},a.state={registros:[]},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"jumbotron"},u.a.createElement(b,{addEvents:this.addEvents})),u.a.createElement("section",null,u.a.createElement(v,{registros:this.state.registros,updateRegistry:this.updateRegistry})))}}]),t}(u.a.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).changeHandler=function(e){a.setState(Object(n.a)({},e.target.name,e.target.value))},a.changeCheckHandler=function(){a.setState({isLate:!a.state.isLate})},a.clearForm=function(){a.setState({carnet:"",schedule:"Lunes de 9:00 a 11:00"})},a.handleRegistry=function(e){var t=new Date,n=a.state.isLate?"Tarde":"A tiempo",r={carnet:a.state.carnet,schedule:a.state.schedule,late:n,date:t};a.props.addEvents(r),a.clearForm()},a.state={carnet:"",schedule:"Lunes de 9:00 a 11:00",isLate:!1},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"jumbotron",style:{height:350}},u.a.createElement("h1",null,"Registro de laboratorio."),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"carnet",className:"col-sm-2 col-form-label"},"Ingrese el carnet:"," "),u.a.createElement("input",{className:"form-control",type:"text",name:"carnet",value:this.state.carnet,onChange:this.changeHandler,maxLength:"8"})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"schedule"},"Seleccione el horario:"),u.a.createElement("select",{name:"schedule",value:this.state.schedule,className:"form-control",onChange:this.changeHandler},u.a.createElement("option",{value:"Lunes de 9:00 a 11:00"},"Lunes de 9:00 a 11:00"),u.a.createElement("option",{value:"Martes de 13:30 a 15:30"},"Martes de 13:30 a 15:30"),u.a.createElement("option",{value:"Mi\xe9rcoles de 9:00 a 11.00"},"Mi\xe9rcoles de 9:00 a 11.00"),u.a.createElement("option",{value:"Jueves de 13:30 a 15:30"},"Jueves de 13:30 a 15:30"),u.a.createElement("option",{value:"Viernes de 9:00 a 11:00"},"Viernes de 9:00 a 11:00"),u.a.createElement("option",{value:"Viernes de 15:30 a 17:30"},"Viernes de 15:30 a 17:30"))),u.a.createElement("div",{className:"form-group"},u.a.createElement(h.a.Switch,{type:"switch",id:"custom-switch",label:"Lleg\xf3 tarde?",onChange:this.changeCheckHandler})),u.a.createElement("div",{className:"form-group"},u.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.handleRegistry,disabled:g(this.state.carnet)},"Ingresar")))}}]),t}(u.a.Component);function g(e){return!new RegExp("[0-9]{8}").test(e)}var v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).handleDelete=function(e){var t=a.props.registros;t.splice(e,1),a.props.updateRegistry(t)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("table",{className:"table table-hover"},u.a.createElement("thead",null,u.a.createElement("tr",{className:"table-dark"},u.a.createElement("th",{scope:"col"},"Carnet"),u.a.createElement("th",{scope:"col"},"Horario de laboratorio"),u.a.createElement("th",{scope:"col"},"Hora de ingreso"),u.a.createElement("th",{scope:"col"},"Tarde?"),u.a.createElement("th",{scope:"col"},"Eliminar"))),u.a.createElement("tbody",{id:"table_body"},this.props.registros.map((function(t,a){return u.a.createElement("tr",{key:a,className:"active"},u.a.createElement("td",null,u.a.createElement("b",null,t.carnet)),u.a.createElement("td",null,t.schedule),u.a.createElement("td",null,t.date.toLocaleString()),u.a.createElement("td",null,t.late),u.a.createElement("td",null,u.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.handleDelete(a)}},u.a.createElement(E.a,null))))}))))}}]),t}(u.a.Component);d.a.render(u.a.createElement(p,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ac9833ca.chunk.js.map