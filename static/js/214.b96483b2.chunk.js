"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[214],{214:function(t,n,e){e.r(n),e.d(n,{default:function(){return Z}});var a=e(942),r=e(152),c=e(439),o=e(791),s=e(652),i=e(141),l=e(434),u={name:"",number:"",importantContact:!1},m="contact-form_wrapper__s1ex-",d="contact-form_label__5BXR4",f="contact-form_input__ddo+t",p="contact-form_btn__A8oGL",h="contact-form_checkbox__8PTJO",x=e(329),_=function(){var t=(0,o.useState)((0,r.Z)({},u)),n=(0,c.Z)(t,2),e=n[0],_=n[1],b=(0,l.v9)(i.mk),v=(0,l.I0)(),j=function(t){var n=t.target,e=n.name,c=n.value,o=n.type,s=n.checked,i="checkbox"===o?s:c;_((function(t){return(0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},e,i))}))},C=function(t){var n=t.name,e=t.number,a=t.importantContact;if(function(t){var n=t.toLowerCase(),e=b.find((function(t){return t.name.toLowerCase()===n}));return Boolean(e)}(n))return alert("".concat(n," is already in contacts.")),!1;var r=(0,s.uK)({name:n,number:e,importantContact:a});v(r)},N=e.name,k=e.number,w=e.importantContact;return(0,x.jsxs)("form",{className:m,onSubmit:function(t){t.preventDefault(),C((0,r.Z)({},e)),_((0,r.Z)({},u))},children:[(0,x.jsx)("label",{className:d,children:"Name"}),(0,x.jsx)("input",{className:f,value:N,type:"text",name:"name",onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,x.jsx)("label",{className:d,children:"Number"}),(0,x.jsx)("input",{className:f,value:k,type:"tel",name:"number",onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,x.jsx)("label",{className:d,children:"Important Contact"}),(0,x.jsx)("input",{className:h,name:"importantContact",checked:w,type:"checkbox",onChange:j}),(0,x.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},b=e(653),v=function(t){return t.filter},j={wrapperFilter:"filter-phonebook_wrapperFilter__ciemP",inputFilter:"filter-phonebook_inputFilter__Ep+md"},C=function(){var t=(0,l.v9)(v),n=(0,l.I0)();return(0,x.jsxs)("form",{className:j.wrapperFilter,children:[(0,x.jsx)("label",{className:j.labelFilter,children:"Find contacts by name"}),(0,x.jsx)("input",{value:t,className:j.inputFilter,type:"text",name:"filter",onChange:function(t){var e=t.target;n((0,b.T)(e.value))}})]})},N="contact-list_contactsList__Ab1Ox",k="contact-list_contactsText__Try7T",w="contact-list_contactsBtn__BU7fk",y=function(){var t=(0,l.v9)(i.F4),n=(0,l.v9)(i.mk),e=(0,l.I0)(),a=t.map((function(t){var n=t.id,a=t.name,r=t.number,c=t.importantContact;return(0,x.jsxs)("li",{style:{fontWeight:c?"bold":"normal"},children:[(0,x.jsxs)("span",{className:k,children:[a,": ",r]}),(0,x.jsx)("button",{className:w,onClick:function(){return function(t){var n=(0,s.GK)(t);e(n)}(n)},children:"Delete"})]},n)})),r=Boolean(n.length);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("ul",{className:N,children:a})}),!r&&(0,x.jsx)("p",{children:"No contacts"})]})},F={},g=function(){return(0,x.jsxs)("main",{className:F.conteinerPhonebook,children:[(0,x.jsx)(_,{}),(0,x.jsx)("h2",{className:F.text,children:"Contacts"}),(0,x.jsx)(C,{}),(0,x.jsx)(y,{})]})},Z=function(){return(0,x.jsx)(g,{})}},141:function(t,n,e){e.d(n,{F4:function(){return c},SA:function(){return r},mk:function(){return a}});var a=function(t){return t.contacts},r=function(t){return t.contacts.filter((function(t){return t.importantContact}))},c=function(t){var n=t.contacts,e=t.filter;if(!e)return n;var a=e.toLowerCase();return n.filter((function(t){var n=t.name,e=t.number;return n.toLowerCase().includes(a)||e.toLowerCase().includes(a)}))}}}]);
//# sourceMappingURL=214.b96483b2.chunk.js.map