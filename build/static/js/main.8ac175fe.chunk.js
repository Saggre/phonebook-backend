(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{25:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),o=t.n(r),i=t(16),u=t.n(i),a=(t(25),t(19)),s=t(5),f=function(e){var n=e.searchText,t=e.onChange;return Object(c.jsxs)(c.Fragment,{children:["filter shown with: ",Object(c.jsx)("input",{value:n,onChange:t})]})},d=t(17),l=t(18),j=function(){function e(){Object(d.a)(this,e),this.id=0,this.name="",this.number=""}return Object(l.a)(e,[{key:"equals",value:function(e){return this.id===e.id||this.name.toLowerCase()===e.name.toLowerCase()}}],[{key:"from",value:function(n){return Object.assign(new e,n)}}]),e}(),m=function(e){var n=e.onSubmit,t=e.onChange,r=e.person,o=function(e){var n=j.from(r);n[e.target.name]=e.target.value,t(n)};return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{name:"name",value:r.name,onChange:o})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{name:"number",value:r.number,onChange:o})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},b=function(e){var n=e.person,t=e.onDelete;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("li",{children:[n.name," ",n.number,"\xa0",Object(c.jsx)("button",{onClick:t,children:"delete"})]})})},h=function(e){var n=e.persons,t=e.searchText,r=e.onDelete;return Object(c.jsx)("ul",{children:n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return Object(c.jsx)(b,{person:e,onDelete:function(){return r(e)}},e.name)}))})},O=function(e){var n=e.message;return null==n?Object(c.jsx)("div",{}):Object(c.jsx)("div",{className:"notification notification--".concat(n.type),children:n.text})},x=t(4),p=t.n(x),v="/api/persons",g=function(){return p.a.get(v).then((function(e){return e.data.map((function(e){return j.from(e)}))}))},w=function(e){return delete e.id,p.a.post(v,e)},y=function(e){return p.a.put("".concat(v,"/").concat(e.id),e)},C=function(e){return p.a.delete("".concat(v,"/").concat(e.id))},k=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(""),u=Object(s.a)(i,2),d=u[0],l=u[1],b=Object(r.useState)(new j),x=Object(s.a)(b,2),p=x[0],v=x[1],k=Object(r.useState)(null),T=Object(s.a)(k,2),S=T[0],D=T[1],q=3e3;Object(r.useEffect)((function(){g().then((function(e){return o(e)}))}),[]);var A=function(){return v(new j)},L=function(e){y(e).then((function(){o(t.map((function(n){return n.id===e.id?e:n}))),A(),D({type:"success",text:"Updated ".concat(e.name)}),setTimeout((function(){D(null)}),q)})).catch((function(){D({type:"error",text:"Information of ".concat(e.name," has already been removed from the server")}),setTimeout((function(){D(null)}),q),o(t.filter((function(n){return n.id!==e.id})))}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(O,{message:S}),Object(c.jsx)(f,{text:d,onChange:function(e){l(e.target.value)}}),Object(c.jsx)("h2",{children:"Add a new"}),Object(c.jsx)(m,{onSubmit:function(e){e.preventDefault(),function(e){if(0!==e.name.length){for(var n=0;n<t.length;n++)if(e.equals(t[n]))return e.id=t[n].id,void(window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a new one?"))&&L(e));w(e).then((function(n){o([].concat(Object(a.a)(t),[j.from(n.data)])),A(),D({type:"success",text:"Added ".concat(e.name)}),setTimeout((function(){D(null)}),q)})).catch((function(){D({type:"error",text:"An error occurred"}),setTimeout((function(){D(null)}),q)}))}}(p)},onChange:function(e){v(e)},person:p}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(h,{persons:t,searchText:d,onDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&C(e).then((function(n){o(t.filter((function(n){return!n.equals(e)}))),D({type:"success",text:"Removed ".concat(e.name)}),setTimeout((function(){D(null)}),q)})).catch((function(){D({type:"error",text:"".concat(e.name," was already removed from the server")}),setTimeout((function(){D(null)}),q),o(t.filter((function(n){return n.id!==e.id})))}))}})]})};u.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.8ac175fe.chunk.js.map