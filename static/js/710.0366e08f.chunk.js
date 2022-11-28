"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[710],{710:function(n,r,e){e.r(r),e.d(r,{default:function(){return H}});var o,t,a,c,i,s,d,l,u,p,x,b,m,f=e(2791),g=e(9434),h=function(n){return n.contacts.items},Z=function(n){return n.contacts.isLoading},j=e(6052),k=e(5705),v=e(7103),y=e(5562),w=e(168),C=e(6444),P=(0,C.ZP)(k.l0)(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n  border: 2px dotted black;\n  border-radius: 5px;\n  padding: 10px;\n  color: rgb(15, 103, 165);\n  background-color: rgb(183, 220, 230);\n"]))),D=C.ZP.label(t||(t=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),N=C.ZP.span(a||(a=(0,w.Z)(["\nmargin-bottom: 5px;\n"]))),E=(0,C.ZP)(k.gN)(c||(c=(0,w.Z)(["\n  background-color: white;\n  border: 1px solid black;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));\n  border-radius: 4px;\n  padding: 10px;\n  color: rgb(15, 103, 165);\n"]))),L=(0,C.ZP)(k.Bc)(i||(i=(0,w.Z)(["\ncolor: red;\n"]))),_=C.ZP.button(s||(s=(0,w.Z)(["\n  cursor: pointer;\n  background-color: #5EC4CD;\n  line-height: 1.62;\n  border: transparent;\n  padding: 6px 22px;\n  width: 120px;\n  border-radius: 5px;\n  color: black;\n  border: 1px solid black;\n  &:hover,\n  &:focus {\n    color: black;\n    background-color: #5EC4CD;\n    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),\n      0px 2px 2px rgb(0 0 0 / 12%);\n  }\n"]))),F=e(3329),I=v.Ry().shape({name:v.Z_().required(),number:v.Rx().positive().integer().required()}),q=function(){var n=(0,g.I0)(),r=(0,g.v9)(h);return(0,F.jsx)(k.J9,{initialValues:{name:"",number:""},onSubmit:function(e,o){var t={createdAt:new Date,name:e.name,number:e.number},a=e.name.toLowerCase();r.find((function(n){return n.name.toLowerCase()===a}))?y.Notify.warning("".concat(e.name," is already in contacts")):function(r){y.Notify.success("".concat(e.name," has been added to your contacts")),n((0,j.uK)(r))}(t),o.resetForm()},validationSchema:I,children:(0,F.jsxs)(P,{children:[(0,F.jsxs)(D,{children:[(0,F.jsx)(N,{children:"Name"}),(0,F.jsx)(E,{type:"text",name:"name"}),(0,F.jsx)(L,{name:"name",component:"span"})]}),(0,F.jsxs)(D,{children:[(0,F.jsx)(N,{children:"Number"}),(0,F.jsx)(E,{type:"tel",name:"number"}),(0,F.jsx)(L,{name:"number",component:"span"})]}),(0,F.jsx)(_,{type:"submit",children:"Add contact"})]})})},R=C.ZP.li(d||(d=(0,w.Z)(["\ndisplay: flex;\njustify-content: space-between;\n&:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),A=C.ZP.span(l||(l=(0,w.Z)(["\ncolor: rgb(15, 103, 165);\n"]))),K=C.ZP.button(u||(u=(0,w.Z)(["font-family: var(--font);\n  cursor: pointer;\n  background-color: #5EC4CD;\n  line-height: 1.62;\n  border: transparent;\n  border-radius: 5px;\n  color: black;\n  border: 1px solid black;\n\n&:hover,\n&:focus {\n  color: black;\n  background-color: #5EC4CD;\n  box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),\n    0px 2px 2px rgb(0 0 0 / 12%);\n    "]))),S=function(n){var r=n.id,e=n.name,o=n.number,t=(0,g.I0)();return(0,F.jsxs)(R,{children:[(0,F.jsxs)(A,{children:[e,": ",o]}),(0,F.jsx)(K,{type:"button",onClick:function(){return function(n){y.Notify.success("".concat(e," has been removed from your contacts")),t((0,j.GK)(n))}(r)},children:"Delete"})]},r)},B=C.ZP.ul(p||(p=(0,w.Z)(["\n  color: black;\n  border: 2px solid black);\n  border-radius: 5px;\n  padding: 10px;\n "]))),G=function(n){return n.filter},J=function(){var n=(0,g.v9)(G),r=(0,g.v9)(h);return(0,F.jsx)(B,{children:function(){var e=n.toLowerCase();return r.filter((function(n){return n.name.toLowerCase().includes(e)}))}().map((function(n){return(0,F.jsx)(S,{name:n.name,number:n.number,id:n.id},n.id)}))})},M=e(1634),T=C.ZP.label(x||(x=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),V=C.ZP.span(b||(b=(0,w.Z)(["\ncolor: rgb(15, 103, 165);\nmargin-bottom: 10px;\n"]))),Y=C.ZP.input(m||(m=(0,w.Z)(["\n  background-color: white;\n  border: 1px solid black;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));\n  border-radius: 4px;\n  padding: 10px;\n  color: rgb(15, 103, 165);\n"]))),z=function(){var n=(0,g.v9)(G),r=(0,g.I0)();return(0,F.jsxs)(T,{children:[(0,F.jsx)(V,{children:"Find contacts by name"}),(0,F.jsx)(Y,{type:"text",name:"filter",value:n,onChange:function(n){return r((0,M.M)(n.currentTarget.value))}})]})};function H(){var n=(0,g.I0)(),r=(0,g.v9)(Z);return(0,f.useEffect)((function(){n((0,j.yF)())}),[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("h2",{children:"Your Contacts"}),(0,F.jsx)(q,{}),(0,F.jsx)("div",{children:r&&"Request in progress"}),(0,F.jsx)(z,{}),(0,F.jsx)(J,{})]})}}}]);
//# sourceMappingURL=710.0366e08f.chunk.js.map