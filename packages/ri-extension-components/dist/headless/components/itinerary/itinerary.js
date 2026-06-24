"use strict";(()=>{var Xe=Object.defineProperty;var Ze=Object.getOwnPropertyDescriptor;var h=(r,t,e,i)=>{for(var a=i>1?void 0:i?Ze(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=(i?o(t,e,a):o(a))||a);return i&&a&&Xe(t,e,a),a};var Tt=globalThis,Ct=Tt.ShadowRoot&&(Tt.ShadyCSS===void 0||Tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),Qt=new WeakMap,$t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ct&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Qt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Qt.set(e,t))}return t}toString(){return this.cssText}},C=r=>new $t(typeof r=="string"?r:r+"",void 0,te);var ee=(r,t)=>{if(Ct)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let e of t){let i=document.createElement("style"),a=Tt.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=e.cssText,r.appendChild(i)}},It=Ct?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return C(e)})(r):r;var{is:Ye,defineProperty:Qe,getOwnPropertyDescriptor:tr,getOwnPropertyNames:er,getOwnPropertySymbols:rr,getPrototypeOf:ir}=Object,_t=globalThis,re=_t.trustedTypes,ar=re?re.emptyScript:"",nr=_t.reactiveElementPolyfillSupport,rt=(r,t)=>r,it={toAttribute(r,t){switch(t){case Boolean:r=r?ar:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},At=(r,t)=>!Ye(r,t),ie={attribute:!0,type:String,converter:it,reflect:!1,useDefault:!1,hasChanged:At};Symbol.metadata??=Symbol("metadata"),_t.litPropertyMetadata??=new WeakMap;var D=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ie){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),a=this.getPropertyDescriptor(t,i,e);a!==void 0&&Qe(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){let{get:a,set:n}=tr(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:a,set(o){let d=a?.call(this);n?.call(this,o),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ie}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;let t=ir(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){let e=this.properties,i=[...er(e),...rr(e)];for(let a of i)this.createProperty(a,e[a])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,a]of e)this.elementProperties.set(i,a)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let a=this._$Eu(e,i);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let a of i)e.unshift(It(a))}else t!==void 0&&e.push(It(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ee(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:it).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){let n=i.getPropertyOptions(a),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:it;this._$Em=a;let d=o.fromAttribute(e,n.type);this[a]=d??this._$Ej?.get(a)??d,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){let a=this.constructor,n=this[t];if(i??=a.getPropertyOptions(t),!((i.hasChanged??At)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[a,n]of i){let{wrapped:o}=n,d=this[a];o!==!0||this._$AL.has(a)||d===void 0||this.C(a,void 0,n,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[rt("elementProperties")]=new Map,D[rt("finalized")]=new Map,nr?.({ReactiveElement:D}),(_t.reactiveElementVersions??=[]).push("2.1.1");var zt=globalThis,wt=zt.trustedTypes,ae=wt?wt.createPolicy("lit-html",{createHTML:r=>r}):void 0,ce="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,pe="?"+z,or=`<${pe}>`,F=document,nt=()=>F.createComment(""),ot=r=>r===null||typeof r!="object"&&typeof r!="function",Ut=Array.isArray,sr=r=>Ut(r)||typeof r?.[Symbol.iterator]=="function",Pt=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ne=/-->/g,oe=/>/g,V=RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),se=/'/g,le=/"/g,ue=/^(?:script|style|textarea|title)$/i,Ht=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),l=Ht(1),Wr=Ht(2),Kr=Ht(3),W=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),de=new WeakMap,J=F.createTreeWalker(F,129);function me(r,t){if(!Ut(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(t):t}var lr=(r,t)=>{let e=r.length-1,i=[],a,n=t===2?"<svg>":t===3?"<math>":"",o=at;for(let d=0;d<e;d++){let s=r[d],m,b,p=-1,g=0;for(;g<s.length&&(o.lastIndex=g,b=o.exec(s),b!==null);)g=o.lastIndex,o===at?b[1]==="!--"?o=ne:b[1]!==void 0?o=oe:b[2]!==void 0?(ue.test(b[2])&&(a=RegExp("</"+b[2],"g")),o=V):b[3]!==void 0&&(o=V):o===V?b[0]===">"?(o=a??at,p=-1):b[1]===void 0?p=-2:(p=o.lastIndex-b[2].length,m=b[1],o=b[3]===void 0?V:b[3]==='"'?le:se):o===le||o===se?o=V:o===ne||o===oe?o=at:(o=V,a=void 0);let y=o===V&&r[d+1].startsWith("/>")?" ":"";n+=o===at?s+or:p>=0?(i.push(m),s.slice(0,p)+ce+s.slice(p)+z+y):s+z+(p===-2?d:y)}return[me(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},st=class r{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let n=0,o=0,d=t.length-1,s=this.parts,[m,b]=lr(t,e);if(this.el=r.createElement(m,i),J.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=J.nextNode())!==null&&s.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(let p of a.getAttributeNames())if(p.endsWith(ce)){let g=b[o++],y=a.getAttribute(p).split(z),S=/([.?@])?(.*)/.exec(g);s.push({type:1,index:n,name:S[2],strings:y,ctor:S[1]==="."?Nt:S[1]==="?"?Ot:S[1]==="@"?Bt:X}),a.removeAttribute(p)}else p.startsWith(z)&&(s.push({type:6,index:n}),a.removeAttribute(p));if(ue.test(a.tagName)){let p=a.textContent.split(z),g=p.length-1;if(g>0){a.textContent=wt?wt.emptyScript:"";for(let y=0;y<g;y++)a.append(p[y],nt()),J.nextNode(),s.push({type:2,index:++n});a.append(p[g],nt())}}}else if(a.nodeType===8)if(a.data===pe)s.push({type:2,index:n});else{let p=-1;for(;(p=a.data.indexOf(z,p+1))!==-1;)s.push({type:7,index:n}),p+=z.length-1}n++}}static createElement(t,e){let i=F.createElement("template");return i.innerHTML=t,i}};function q(r,t,e=r,i){if(t===W)return t;let a=i!==void 0?e._$Co?.[i]:e._$Cl,n=ot(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),n===void 0?a=void 0:(a=new n(r),a._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=a:e._$Cl=a),a!==void 0&&(t=q(r,a._$AS(r,t.values),a,i)),t}var Dt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??F).importNode(e,!0);J.currentNode=a;let n=J.nextNode(),o=0,d=0,s=i[0];for(;s!==void 0;){if(o===s.index){let m;s.type===2?m=new lt(n,n.nextSibling,this,t):s.type===1?m=new s.ctor(n,s.name,s.strings,this,t):s.type===6&&(m=new Mt(n,this,t)),this._$AV.push(m),s=i[++d]}o!==s?.index&&(n=J.nextNode(),o++)}return J.currentNode=F,a}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},lt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),ot(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):sr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&ot(this._$AH)?this._$AA.nextSibling.data=t:this.T(F.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=st.createElement(me(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{let n=new Dt(a,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=de.get(t.strings);return e===void 0&&de.set(t.strings,e=new st(t)),e}k(t){Ut(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,a=0;for(let n of t)a===e.length?e.push(i=new r(this.O(nt()),this.O(nt()),this,this.options)):i=e[a],i._$AI(n),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},X=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(t,e=this,i,a){let n=this.strings,o=!1;if(n===void 0)t=q(this,t,e,0),o=!ot(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{let d=t,s,m;for(t=n[0],s=0;s<n.length-1;s++)m=q(this,d[i+s],e,s),m===W&&(m=this._$AH[s]),o||=!ot(m)||m!==this._$AH[s],m===u?t=u:t!==u&&(t+=(m??"")+n[s+1]),this._$AH[s]=m}o&&!a&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Nt=class extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},Ot=class extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},Bt=class extends X{constructor(t,e,i,a,n){super(t,e,i,a,n),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??u)===W)return;let i=this._$AH,a=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Mt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}};var dr=zt.litHtmlPolyfillSupport;dr?.(st,lt),(zt.litHtmlVersions??=[]).push("3.3.1");var be=(r,t,e)=>{let i=e?.renderBefore??t,a=i._$litPart$;if(a===void 0){let n=e?.renderBefore??null;i._$litPart$=a=new lt(t.insertBefore(nt(),n),n,void 0,e??{})}return a._$AI(r),a};var jt=globalThis,U=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=be(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};U._$litElement$=!0,U.finalized=!0,jt.litElementHydrateSupport?.({LitElement:U});var cr=jt.litElementPolyfillSupport;cr?.({LitElement:U});(jt.litElementVersions??=[]).push("4.2.1");var pr={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:At},ur=(r=pr,t,e)=>{let{kind:i,metadata:a}=e,n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),i==="accessor"){let{name:o}=e;return{set(d){let s=t.get.call(this);t.set.call(this,d),this.requestUpdate(o,s,r)},init(d){return d!==void 0&&this.C(o,void 0,r,d),d}}}if(i==="setter"){let{name:o}=e;return function(d){let s=this[o];t.call(this,d),this.requestUpdate(o,s,r)}}throw Error("Unsupported decorator location: "+i)};function f(r){return(t,e)=>typeof e=="object"?ur(r,t,e):((i,a,n)=>{let o=a.hasOwnProperty(n);return a.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(a,n):void 0})(r,t,e)}function H(r){return f({...r,state:!0,attribute:!1})}var Vt="__ri_localization_store__",Jt=window;Jt[Vt]||(Jt[Vt]={content:{},lang:"de"});var j=Jt[Vt],Ft=class{static setProviderContent(t,e){j.content={...j.content,[t]:e}}static setLanguage(t){t!==j.lang&&(j.lang=t,document.dispatchEvent(new CustomEvent("ri-language-change",{detail:{lang:t}})))}static getLanguage(){return j.lang}static getContent(){return j.content[j.lang]??j.content.de}};function c(r,t,e){let a=Ft.getContent()?.[r]??t??r;return e&&(a=a.replace(/\{\{(\w+)}}/g,(n,o)=>String(e[o]??`{{${o}}}`))),a}var he=r=>r.toString().padStart(2,"0"),fe=r=>{let t=new Date(r),e=he(t.getHours()),i=he(t.getMinutes());return`${e}:${i}`},ge=({time:r,timeSchedule:t,timeType:e,emphasis:i,arrival:a})=>{let n=l``;if(e!=="SCHEDULE"){let s=new Date(r),m=new Date(t),b="on-time",p=fe(s);Math.abs(m.getTime()-s.getTime())>=300*1e3&&(b="delayed");let g=b==="delayed"?a?c("times.delayedArrival","Versp\xE4tete Ankunftszeit"):c("times.delayedDeparture","Versp\xE4tete Abfahrtszeit"):a?c("times.currentArrival","Aktuelle Ankunftszeit"):c("times.currentDeparture","Aktuelle Abfahrtszeit");n=l`
			<ri-journey-time-stamp
				.variant="${b}"
				.emphasis="${i}"
			>
				<time>
					<span class="a11y-visually-hidden"
						>${c("times.realtimeInfo","Echtzeit Information")}</span
					>
					<span class="a11y-visually-hidden">${g}</span
					>${p}</time
				>
			</ri-journey-time-stamp>
		`}let o=fe(t),d=a?c("times.arrival","Ankunftszeit"):c("times.departure","Abfahrtszeit");return l`
		<ri-journey-time-stamp .emphasis="${i}">
			<time>
				<span class="a11y-visually-hidden">${d}</span
				>${o}</time
			>
		</ri-journey-time-stamp>
		${n}
	`};var Z=(r,t)=>t?new Date(r)<=t:!1,Y=({time:r,timeSchedule:t,timeType:e,index:i,items:a,arrival:n})=>{let o="weak";return(i===0||i===a.length-1)&&(o="strong"),ge({time:r,timeSchedule:t,timeType:e,emphasis:o,arrival:n})},Q=(r,t,e,i)=>e?l`<i data-icon="cross_circle"></i>`:t===0&&!i?l`<i data-icon="start"></i>`:t===r.length-1?l`<i data-icon="map_pin"></i>`:l`<svg
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
	</svg>`;var Lt=({platformName:r,slot:t,emphasis:e,variant:i})=>{if(!r)return l``;let a=c("platform.trackShort","Gl."),n=c("platform.track","Gleis"),o=c("platform.platformChanged","Gleiswechsel");return l`
		<ri-platform-tag
			slot="${t??u}"
			emphasis="${e??"strong"}"
			variant="${i}"
			title="${n} ${r} ${i==="changed"?o:""}"
		>
			${a} ${r}
		</ri-platform-tag>
	`};var ve=({leg:r,nowAsDate:t,viasDetailsClick:e})=>{let{via:i}=r;return i.length===0?u:l`<details class="ri-itinerary-via-container">
		<summary
			data-icon="chevron_down"
			data-interactive-focus="true"
			data-variant="ghost"
			data-size="small"
			class="db-button"
			@click="${{handleEvent:()=>e?.(r)}}"
		>
			${i.length} ${c("journey.intermediateStops","Haltestellen")}
		</summary>
		<div>
			<ul aria-label="${c("journey.intermediateStops","Zwischenhalte")}">
				${i.map(a=>{let{departure:n,canceled:o,additional:d}=a;if(!n)return;let{time:s,timeSchedule:m,timeType:b,platformSchedule:p,platform:g,messages:y}=n,S=y?.filter(({text:x,textShort:T})=>x||T);return l`<li>
						<ri-stop .active="${Z(s,t)}">
							<ri-arrival-departure-time slot="time">
								${Y({time:s,timeSchedule:m,timeType:b,index:-1,items:i})}
							</ri-arrival-departure-time>
							<div class="ri-stop-line-icon" slot="line">
								${Q(i,-1,o)}
							</div>
							<div class="ri-itinerary-via-details-container">
								<span
									><span class="a11y-visually-hidden"
										>${c("journey.intermediateStop","Zwischenhalt")}</span
									>${a.name}</span
								>
								${d?l`<span class="db-infotext"
											>${c("journey.additionalStop","Zusatzhalt")}</span
										>`:u}
								${S?.length?S.map(({text:x,textShort:T})=>l`<span class="db-infotext"
													>${T??x}</span
												>`):u}
							</div>
							${Lt({platformName:g||p,slot:"tag",emphasis:"weak",variant:p===g?"set":"changed"})}
						</ri-stop>
					</li>`})}
			</ul>
		</div>
	</details>`};var Wt=({icon:r,tooltips:t,text:e,attributeType:i,vehicleAttributeClick:a,interactiveVehicleAttributes:n})=>{let o="";t&&(t.length>2?o=[t[0],t[1],c("journey.moreStops","{{count}} weitere",{count:t.length-2})].join(`, 
`):t.length>0&&(o=t.join(`, 
`)));let d=`${e}${o.length?`: ${o}`:""}`,s=l` <span class="a11y-visually-hidden"
			>${d}</span
		><span
			title="${o.length?o:u}"
			data-icon="${r}"
			aria-hidden="true"
			>${e}</span
		>`;return n&&(s=l`<button
			title="${o.length?o:u}"
			aria-label="${d}"
			data-interactive-focus="true"
			data-icon="${r}"
			@click="${{handleEvent:()=>a?.(i)}}"
		>
			${e}
		</button>`),l`<div class="db-tag ri-itinerary-vehicle-attribute">
		${s}
	</div>`},mr=["OC","SI","SM","RG","EF","EH","DC","RO","OG","OA","HS"],br=["3D","S1","S2"],hr=["BR"],fr=["TF","RF","KF","FT","FS","FJ","AB","NF","G","FR","FO","FK","FF","FB"],gr=()=>[{codes:mr,icon:"person_with_wheelchair",text:c("journey.barrierFree","Barrierefreiheit"),attributeType:"barrier_free"},{codes:br,icon:"couchette",text:c("journey.sleeping","Schlafwagen"),attributeType:"sleeping"},{codes:hr,icon:"knife_and_fork",text:c("journey.restaurant","Boardbistro"),attributeType:"restaurant"},{codes:fr,icon:"bike",text:c("journey.bike","Fahrradmitnahme"),attributeType:"bike"}],ye=(r,t,e,i)=>{if(!r&&(!t||t.length===0))return u;let a=[],n=gr();if(r?.operatorName.length&&a.push(l`<li>
				${Wt({icon:"bus",text:c("journey.carrier","Bef\xF6rderer"),tooltips:[r.operatorName],vehicleAttributeClick:e,attributeType:"carrier",interactiveVehicleAttributes:i})}
			</li>`),t&&t.length>0){for(let s of n){let m=t.filter(b=>s.codes.includes(b.code));m.length&&a.push(l`<li>
						${Wt({icon:s.icon,text:s.text,tooltips:m.map(b=>b.text),vehicleAttributeClick:e,attributeType:s.attributeType,interactiveVehicleAttributes:i})}
					</li>`)}let o=n.flatMap(s=>s.codes),d=t.filter(s=>!o.includes(s.code));d.length&&a.push(l`<li>
					${Wt({icon:"information_circle",text:c("journey.additionalInfo","Weitere Informationen"),tooltips:d.map(s=>s.text),vehicleAttributeClick:e,attributeType:"additional_info",interactiveVehicleAttributes:i})}
				</li>`)}return l`<ul class="ri-itinerary-vehicle-attributes-container">
		${a.map(o=>o)}
	</ul>`};var Se=({leg:r,index:t,interactiveTransportTags:e,vehicleAttributeClick:i,interactiveVehicleAttributes:a})=>{let{departure:n,duration:o}=r,{transport:d,attributes:s,administration:m}=n,{direction:b,journeyDescription:p,category:g,line:y,type:S,label:x}=d,T=b?.text,L=o?l`<ri-duration-time .duration="${o}"></ri-duration-time>`:u;return l`<ri-stop class="ri-itinerary-vehicle-info-stop">
		<div slot="time">${L}</div>
		<div slot="line"></div>
		<div class="ri-itinerary-vehicle-info-container">
			<ri-transport-container destinationName="${T}">
				<ri-transport-tag
					.journeyDescription="${p??u}"
					.label="${x??u}"
					.category="${g??u}"
					.type="${S??u}"
					.line="${y??u}"
					.staticMode="${!e}"
					.additionalEventDetail="${r}"
					showIcon
				></ri-transport-tag>
			</ri-transport-container>
			<div class="ri-itinerary-vehicle-attributes-slot-container">
				${ye(m,s,i,a)}
				<slot name="vehicle-attributes-${t}"></slot>
			</div>
			<slot name="vehicle-information-${t}"></slot>
			<slot name="vehicle-action-${t}"></slot>
		</div>
	</ri-stop>`};var vr=r=>{let t=r,e={Hbf:c("journey.stationNameHbf","Hauptbahnhof")};return Object.entries(e).forEach(([i,a])=>{t=t.replace(i,a)}),t},Kt=({arrival:r,nowAsDate:t,legs:e,departure:i,index:a,timestampIndex:n,forceEnd:o})=>{let d=!!r,s=r?.time??i?.time??"",m=r?.timeSchedule??i?.timeSchedule??"",b=r?.timeType??i?.timeType??"",p=r?.canceled??i?.canceled??!1,g=r?.platformSchedule??i?.platformSchedule??"",y=r?.platform??i?.platform??"",S="";r?S=`arrival-${r?.arrivalID??r?.extDestinationID}`:i&&(S=`departure-${i?.departureID??i?.extOriginID}`);let x=r?.stopPlace.name??i?.stopPlace.name??"",T="strong";return l`<ri-stop .active="${Z(s,t)}">
		<ri-arrival-departure-time slot="time">
			${Y({time:s,timeSchedule:m,timeType:b,index:n,items:e,arrival:!!r})}
		</ri-arrival-departure-time>
		<div data-id="${S}" class="ri-stop-line-icon" slot="line">
			${Q(e,n,p,o)}
		</div>
		<div class="ri-itinerary-station-container">
			<ri-station emphasis="${T}">
				<span class="a11y-visually-hidden"
					>${vr(x)}</span
				>
				<span aria-hidden="true">${x}</span>
				<slot
					name="station-${d?"arrival":"departure"}-${a}"
				></slot>
			</ri-station>
		</div>
		${Lt({platformName:y||g,slot:"tag",emphasis:T,variant:g===y?"set":"changed"})}
	</ri-stop>`};var xe=({leg:r,nowAsDate:t,index:e,legs:i,interactiveTransportTags:a,viasDetailsClick:n,vehicleAttributeClick:o,interactiveVehicleAttributes:d})=>{let{departure:s,arrival:m}=r;return l`${Kt({departure:s,legs:i,nowAsDate:t,index:e,timestampIndex:0})}
	${Se({nowAsDate:t,legs:i,leg:r,index:e,interactiveTransportTags:a,vehicleAttributeClick:o,interactiveVehicleAttributes:d})}
	${ve({nowAsDate:t,legs:i,leg:r,index:e,viasDetailsClick:n})}
	${Kt({arrival:m,legs:i,nowAsDate:t,index:e,timestampIndex:e===i.length-1?e:0,forceEnd:i.length===1})} `};var Gt=r=>{let t=r.match(/PT(?:(\d+)H)?(?:(\d+)M)?/),e=t?.[1]?parseInt(t[1]):0,i=t?.[2]?parseInt(t[2]):0;return[e,i]},qt=({distance:r,icon:t,duration:e,changeoverName:i,changeoverPlatform:a,transport:n})=>{let o=n??c("journey.walkTransport","Fu\xDFweg"),[d,s]=Gt(e),m=d===1?c("duration.hour","{{count}} Stunde",{count:d}):d>0?c("duration.hours","{{count}} Stunden, ",{count:d}):"",b=s===1?c("duration.minute","{{count}} Minute",{count:s}):s>0?c("duration.minutes","{{count}} Minuten",{count:s}):"",p=i?c("journey.toStation",", nach {{station}}",{station:i}):"",g=a?c("journey.fromPlatform",", von Gleis {{platform}}",{platform:a}):"",y=[`${o}, ${r?`${r} Meter, `:""}`,`Dauer circa: ${m}`,b,`${p}${g}`].join("");return l`<div class="db-infotext" data-icon="${t}">
		<span class="a11y-visually-hidden">${y}</span>
		<span aria-hidden="true">
			${r?`${r}m `:u}${o} (ca.
			${d>0?`${d}h `:u}${s>0?`${s}min`:u})</span
		>
	</div>`},Te=({legBefore:r,legAfter:t,leg:e,traveller:i,showCheckAlternative:a,hideConnectionEvaluation:n,index:o,alternativeClick:d})=>{let s;n||(s=e.evaluation.occasionalTraveller,(!s||i==="handicapped")&&(s=e.evaluation.handicappedTraveller),(!s||i==="frequent")&&(s=e.evaluation.frequentTraveller));let m,b,p;r&&t&&r.arrival&&t.departure&&(m={departureTime:r.arrival.time,arrivalTime:t.departure.time},b=t.departure.stopPlace.name,p=t.departure.platform);let g=s?.status==="SAFE"?"successful":s?.status==="CRITICAL"||s?.status==="IMPOSSIBLE"?"critical":"neutral",y=p?c("journey.toPlatform","zu Gleis {{platform}}",{platform:p}):void 0,S=l`<span
		class="db-infotext"
		data-icon="changeover"
		>${c("journey.changeover","Umstieg")}${y?` ${y}`:u}</span
	>`;if(s){let{distance:x,status:T,duration:L}=s,k="pedestrian",v;T==="CRITICAL"?(k="walking_fast",v=c("journey.connectionCritical","Das Erreichen Ihres Anschlusszuges ist kritisch")):T==="IMPOSSIBLE"?v=c("journey.connectionImpossible","Ihr Anschlusszug ist nicht erreichbar"):T==="SAFE"&&(v=c("journey.connectionSafe","Ihr Anschlusszug wird erreicht")),S=l`${qt({changeoverPlatform:p,duration:L,distance:x,changeoverName:b,icon:k})}
		${v?l`<span
					class="db-infotext"
					data-icon="${T==="IMPOSSIBLE"?"none":u}"
					data-semantic="${g}"
					>${v}</span
				>`:u}`}return l`<ri-stop class="ri-itinerary-connect-stop">
			<div slot="time">
				${m?l` <ri-duration-time
							changeover="true"
							.variant="${g}"
							.journeyTimes="${m}"
						>
						</ri-duration-time>`:u}
			</div>
			<div
				data-id="${s?.status==="IMPOSSIBLE"?`arrival-impossible-${o}`:u}"
				class="ri-stop-line-icon"
				slot="line"
			>
				${s?.status==="IMPOSSIBLE"?l`<i
							data-icon="exclamation_mark_circle"
							class="ri-itinerary-connection-impossible-icon"
						></i>`:u}
			</div>
			<div class="ri-itinerary-connect-container">
				${S}
			</div>
		</ri-stop>

		${a&&(s?.status==="CRITICAL"||s?.status==="IMPOSSIBLE")?l`<div class="ri-itinerary-connect-alternative-container">
					<button
						class="db-button"
						data-interactive-focus="true"
						data-icon="alternative_connection"
						data-variant="${s?.status==="IMPOSSIBLE"?"brand":"outlined"}"
						@click="${{handleEvent:()=>d?.(e)}}"
					>
						${c("journey.checkAlternative","Alternative pr\xFCfen")}
					</button>
				</div>`:u} `};var yr=r=>{if(r.type==="ADDRESS"){let{city:t,street:e,houseNumber:i}=r;return[t,e,i].filter(a=>a?.length).join(", ")}else if(r.type==="COORDINATE"){let{latitude:t,longitude:e}=r;return[t,e].join(", ")}else if(r.type==="STOP_PLACE"){let{name:t}=r;return t}else return""},$e=({nowAsDate:r,index:t,legs:e,leg:i,arrival:a})=>{let n=i,o=yr(a?n.destination:n.origin),d=i.type!=="TAXI"?a?n.arrivalTime:n.departureTime:void 0;if(!d){let[m,b]=Gt(n.duration),p=a?e[t-1]:e[t+1];if(p.type==="JOURNEY"){let g=p,y=a?g.arrival:g.departure,S=new Date(y.time).getTime(),x=(m*60+b)*6e4;d=new Date(a?S+x:S-x).toISOString()}else d=""}let s=`${a?"arrival":"departure"}-other-stop-line-icon-${t}`;return l`<ri-stop
		class="ri-itinerary-other-stop"
		.active="${Z(d,r)}"
	>
		<div slot="time">
			<ri-arrival-departure-time slot="time">
				${Y({time:d,timeSchedule:d,timeType:"SCHEDULE",index:t,items:e,arrival:a})}
			</ri-arrival-departure-time>
		</div>
		<div data-id="${s}" class="ri-stop-line-icon" slot="line">
			${Q(e,t,!1,a&&e.length===1)}
		</div>
		<div class="ri-itinerary-station-container">
			<ri-station emphasis="strong">
				<span>${o}</span>
				<slot
					name="station-other-${a?"arrival":"departure"}"
				></slot>
			</ri-station>
		</div>
		<slot
			slot="tag"
			name="ri-itinerary-other-action-${a?"arrival":"departure"}"
		></slot>
	</ri-stop>`},Ce=({index:r,leg:t,legs:e,nowAsDate:i})=>{let a=r===0,n=r===e.length-1;if(!a&&!n)return u;let o={WALK:"pedestrian",TAXI:"taxi",BIKE:"bike"},d={WALK:"Fu\xDFweg",TAXI:"Taxifahrt",BIKE:"Fahrradfahrt"},s=t,m=o[t.type],b=d[t.type],p=s.duration,g=[];return a&&g.push($e({index:r,legs:e,arrival:!1,nowAsDate:i,leg:t})),g.push(l`<ri-stop class="ri-itinerary-other-stop">
			<div slot="time">
				<ri-duration-time .duration="${p}"></ri-duration-time>
			</div>
			<div class="ri-stop-line-icon" slot="line"></div>
			<div class="ri-itinerary-station-container">
				${qt({transport:b,icon:m,duration:p})}
			</div>
		</ri-stop>`),n&&g.push($e({index:r,legs:e,arrival:!0,nowAsDate:i,leg:t})),l`${g.map(y=>y)}`};var _e=(r,t,e,i)=>{let a=`--ri-vehicle-progress: ${t}%;`,n=r.at(0),o=r.at(-1);if(n&&o){let d=o.top-n.top;d<0&&(d=d*-1),a=`--ri-vehicle-progress: ${t}%;
		--ri-vehicle-route-line-block-size: ${i??d}px;
		--ri-vehicle-route-line-offset: ${e??0}px;
		`}return a},Ae=({nowAsDate:r,dots:t,times:e,collapsed:i})=>{let a=0;if(!e||e.length===0||!r||!t||t.length===0)return a;let n=r.getTime(),o=e.at(-1),d=t.at(-1);if(!o||!d)return a;if(n<new Date(e[0]).getTime())a=0;else if(n>=new Date(o).getTime())a=100;else if(t?.length>0){let s=t.filter(b=>b.top!==0).length===2||i,m=s?o:e.find((b,p)=>new Date(b).getTime()>n&&t[p]?.top!==0);if(m&&t.length>0){let b=d.top-t[0].top,p=e.indexOf(m),g=s?0:p-1,y=new Date(e[g]).getTime(),x=new Date(e[p]).getTime()-y,L=(n-y)/x,k=t[p].top-t[g].top;a=(t[g].top-t[0].top+k*L)/b*100}}return a};var we=({dots:r,leg:t,nowAsDate:e,index:i,lineChange:a,legs:n,traveller:o,openVias:d})=>{let s=[],m=[],b=u,p,g,y;if(t.type==="JOURNEY"){let{departure:v,via:R,arrival:P,extJourneyID:B}=t;p=`arrival-${P.arrivalID??P.extDestinationID}`,g=`departure-${v.departureID??v.extOriginID}`,y=!d.find(M=>M.extJourneyID===B),s=[v.time],y||s.push(...R.map(M=>M.departure?.time)),s.push(P.time)}else if(b="dot",y=!0,t.type==="CONNECT"){if(n.length>2){let v=t,R=v.evaluation.occasionalTraveller;o==="frequent"?R=v.evaluation.frequentTraveller:o==="handicapped"&&(R=v.evaluation.handicappedTraveller);let P=n[i-1];g=`arrival-${P.arrival?.arrivalID??P.arrival?.extDestinationID}`;let B=n[i+1];p=`departure-${B.departure?.departureID??B.departure?.extOriginID}`,R?.status==="IMPOSSIBLE"&&(p=`arrival-impossible-${i}`),s=[P.arrival.time,B.departure.time]}}else if(n.length===1){if(p=`arrival-other-stop-line-icon-${i}`,g=`departure-other-stop-line-icon-${i}`,t.type!=="TAXI"){let v=t;s=[v.departureTime,v.arrivalTime]}}else if(n.length>1){if(i===0){g=`departure-other-stop-line-icon-${i}`;let v=n[i+1];p=`departure-${v.departure?.departureID??v.departure?.extOriginID}`,t.type!=="TAXI"&&(s=[t.departureTime,v.departure.time])}if(i===n.length-1){p=`arrival-other-stop-line-icon-${i}`;let v=n[i-1];if(g=`arrival-${v.arrival?.arrivalID??v.arrival?.extDestinationID}`,t.type!=="TAXI"){let R=t;s=[v.arrival.time,R.arrivalTime]}}}if(!p||!g)return u;let S=!1;for(let v of r)if(v.id===g)S=!0,m.push(v);else if(v.id===p){m.push(v);break}else S&&!y&&m.push(v);let x=Ae({nowAsDate:e,dots:m,times:s.map(v=>v||"").filter(v=>v?.length),collapsed:y}),T=r.length?r[0].top:0,L=m.length?m[0].top:0,k=_e(m,x,L-T,a?0:void 0);return l` <div
		class="ri-vehicle-route-line-container"
		style="${k}"
		aria-hidden="true"
	>
		<i
			class="ri-vehicle-route-line"
			data-active="true"
			data-variant="${b}"
			data-full-rounded="${x>=100}"
		></i>
		<i
			class="ri-vehicle-route-line"
			data-variant="${b}"
			data-full-rounded="${x<=0}"
		></i>
	</div>`};var Sr=r=>({type:"CONNECT",evaluation:{occasionalTraveller:{status:"UNKNOWN",duration:r.duration}}}),xr=r=>{if(r.length===1)return r;let t=[];for(let e of r){let i=r.indexOf(e),a=r.length-1;if(e.type!=="JOURNEY"&&(i===0||i===a))t.push(e);else if(e.type==="CONNECT")t.push(e);else if(e.type==="JOURNEY"){t.push(e);let n=i+1;if(n<=a){let o=r[n];o.type!=="CONNECT"&&o.type==="JOURNEY"&&t.push({type:"CONNECT",evaluation:{}})}}else t.push(Sr(e))}return t},Ee=({trip:r,now:t,interactiveTransportTags:e,traveller:i,showCheckAlternative:a,hideConnectionEvaluation:n,dots:o,lineChange:d,viasDetailsClick:s,openVias:m,alternativeClick:b,vehicleAttributeClick:p,interactiveVehicleAttributes:g})=>{if(!r)return l`${c("journey.tripNotFound","Keine Reise gefunden")}`;if(!r.legs||r.legs.length===0)return l`${c("journey.noLegs","Keine Fahrtabschnitte gefunden")}`;let y=t?new Date(t):void 0,S=xr(r.legs);return l`<div class="ri-itinerary">
		${S.map((x,T)=>we({dots:o,leg:x,nowAsDate:y,legs:S,index:T,lineChange:d,traveller:i,openVias:m}))}

		<ul aria-label="${c("journey.travelHistory","Reiseverlauf")}">
			${S.map((x,T)=>{let L;if(x.type==="WALK"||x.type==="TAXI"||x.type==="BIKE")L=Ce({leg:x,index:T,legs:S,nowAsDate:y});else if(x.type==="CONNECT"){let k=T-1>=0?S[T-1]:void 0,v=T+1===S.length?void 0:S[T+1];L=Te({legBefore:k,leg:x,legAfter:v,traveller:i,showCheckAlternative:a,hideConnectionEvaluation:n,index:T,alternativeClick:b})}else L=xe({leg:x,nowAsDate:y,legs:S,index:T,interactiveTransportTags:e,viasDetailsClick:s,vehicleAttributeClick:p,interactiveVehicleAttributes:g});return l`<li>${L}</li>`})}
		</ul>
	</div>`};var Le={};var ke={};var Re={};var _={};var $=class extends U{constructor(){super(...arguments);this.i18n=!0;this.onLanguageChange=()=>{this.requestUpdate()}}async hydrateElements(){await new Promise(e=>setTimeout(e,0)),this.shadowRoot?.host.localName&&(this.shadowRoot.host.setAttribute("data-hydrated","true"),this.shadowRoot?.querySelectorAll(`.${this.shadowRoot?.host.localName}`).forEach(e=>{e?.setAttribute("data-hydrated","true")}))}connectedCallback(){super.connectedCallback(),this.shadowRoot?.host.setAttribute("data-hydrated","true"),this.shadowRoot&&(this.hydrateObserver=new MutationObserver(()=>{this.hydrateElements()}),this.hydrateObserver.observe(this.shadowRoot,{childList:!0,subtree:!0})),this.i18n&&document.addEventListener("ri-language-change",this.onLanguageChange)}disconnectedCallback(){this.hydrateObserver?.disconnect(),this.i18n&&document.removeEventListener("ri-language-change",this.onLanguageChange),super.disconnectedCallback()}};h([H()],$.prototype,"hydrateObserver",2);var Ar=r=>["HIGH_SPEED_TRAIN","AIR","AIR","ECE","EM","EST","FA","FB","FR","ICE","ICL","IXB","IXr","RHI","RHT","RJ","RJX","RRI","RRT","TGD","TGJ","TGL","TGV","THA","X2"].includes(r),wr=r=>["INTERCITY_TRAIN","ALS","ARC","ATR","IC","ICD","ICN","ICr","ICT","INZ","IP","KXB","NJ","Rx","S2","SC","TLG","ARZ","AS","AZ","CAT","D","DNZ","DPF","DZ","EBU","EE","EN","FBU","HOT","ICB","INT","IR","RR","S84","TLK","UEx","X","X70","EC","ECB","ECM","ECW","EIC","EX","EXB"].includes(r),Er=r=>["REGIONAL_TRAIN","INTER_REGIONAL_TRAIN","ATB","Bsv","BSV","CJX","DPN","E","ER","IRE","N","Os","OZ","PPN","R","R84","RB","RE","RER","REX","SB","Sp","T84","TER","U70","UUU","Zr","ZUG","BRB","erx","NWB","RTB","IRE","HLB","ME"].includes(r),Xt=r=>{if(!r)return;let t=r.toLowerCase();if(Ar(r))return"ICE";if(wr(r))return"IC";if(Er(r))return"RE";if(["CITY_TRAIN","S","S-Bahn","DPS","e","RT","AVG"].map(e=>e.toLowerCase()).includes(t))return"S";if(["SUBWAY","U","U-Bahn"].map(e=>e.toLowerCase()).includes(t))return"U";if(["TRAM","Tram","STR","Stb","SWB","ZRB"].map(e=>e.toLowerCase()).includes(t))return"STR";if(["BUS","lt","OBU","ubu"].map(e=>e.toLowerCase()).includes(t))return"BUS";if(["SHUTTLE","RUF"].map(e=>e.toLowerCase()).includes(t))return"RUF";if(["FERRY","FAE","KAT","SCH","Schiff"].map(e=>e.toLowerCase()).includes(t))return"FAE";if(["Long_distance_Bus"].map(e=>e.toLowerCase()).includes(t))return"Long_distance_Bus";if(["EV_Bus","SEV_Bus"].map(e=>e.toLowerCase()).includes(t))return"SEV_Bus";if(["Ship"].map(e=>e.toLowerCase()).includes(t))return"Ship";if(["FLIGHT","Plane"].map(e=>e.toLowerCase()).includes(t))return"Plane";if(["Car_Sharing"].map(e=>e.toLowerCase()).includes(t))return"Car_Sharing";if(["Taxi","AST"].map(e=>e.toLowerCase()).includes(t))return"Taxi";if(["Bike_Sharing"].map(e=>e.toLowerCase()).includes(t))return"Bike_Sharing";if(["WALK"].map(e=>e.toLowerCase()).includes(t))return"WALK"},Ie=r=>{switch(r){case"Bike_Sharing":return c("transport.variant.bikeSharing","Fahrradverleih");case"Car_Sharing":return c("transport.variant.carSharing","Carsharing");case"BUS":return c("transport.variant.bus","Bus");case"FAE":return c("transport.variant.ferry","F\xE4hre");case"IC":return c("transport.variant.intercity","Intercity");case"ICE":return c("transport.variant.intercityExpress","Intercity Express");case"Long_distance_Bus":return c("transport.variant.longDistanceBus","Fernbus");case"Plane":return c("transport.variant.plane","Flugzeug");case"RE":return c("transport.variant.regionalExpress","Regional Express");case"S":return c("transport.variant.sBahn","S-Bahn");case"SEV_Bus":return c("transport.variant.replacementBus","Ersatzverkehr Bus");case"Ship":return c("transport.variant.ship","Schiff");case"STR":return c("transport.variant.tram","Stra\xDFenbahn");case"Taxi":return c("transport.variant.taxi","Taxi");case"U":return c("transport.variant.uBahn","U-Bahn");case"WALK":return c("transport.variant.walk","Zu Fu\xDF");default:return c("transport.variant.unknown","Unbekannt")}};var Zt=null,A=()=>(Zt===null&&(Zt=self.document.styleSheets?[...self.document.styleSheets].map(r=>{let t=new CSSStyleSheet;try{if(r.cssRules){let e=[...r.cssRules].map(i=>i.cssText).join(" ");t.replaceSync(e)}}catch{}return t}):[]),Zt),w=(r=[])=>Array.isArray(r)?r:[r];var kt=r=>{let t=r?.querySelectorAll("slot");if(t)for(let e of t)e.assignedNodes().length>0&&e?.parentElement&&(e.parentElement.dataset.slotted="true",r?.firstElementChild&&e.name&&!e.name.includes("-")&&(r.firstElementChild.dataset[e.name]="true"))};var N=class extends ${constructor(){super(...arguments);this.timeline="auto";this._dots=[];this._isUpdating=!1;this._debouncedHandleStopIconDetection=()=>{this._isUpdating||(this._rafId&&cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(async()=>{this._isUpdating=!0,this.handleStopIconDetection(),await this.updateComplete,this.handleStopIconDetection(),this._isUpdating=!1}))}}handleStopIconDetection(){}_startTimer(){this._stopTimer(),this.timeline==="auto"&&(this._setNow(),this._timerId=window.setInterval(()=>this._setNow(),3e4))}_stopTimer(){this._timerId&&(clearInterval(this._timerId),this._timerId=void 0)}_setNow(){this.now=new Date().toISOString()}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),kt(this.shadowRoot),this._debouncedHandleStopIconDetection()}connectedCallback(){super.connectedCallback(),this._startTimer(),window.addEventListener("resize",this._debouncedHandleStopIconDetection),this.shadowRoot&&(this._routeChildObserver=new MutationObserver(()=>{if(!this._intersectionObserver){let e=this.shadowRoot?.firstElementChild;e&&(this._intersectionObserver=new IntersectionObserver(i=>{i[0].isIntersecting&&this._debouncedHandleStopIconDetection()}),this._intersectionObserver.observe(e))}}),this._routeChildObserver.observe(this.shadowRoot,{childList:!0,subtree:!0}))}disconnectedCallback(){this._rafId&&cancelAnimationFrame(this._rafId),this._intersectionObserver?.disconnect(),window.removeEventListener("resize",this._debouncedHandleStopIconDetection),this._routeChildObserver?.disconnect(),this._stopTimer(),super.disconnectedCallback()}};h([f({reflect:!0,type:String})],N.prototype,"now",2),h([f({reflect:!0,type:String})],N.prototype,"timeline",2),h([f({reflect:!0,type:Boolean})],N.prototype,"debug",2),h([H()],N.prototype,"_dots",2),h([H()],N.prototype,"_routeChildObserver",2);var Pe={};var I=class extends N{constructor(){super(...arguments);this.interactiveTransportTags=!1;this.interactiveVehicleAttributes=!1;this.showCheckAlternative=!1;this.hideConnectionEvaluation=!1;this._lineChange=!1;this._openVias=[];this.viasDetailsClick=e=>{this._lineChange=!0,this._openVias.find(i=>i.extJourneyID===e.extJourneyID)?this._openVias=this._openVias.filter(i=>i.extJourneyID!==e.extJourneyID):this._openVias.push(e),new Promise(i=>setTimeout(i,300)).then(()=>{this.handleStopIconDetection()}),this.dispatchEvent(new CustomEvent("vias-details-click",{bubbles:!0,composed:!0,detail:{leg:e,trip:this.trip,now:this.now}}))};this.alternativeClick=e=>{this.dispatchEvent(new CustomEvent("check-alternative-click",{bubbles:!0,composed:!0,detail:{leg:e,trip:this.trip,now:this.now}}))};this.vehicleAttributeClick=e=>{this.dispatchEvent(new CustomEvent("vehicle-attribute-click",{bubbles:!0,composed:!0,detail:{attributeType:e,trip:this.trip,now:this.now}}))}}render(){return Ee({trip:this.trip,now:this.now,dots:this._dots,lineChange:this._lineChange,debug:this.debug,traveller:this.traveller,interactiveTransportTags:this.interactiveTransportTags,interactiveVehicleAttributes:this.interactiveVehicleAttributes,showCheckAlternative:this.showCheckAlternative,hideConnectionEvaluation:this.hideConnectionEvaluation,viasDetailsClick:this.viasDetailsClick,alternativeClick:this.alternativeClick,vehicleAttributeClick:this.vehicleAttributeClick,openVias:this._openVias})}handleStopIconDetection(){this._lineChange=!1;let e=this.shadowRoot?.querySelectorAll(".ri-stop-line-icon");e&&(this._dots=[...e].map(i=>({id:i.dataset.id,top:i.getBoundingClientRect().top})))}static{this.styles=C([Le,_,ke,Re,Pe].join(`
`))}};h([f({reflect:!0,type:Object})],I.prototype,"trip",2),h([f({reflect:!0,type:Boolean})],I.prototype,"interactiveTransportTags",2),h([f({reflect:!0,type:Boolean})],I.prototype,"interactiveVehicleAttributes",2),h([f({reflect:!0,type:Boolean})],I.prototype,"showCheckAlternative",2),h([f({reflect:!0,type:Boolean})],I.prototype,"hideConnectionEvaluation",2),h([f({reflect:!0,type:String})],I.prototype,"traveller",2),h([H()],I.prototype,"_lineChange",2),h([H()],I.prototype,"_openVias",2);var De=({active:r,breakpointVariant:t})=>l`<div
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
	</div>`;var Ne={};var dt=class extends ${};h([f({reflect:!0,type:String})],dt.prototype,"breakpointVariant",2);var ct=class extends dt{constructor(){super(...arguments);this.i18n=!1;this.active=!1}render(){return De({active:this.active,breakpointVariant:this.breakpointVariant})}async firstUpdated(){kt(this.shadowRoot)}static{this.styles=C([Ne,_].join(`
`))}};h([f({reflect:!0,type:String})],ct.prototype,"active",2);var pt=class extends ct{};pt.styles=[...A(),...w(pt.styles)];customElements.get("ri-stop")||customElements.define("ri-stop",pt);var Oe=({size:r="medium"})=>l`<div class="ri-arrival-departure-time" data-size="${r}">
		<slot></slot>
	</div>`;var Be={};var ut=class extends ${constructor(){super(...arguments);this.i18n=!1}render(){return Oe({size:this.size})}static{this.styles=C([Be,_].join(`
`))}};h([f({reflect:!0,type:String})],ut.prototype,"size",2);var Me=({emphasis:r="weak",background:t=!1,variant:e="default"})=>l`<div
		class="ri-journey-time-stamp"
		data-emphasis="${r}"
		data-background="${t}"
		data-variant="${e}"
	>
		<slot></slot>
	</div>`;var ze={};var K=class extends ${constructor(){super(...arguments);this.i18n=!1}render(){return Me({variant:this.variant,background:this.background,emphasis:this.emphasis})}static{this.styles=C([ze,_].join(`
`))}};h([f({reflect:!0,type:String})],K.prototype,"variant",2),h([f({reflect:!0,type:String})],K.prototype,"emphasis",2),h([f({reflect:!0,type:Boolean})],K.prototype,"background",2);var mt=class extends K{};mt.styles=[...A(),...w(mt.styles)];customElements.get("ri-journey-time-stamp")||customElements.define("ri-journey-time-stamp",mt);var bt=class extends ut{};bt.styles=[...A(),...w(bt.styles)];customElements.get("ri-arrival-departure-time")||customElements.define("ri-arrival-departure-time",bt);var Ue=({variant:r,emphasis:t,title:e})=>{let i=l`${c("platform.missingTitle","Missing title property!")}`;return e&&(i=l`
			<abbr title="${e}">
				<span>${e}</span>
				<span aria-hidden="true"><slot></slot></span>
			</abbr>
		`),l` <div
		part="root"
		class="db-tag ri-platform-tag"
		data-icon="${r==="changed"?"exclamation_mark_circle":u}"
		data-variant="${r}"
		data-emphasis="${t}"
	>
		${i}
	</div>`};var He={};var G=class extends ${constructor(){super(...arguments);this.variant="set";this.emphasis="weak"}render(){return Ue({variant:this.variant,emphasis:this.emphasis,title:this.title})}static{this.styles=C([He,_].join(`
`))}};h([f({reflect:!0,type:String})],G.prototype,"variant",2),h([f({reflect:!0,type:String})],G.prototype,"emphasis",2),h([f({reflect:!0,type:String})],G.prototype,"title",2);var ht=class extends G{};ht.styles=[...A(),...w(ht.styles)];customElements.get("ri-platform-tag")||customElements.define("ri-platform-tag",ht);var je=({directionText:r,destinationName:t})=>{let e=l``;return t?e=l`<p>
			${c("platform.to","nach {{destination}}",{destination:t})}
		</p>`:r&&(e=l`<p>${r}</p>`),l`
		<article class="ri-transport-container">
			<div><slot></slot></div>
			${e}
		</article>
	`};var Ve={};var tt=class extends ${render(){return je({destinationName:this.destinationName,directionText:this.directionText})}static{this.styles=C([Ve,_].join(`
`))}};h([f({reflect:!0,type:String})],tt.prototype,"destinationName",2),h([f({reflect:!0,type:String})],tt.prototype,"directionText",2);var ft=class extends tt{};ft.styles=[...A(),...w(ft.styles)];customElements.get("ri-transport-container")||customElements.define("ri-transport-container",ft);var Yt={ICE:"train",IC:"ic_and_ec",RE:"local_train",S:"s_bahn",U:"subway",STR:"tram",BUS:"local_bus",FAE:"ship",Long_distance_Bus:"long_distance_bus",SEV_Bus:"ev_bus",Ship:"ship",Plane:"airplane",Car_Sharing:"car_sharing",Taxi:"taxi",Bike_Sharing:"call_a_bike",WALK:"pedestrian",RUF:"call_in_bus"},Uo=Object.keys(Yt);var Nr=r=>l`
	<hr class="ri-transport-tag-divider" />
	${r}
`,Or=({text:r,replacementTransportText:t})=>l`
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
		${c("platform.replacedBy","wurde ersetzt durch").replace("{{text}} ","")}
	</em>
	<hr aria-hidden="true" class="ri-transport-tag-divider" />
	<span>${t}</span>
`,Je=({label:r,type:t,category:e,line:i,number:a,state:n,noText:o,showIcon:d,interactive:s,anchor:m,riClick:b,staticMode:p,replacementTransportText:g,overflow:y,width:S,journeyDescription:x})=>{let T=Xt(e)??Xt(t)??"UNKNOWN",L=(d||o)&&!g?.length?Yt[T||""]:void 0,k=e??t,v=k&&i&&i.includes(k)?i.replace(k,"").trim():i,R=r?.length?r:x?x.replace(` (${a})`,""):`${k??""} ${v??a??""}`,P=c("platform.canceledTransport","Ausgefallenes Verkehrsmittel {{text}}",{text:R}),B=n==="canceled"?l` <span title="${P}"> ${R} </span> `:l`<span>${R}</span>`,M=e==="UNKNOWN"||t==="UNKNOWN"||!L?l`${B}`:Nr(B);g?.length&&(M=Or({text:Ie(T),replacementTransportText:g}),T="SEV_Bus");let Rt=M;return p||(Rt=l`<button
			part="button"
			aria-label="${n==="canceled"?P:u}"
			type="button"
			@click="${b}"
		>
			${M}
		</button>`,s==="link"&&m&&(Rt=l`<a
				part="link"
				aria-label="${n==="canceled"?P:u}"
				href="${m}"
			>
				${M}
			</a>`)),l`
		<div
			part="root"
			class="db-tag ri-transport-tag"
			data-emphasis="strong"
			data-overflow="${y??u}"
			data-width="${S??u}"
			data-no-text="${o??u}"
			data-variant="${T??u}"
			data-state="${n??u}"
			data-icon="${L??u}"
		>
			${Rt}
		</div>
	`};var Fe={};var et=class extends ${};h([f({reflect:!0,type:String})],et.prototype,"anchor",2),h([f({reflect:!0,type:String})],et.prototype,"interactive",2);var E=class extends et{constructor(){super(...arguments);this.width="auto"}riClick(){this.dispatchEvent(new CustomEvent("transport-tag-click",{bubbles:!0,composed:!0,detail:{category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,additionalEventDetail:this.additionalEventDetail}}))}render(){return Je({category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,riClick:this.riClick})}static{this.styles=C([Fe,_].join(`
`))}};h([f({reflect:!0,type:String})],E.prototype,"category",2),h([f({reflect:!0,type:String})],E.prototype,"type",2),h([f({reflect:!0,type:String})],E.prototype,"state",2),h([f({reflect:!0,type:String})],E.prototype,"width",2),h([f({reflect:!0,type:String})],E.prototype,"line",2),h([f({reflect:!0,type:String})],E.prototype,"journeyDescription",2),h([f({reflect:!0,type:Number})],E.prototype,"number",2),h([f({reflect:!0,type:String})],E.prototype,"label",2),h([f({reflect:!0,type:String})],E.prototype,"replacementTransportText",2),h([f({reflect:!0,type:Boolean})],E.prototype,"noText",2),h([f({reflect:!0,type:Boolean})],E.prototype,"showIcon",2),h([f({attribute:"static",reflect:!0,type:Boolean})],E.prototype,"staticMode",2),h([f({reflect:!0,type:Boolean})],E.prototype,"overflow",2),h([f({reflect:!0,type:Object})],E.prototype,"additionalEventDetail",2);var gt=class extends E{};gt.styles=[...A(),...w(gt.styles)];customElements.get("ri-transport-tag")||customElements.define("ri-transport-tag",gt);var We=({times:r,journeyTimes:t,duration:e,variant:i,changeover:a})=>{let n,o;if(e){let b=e.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);n=b?.[1]?parseInt(b[1]):0,o=b?.[2]?parseInt(b[2]):0}else if(r)n=r.hours,o=r.minutes;else if(t){if(!t.arrivalTime||!t.departureTime)return l`No times provided`;let b=new Date(t.departureTime),p=new Date(t.arrivalTime),g=Math.round((p.getTime()-b.getTime())/6e4);n=Math.floor(g/60),o=g%60}else return l`No times provided`;let d=u,s=u,m=a?c("duration.changeoverTime","Umstiegszeit: "):c("duration.travelTime","Reisezeit: ");return n&&(m+=n===1?c("duration.hour","{{count}} Stunde",{count:n}):c("duration.hours","{{count}} Stunden und",{count:n}),d=l`<span aria-hidden="true">${n}h</span>`),o&&(m+=o===1?c("duration.minute","{{count}} Minute",{count:o}):c("duration.minutes","{{count}} Minuten",{count:o}),s=l`<span aria-hidden="true">${o}min</span>`),l`<div class="ri-duration-time" data-variant="${i}">
		<span class="a11y-visually-hidden">${m}</span>${d}${s}
	</div>`};var Ke={};var O=class extends ${render(){return We({journeyTimes:this.journeyTimes,times:this.times,duration:this.duration,variant:this.variant,changeover:this.changeover})}static{this.styles=C([Ke,_].join(`
`))}};h([f({reflect:!0,type:Object})],O.prototype,"journeyTimes",2),h([f({reflect:!0,type:Object})],O.prototype,"times",2),h([f({reflect:!0,type:String})],O.prototype,"duration",2),h([f({reflect:!0,type:String})],O.prototype,"variant",2),h([f({reflect:!0,type:Boolean})],O.prototype,"changeover",2);var vt=class extends O{};vt.styles=[...A(),...w(vt.styles)];customElements.get("ri-duration-time")||customElements.define("ri-duration-time",vt);var Ge=({emphasis:r})=>l`<div class="ri-station" data-emphasis="${r}"><slot /></div>`;var qe={};var yt=class extends ${constructor(){super(...arguments);this.i18n=!1}render(){return Ge({emphasis:this.emphasis})}static{this.styles=C([qe,_].join(`
`))}};h([f({reflect:!0,type:String})],yt.prototype,"emphasis",2);var St=class extends yt{};St.styles=[...A(),...w(St.styles)];customElements.get("ri-station")||customElements.define("ri-station",St);var xt=class extends I{};xt.styles=[...A(),...w(xt.styles)];customElements.get("ri-itinerary")||customElements.define("ri-itinerary",xt);})();
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
