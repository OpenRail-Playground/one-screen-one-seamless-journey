"use strict";(()=>{var Te=Object.defineProperty;var _e=Object.getOwnPropertyDescriptor;var p=(r,t,e,a)=>{for(var i=a>1?void 0:a?_e(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(a?o(t,e,i):o(i))||i);return a&&i&&Te(t,e,i),i};var nt=globalThis,st=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),Ut=new WeakMap,ot=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(st&&t===void 0){let a=e!==void 0&&e.length===1;a&&(t=Ut.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&Ut.set(e,t))}return t}toString(){return this.cssText}},S=r=>new ot(typeof r=="string"?r:r+"",void 0,Mt);var Ot=(r,t)=>{if(st)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let e of t){let a=document.createElement("style"),i=nt.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=e.cssText,r.appendChild(a)}},ht=st?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let a of t.cssRules)e+=a.cssText;return S(e)})(r):r;var{is:Ae,defineProperty:Ee,getOwnPropertyDescriptor:we,getOwnPropertyNames:Pe,getOwnPropertySymbols:Re,getPrototypeOf:ke}=Object,dt=globalThis,zt=dt.trustedTypes,Le=zt?zt.emptyScript:"",Be=dt.reactiveElementPolyfillSupport,H=(r,t)=>r,V={toAttribute(r,t){switch(t){case Boolean:r=r?Le:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},lt=(r,t)=>!Ae(r,t),Ht={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:lt};Symbol.metadata??=Symbol("metadata"),dt.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let a=Symbol(),i=this.getPropertyDescriptor(t,a,e);i!==void 0&&Ee(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){let{get:i,set:n}=we(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let m=i?.call(this);n?.call(this,o),this.requestUpdate(t,m,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ht}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let t=ke(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let e=this.properties,a=[...Pe(e),...Re(e)];for(let i of a)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[a,i]of e)this.elementProperties.set(a,i)}this._$Eh=new Map;for(let[e,a]of this.elementProperties){let i=this._$Eu(e,a);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let a=new Set(t.flat(1/0).reverse());for(let i of a)e.unshift(ht(i))}else t!==void 0&&e.push(ht(t));return e}static _$Eu(t,e){let a=e.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ot(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$ET(t,e){let a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(i!==void 0&&a.reflect===!0){let n=(a.converter?.toAttribute!==void 0?a.converter:V).toAttribute(e,a.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let a=this.constructor,i=a._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=a.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:V;this._$Em=i;let m=o.fromAttribute(e,n.type);this[i]=m??this._$Ej?.get(i)??m,this._$Em=null}}requestUpdate(t,e,a){if(t!==void 0){let i=this.constructor,n=this[t];if(a??=i.getPropertyOptions(t),!((a.hasChanged??lt)(n,e)||a.useDefault&&a.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,a))))return;this.C(t,e,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:a,reflect:i,wrapped:n},o){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[i,n]of a){let{wrapped:o}=n,m=this[i];o!==!0||this._$AL.has(i)||m===void 0||this.C(i,void 0,n,m)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((a=>a.hostUpdate?.())),this.update(e)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[H("elementProperties")]=new Map,_[H("finalized")]=new Map,Be?.({ReactiveElement:_}),(dt.reactiveElementVersions??=[]).push("2.1.1");var $t=globalThis,pt=$t.trustedTypes,Vt=pt?pt.createPolicy("lit-html",{createHTML:r=>r}):void 0,qt="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Zt="?"+E,Ie=`<${Zt}>`,B=document,W=()=>B.createComment(""),F=r=>r===null||typeof r!="object"&&typeof r!="function",Ct=Array.isArray,Ne=r=>Ct(r)||typeof r?.[Symbol.iterator]=="function",ft=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Wt=/>/g,k=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,Kt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,Tt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=Tt(1),dr=Tt(2),lr=Tt(3),I=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Gt=new WeakMap,L=B.createTreeWalker(B,129);function Yt(r,t){if(!Ct(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vt!==void 0?Vt.createHTML(t):t}var De=(r,t)=>{let e=r.length-1,a=[],i,n=t===2?"<svg>":t===3?"<math>":"",o=j;for(let m=0;m<e;m++){let s=r[m],h,f,u=-1,g=0;for(;g<s.length&&(o.lastIndex=g,f=o.exec(s),f!==null);)g=o.lastIndex,o===j?f[1]==="!--"?o=jt:f[1]!==void 0?o=Wt:f[2]!==void 0?(Jt.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=k):f[3]!==void 0&&(o=k):o===k?f[0]===">"?(o=i??j,u=-1):f[1]===void 0?u=-2:(u=o.lastIndex-f[2].length,h=f[1],o=f[3]===void 0?k:f[3]==='"'?Kt:Ft):o===Kt||o===Ft?o=k:o===jt||o===Wt?o=j:(o=k,i=void 0);let y=o===k&&r[m+1].startsWith("/>")?" ":"";n+=o===j?s+Ie:u>=0?(a.push(h),s.slice(0,u)+qt+s.slice(u)+E+y):s+E+(u===-2?m:y)}return[Yt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]},K=class r{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let n=0,o=0,m=t.length-1,s=this.parts,[h,f]=De(t,e);if(this.el=r.createElement(h,a),L.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=L.nextNode())!==null&&s.length<m;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(qt)){let g=f[o++],y=i.getAttribute(u).split(E),A=/([.?@])?(.*)/.exec(g);s.push({type:1,index:n,name:A[2],strings:y,ctor:A[1]==="."?vt:A[1]==="?"?yt:A[1]==="@"?St:O}),i.removeAttribute(u)}else u.startsWith(E)&&(s.push({type:6,index:n}),i.removeAttribute(u));if(Jt.test(i.tagName)){let u=i.textContent.split(E),g=u.length-1;if(g>0){i.textContent=pt?pt.emptyScript:"";for(let y=0;y<g;y++)i.append(u[y],W()),L.nextNode(),s.push({type:2,index:++n});i.append(u[g],W())}}}else if(i.nodeType===8)if(i.data===Zt)s.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(E,u+1))!==-1;)s.push({type:7,index:n}),u+=E.length-1}n++}}static createElement(t,e){let a=B.createElement("template");return a.innerHTML=t,a}};function M(r,t,e=r,a){if(t===I)return t;let i=a!==void 0?e._$Co?.[a]:e._$Cl,n=F(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,a)),a!==void 0?(e._$Co??=[])[a]=i:e._$Cl=i),i!==void 0&&(t=M(r,i._$AS(r,t.values),i,a)),t}var gt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:a}=this._$AD,i=(t?.creationScope??B).importNode(e,!0);L.currentNode=i;let n=L.nextNode(),o=0,m=0,s=a[0];for(;s!==void 0;){if(o===s.index){let h;s.type===2?h=new G(n,n.nextSibling,this,t):s.type===1?h=new s.ctor(n,s.name,s.strings,this,t):s.type===6&&(h=new xt(n,this,t)),this._$AV.push(h),s=a[++m]}o!==s?.index&&(n=L.nextNode(),o++)}return L.currentNode=B,i}p(t){let e=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}},G=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),F(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ne(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(B.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:a}=t,i=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=K.createElement(Yt(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new gt(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=Gt.get(t.strings);return e===void 0&&Gt.set(t.strings,e=new K(t)),e}k(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,a,i=0;for(let n of t)i===e.length?e.push(a=new r(this.O(W()),this.O(W()),this,this.options)):a=e[i],a._$AI(n),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let a=t.nextSibling;t.remove(),t=a}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=d}_$AI(t,e=this,a,i){let n=this.strings,o=!1;if(n===void 0)t=M(this,t,e,0),o=!F(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{let m=t,s,h;for(t=n[0],s=0;s<n.length-1;s++)h=M(this,m[a+s],e,s),h===I&&(h=this._$AH[s]),o||=!F(h)||h!==this._$AH[s],h===d?t=d:t!==d&&(t+=(h??"")+n[s+1]),this._$AH[s]=h}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},vt=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},yt=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},St=class extends O{constructor(t,e,a,i,n){super(t,e,a,i,n),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??d)===I)return;let a=this._$AH,i=t===d&&a!==d||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,n=t!==d&&(a===d||i);i&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},xt=class{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}};var Ue=$t.litHtmlPolyfillSupport;Ue?.(K,G),($t.litHtmlVersions??=[]).push("3.3.1");var Xt=(r,t,e)=>{let a=e?.renderBefore??t,i=a._$litPart$;if(i===void 0){let n=e?.renderBefore??null;a._$litPart$=i=new G(t.insertBefore(W(),n),n,void 0,e??{})}return i._$AI(r),i};var _t=globalThis,w=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};w._$litElement$=!0,w.finalized=!0,_t.litElementHydrateSupport?.({LitElement:w});var Me=_t.litElementPolyfillSupport;Me?.({LitElement:w});(_t.litElementVersions??=[]).push("4.2.1");var Oe={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:lt},ze=(r=Oe,t,e)=>{let{kind:a,metadata:i}=e,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),a==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),a==="accessor"){let{name:o}=e;return{set(m){let s=t.get.call(this);t.set.call(this,m),this.requestUpdate(o,s,r)},init(m){return m!==void 0&&this.C(o,void 0,r,m),m}}}if(a==="setter"){let{name:o}=e;return function(m){let s=this[o];t.call(this,m),this.requestUpdate(o,s,r)}}throw Error("Unsupported decorator location: "+a)};function b(r){return(t,e)=>typeof e=="object"?ze(r,t,e):((a,i,n)=>{let o=i.hasOwnProperty(n);return i.constructor.createProperty(n,a),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}function Qt(r){return b({...r,state:!0,attribute:!1})}var At="__ri_localization_store__",Et=window;Et[At]||(Et[At]={content:{},lang:"de"});var P=Et[At],wt=class{static setProviderContent(t,e){P.content={...P.content,[t]:e}}static setLanguage(t){t!==P.lang&&(P.lang=t,document.dispatchEvent(new CustomEvent("ri-language-change",{detail:{lang:t}})))}static getLanguage(){return P.lang}static getContent(){return P.content[P.lang]??P.content.de}};function l(r,t,e){let i=wt.getContent()?.[r]??t??r;return e&&(i=i.replace(/\{\{(\w+)}}/g,(n,o)=>String(e[o]??`{{${o}}}`))),i}var te=r=>r.toString().padStart(2,"0"),ee=r=>{let t=new Date(r),e=te(t.getHours()),a=te(t.getMinutes());return`${e}:${a}`},re=({time:r,timeSchedule:t,timeType:e,emphasis:a,arrival:i})=>{let n=c``;if(e!=="SCHEDULE"){let s=new Date(r),h=new Date(t),f="on-time",u=ee(s);Math.abs(h.getTime()-s.getTime())>=300*1e3&&(f="delayed");let g=f==="delayed"?i?l("times.delayedArrival","Versp\xE4tete Ankunftszeit"):l("times.delayedDeparture","Versp\xE4tete Abfahrtszeit"):i?l("times.currentArrival","Aktuelle Ankunftszeit"):l("times.currentDeparture","Aktuelle Abfahrtszeit");n=c`
			<ri-journey-time-stamp
				.variant="${f}"
				.emphasis="${a}"
			>
				<time>
					<span class="a11y-visually-hidden"
						>${l("times.realtimeInfo","Echtzeit Information")}</span
					>
					<span class="a11y-visually-hidden">${g}</span
					>${u}</time
				>
			</ri-journey-time-stamp>
		`}let o=ee(t),m=i?l("times.arrival","Ankunftszeit"):l("times.departure","Abfahrtszeit");return c`
		<ri-journey-time-stamp .emphasis="${a}">
			<time>
				<span class="a11y-visually-hidden">${m}</span
				>${o}</time
			>
		</ri-journey-time-stamp>
		${n}
	`};var Pt=r=>r.replaceAll(/([!&),/:;=?[\\\]{|}])/g,"$1 ").replaceAll(/(\()/g," $1");var ae=({platformName:r,slot:t,emphasis:e,variant:a})=>{if(!r)return c``;let i=l("platform.trackShort","Gl."),n=l("platform.track","Gleis"),o=l("platform.platformChanged","Gleiswechsel");return c`
		<ri-platform-tag
			slot="${t??d}"
			emphasis="${e??"strong"}"
			variant="${a}"
			title="${n} ${r} ${a==="changed"?o:""}"
		>
			${i} ${r}
		</ri-platform-tag>
	`};var He=r=>{if(!r)return c``;let{time:t,timeSchedule:e,timeType:a}=r;return re({time:t,timeSchedule:e,timeType:a,emphasis:"strong"})},ie=(r,t,e)=>{if(!t)return c``;let a,i,n,o,m,s;return t?.replacementTransport||t?.categoryInternal==="Bsv"?s=`${t?.category} ${t?.line?.replace(t?.category,"").trim()}`:(o=t?.journeyDescription,a=t?.category,i=t?.line,n=t?.number,m=t?.label),c`<div slot="transportation">
		<i
			class="ri-board-item-travel-with-line"
			data-variant="${e??d}"
			role="presentation"
		></i>
		<ri-transport-tag
			aria-description="${l("board.line","Linie")}"
			@transport-tag-click="${r}"
			.label="${m??d}"
			.journeyDescription="${o??d}"
			.category="${a??d}"
			.line="${i??d}"
			.type="${t?.type}"
			.number="${n??d}"
			.replacementTransportText="${s??d}"
		></ri-transport-tag>
	</div>`},Rt=r=>r.map(t=>c`<li>${t}</li>`),ne=(r,t)=>{if(!r.via)return d;let e=r.via.map(({name:n})=>Pt(n));if(t&&(e=e.map(n=>n.split(",")[0])),e.length<3)return c`<ul class="ri-board-item-via-container">
			${Rt(e)}
		</ul>`;let a=e.slice(0,2),i=e.slice(2,e.length);return c`<details class="ri-board-item-via">
		<summary
			class="ri-board-item-via-container"
			data-interactive-focus="true"
		>
			<ul>
				${Rt(a)}
			</ul>
			<div>
				<i
					data-icon="chevron_down"
					data-variant="ghost"
					data-size="small"
					class="db-button"
					data-more="${i.length} ${l("board.moreStops","Haltestellen")}"
					data-less="${l("board.collapse","Einklappen")}"
				></i>
			</div>
		</summary>
		<ul class="ri-board-item-via-container">
			${Rt(e)}
		</ul>
	</details>`},oe=(r,t)=>stop?c`<b aria-description="${l("board.destination","Ziel")}">
		${Pt(t?r.origin.name:r.destination.name)}
	</b>`:d,se=({stop:r,background:t,show:e,riClick:a,isArrival:i,breakpointVariant:n})=>{if(!r)return c`Missing stop`;let o=e?.via,m=e?.viaCities,s=r?.platform||r?.platformSchedule,h=r?.platformSchedule===r?.platform?"set":"changed",f=e?.platformTag?ae({platformName:s,slot:"tag",emphasis:"weak",variant:h}):d,u=!r.canceled&&r.travelsWith?.length,g=d;return u&&r.travelsWith&&(g=r.travelsWith.map((y,A)=>c`<ri-stop .breakpointVariant="${n}">
					<div slot="time"></div>
					${ie(a,y,A===(r?.travelsWith?.length||0)-1?"end":"middle")}
					<div class="ri-board-item-station-container">
						${oe(y,i)}
						${o?ne(y,m):d}
						${y.separationAt?c`<span class="db-infotext">
									${l("journey.trainSeparatesAt","Dieser Zug wird in {{station}} getrennt",{station:y.separationAt.name})}
								</span>`:d}
					</div>
					${f}
				</ri-stop>`)),c`<div
		class="ri-board-item"
		part="root"
		data-background="${t??d}"
	>
		<ri-stop .breakpointVariant="${n}">
			<ri-arrival-departure-time
				slot="time"
				aria-description="${i?l("board.arrival","Ankunftszeit"):l("board.departure","Abfahrtszeit")}"
			>
				${He(r)}
			</ri-arrival-departure-time>

			${ie(a,r.transport,u?"start":void 0)}

			<div class="ri-board-item-station-container">
				${oe(r.transport,i)}
				${o?ne(r.transport,m):d}
				${r.canceled?c`<span
							class="db-infotext"
							data-semantic="critical"
							data-icon="cross_circle"
						>
							${l("board.tripCanceled","Fahrt f\xE4llt aus")}
						</span>`:d}
				<slot></slot>
			</div>
			${f}
		</ri-stop>
		${g}
	</div>`};var de={};var $={};var le={};var pe={};var x=class extends w{constructor(){super(...arguments);this.i18n=!0;this.onLanguageChange=()=>{this.requestUpdate()}}async hydrateElements(){await new Promise(e=>setTimeout(e,0)),this.shadowRoot?.host.localName&&(this.shadowRoot.host.setAttribute("data-hydrated","true"),this.shadowRoot?.querySelectorAll(`.${this.shadowRoot?.host.localName}`).forEach(e=>{e?.setAttribute("data-hydrated","true")}))}connectedCallback(){super.connectedCallback(),this.shadowRoot?.host.setAttribute("data-hydrated","true"),this.shadowRoot&&(this.hydrateObserver=new MutationObserver(()=>{this.hydrateElements()}),this.hydrateObserver.observe(this.shadowRoot,{childList:!0,subtree:!0})),this.i18n&&document.addEventListener("ri-language-change",this.onLanguageChange)}disconnectedCallback(){this.hydrateObserver?.disconnect(),this.i18n&&document.removeEventListener("ri-language-change",this.onLanguageChange),super.disconnectedCallback()}};p([Qt()],x.prototype,"hydrateObserver",2);var N=class extends x{};p([b({reflect:!0,type:String})],N.prototype,"breakpointVariant",2);var R=class extends N{constructor(){super(...arguments);this.show={via:!0,viaCities:!0,platformTag:!0}}riClick(){this.dispatchEvent(new CustomEvent("board-item-click",{bubbles:!0,composed:!0,detail:{stop:this.stop,show:this.show}}))}render(){return se({stop:this.stop,show:this.show,background:this.background,isArrival:this.isArrival,riClick:this.riClick,breakpointVariant:this.breakpointVariant})}static{this.styles=S([de,$,le,pe].join(`
`))}};p([b({reflect:!0,type:Object})],R.prototype,"stop",2),p([b({reflect:!0,type:Object})],R.prototype,"show",2),p([b({reflect:!0,type:Boolean})],R.prototype,"background",2),p([b({reflect:!0,type:Boolean})],R.prototype,"isArrival",2);var Ke=r=>["HIGH_SPEED_TRAIN","AIR","AIR","ECE","EM","EST","FA","FB","FR","ICE","ICL","IXB","IXr","RHI","RHT","RJ","RJX","RRI","RRT","TGD","TGJ","TGL","TGV","THA","X2"].includes(r),Ge=r=>["INTERCITY_TRAIN","ALS","ARC","ATR","IC","ICD","ICN","ICr","ICT","INZ","IP","KXB","NJ","Rx","S2","SC","TLG","ARZ","AS","AZ","CAT","D","DNZ","DPF","DZ","EBU","EE","EN","FBU","HOT","ICB","INT","IR","RR","S84","TLK","UEx","X","X70","EC","ECB","ECM","ECW","EIC","EX","EXB"].includes(r),qe=r=>["REGIONAL_TRAIN","INTER_REGIONAL_TRAIN","ATB","Bsv","BSV","CJX","DPN","E","ER","IRE","N","Os","OZ","PPN","R","R84","RB","RE","RER","REX","SB","Sp","T84","TER","U70","UUU","Zr","ZUG","BRB","erx","NWB","RTB","IRE","HLB","ME"].includes(r),kt=r=>{if(!r)return;let t=r.toLowerCase();if(Ke(r))return"ICE";if(Ge(r))return"IC";if(qe(r))return"RE";if(["CITY_TRAIN","S","S-Bahn","DPS","e","RT","AVG"].map(e=>e.toLowerCase()).includes(t))return"S";if(["SUBWAY","U","U-Bahn"].map(e=>e.toLowerCase()).includes(t))return"U";if(["TRAM","Tram","STR","Stb","SWB","ZRB"].map(e=>e.toLowerCase()).includes(t))return"STR";if(["BUS","lt","OBU","ubu"].map(e=>e.toLowerCase()).includes(t))return"BUS";if(["SHUTTLE","RUF"].map(e=>e.toLowerCase()).includes(t))return"RUF";if(["FERRY","FAE","KAT","SCH","Schiff"].map(e=>e.toLowerCase()).includes(t))return"FAE";if(["Long_distance_Bus"].map(e=>e.toLowerCase()).includes(t))return"Long_distance_Bus";if(["EV_Bus","SEV_Bus"].map(e=>e.toLowerCase()).includes(t))return"SEV_Bus";if(["Ship"].map(e=>e.toLowerCase()).includes(t))return"Ship";if(["FLIGHT","Plane"].map(e=>e.toLowerCase()).includes(t))return"Plane";if(["Car_Sharing"].map(e=>e.toLowerCase()).includes(t))return"Car_Sharing";if(["Taxi","AST"].map(e=>e.toLowerCase()).includes(t))return"Taxi";if(["Bike_Sharing"].map(e=>e.toLowerCase()).includes(t))return"Bike_Sharing";if(["WALK"].map(e=>e.toLowerCase()).includes(t))return"WALK"},ce=r=>{switch(r){case"Bike_Sharing":return l("transport.variant.bikeSharing","Fahrradverleih");case"Car_Sharing":return l("transport.variant.carSharing","Carsharing");case"BUS":return l("transport.variant.bus","Bus");case"FAE":return l("transport.variant.ferry","F\xE4hre");case"IC":return l("transport.variant.intercity","Intercity");case"ICE":return l("transport.variant.intercityExpress","Intercity Express");case"Long_distance_Bus":return l("transport.variant.longDistanceBus","Fernbus");case"Plane":return l("transport.variant.plane","Flugzeug");case"RE":return l("transport.variant.regionalExpress","Regional Express");case"S":return l("transport.variant.sBahn","S-Bahn");case"SEV_Bus":return l("transport.variant.replacementBus","Ersatzverkehr Bus");case"Ship":return l("transport.variant.ship","Schiff");case"STR":return l("transport.variant.tram","Stra\xDFenbahn");case"Taxi":return l("transport.variant.taxi","Taxi");case"U":return l("transport.variant.uBahn","U-Bahn");case"WALK":return l("transport.variant.walk","Zu Fu\xDF");default:return l("transport.variant.unknown","Unbekannt")}};var Lt=null,C=()=>(Lt===null&&(Lt=self.document.styleSheets?[...self.document.styleSheets].map(r=>{let t=new CSSStyleSheet;try{if(r.cssRules){let e=[...r.cssRules].map(a=>a.cssText).join(" ");t.replaceSync(e)}}catch{}return t}):[]),Lt),T=(r=[])=>Array.isArray(r)?r:[r];var be=r=>{let t=r?.querySelectorAll("slot");if(t)for(let e of t)e.assignedNodes().length>0&&e?.parentElement&&(e.parentElement.dataset.slotted="true",r?.firstElementChild&&e.name&&!e.name.includes("-")&&(r.firstElementChild.dataset[e.name]="true"))};var me=({active:r,breakpointVariant:t})=>c`<div
		class="ri-stop"
		part="root"
		data-breakpoint-variant="${t}"
	>
		<div class="ri-stop-time-container" part="time">
			<slot name="time"></slot>
		</div>
		<div class="ri-stop-line-container" data-active="${r}" part="line">
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
	</div>`;var ue={};var q=class extends N{constructor(){super(...arguments);this.i18n=!1;this.active=!1}render(){return me({active:this.active,breakpointVariant:this.breakpointVariant})}async firstUpdated(){be(this.shadowRoot)}static{this.styles=S([ue,$].join(`
`))}};p([b({reflect:!0,type:String})],q.prototype,"active",2);var Z=class extends q{};Z.styles=[...C(),...T(Z.styles)];customElements.get("ri-stop")||customElements.define("ri-stop",Z);var he=({size:r="medium"})=>c`<div class="ri-arrival-departure-time" data-size="${r}">
		<slot></slot>
	</div>`;var fe={};var J=class extends x{constructor(){super(...arguments);this.i18n=!1}render(){return he({size:this.size})}static{this.styles=S([fe,$].join(`
`))}};p([b({reflect:!0,type:String})],J.prototype,"size",2);var ge=({emphasis:r="weak",background:t=!1,variant:e="default"})=>c`<div
		class="ri-journey-time-stamp"
		data-emphasis="${r}"
		data-background="${t}"
		data-variant="${e}"
	>
		<slot></slot>
	</div>`;var ve={};var D=class extends x{constructor(){super(...arguments);this.i18n=!1}render(){return ge({variant:this.variant,background:this.background,emphasis:this.emphasis})}static{this.styles=S([ve,$].join(`
`))}};p([b({reflect:!0,type:String})],D.prototype,"variant",2),p([b({reflect:!0,type:String})],D.prototype,"emphasis",2),p([b({reflect:!0,type:Boolean})],D.prototype,"background",2);var Y=class extends D{};Y.styles=[...C(),...T(Y.styles)];customElements.get("ri-journey-time-stamp")||customElements.define("ri-journey-time-stamp",Y);var X=class extends J{};X.styles=[...C(),...T(X.styles)];customElements.get("ri-arrival-departure-time")||customElements.define("ri-arrival-departure-time",X);var Bt={ICE:"train",IC:"ic_and_ec",RE:"local_train",S:"s_bahn",U:"subway",STR:"tram",BUS:"local_bus",FAE:"ship",Long_distance_Bus:"long_distance_bus",SEV_Bus:"ev_bus",Ship:"ship",Plane:"airplane",Car_Sharing:"car_sharing",Taxi:"taxi",Bike_Sharing:"call_a_bike",WALK:"pedestrian",RUF:"call_in_bus"},Di=Object.keys(Bt);var Xe=r=>c`
	<hr class="ri-transport-tag-divider" />
	${r}
`,Qe=({text:r,replacementTransportText:t})=>c`
	<em data-icon-trailing="bus" class="ri-transport-tag-sev">
		<span aria-hidden="true" data-icon-trailing="arrow_right">
			<svg width="20" height="20" viewBox="0 0 20 20">
				<path
					d="M7.446 1.049 C 7.204 1.102,6.906 1.237,6.761 1.360 C 6.480 1.597,6.515 1.989,6.834 2.158 C 7.030 2.261,7.148 2.253,7.419 2.117 L 7.650 2.000 10.005 2.000 L 12.360 2.000 12.547 2.099 C 12.651 2.153,12.785 2.207,12.845 2.218 C 13.188 2.282,13.483 1.991,13.419 1.651 C 13.377 1.427,13.175 1.268,12.701 1.088 C 12.520 1.019,12.469 1.017,10.083 1.011 C 8.143 1.005,7.609 1.013,7.446 1.049 M8.017 2.804 C 6.534 3.000,5.275 4.014,4.834 5.367 C 4.670 5.871,4.667 5.949,4.668 10.050 C 4.668 12.403,4.681 13.972,4.701 14.112 C 4.810 14.867,5.248 15.605,5.864 16.073 C 6.302 16.405,6.977 16.673,7.502 16.721 L 7.720 16.742 7.764 16.596 C 7.820 16.406,8.014 16.221,8.205 16.173 C 8.314 16.146,8.460 16.149,8.800 16.185 C 9.359 16.244,10.601 16.245,11.177 16.186 C 11.600 16.143,11.785 16.153,11.920 16.226 C 12.043 16.292,12.196 16.494,12.220 16.620 L 12.242 16.742 12.463 16.722 C 12.939 16.677,13.525 16.464,13.954 16.179 C 14.553 15.782,15.002 15.162,15.207 14.450 L 15.283 14.183 15.283 10.033 L 15.283 5.883 15.211 5.600 C 14.857 4.218,13.764 3.206,12.250 2.858 C 11.969 2.793,11.835 2.788,10.100 2.781 C 9.083 2.776,8.145 2.787,8.017 2.804 M12.037 4.300 C 12.454 4.379,12.855 4.682,13.041 5.060 C 13.132 5.244,13.152 5.327,13.160 5.549 C 13.170 5.811,12.854 11.069,12.814 11.300 C 12.784 11.477,12.606 11.787,12.457 11.921 C 12.284 12.078,12.017 12.198,11.758 12.235 C 11.473 12.276,8.474 12.274,8.184 12.232 C 7.734 12.167,7.404 11.936,7.218 11.555 L 7.124 11.364 6.961 8.557 C 6.871 7.013,6.803 5.644,6.810 5.515 C 6.840 4.964,7.284 4.450,7.850 4.313 C 8.064 4.261,11.768 4.250,12.037 4.300 M8.703 13.778 C 9.023 13.946,9.098 14.366,8.856 14.629 C 8.695 14.805,8.568 14.832,7.900 14.832 C 7.208 14.833,7.068 14.808,6.913 14.653 C 6.705 14.445,6.690 14.130,6.878 13.919 C 7.064 13.710,7.108 13.700,7.870 13.700 C 8.524 13.700,8.563 13.704,8.703 13.778 M12.978 13.800 C 13.240 13.978,13.305 14.339,13.119 14.583 C 12.953 14.800,12.894 14.815,12.144 14.827 C 11.534 14.837,11.457 14.832,11.323 14.773 C 10.884 14.579,10.852 13.996,11.268 13.775 C 11.413 13.699,11.435 13.697,12.136 13.707 C 12.840 13.716,12.858 13.718,12.978 13.800 M6.387 17.434 C 6.193 17.493,6.033 17.709,6.033 17.915 L 6.033 18.033 5.188 18.033 C 4.365 18.033,4.340 18.035,4.230 18.109 C 4.076 18.212,3.993 18.381,4.010 18.554 C 4.028 18.730,4.114 18.848,4.286 18.933 C 4.420 18.999,4.475 19.000,10.000 19.000 C 15.525 19.000,15.580 18.999,15.714 18.933 C 15.886 18.848,15.972 18.730,15.990 18.554 C 16.007 18.381,15.924 18.212,15.770 18.109 C 15.660 18.035,15.635 18.033,14.812 18.033 L 13.967 18.033 13.967 17.932 C 13.967 17.546,13.566 17.297,13.216 17.467 C 13.032 17.556,12.958 17.660,12.934 17.864 L 12.917 18.017 10.000 18.017 L 7.083 18.017 7.066 17.864 C 7.043 17.662,6.968 17.556,6.791 17.470 C 6.637 17.396,6.544 17.388,6.387 17.434 "
					fill="currentColor"
					stroke="none"
					fill-rule="evenodd"
				></path>
			</svg>
		</span>
		${r.trim()}
		${l("platform.replacedBy","wurde ersetzt durch").replace("{{text}} ","")}
	</em>
	<hr aria-hidden="true" class="ri-transport-tag-divider" />
	<span>${t}</span>
`,ye=({label:r,type:t,category:e,line:a,number:i,state:n,noText:o,showIcon:m,interactive:s,anchor:h,riClick:f,staticMode:u,replacementTransportText:g,overflow:y,width:A,journeyDescription:It})=>{let rt=kt(e)??kt(t)??"UNKNOWN",Nt=(m||o)&&!g?.length?Bt[rt||""]:void 0,at=e??t,Ce=at&&a&&a.includes(at)?a.replace(at,"").trim():a,bt=r?.length?r:It?It.replace(` (${i})`,""):`${at??""} ${Ce??i??""}`,mt=l("platform.canceledTransport","Ausgefallenes Verkehrsmittel {{text}}",{text:bt}),Dt=n==="canceled"?c` <span title="${mt}"> ${bt} </span> `:c`<span>${bt}</span>`,it=e==="UNKNOWN"||t==="UNKNOWN"||!Nt?c`${Dt}`:Xe(Dt);g?.length&&(it=Qe({text:ce(rt),replacementTransportText:g}),rt="SEV_Bus");let ut=it;return u||(ut=c`<button
			part="button"
			aria-label="${n==="canceled"?mt:d}"
			type="button"
			@click="${f}"
		>
			${it}
		</button>`,s==="link"&&h&&(ut=c`<a
				part="link"
				aria-label="${n==="canceled"?mt:d}"
				href="${h}"
			>
				${it}
			</a>`)),c`
		<div
			part="root"
			class="db-tag ri-transport-tag"
			data-emphasis="strong"
			data-overflow="${y??d}"
			data-width="${A??d}"
			data-no-text="${o??d}"
			data-variant="${rt??d}"
			data-state="${n??d}"
			data-icon="${Nt??d}"
		>
			${ut}
		</div>
	`};var Se={};var z=class extends x{};p([b({reflect:!0,type:String})],z.prototype,"anchor",2),p([b({reflect:!0,type:String})],z.prototype,"interactive",2);var v=class extends z{constructor(){super(...arguments);this.width="auto"}riClick(){this.dispatchEvent(new CustomEvent("transport-tag-click",{bubbles:!0,composed:!0,detail:{category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,additionalEventDetail:this.additionalEventDetail}}))}render(){return ye({category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,riClick:this.riClick})}static{this.styles=S([Se,$].join(`
`))}};p([b({reflect:!0,type:String})],v.prototype,"category",2),p([b({reflect:!0,type:String})],v.prototype,"type",2),p([b({reflect:!0,type:String})],v.prototype,"state",2),p([b({reflect:!0,type:String})],v.prototype,"width",2),p([b({reflect:!0,type:String})],v.prototype,"line",2),p([b({reflect:!0,type:String})],v.prototype,"journeyDescription",2),p([b({reflect:!0,type:Number})],v.prototype,"number",2),p([b({reflect:!0,type:String})],v.prototype,"label",2),p([b({reflect:!0,type:String})],v.prototype,"replacementTransportText",2),p([b({reflect:!0,type:Boolean})],v.prototype,"noText",2),p([b({reflect:!0,type:Boolean})],v.prototype,"showIcon",2),p([b({attribute:"static",reflect:!0,type:Boolean})],v.prototype,"staticMode",2),p([b({reflect:!0,type:Boolean})],v.prototype,"overflow",2),p([b({reflect:!0,type:Object})],v.prototype,"additionalEventDetail",2);var Q=class extends v{};Q.styles=[...C(),...T(Q.styles)];customElements.get("ri-transport-tag")||customElements.define("ri-transport-tag",Q);var xe=({variant:r,emphasis:t,title:e})=>{let a=c`${l("platform.missingTitle","Missing title property!")}`;return e&&(a=c`
			<abbr title="${e}">
				<span>${e}</span>
				<span aria-hidden="true"><slot></slot></span>
			</abbr>
		`),c` <div
		part="root"
		class="db-tag ri-platform-tag"
		data-icon="${r==="changed"?"exclamation_mark_circle":d}"
		data-variant="${r}"
		data-emphasis="${t}"
	>
		${a}
	</div>`};var $e={};var U=class extends x{constructor(){super(...arguments);this.variant="set";this.emphasis="weak"}render(){return xe({variant:this.variant,emphasis:this.emphasis,title:this.title})}static{this.styles=S([$e,$].join(`
`))}};p([b({reflect:!0,type:String})],U.prototype,"variant",2),p([b({reflect:!0,type:String})],U.prototype,"emphasis",2),p([b({reflect:!0,type:String})],U.prototype,"title",2);var tt=class extends U{};tt.styles=[...C(),...T(tt.styles)];customElements.get("ri-platform-tag")||customElements.define("ri-platform-tag",tt);var et=class extends R{};et.styles=[...C(),...T(et.styles)];customElements.get("ri-board-item")||customElements.define("ri-board-item",et);})();
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
