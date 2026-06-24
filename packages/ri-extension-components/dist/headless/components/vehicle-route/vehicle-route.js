"use strict";(()=>{var ve=Object.defineProperty;var ye=Object.getOwnPropertyDescriptor;var m=(i,t,e,r)=>{for(var n=r>1?void 0:r?ye(t,e):t,o=i.length-1,a;o>=0;o--)(a=i[o])&&(n=(r?a(t,e,n):a(n))||n);return r&&n&&ve(t,e,n),n};var it=globalThis,ot=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,It=Symbol(),Lt=new WeakMap,nt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==It)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ot&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Lt.set(e,t))}return t}toString(){return this.cssText}},S=i=>new nt(typeof i=="string"?i:i+"",void 0,It);var zt=(i,t)=>{if(ot)i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let e of t){let r=document.createElement("style"),n=it.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},ht=ot?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return S(e)})(i):i;var{is:Se,defineProperty:xe,getOwnPropertyDescriptor:_e,getOwnPropertyNames:$e,getOwnPropertySymbols:Ae,getPrototypeOf:Ce}=Object,at=globalThis,Dt=at.trustedTypes,Ee=Dt?Dt.emptyScript:"",we=at.reactiveElementPolyfillSupport,N=(i,t)=>i,M={toAttribute(i,t){switch(t){case Boolean:i=i?Ee:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},st=(i,t)=>!Se(i,t),Ut={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:st};Symbol.metadata??=Symbol("metadata"),at.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&xe(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){let{get:n,set:o}=_e(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:n,set(a){let l=n?.call(this);o?.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ut}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;let t=Ce(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){let e=this.properties,r=[...$e(e),...Ae(e)];for(let n of r)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)e.unshift(ht(n))}else t!==void 0&&e.push(ht(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:M).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let o=r.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:M;this._$Em=n;let l=a.fromAttribute(e,o.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){let n=this.constructor,o=this[t];if(r??=n.getPropertyOptions(t),!((r.hasChanged??st)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:o},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,o]of r){let{wrapped:a}=o,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[N("elementProperties")]=new Map,A[N("finalized")]=new Map,we?.({ReactiveElement:A}),(at.reactiveElementVersions??=[]).push("2.1.1");var xt=globalThis,lt=xt.trustedTypes,Ot=lt?lt.createPolicy("lit-html",{createHTML:i=>i}):void 0,Vt="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Ft="?"+w,Te=`<${Ft}>`,L=document,B=()=>L.createComment(""),j=i=>i===null||typeof i!="object"&&typeof i!="function",_t=Array.isArray,Re=i=>_t(i)||typeof i?.[Symbol.iterator]=="function",ft=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nt=/-->/g,Mt=/>/g,P=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ht=/'/g,Bt=/"/g,qt=/^(?:script|style|textarea|title)$/i,$t=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),p=$t(1),Xe=$t(2),Ye=$t(3),I=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),jt=new WeakMap,k=L.createTreeWalker(L,129);function Gt(i,t){if(!_t(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}var Pe=(i,t)=>{let e=i.length-1,r=[],n,o=t===2?"<svg>":t===3?"<math>":"",a=H;for(let l=0;l<e;l++){let s=i[l],u,d,c=-1,b=0;for(;b<s.length&&(a.lastIndex=b,d=a.exec(s),d!==null);)b=a.lastIndex,a===H?d[1]==="!--"?a=Nt:d[1]!==void 0?a=Mt:d[2]!==void 0?(qt.test(d[2])&&(n=RegExp("</"+d[2],"g")),a=P):d[3]!==void 0&&(a=P):a===P?d[0]===">"?(a=n??H,c=-1):d[1]===void 0?c=-2:(c=a.lastIndex-d[2].length,u=d[1],a=d[3]===void 0?P:d[3]==='"'?Bt:Ht):a===Bt||a===Ht?a=P:a===Nt||a===Mt?a=H:(a=P,n=void 0);let y=a===P&&i[l+1].startsWith("/>")?" ":"";o+=a===H?s+Te:c>=0?(r.push(u),s.slice(0,c)+Vt+s.slice(c)+w+y):s+w+(c===-2?l:y)}return[Gt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},V=class i{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,a=0,l=t.length-1,s=this.parts,[u,d]=Pe(t,e);if(this.el=i.createElement(u,r),k.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=k.nextNode())!==null&&s.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let c of n.getAttributeNames())if(c.endsWith(Vt)){let b=d[a++],y=n.getAttribute(c).split(w),E=/([.?@])?(.*)/.exec(b);s.push({type:1,index:o,name:E[2],strings:y,ctor:E[1]==="."?gt:E[1]==="?"?vt:E[1]==="@"?yt:O}),n.removeAttribute(c)}else c.startsWith(w)&&(s.push({type:6,index:o}),n.removeAttribute(c));if(qt.test(n.tagName)){let c=n.textContent.split(w),b=c.length-1;if(b>0){n.textContent=lt?lt.emptyScript:"";for(let y=0;y<b;y++)n.append(c[y],B()),k.nextNode(),s.push({type:2,index:++o});n.append(c[b],B())}}}else if(n.nodeType===8)if(n.data===Ft)s.push({type:2,index:o});else{let c=-1;for(;(c=n.data.indexOf(w,c+1))!==-1;)s.push({type:7,index:o}),c+=w.length-1}o++}}static createElement(t,e){let r=L.createElement("template");return r.innerHTML=t,r}};function U(i,t,e=i,r){if(t===I)return t;let n=r!==void 0?e._$Co?.[r]:e._$Cl,o=j(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,e,r)),r!==void 0?(e._$Co??=[])[r]=n:e._$Cl=n),n!==void 0&&(t=U(i,n._$AS(i,t.values),n,r)),t}var bt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??L).importNode(e,!0);k.currentNode=n;let o=k.nextNode(),a=0,l=0,s=r[0];for(;s!==void 0;){if(a===s.index){let u;s.type===2?u=new F(o,o.nextSibling,this,t):s.type===1?u=new s.ctor(o,s.name,s.strings,this,t):s.type===6&&(u=new St(o,this,t)),this._$AV.push(u),s=r[++l]}a!==s?.index&&(o=k.nextNode(),a++)}return k.currentNode=L,n}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},F=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),j(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Re(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=V.createElement(Gt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{let o=new bt(n,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=jt.get(t.strings);return e===void 0&&jt.set(t.strings,e=new V(t)),e}k(t){_t(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,n=0;for(let o of t)n===e.length?e.push(r=new i(this.O(B()),this.O(B()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(t,e=this,r,n){let o=this.strings,a=!1;if(o===void 0)t=U(this,t,e,0),a=!j(t)||t!==this._$AH&&t!==I,a&&(this._$AH=t);else{let l=t,s,u;for(t=o[0],s=0;s<o.length-1;s++)u=U(this,l[r+s],e,s),u===I&&(u=this._$AH[s]),a||=!j(u)||u!==this._$AH[s],u===h?t=h:t!==h&&(t+=(u??"")+o[s+1]),this._$AH[s]=u}a&&!n&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},gt=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},vt=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},yt=class extends O{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){if((t=U(this,t,e,0)??h)===I)return;let r=this._$AH,n=t===h&&r!==h||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==h&&(r===h||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},St=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};var ke=xt.litHtmlPolyfillSupport;ke?.(V,F),(xt.litHtmlVersions??=[]).push("3.3.1");var Jt=(i,t,e)=>{let r=e?.renderBefore??t,n=r._$litPart$;if(n===void 0){let o=e?.renderBefore??null;r._$litPart$=n=new F(t.insertBefore(B(),o),o,void 0,e??{})}return n._$AI(i),n};var At=globalThis,T=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};T._$litElement$=!0,T.finalized=!0,At.litElementHydrateSupport?.({LitElement:T});var Le=At.litElementPolyfillSupport;Le?.({LitElement:T});(At.litElementVersions??=[]).push("4.2.1");var Ie={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:st},ze=(i=Ie,t,e)=>{let{kind:r,metadata:n}=e,o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),r==="accessor"){let{name:a}=e;return{set(l){let s=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,s,i)},init(l){return l!==void 0&&this.C(a,void 0,i,l),l}}}if(r==="setter"){let{name:a}=e;return function(l){let s=this[a];t.call(this,l),this.requestUpdate(a,s,i)}}throw Error("Unsupported decorator location: "+r)};function f(i){return(t,e)=>typeof e=="object"?ze(i,t,e):((r,n,o)=>{let a=n.hasOwnProperty(o);return n.constructor.createProperty(o,r),a?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}function q(i){return f({...i,state:!0,attribute:!1})}var Ct="__ri_localization_store__",Et=window;Et[Ct]||(Et[Ct]={content:{},lang:"de"});var R=Et[Ct],wt=class{static setProviderContent(t,e){R.content={...R.content,[t]:e}}static setLanguage(t){t!==R.lang&&(R.lang=t,document.dispatchEvent(new CustomEvent("ri-language-change",{detail:{lang:t}})))}static getLanguage(){return R.lang}static getContent(){return R.content[R.lang]??R.content.de}};function g(i,t,e){let n=wt.getContent()?.[i]??t??i;return e&&(n=n.replace(/\{\{(\w+)}}/g,(o,a)=>String(e[a]??`{{${a}}}`))),n}var Kt=({platformName:i,slot:t,emphasis:e,variant:r})=>{if(!i)return p``;let n=g("platform.trackShort","Gl."),o=g("platform.track","Gleis"),a=g("platform.platformChanged","Gleiswechsel");return p`
		<ri-platform-tag
			slot="${t??h}"
			emphasis="${e??"strong"}"
			variant="${r}"
			title="${o} ${i} ${r==="changed"?a:""}"
		>
			${n} ${i}
		</ri-platform-tag>
	`};var Wt=(i,t,e,r)=>{let n=`--ri-vehicle-progress: ${t}%;`,o=i.at(0),a=i.at(-1);if(o&&a){let l=a.top-o.top;l<0&&(l=l*-1),n=`--ri-vehicle-progress: ${t}%;
		--ri-vehicle-route-line-block-size: ${r??l}px;
		--ri-vehicle-route-line-offset: ${e??0}px;
		`}return n},Zt=({nowAsDate:i,dots:t,times:e,collapsed:r})=>{let n=0;if(!e||e.length===0||!i||!t||t.length===0)return n;let o=i.getTime(),a=e.at(-1),l=t.at(-1);if(!a||!l)return n;if(o<new Date(e[0]).getTime())n=0;else if(o>=new Date(a).getTime())n=100;else if(t?.length>0){let s=t.filter(d=>d.top!==0).length===2||r,u=s?a:e.find((d,c)=>new Date(d).getTime()>o&&t[c]?.top!==0);if(u&&t.length>0){let d=l.top-t[0].top,c=e.indexOf(u),b=s?0:c-1,y=new Date(e[b]).getTime(),pt=new Date(e[c]).getTime()-y,mt=(o-y)/pt,ut=t[c].top-t[b].top;n=(t[b].top-t[0].top+ut*mt)/d*100}}return n};var Xt=i=>i.toString().padStart(2,"0"),Yt=i=>{let t=new Date(i),e=Xt(t.getHours()),r=Xt(t.getMinutes());return`${e}:${r}`},Qt=({time:i,timeSchedule:t,timeType:e,emphasis:r,arrival:n})=>{let o=p``;if(e!=="SCHEDULE"){let s=new Date(i),u=new Date(t),d="on-time",c=Yt(s);Math.abs(u.getTime()-s.getTime())>=300*1e3&&(d="delayed");let b=d==="delayed"?n?g("times.delayedArrival","Versp\xE4tete Ankunftszeit"):g("times.delayedDeparture","Versp\xE4tete Abfahrtszeit"):n?g("times.currentArrival","Aktuelle Ankunftszeit"):g("times.currentDeparture","Aktuelle Abfahrtszeit");o=p`
			<ri-journey-time-stamp
				.variant="${d}"
				.emphasis="${r}"
			>
				<time>
					<span class="a11y-visually-hidden"
						>${g("times.realtimeInfo","Echtzeit Information")}</span
					>
					<span class="a11y-visually-hidden">${b}</span
					>${c}</time
				>
			</ri-journey-time-stamp>
		`}let a=Yt(t),l=n?g("times.arrival","Ankunftszeit"):g("times.departure","Abfahrtszeit");return p`
		<ri-journey-time-stamp .emphasis="${r}">
			<time>
				<span class="a11y-visually-hidden">${l}</span
				>${a}</time
			>
		</ri-journey-time-stamp>
		${o}
	`};var te=(i,t)=>t?new Date(i)<=t:!1,ee=({time:i,timeSchedule:t,timeType:e,index:r,items:n,arrival:o})=>{let a="weak";return(r===0||r===n.length-1)&&(a="strong"),Qt({time:i,timeSchedule:t,timeType:e,emphasis:a,arrival:o})},re=(i,t,e,r)=>e?p`<i data-icon="cross_circle"></i>`:t===0&&!r?p`<i data-icon="start"></i>`:t===i.length-1?p`<i data-icon="map_pin"></i>`:p`<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="white"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<circle
			cx="12"
			cy="12"
			r="5"
			stroke-width="2px"
			fill="var(--db-adaptive-bg-basic-level-1-default)"
			stroke="var(--db-icon-color, var(--db-adaptive-on-bg-basic-emphasis-100-default))"
		/>
	</svg>`;var De=({name:i,index:t,departureEvents:e,stopCancelled:r,additional:n})=>{let o=r?p`<span
				class="db-infotext"
				data-semantic="critical"
				data-icon="cross_circle"
			>
				${g("journey.stopCanceled","Halt entf\xE4llt")}
			</span>`:h,a="weak";return(t===0||t===e.length-1)&&(a="strong"),p`<ri-station emphasis="${a}">
			<span>${i}</span>
			<slot name="station-${t}"></slot>
		</ri-station>
		${o}
		${n?p`<span class="db-infotext"
					>${g("journey.additionalStop","Zusatzhalt")}</span
				>`:h}
		<slot name="vehicle-route-item-detail-${t}"></slot>`},ie=({journey:i,now:t,dots:e,debug:r})=>{if(!i)return p`Missing Journey`;if(!i.events&&!i.eventsCancelled)return p`Missing Events`;let n=[...i.events??[],...i.eventsCancelled??[]],o=n.filter((d,c)=>d.type==="DEPARTURE"||c===n.length-1),a=i.info.journeyCancelled,l=t?new Date(t):void 0,s=Zt({nowAsDate:l,dots:e,times:o.map(d=>d.time)}),u=Wt(e,s);return r&&console.log("VehicleRoute",{nowAsDate:l,dots:e,progress:s,departureEvents:o}),p`<div class="ri-vehicle-route">
		<div
			class="ri-vehicle-route-line-container"
			style="${u}"
			aria-hidden="true"
		>
			<i
				class="ri-vehicle-route-line"
				data-active="true"
				data-full-rounded="${s>=100}"
			></i>
			<i
				class="ri-vehicle-route-line"
				data-full-rounded="${s<=0}"
			></i>
		</div>
		<ul>
			${o.map((d,c)=>{let{stopPlace:b,platform:y,platformSchedule:E,time:pt,timeSchedule:Rt,timeType:mt,arrivalOrDepartureID:ut,cancelled:Pt,additional:ge}=d,kt=Pt||a;return p`<li>
					<ri-stop .active="${te(d.time,l)}">
						<ri-arrival-departure-time slot="time">
							${ee({time:pt,timeSchedule:Rt,timeType:mt,index:c,items:o,arrival:c===o.length-1})}
						</ri-arrival-departure-time>
						<div
							data-id="${ut}"
							class="ri-stop-line-icon"
							slot="line"
						>
							${re(o,c,kt)}
						</div>
						<div class="ri-board-item-content-container">
							${De({name:b.name,index:c,departureEvents:o,stopCancelled:kt,additional:ge})}
						</div>
						${Kt({platformName:y||E,slot:"tag",emphasis:"weak",variant:E===y?"set":"changed"})}
					</ri-stop>
				</li>`})}
		</ul>
	</div>`};var ne={};var oe={};var x={};var ae={};var v=class extends T{constructor(){super(...arguments);this.i18n=!0;this.onLanguageChange=()=>{this.requestUpdate()}}async hydrateElements(){await new Promise(e=>setTimeout(e,0)),this.shadowRoot?.host.localName&&(this.shadowRoot.host.setAttribute("data-hydrated","true"),this.shadowRoot?.querySelectorAll(`.${this.shadowRoot?.host.localName}`).forEach(e=>{e?.setAttribute("data-hydrated","true")}))}connectedCallback(){super.connectedCallback(),this.shadowRoot?.host.setAttribute("data-hydrated","true"),this.shadowRoot&&(this.hydrateObserver=new MutationObserver(()=>{this.hydrateElements()}),this.hydrateObserver.observe(this.shadowRoot,{childList:!0,subtree:!0})),this.i18n&&document.addEventListener("ri-language-change",this.onLanguageChange)}disconnectedCallback(){this.hydrateObserver?.disconnect(),this.i18n&&document.removeEventListener("ri-language-change",this.onLanguageChange),super.disconnectedCallback()}};m([q()],v.prototype,"hydrateObserver",2);var Tt=null,_=()=>(Tt===null&&(Tt=self.document.styleSheets?[...self.document.styleSheets].map(i=>{let t=new CSSStyleSheet;try{if(i.cssRules){let e=[...i.cssRules].map(r=>r.cssText).join(" ");t.replaceSync(e)}}catch{}return t}):[]),Tt),$=(i=[])=>Array.isArray(i)?i:[i];var dt=i=>{let t=i?.querySelectorAll("slot");if(t)for(let e of t)e.assignedNodes().length>0&&e?.parentElement&&(e.parentElement.dataset.slotted="true",i?.firstElementChild&&e.name&&!e.name.includes("-")&&(i.firstElementChild.dataset[e.name]="true"))};var C=class extends v{constructor(){super(...arguments);this.timeline="auto";this._dots=[];this._isUpdating=!1;this._debouncedHandleStopIconDetection=()=>{this._isUpdating||(this._rafId&&cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(async()=>{this._isUpdating=!0,this.handleStopIconDetection(),await this.updateComplete,this.handleStopIconDetection(),this._isUpdating=!1}))}}handleStopIconDetection(){}_startTimer(){this._stopTimer(),this.timeline==="auto"&&(this._setNow(),this._timerId=window.setInterval(()=>this._setNow(),3e4))}_stopTimer(){this._timerId&&(clearInterval(this._timerId),this._timerId=void 0)}_setNow(){this.now=new Date().toISOString()}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),dt(this.shadowRoot),this._debouncedHandleStopIconDetection()}connectedCallback(){super.connectedCallback(),this._startTimer(),window.addEventListener("resize",this._debouncedHandleStopIconDetection),this.shadowRoot&&(this._routeChildObserver=new MutationObserver(()=>{if(!this._intersectionObserver){let e=this.shadowRoot?.firstElementChild;e&&(this._intersectionObserver=new IntersectionObserver(r=>{r[0].isIntersecting&&this._debouncedHandleStopIconDetection()}),this._intersectionObserver.observe(e))}}),this._routeChildObserver.observe(this.shadowRoot,{childList:!0,subtree:!0}))}disconnectedCallback(){this._rafId&&cancelAnimationFrame(this._rafId),this._intersectionObserver?.disconnect(),window.removeEventListener("resize",this._debouncedHandleStopIconDetection),this._routeChildObserver?.disconnect(),this._stopTimer(),super.disconnectedCallback()}};m([f({reflect:!0,type:String})],C.prototype,"now",2),m([f({reflect:!0,type:String})],C.prototype,"timeline",2),m([f({reflect:!0,type:Boolean})],C.prototype,"debug",2),m([q()],C.prototype,"_dots",2),m([q()],C.prototype,"_routeChildObserver",2);var G=class extends C{render(){return ie({journey:this.journey,now:this.now,dots:this._dots,debug:this.debug})}handleStopIconDetection(){let t=this.shadowRoot?.querySelectorAll(".ri-stop-line-icon");t&&(this._dots=[...t].map(e=>({id:e.dataset.id,top:e.getBoundingClientRect().top})))}static{this.styles=S([ne,oe,x,ae].join(`
`))}};m([f({reflect:!0,type:Object})],G.prototype,"journey",2);var se=({active:i,breakpointVariant:t})=>p`<div
		class="ri-stop"
		part="root"
		data-breakpoint-variant="${t}"
	>
		<div class="ri-stop-time-container" part="time">
			<slot name="time"></slot>
		</div>
		<div class="ri-stop-line-container" data-active="${i}" part="line">
			<slot name="line"></slot>
		</div>
		<div class="ri-stop-transportation-container" part="transportation">
			<slot name="transportation"></slot>
		</div>
		<div class="ri-stop-content-container" part="content">
			<slot></slot>
		</div>
		<div class="ri-stop-tag-container" part="tag">
			<slot name="tag"></slot>
		</div>
	</div>`;var le={};var J=class extends v{};m([f({reflect:!0,type:String})],J.prototype,"breakpointVariant",2);var K=class extends J{constructor(){super(...arguments);this.i18n=!1;this.active=!1}render(){return se({active:this.active,breakpointVariant:this.breakpointVariant})}async firstUpdated(){dt(this.shadowRoot)}static{this.styles=S([le,x].join(`
`))}};m([f({reflect:!0,type:String})],K.prototype,"active",2);var W=class extends K{};W.styles=[..._(),...$(W.styles)];customElements.get("ri-stop")||customElements.define("ri-stop",W);var ce=({size:i="medium"})=>p`<div class="ri-arrival-departure-time" data-size="${i}">
		<slot></slot>
	</div>`;var de={};var Z=class extends v{constructor(){super(...arguments);this.i18n=!1}render(){return ce({size:this.size})}static{this.styles=S([de,x].join(`
`))}};m([f({reflect:!0,type:String})],Z.prototype,"size",2);var pe=({emphasis:i="weak",background:t=!1,variant:e="default"})=>p`<div
		class="ri-journey-time-stamp"
		data-emphasis="${i}"
		data-background="${t}"
		data-variant="${e}"
	>
		<slot></slot>
	</div>`;var me={};var z=class extends v{constructor(){super(...arguments);this.i18n=!1}render(){return pe({variant:this.variant,background:this.background,emphasis:this.emphasis})}static{this.styles=S([me,x].join(`
`))}};m([f({reflect:!0,type:String})],z.prototype,"variant",2),m([f({reflect:!0,type:String})],z.prototype,"emphasis",2),m([f({reflect:!0,type:Boolean})],z.prototype,"background",2);var X=class extends z{};X.styles=[..._(),...$(X.styles)];customElements.get("ri-journey-time-stamp")||customElements.define("ri-journey-time-stamp",X);var Y=class extends Z{};Y.styles=[..._(),...$(Y.styles)];customElements.get("ri-arrival-departure-time")||customElements.define("ri-arrival-departure-time",Y);var ue=({variant:i,emphasis:t,title:e})=>{let r=p`${g("platform.missingTitle","Missing title property!")}`;return e&&(r=p`
			<abbr title="${e}">
				<span>${e}</span>
				<span aria-hidden="true"><slot></slot></span>
			</abbr>
		`),p` <div
		part="root"
		class="db-tag ri-platform-tag"
		data-icon="${i==="changed"?"exclamation_mark_circle":h}"
		data-variant="${i}"
		data-emphasis="${t}"
	>
		${r}
	</div>`};var he={};var D=class extends v{constructor(){super(...arguments);this.variant="set";this.emphasis="weak"}render(){return ue({variant:this.variant,emphasis:this.emphasis,title:this.title})}static{this.styles=S([he,x].join(`
`))}};m([f({reflect:!0,type:String})],D.prototype,"variant",2),m([f({reflect:!0,type:String})],D.prototype,"emphasis",2),m([f({reflect:!0,type:String})],D.prototype,"title",2);var Q=class extends D{};Q.styles=[..._(),...$(Q.styles)];customElements.get("ri-platform-tag")||customElements.define("ri-platform-tag",Q);var fe=({emphasis:i})=>p`<div class="ri-station" data-emphasis="${i}"><slot /></div>`;var be={};var tt=class extends v{constructor(){super(...arguments);this.i18n=!1}render(){return fe({emphasis:this.emphasis})}static{this.styles=S([be,x].join(`
`))}};m([f({reflect:!0,type:String})],tt.prototype,"emphasis",2);var et=class extends tt{};et.styles=[..._(),...$(et.styles)];customElements.get("ri-station")||customElements.define("ri-station",et);var rt=class extends G{};rt.styles=[..._(),...$(rt.styles)];customElements.get("ri-vehicle-route")||customElements.define("ri-vehicle-route",rt);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
