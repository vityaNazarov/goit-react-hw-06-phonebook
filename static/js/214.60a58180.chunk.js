"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[214],{214:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var a=e(942),r=e(152),c=e(439),o=e(791),s=e(652),i=e(141),l=e(434),u={name:"",number:"",importantContact:!1},m="contact-form_wrapper__s1ex-",d="contact-form_label__5BXR4",p="contact-form_input__ddo+t",f="contact-form_btn__A8oGL",h=e(329),x=function(){var t=(0,o.useState)((0,r.Z)({},u)),n=(0,c.Z)(t,2),e=n[0],x=n[1],b=(0,l.v9)(i.mk),_=(0,l.I0)(),v=function(t){var n=t.target,e=n.name,c=n.value,o=n.type,s=n.checked,i="checkbox"===o?s:c;x((function(t){return(0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},e,i))}))},j=function(t){var n=t.name,e=t.number,a=t.importantContact;if(function(t){var n=t.toLowerCase(),e=b.find((function(t){return t.name.toLowerCase()===n}));return Boolean(e)}(n))return alert("".concat(n," is already in contacts.")),!1;var r=(0,s.uK)({name:n,number:e,importantContact:a});_(r)},C=e.name,N=e.number,k=e.importantContact;return(0,h.jsxs)("form",{className:m,onSubmit:function(t){t.preventDefault(),j((0,r.Z)({},e)),x((0,r.Z)({},u))},children:[(0,h.jsx)("label",{className:d,children:"Name"}),(0,h.jsx)("input",{className:p,value:C,type:"text",name:"name",onChange:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,h.jsx)("label",{className:d,children:"Number"}),(0,h.jsx)("input",{className:p,value:N,type:"tel",name:"number",onChange:v,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,h.jsx)("label",{className:d,children:"Important Contact"}),(0,h.jsx)("input",{name:"importantContact",checked:k,type:"checkbox",onChange:v}),(0,h.jsx)("button",{className:f,type:"submit",children:"Add contact"})]})},b=e(653),_=function(t){return t.filter},v={wrapperFilter:"filter-phonebook_wrapperFilter__ciemP",inputFilter:"filter-phonebook_inputFilter__Ep+md"},j=function(){var t=(0,l.v9)(_),n=(0,l.I0)();return(0,h.jsxs)("form",{className:v.wrapperFilter,children:[(0,h.jsx)("label",{className:v.labelFilter,children:"Find contacts by name"}),(0,h.jsx)("input",{value:t,className:v.inputFilter,type:"text",name:"filter",onChange:function(t){var e=t.target;n((0,b.T)(e.value))}})]})},C="contact-list_contactsList__Ab1Ox",N="contact-list_contactsText__Try7T",k="contact-list_contactsBtn__BU7fk",w=function(){var t=(0,l.v9)(i.F4),n=(0,l.v9)(i.mk),e=(0,l.I0)(),a=t.map((function(t){var n=t.id,a=t.name,r=t.number,c=t.importantContact;return(0,h.jsxs)("li",{style:{fontWeight:c?"bold":"normal"},children:[(0,h.jsxs)("span",{className:N,children:[a,": ",r]}),(0,h.jsx)("button",{className:k,onClick:function(){return function(t){var n=(0,s.GK)(t);e(n)}(n)},children:"Delete"})]},n)})),r=Boolean(n.length);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:(0,h.jsx)("ul",{className:C,children:a})}),!r&&(0,h.jsx)("p",{children:"No contacts"})]})},y={},F=function(){return(0,h.jsxs)("main",{className:y.conteinerPhonebook,children:[(0,h.jsx)(x,{}),(0,h.jsx)("h2",{className:y.text,children:"Contacts"}),(0,h.jsx)(j,{}),(0,h.jsx)(w,{})]})},g=function(){return(0,h.jsx)(F,{})}},141:function(t,n,e){e.d(n,{F4:function(){return c},SA:function(){return r},mk:function(){return a}});var a=function(t){return t.contacts},r=function(t){return t.contacts.filter((function(t){return t.importantContact}))},c=function(t){var n=t.contacts,e=t.filter;if(!e)return n;var a=e.toLowerCase();return n.filter((function(t){var n=t.name,e=t.number;return n.toLowerCase().includes(a)||e.toLowerCase().includes(a)}))}}}]);
//# sourceMappingURL=214.60a58180.chunk.js.map