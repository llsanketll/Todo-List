(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),c=n.n(r),o=(n(15),n(1)),s=n(2),l=n(4),u=n(3),m=n(9),d=n(5),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClick=function(e){a.props.deleteItem(a.props.item.id)},a.handleStrike=function(e){a.props.lineThrough(a.props.item.id)},a.handleEdit=function(e){a.setState({isEditing:!0})},a.handleSubmit=function(e){e.preventDefault(),a.setState({isEditing:!1})},a.handleChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.state={editText:a.props.item.text,isEditing:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.item.done?"strike":"";return this.state.isEditing?i.a.createElement("div",{className:"TodoComponent"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",value:this.state.editText,onChange:this.handleChange,name:"editText"}),i.a.createElement("button",{type:"submit"},"Save"))):i.a.createElement("div",{className:"TodoComponent"},i.a.createElement("p",{onClick:this.handleStrike,className:e},this.state.editText),i.a.createElement("div",{className:"Buttons"},i.a.createElement("button",{onClick:this.handleEdit,className:"Edit"},"E"),i.a.createElement("button",{onClick:this.handleClick,className:"Delete"},"x")))}}]),n}(a.Component),p=n(6),f=n(19),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={text:""},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.text&&(e.props.addItem(Object(p.a)(Object(p.a)({},e.state),{},{id:Object(f.a)(),done:!1})),e.setState({text:""}),t.target.reset())},e}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onChange:this.handleChange,onSubmit:this.handleSubmit,className:"TodoForm"},i.a.createElement("input",{type:"text",name:"text",autoComplete:"off"}),i.a.createElement("button",{type:"submit"}," Add ")))}}]),n}(a.Component),E=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).addItem=function(e){a.setState((function(t){return{items:[].concat(Object(m.a)(t.items),[e])}}))},a.deleteItem=function(e){var t=a.state.items.filter((function(t){return t.id!==e}));a.setState({items:t})},a.lineThrough=function(e){var t=a.state.items.map((function(t){return t.id===e&&(t.done=!t.done),t}));a.setState({items:t})},a.state={items:[]},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state.items.map((function(t){return i.a.createElement("li",{key:t.id},i.a.createElement(h,{item:t,deleteItem:e.deleteItem,lineThrough:e.lineThrough}))}));return i.a.createElement("div",{className:"TodoList"},i.a.createElement(b,{addItem:this.addItem}),i.a.createElement("ul",null,t))}}]),n}(a.Component)),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null," Todo List "),i.a.createElement(E,null))}}]),n}(a.Component);c.a.render(i.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e4efae4f.chunk.js.map