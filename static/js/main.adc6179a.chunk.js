(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=(n(16),n(11)),s=n(2),l=n.p+"static/media/logo.5f0f2709.svg",p=n(0);var u=function(){return Object(p.jsx)("header",{className:"header page__position-center page__header",children:Object(p.jsx)("a",{href:"/index",target:"_self",className:"header__link",children:Object(p.jsx)("img",{src:l,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"})})})},d=c.a.createContext();var j=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,r=e.onCardDelete,o=t.owner,i=t.link,s=t.name,l=t.likes,u=Object(a.useContext)(d)._id;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("li",{className:"place__item",children:Object(p.jsxs)("div",{className:"card-place",children:[Object(p.jsx)("button",{className:o._id===u?"card-place__delete-btn":"card-place__delete-btn card-place__delete-btn_display_none",onClick:function(){return r(t)}}),Object(p.jsx)("img",{src:i,alt:s,className:"card-place__img",onClick:function(){return n(s,i)}}),Object(p.jsx)("h2",{className:"card-place__title",children:s}),Object(p.jsxs)("div",{className:"card-place__likes",children:[Object(p.jsx)("button",{className:l.length>0&&l.some((function(e){return e._id===u}))?"card-place__like-btn card-place__like-btn_active":"card-place__like-btn",type:"button",onClick:function(){return c(t)}}),Object(p.jsx)("span",{className:"card-place__counter",children:l.length})]})]})})})},b=n.p+"static/media/profile-btn-edit.1e29eae2.svg",_=c.a.createContext();var m=function(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,r=e.onCardClick,o=e.onCardLike,i=e.onCardDelete,s=Object(a.useContext)(d),l=s.avatar,u=s.about,m=s.name,f=Object(a.useContext)(_);return Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile content__position-center content__profile",children:[Object(p.jsxs)("div",{className:"profile__img-container",children:[Object(p.jsx)("img",{src:l,alt:"\u041f\u043e\u0440\u0442\u0440\u0435\u0442",className:"profile__img",style:{backgroundImage:"url(".concat(l,")")}}),Object(p.jsx)("img",{src:b,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",className:"profile__edit-img",onClick:t})]}),Object(p.jsxs)("div",{className:"profile__about",children:[Object(p.jsxs)("div",{className:"profile__container-text",children:[Object(p.jsx)("h1",{className:"profile__title-name",children:u}),Object(p.jsx)("p",{className:"profile__subtitle-does",children:m})]}),Object(p.jsx)("button",{className:"profile__edit-btn",type:"button",onClick:n})]}),Object(p.jsx)("button",{className:"profile__add-card-place",type:"button",onClick:c})]}),Object(p.jsx)("section",{className:"place content__position-center content__place",children:Object(p.jsx)("ul",{className:"place__list",children:f.length>0?f.map((function(e){return Object(p.jsx)(j,{card:e,onCardClick:r,onCardLike:o,onCardDelete:i},e._id)})):Object(p.jsx)("div",{className:"plase__result"})})})]})};var f=function(){return Object(p.jsx)("footer",{className:"footer page__position-center page__footer",children:Object(p.jsx)("p",{className:"footer__text-copyright",children:"\xa9 2020 Mesto Russia"})})};var h=function(e){var t=e.card,n=t.name,a=t.link,c=e.nameSelector,r=e.isOpen,o=e.onClose;return Object(p.jsx)("div",{className:r?"popup ".concat(c," popup_opened"):"popup ".concat(c),onClick:function(e){e.target.className==="popup ".concat(c," popup_opened")&&o()},children:Object(p.jsxs)("div",{className:"popup__container popup__container_review_img",children:[Object(p.jsx)("button",{className:"popup__btn",type:"button",onClick:o}),Object(p.jsxs)("figure",{className:"popup__img-container",children:[Object(p.jsx)("img",{src:a,className:"popup__img",alt:n}),Object(p.jsx)("figcaption",{className:"popup__img-text",children:n})]})]})})};var O=function(e){var t=e.title,n=e.name,a=e.isOpen,c=e.onClose,r=e.children,o=e.onSubmit;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:a?"popup ".concat(n," popup_opened"):"popup ".concat(n),onClick:function(e){e.target.className==="popup ".concat(n," popup_opened")&&c()},children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{className:"popup__btn",type:"button",onClick:c}),Object(p.jsxs)("form",{className:"popup__form",name:n,onSubmit:o,children:[Object(p.jsx)("h2",{className:"popup__form-title",children:t}),r]})]})})})},v=Object(a.createContext)(),g={length:function(e,t,n){if(e>0)return n.length>e&&n.length<t},fieldType:function(e,t){switch(e){case"url":return function(e){return e.startsWith("https://")}(t);default:return!0}}},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g.lengthIsValid=g.length(t,n,e),g.fieldTypeValid=g.fieldType(a,e),!(!g.lengthIsValid||!g.fieldTypeValid)};var C=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,r=e.loading,o=Object(a.useState)({profileName:"",profileDoes:""}),i=Object(s.a)(o,2),l=i[0],u=i[1],j=l.profileName,b=l.profileDoes,_=Object(a.useState)(!1),m=Object(s.a)(_,2),f=m[0],h=m[1],g=Object(a.useState)(!1),x=Object(s.a)(g,2),C=x[0],N=x[1],k=Object(a.useContext)(d),y=k.about,S=k.name,P=Object(a.useContext)(v);Object(a.useEffect)((function(){u({profileName:y,profileDoes:S})}),[y,S]),Object(a.useEffect)((function(){var e=P(l.profileName,2,40),t=P(l.profileDoes,2,200);h(e),N(t)}),[l,P]);var E=function(e){u((function(t){var n=Object.assign({},t);return n[e.target.name]=e.target.value,n}))};return Object(p.jsx)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"popup_edit_profile",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c(l)},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{className:"popup__form-label",children:[Object(p.jsx)("input",{type:"text",className:"popup__form-input popup__form-input_value_name",id:"profile-name-input",placeholder:"\u0418\u043c\u044f",name:"profileName",minLength:"2",maxLength:"40",required:!0,value:j,onChange:E,style:{borderBottom:f?"":"1px solid red"}}),Object(p.jsx)("span",{className:f?"popup__error-message profile-name-input-error":"popup__error-message profile-name-input-error popup__error-message_active",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"})]}),Object(p.jsxs)("label",{className:"popup__form-label",children:[Object(p.jsx)("input",{type:"text",className:"popup__form-input popup__form-input_value_does",id:"profile-does-input",placeholder:"\u0414\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",name:"profileDoes",minLength:"2",maxLength:"200",required:!0,value:b,onChange:E,style:{borderBottom:C?"":"1px solid red"}}),Object(p.jsx)("span",{className:C?"popup__error-message profile-does-input-error":"popup__error-message profile-does-input-error popup__error-message_active",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"})]}),Object(p.jsx)("button",{className:"button-popup button-popup_edit_profile",type:"submit",disabled:!f||!C,style:{opacity:f&&C?"":".2"},children:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var N=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,r=e.loading,o=Object(a.useRef)();return Object(p.jsx)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"popup_edit_img",isOpen:t,onClose:function(){n(),o.current.value=""},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{className:"popup__form-label",children:[Object(p.jsx)("input",{type:"url",className:"popup__form-input",id:"url-img-edit",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"imgEdit",required:!0,ref:o}),Object(p.jsx)("span",{className:"popup__error-message url-img-edit-error"})]}),Object(p.jsx)("button",{className:"button-popup button-popup_edit_img",type:"submit",onClick:function(e){e.preventDefault(),c({avatar:o.current.value}),o.current.value=""},children:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var k=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,r=e.loading,o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],d=Object(a.useState)(""),j=Object(s.a)(d,2),b=j[0],_=j[1],m=Object(a.useState)("false"),f=Object(s.a)(m,2),h=f[0],g=f[1],x=Object(a.useState)("false"),C=Object(s.a)(x,2),N=C[0],k=C[1],y=Object(a.useContext)(v);return Object(a.useEffect)((function(){var e=y(l,2,30),t=y(b,1,1e4,"url");g(e),k(t)}),[l,b,y]),Object(p.jsx)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"popup_add_card",isOpen:t,onClose:function(){n(),u(""),_("")},onSubmit:function(e){e.preventDefault(),c({name:l,link:b}),u(""),_("")},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{className:"popup__form-label",children:[Object(p.jsx)("input",{type:"text",className:"popup__form-input popup__form-input_value_place",id:"place-name-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"placeName",minLength:"2",maxLength:"30",required:!0,value:l,onChange:function(e){return u(e.target.value)},style:{borderBottom:h?"":"1px solid red"}}),Object(p.jsx)("span",{className:h?"popup__error-message place-name-input-error":"popup__error-message place-name-input-error popup__error-message_active",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"})]}),Object(p.jsxs)("label",{className:"popup__form-label",children:[Object(p.jsx)("input",{type:"url",className:"popup__form-input popup__form-input_value_img",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"place-img-input",name:"placeImg",required:!0,value:b,onChange:function(e){return _(e.target.value)},style:{borderBottom:N?"":"1px solid red"}}),Object(p.jsx)("span",{className:N?"popup__error-message place-img-input-error":"popup__error-message place-img-input-error popup__error-message_active",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"})]}),Object(p.jsx)("button",{className:"button-popup button-popup_add_card",type:"submit",disabled:!h||!N,style:{opacity:h&&N?"":".2"},children:r?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})};var y=function(e){var t=e.isOpen,n=e.onClose,a=e.onRemoveCard,c=e.loading;return Object(p.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"popup_remove_card",isOpen:t,onClose:n,children:Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{className:"button-popup button-popup_delete_card",type:"submit",onClick:function(e){e.preventDefault(),a()},children:c?"\u0414\u0430...":"\u0414\u0430"})})})},S=n(9),P=n(10),E=n(3),L=n(4),U="https://mesto.nomoreparties.co/v1",D="8e942f57-cf63-4abe-b1a4-d7c8e2f5f3b4",A="cohort-23",w={user:"users/me",cards:"cards",cardLikes:"cards/likes"},T=Object(L.a)("baseUrl"),I=Object(L.a)("headers"),F=Object(L.a)("pathUser"),R=Object(L.a)("pathCards"),B=Object(L.a)("cardLikes"),q=new(function(){function e(t){var n=t.baseUrl,a=t.headers,c=t.paths,r=c.user,o=c.cards,i=c.cardLikes;Object(S.a)(this,e),Object.defineProperty(this,T,{writable:!0,value:void 0}),Object.defineProperty(this,I,{writable:!0,value:void 0}),Object.defineProperty(this,F,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,B,{writable:!0,value:void 0}),Object(E.a)(this,T)[T]=n,Object(E.a)(this,I)[I]=a,Object(E.a)(this,F)[F]=r,Object(E.a)(this,R)[R]=o,Object(E.a)(this,B)[B]=i}return Object(P.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"_serverConnectionGet",value:function(e){return fetch("".concat(Object(E.a)(this,T)[T],"/").concat(e),{headers:Object(E.a)(this,I)[I]}).then(this._checkResponse)}},{key:"_serverConnectionSend",value:function(e,t,n){return fetch("".concat(Object(E.a)(this,T)[T],"/").concat(e),{method:t,headers:Object(E.a)(this,I)[I],body:JSON.stringify(n)}).then(this._checkResponse)}},{key:"_serverConnectionEdit",value:function(e,t,n){return fetch("".concat(Object(E.a)(this,T)[T],"/").concat(e,"/").concat(n),{method:t,headers:Object(E.a)(this,I)[I]}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return this._serverConnectionGet(Object(E.a)(this,R)[R])}},{key:"getInitialUser",value:function(){return this._serverConnectionGet(Object(E.a)(this,F)[F])}},{key:"patchUpdateProfile",value:function(e,t){return this._serverConnectionSend(Object(E.a)(this,F)[F],"PATCH",{name:e,about:t})}},{key:"postAddCard",value:function(e,t){return this._serverConnectionSend(Object(E.a)(this,R)[R],"POST",{name:e,link:t})}},{key:"deleteCard",value:function(e){return this._serverConnectionEdit(Object(E.a)(this,R)[R],"DELETE",e)}},{key:"putAppendLike",value:function(e){return this._serverConnectionEdit(Object(E.a)(this,B)[B],"PUT",e)}},{key:"deleteLike",value:function(e){return this._serverConnectionEdit(Object(E.a)(this,B)[B],"DELETE",e)}},{key:"patchUpdateUserAvatar",value:function(e){return this._serverConnectionSend("".concat(Object(E.a)(this,F)[F],"/avatar"),"PATCH",{avatar:e})}}]),e}())({baseUrl:"".concat(U,"/").concat(A),headers:{authorization:D,"Content-Type":"application/json"},paths:w}),V=n.p+"static/media/preloaderProfileImg.e8e535d6.gif";var G=function(){var e=c.a.useState({}),t=Object(s.a)(e,2),n=t[0],r=t[1],o=c.a.useState(!1),l=Object(s.a)(o,2),j=l[0],b=l[1],O=c.a.useState(!1),g=Object(s.a)(O,2),S=g[0],P=g[1],E=c.a.useState(!1),L=Object(s.a)(E,2),U=L[0],D=L[1],A=c.a.useState(!1),w=Object(s.a)(A,2),T=w[0],I=w[1],F=c.a.useState(!1),R=Object(s.a)(F,2),B=R[0],G=R[1],J=c.a.useState({}),H=Object(s.a)(J,2),M=H[0],z=H[1],W=c.a.useState({about:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",name:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435",avatar:V}),K=Object(s.a)(W,2),Q=K[0],X=K[1],Y=c.a.useState([]),Z=Object(s.a)(Y,2),$=Z[0],ee=Z[1],te=c.a.useState(!1),ne=Object(s.a)(te,2),ae=ne[0],ce=ne[1];Object(a.useEffect)((function(){Promise.all([q.getInitialUser(),q.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];X(n),ee(a)}))}),[]);var re=function(e){"Escape"===e.key&&oe()};function oe(){D(!1),b(!1),P(!1),I(!1),G(!1)}return Object(a.useEffect)((function(){return(j||S||U||T)&&document.addEventListener("keydown",re),function(){document.removeEventListener("keydown",re)}}),[j,S,U,T]),Object(p.jsx)(d.Provider,{value:Q,children:Object(p.jsxs)(_.Provider,{value:$,children:[Object(p.jsx)(u,{}),Object(p.jsx)(m,{onEditAvatar:function(){D(!0)},onEditProfile:function(){b(!0)},onAddPlace:function(){P(!0)},onCardClick:function(e,t){r({name:e,link:t}),I(!0)},onCardLike:function(e){var t;e.likes.some((function(e){return e._id===Q._id}))?(t=e._id,q.deleteLike(t).then((function(e){ee((function(n){return n.map((function(n){return n._id===t?e:n}))}))}))):function(e){q.putAppendLike(e).then((function(t){ee((function(n){return n.map((function(n){return n._id===e?t:n}))}))}))}(e._id)},onCardDelete:function(e){G(!0),z(e)}}),Object(p.jsx)(f,{}),Object(p.jsxs)(v.Provider,{value:x,children:[Object(p.jsx)(C,{isOpen:j,onClose:oe,onUpdateUser:function(e){var t=e.profileDoes,n=e.profileName;ce(!0),q.patchUpdateProfile(t,n).then((function(e){X(e),oe()})).finally((function(){ce(!1)}))},loading:ae}),Object(p.jsx)(N,{isOpen:U,onClose:oe,onUpdateAvatar:function(e){var t=e.avatar;ce(!0),q.patchUpdateUserAvatar(t).then((function(e){X(e),oe()})).finally((function(){ce(!1)}))},loading:ae}),Object(p.jsx)(k,{isOpen:S,onClose:oe,onAddPlace:function(e){var t=e.name,n=e.link;q.postAddCard(t,n).then((function(e){ee([e].concat(Object(i.a)($))),oe()}))},loading:ae}),Object(p.jsx)(y,{isOpen:B,onClose:oe,onRemoveCard:function(){ce(!0),q.deleteCard(M._id).then((function(e){ee((function(e){return e.filter((function(e){return e._id!==M._id}))})),oe()})).finally((function(){ce(!1)}))},loading:ae})]}),Object(p.jsx)(h,{card:n,name:"popup_edit_img",isOpen:T,onClose:oe})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),J()}},[[18,1,2]]]);
//# sourceMappingURL=main.adc6179a.chunk.js.map