"use strict";(()=>{var Yi=Object.defineProperty;var Xi=Object.getOwnPropertyDescriptor;var m=(e,t,r,i)=>{for(var a=i>1?void 0:i?Xi(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(a=(i?n(t,r,a):n(a))||a);return i&&a&&Yi(t,r,a),a};var oe=globalThis,se=oe.ShadowRoot&&(oe.ShadyCSS===void 0||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pr=Symbol(),dr=new WeakMap,ne=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==pr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(se&&t===void 0){let i=r!==void 0&&r.length===1;i&&(t=dr.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&dr.set(r,t))}return t}toString(){return this.cssText}},C=e=>new ne(typeof e=="string"?e:e+"",void 0,pr);var mr=(e,t)=>{if(se)e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(let r of t){let i=document.createElement("style"),a=oe.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},ze=se?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let i of t.cssRules)r+=i.cssText;return C(r)})(e):e;var{is:Qi,defineProperty:ta,getOwnPropertyDescriptor:ea,getOwnPropertyNames:ra,getOwnPropertySymbols:ia,getPrototypeOf:aa}=Object,le=globalThis,ur=le.trustedTypes,oa=ur?ur.emptyScript:"",na=le.reactiveElementPolyfillSupport,Tt=(e,t)=>e,wt={toAttribute(e,t){switch(t){case Boolean:e=e?oa:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ce=(e,t)=>!Qi(e,t),fr={attribute:!0,type:String,converter:wt,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??=Symbol("metadata"),le.litPropertyMetadata??=new WeakMap;var G=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=fr){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){let i=Symbol(),a=this.getPropertyDescriptor(t,i,r);a!==void 0&&ta(this.prototype,t,a)}}static getPropertyDescriptor(t,r,i){let{get:a,set:o}=ea(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get:a,set(n){let d=a?.call(this);o?.call(this,n),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fr}static _$Ei(){if(this.hasOwnProperty(Tt("elementProperties")))return;let t=aa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tt("properties"))){let r=this.properties,i=[...ra(r),...ia(r)];for(let a of i)this.createProperty(a,r[a])}let t=this[Symbol.metadata];if(t!==null){let r=litPropertyMetadata.get(t);if(r!==void 0)for(let[i,a]of r)this.elementProperties.set(i,a)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let a=this._$Eu(r,i);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let a of i)r.unshift(ze(a))}else t!==void 0&&r.push(ze(t));return r}static _$Eu(t,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){let i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:wt).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,r){let i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){let o=i.getPropertyOptions(a),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:wt;this._$Em=a;let d=n.fromAttribute(r,o.type);this[a]=d??this._$Ej?.get(a)??d,this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){let a=this.constructor,o=this[t];if(i??=a.getPropertyOptions(t),!((i.hasChanged??ce)(o,r)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:a,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??r??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[a,o]of i){let{wrapped:n}=o,d=this[a];n!==!0||this._$AL.has(a)||d===void 0||this.C(a,void 0,o,d)}}let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[Tt("elementProperties")]=new Map,G[Tt("finalized")]=new Map,na?.({ReactiveElement:G}),(le.reactiveElementVersions??=[]).push("2.1.1");var Oe=globalThis,de=Oe.trustedTypes,br=de?de.createPolicy("lit-html",{createHTML:e=>e}):void 0,Me="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,He="?"+q,sa=`<${He}>`,ct=document,_t=()=>ct.createComment(""),Et=e=>e===null||typeof e!="object"&&typeof e!="function",je=Array.isArray,Sr=e=>je(e)||typeof e?.[Symbol.iterator]=="function",Ve=`[ 	
\f\r]`,At=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hr=/-->/g,gr=/>/g,st=RegExp(`>|${Ve}(?:([^\\s"'>=/]+)(${Ve}*=${Ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vr=/'/g,yr=/"/g,$r=/^(?:script|style|textarea|title)$/i,Ue=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),s=Ue(1),jo=Ue(2),Uo=Ue(3),dt=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),xr=new WeakMap,lt=ct.createTreeWalker(ct,129);function Cr(e,t){if(!je(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return br!==void 0?br.createHTML(t):t}var Tr=(e,t)=>{let r=e.length-1,i=[],a,o=t===2?"<svg>":t===3?"<math>":"",n=At;for(let d=0;d<r;d++){let c=e[d],f,h,b=-1,g=0;for(;g<c.length&&(n.lastIndex=g,h=n.exec(c),h!==null);)g=n.lastIndex,n===At?h[1]==="!--"?n=hr:h[1]!==void 0?n=gr:h[2]!==void 0?($r.test(h[2])&&(a=RegExp("</"+h[2],"g")),n=st):h[3]!==void 0&&(n=st):n===st?h[0]===">"?(n=a??At,b=-1):h[1]===void 0?b=-2:(b=n.lastIndex-h[2].length,f=h[1],n=h[3]===void 0?st:h[3]==='"'?yr:vr):n===yr||n===vr?n=st:n===hr||n===gr?n=At:(n=st,a=void 0);let v=n===st&&e[d+1].startsWith("/>")?" ":"";o+=n===At?c+sa:b>=0?(i.push(f),c.slice(0,b)+Me+c.slice(b)+q+v):c+q+(b===-2?d:v)}return[Cr(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Lt=class e{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let o=0,n=0,d=t.length-1,c=this.parts,[f,h]=Tr(t,r);if(this.el=e.createElement(f,i),lt.currentNode=this.el.content,r===2||r===3){let b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(a=lt.nextNode())!==null&&c.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(let b of a.getAttributeNames())if(b.endsWith(Me)){let g=h[n++],v=a.getAttribute(b).split(q),S=/([.?@])?(.*)/.exec(g);c.push({type:1,index:o,name:S[2],strings:v,ctor:S[1]==="."?me:S[1]==="?"?ue:S[1]==="@"?fe:mt}),a.removeAttribute(b)}else b.startsWith(q)&&(c.push({type:6,index:o}),a.removeAttribute(b));if($r.test(a.tagName)){let b=a.textContent.split(q),g=b.length-1;if(g>0){a.textContent=de?de.emptyScript:"";for(let v=0;v<g;v++)a.append(b[v],_t()),lt.nextNode(),c.push({type:2,index:++o});a.append(b[g],_t())}}}else if(a.nodeType===8)if(a.data===He)c.push({type:2,index:o});else{let b=-1;for(;(b=a.data.indexOf(q,b+1))!==-1;)c.push({type:7,index:o}),b+=q.length-1}o++}}static createElement(t,r){let i=ct.createElement("template");return i.innerHTML=t,i}};function pt(e,t,r=e,i){if(t===dt)return t;let a=i!==void 0?r._$Co?.[i]:r._$Cl,o=Et(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=a:r._$Cl=a),a!==void 0&&(t=pt(e,a._$AS(e,t.values),a,i)),t}var pe=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:i}=this._$AD,a=(t?.creationScope??ct).importNode(r,!0);lt.currentNode=a;let o=lt.nextNode(),n=0,d=0,c=i[0];for(;c!==void 0;){if(n===c.index){let f;c.type===2?f=new yt(o,o.nextSibling,this,t):c.type===1?f=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(f=new be(o,this,t)),this._$AV.push(f),c=i[++d]}n!==c?.index&&(o=lt.nextNode(),n++)}return lt.currentNode=ct,a}p(t){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}},yt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=pt(this,t,r),Et(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==dt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Sr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&Et(this._$AH)?this._$AA.nextSibling.data=t:this.T(ct.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Lt.createElement(Cr(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(r);else{let o=new pe(a,this),n=o.u(this.options);o.p(r),this.T(n),this._$AH=o}}_$AC(t){let r=xr.get(t.strings);return r===void 0&&xr.set(t.strings,r=new Lt(t)),r}k(t){je(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,a=0;for(let o of t)a===r.length?r.push(i=new e(this.O(_t()),this.O(_t()),this,this.options)):i=r[a],i._$AI(o),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},mt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,a,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=r,this._$AM=a,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,r=this,i,a){let o=this.strings,n=!1;if(o===void 0)t=pt(this,t,r,0),n=!Et(t)||t!==this._$AH&&t!==dt,n&&(this._$AH=t);else{let d=t,c,f;for(t=o[0],c=0;c<o.length-1;c++)f=pt(this,d[i+c],r,c),f===dt&&(f=this._$AH[c]),n||=!Et(f)||f!==this._$AH[c],f===p?t=p:t!==p&&(t+=(f??"")+o[c+1]),this._$AH[c]=f}n&&!a&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},me=class extends mt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},ue=class extends mt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},fe=class extends mt{constructor(t,r,i,a,o){super(t,r,i,a,o),this.type=5}_$AI(t,r=this){if((t=pt(this,t,r,0)??p)===dt)return;let i=this._$AH,a=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},be=class{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){pt(this,t)}},wr={M:Me,P:q,A:He,C:1,L:Tr,R:pe,D:Sr,V:pt,I:yt,H:mt,N:ue,U:fe,B:me,F:be},la=Oe.litHtmlPolyfillSupport;la?.(Lt,yt),(Oe.litHtmlVersions??=[]).push("3.3.1");var Ar=(e,t,r)=>{let i=r?.renderBefore??t,a=i._$litPart$;if(a===void 0){let o=r?.renderBefore??null;i._$litPart$=a=new yt(t.insertBefore(_t(),o),o,void 0,r??{})}return a._$AI(e),a};var We=globalThis,K=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ar(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return dt}};K._$litElement$=!0,K.finalized=!0,We.litElementHydrateSupport?.({LitElement:K});var ca=We.litElementPolyfillSupport;ca?.({LitElement:K});(We.litElementVersions??=[]).push("4.2.1");var da={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ce},pa=(e=da,t,r)=>{let{kind:i,metadata:a}=r,o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),i==="accessor"){let{name:n}=r;return{set(d){let c=t.get.call(this);t.set.call(this,d),this.requestUpdate(n,c,e)},init(d){return d!==void 0&&this.C(n,void 0,e,d),d}}}if(i==="setter"){let{name:n}=r;return function(d){let c=this[n];t.call(this,d),this.requestUpdate(n,c,e)}}throw Error("Unsupported decorator location: "+i)};function u(e){return(t,r)=>typeof r=="object"?pa(e,t,r):((i,a,o)=>{let n=a.hasOwnProperty(o);return a.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(a,o):void 0})(e,t,r)}function H(e){return u({...e,state:!0,attribute:!1})}var Ge="__ri_localization_store__",qe=window;qe[Ge]||(qe[Ge]={content:{},lang:"de"});var Z=qe[Ge],Fe=class{static setProviderContent(t,r){Z.content={...Z.content,[t]:r}}static setLanguage(t){t!==Z.lang&&(Z.lang=t,document.dispatchEvent(new CustomEvent("ri-language-change",{detail:{lang:t}})))}static getLanguage(){return Z.lang}static getContent(){return Z.content[Z.lang]??Z.content.de}};function l(e,t,r){let a=Fe.getContent()?.[e]??t??e;return r&&(a=a.replace(/\{\{(\w+)}}/g,(o,n)=>String(r[n]??`{{${n}}}`))),a}var _r=({capacity:e,variant:t,size:r})=>{let i="capacity_indicator_low",a="neutral",o=l("capacity.low","Geringe Auslastung erwartet");return e==="OVERCROWDED"?(i="capacity_indicator_fully_booked",a="critical",o=l("capacity.overcrowded","Au\xDFergew\xF6hnlich hohe Auslastung erwartet")):e==="HIGH"?(i="capacity_indicator_high",a="critical",o=l("capacity.high","Hohe Auslastung erwartet")):e==="MIDDLE"&&(i="capacity_indicator_moderate",a="warning",o=l("capacity.middle","Mittlere Auslastung erwartet")),s`<div
		class="db-infotext ri-capacity-indicator"
		data-icon="${i}"
		data-semantic="${a}"
		data-size="${r}"
		data-variant="${t}"
		title="${t==="tag"?o:p}"
	>
		${o}
	</div>`};var Er={};var T={};var L=class extends K{constructor(){super(...arguments);this.i18n=!0;this.onLanguageChange=()=>{this.requestUpdate()}}async hydrateElements(){await new Promise(r=>setTimeout(r,0)),this.shadowRoot?.host.localName&&(this.shadowRoot.host.setAttribute("data-hydrated","true"),this.shadowRoot?.querySelectorAll(`.${this.shadowRoot?.host.localName}`).forEach(r=>{r?.setAttribute("data-hydrated","true")}))}connectedCallback(){super.connectedCallback(),this.shadowRoot?.host.setAttribute("data-hydrated","true"),this.shadowRoot&&(this.hydrateObserver=new MutationObserver(()=>{this.hydrateElements()}),this.hydrateObserver.observe(this.shadowRoot,{childList:!0,subtree:!0})),this.i18n&&document.addEventListener("ri-language-change",this.onLanguageChange)}disconnectedCallback(){this.hydrateObserver?.disconnect(),this.i18n&&document.removeEventListener("ri-language-change",this.onLanguageChange),super.disconnectedCallback()}};m([H()],L.prototype,"hydrateObserver",2);var j={};var ut=class extends L{render(){return _r({capacity:this.capacity,size:this.size,variant:this.variant})}static{this.styles=C([Er,T,j].join(`
`))}};m([u({reflect:!0,type:String})],ut.prototype,"capacity",2),m([u({reflect:!0,type:String})],ut.prototype,"variant",2),m([u({reflect:!0,type:String})],ut.prototype,"size",2);var ba=e=>["HIGH_SPEED_TRAIN","AIR","AIR","ECE","EM","EST","FA","FB","FR","ICE","ICL","IXB","IXr","RHI","RHT","RJ","RJX","RRI","RRT","TGD","TGJ","TGL","TGV","THA","X2"].includes(e),ha=e=>["INTERCITY_TRAIN","ALS","ARC","ATR","IC","ICD","ICN","ICr","ICT","INZ","IP","KXB","NJ","Rx","S2","SC","TLG","ARZ","AS","AZ","CAT","D","DNZ","DPF","DZ","EBU","EE","EN","FBU","HOT","ICB","INT","IR","RR","S84","TLK","UEx","X","X70","EC","ECB","ECM","ECW","EIC","EX","EXB"].includes(e),ga=e=>["REGIONAL_TRAIN","INTER_REGIONAL_TRAIN","ATB","Bsv","BSV","CJX","DPN","E","ER","IRE","N","Os","OZ","PPN","R","R84","RB","RE","RER","REX","SB","Sp","T84","TER","U70","UUU","Zr","ZUG","BRB","erx","NWB","RTB","IRE","HLB","ME"].includes(e),Je=e=>{if(!e)return;let t=e.toLowerCase();if(ba(e))return"ICE";if(ha(e))return"IC";if(ga(e))return"RE";if(["CITY_TRAIN","S","S-Bahn","DPS","e","RT","AVG"].map(r=>r.toLowerCase()).includes(t))return"S";if(["SUBWAY","U","U-Bahn"].map(r=>r.toLowerCase()).includes(t))return"U";if(["TRAM","Tram","STR","Stb","SWB","ZRB"].map(r=>r.toLowerCase()).includes(t))return"STR";if(["BUS","lt","OBU","ubu"].map(r=>r.toLowerCase()).includes(t))return"BUS";if(["SHUTTLE","RUF"].map(r=>r.toLowerCase()).includes(t))return"RUF";if(["FERRY","FAE","KAT","SCH","Schiff"].map(r=>r.toLowerCase()).includes(t))return"FAE";if(["Long_distance_Bus"].map(r=>r.toLowerCase()).includes(t))return"Long_distance_Bus";if(["EV_Bus","SEV_Bus"].map(r=>r.toLowerCase()).includes(t))return"SEV_Bus";if(["Ship"].map(r=>r.toLowerCase()).includes(t))return"Ship";if(["FLIGHT","Plane"].map(r=>r.toLowerCase()).includes(t))return"Plane";if(["Car_Sharing"].map(r=>r.toLowerCase()).includes(t))return"Car_Sharing";if(["Taxi","AST"].map(r=>r.toLowerCase()).includes(t))return"Taxi";if(["Bike_Sharing"].map(r=>r.toLowerCase()).includes(t))return"Bike_Sharing";if(["WALK"].map(r=>r.toLowerCase()).includes(t))return"WALK"},Lr=e=>{switch(e){case"Bike_Sharing":return l("transport.variant.bikeSharing","Fahrradverleih");case"Car_Sharing":return l("transport.variant.carSharing","Carsharing");case"BUS":return l("transport.variant.bus","Bus");case"FAE":return l("transport.variant.ferry","F\xE4hre");case"IC":return l("transport.variant.intercity","Intercity");case"ICE":return l("transport.variant.intercityExpress","Intercity Express");case"Long_distance_Bus":return l("transport.variant.longDistanceBus","Fernbus");case"Plane":return l("transport.variant.plane","Flugzeug");case"RE":return l("transport.variant.regionalExpress","Regional Express");case"S":return l("transport.variant.sBahn","S-Bahn");case"SEV_Bus":return l("transport.variant.replacementBus","Ersatzverkehr Bus");case"Ship":return l("transport.variant.ship","Schiff");case"STR":return l("transport.variant.tram","Stra\xDFenbahn");case"Taxi":return l("transport.variant.taxi","Taxi");case"U":return l("transport.variant.uBahn","U-Bahn");case"WALK":return l("transport.variant.walk","Zu Fu\xDF");default:return l("transport.variant.unknown","Unbekannt")}};var Ke=null,w=()=>(Ke===null&&(Ke=self.document.styleSheets?[...self.document.styleSheets].map(e=>{let t=new CSSStyleSheet;try{if(e.cssRules){let r=[...e.cssRules].map(i=>i.cssText).join(" ");t.replaceSync(r)}}catch{}return t}):[]),Ke),A=(e=[])=>Array.isArray(e)?e:[e];var va=2.709677419,ft=(e,t)=>Math.floor(e*va*(t||1)-1),ya=e=>e.end-e.start,Ze=(e,t)=>t?`${ft(e,t)}px`:`${e*100}%`,xa=e=>{let{start:t,end:r,center:i}=e,a=i??(t+r)/2;return Math.ceil((a-t)/(r-t)*100)/100},kr=e=>xa({start:e.start,end:e.end,center:e.cubePosition}),ge=(e,t,r)=>{let i=t.start||0,a=t.end||r.at(-1)?.end;if(!a)return;a-=i;let o=e==="absolute",n=r.map(d=>({start:d.start-i,end:d.end-i})).map(d=>ya(d)/(o?1:a));return{containerLength:a,widthChildren:n}},xt=e=>e==="absolute";var ve=e=>{let t=e?.querySelectorAll("slot");if(t)for(let r of t)r.assignedNodes().length>0&&r?.parentElement&&(r.parentElement.dataset.slotted="true",e?.firstElementChild&&r.name&&!r.name.includes("-")&&(e.firstElementChild.dataset[r.name]="true"))};var kt=class extends ut{};kt.styles=[...w(),...A(kt.styles)];customElements.get("ri-capacity-indicator")||customElements.define("ri-capacity-indicator",kt);var Pr=({emphasis:e})=>s`<div class="ri-station" data-emphasis="${e}"><slot /></div>`;var Ir={};var Pt=class extends L{constructor(){super(...arguments);this.i18n=!1}render(){return Pr({emphasis:this.emphasis})}static{this.styles=C([Ir,T].join(`
`))}};m([u({reflect:!0,type:String})],Pt.prototype,"emphasis",2);var It=class extends Pt{};It.styles=[...w(),...A(It.styles)];customElements.get("ri-station")||customElements.define("ri-station",It);var Rr=({times:e,journeyTimes:t,duration:r,variant:i,changeover:a})=>{let o,n;if(r){let h=r.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);o=h?.[1]?parseInt(h[1]):0,n=h?.[2]?parseInt(h[2]):0}else if(e)o=e.hours,n=e.minutes;else if(t){if(!t.arrivalTime||!t.departureTime)return s`No times provided`;let h=new Date(t.departureTime),b=new Date(t.arrivalTime),g=Math.round((b.getTime()-h.getTime())/6e4);o=Math.floor(g/60),n=g%60}else return s`No times provided`;let d=p,c=p,f=a?l("duration.changeoverTime","Umstiegszeit: "):l("duration.travelTime","Reisezeit: ");return o&&(f+=o===1?l("duration.hour","{{count}} Stunde",{count:o}):l("duration.hours","{{count}} Stunden und",{count:o}),d=s`<span aria-hidden="true">${o}h</span>`),n&&(f+=n===1?l("duration.minute","{{count}} Minute",{count:n}):l("duration.minutes","{{count}} Minuten",{count:n}),c=s`<span aria-hidden="true">${n}min</span>`),s`<div class="ri-duration-time" data-variant="${i}">
		<span class="a11y-visually-hidden">${f}</span>${d}${c}
	</div>`};var Dr={};var F=class extends L{render(){return Rr({journeyTimes:this.journeyTimes,times:this.times,duration:this.duration,variant:this.variant,changeover:this.changeover})}static{this.styles=C([Dr,T].join(`
`))}};m([u({reflect:!0,type:Object})],F.prototype,"journeyTimes",2),m([u({reflect:!0,type:Object})],F.prototype,"times",2),m([u({reflect:!0,type:String})],F.prototype,"duration",2),m([u({reflect:!0,type:String})],F.prototype,"variant",2),m([u({reflect:!0,type:Boolean})],F.prototype,"changeover",2);var Rt=class extends F{};Rt.styles=[...w(),...A(Rt.styles)];customElements.get("ri-duration-time")||customElements.define("ri-duration-time",Rt);var Nr=e=>e.toString().padStart(2,"0"),Br=e=>{let t=new Date(e),r=Nr(t.getHours()),i=Nr(t.getMinutes());return`${r}:${i}`},ye=({time:e,timeSchedule:t,timeType:r,emphasis:i,arrival:a})=>{let o=s``;if(r!=="SCHEDULE"){let c=new Date(e),f=new Date(t),h="on-time",b=Br(c);Math.abs(f.getTime()-c.getTime())>=300*1e3&&(h="delayed");let g=h==="delayed"?a?l("times.delayedArrival","Versp\xE4tete Ankunftszeit"):l("times.delayedDeparture","Versp\xE4tete Abfahrtszeit"):a?l("times.currentArrival","Aktuelle Ankunftszeit"):l("times.currentDeparture","Aktuelle Abfahrtszeit");o=s`
			<ri-journey-time-stamp
				.variant="${h}"
				.emphasis="${i}"
			>
				<time>
					<span class="a11y-visually-hidden"
						>${l("times.realtimeInfo","Echtzeit Information")}</span
					>
					<span class="a11y-visually-hidden">${g}</span
					>${b}</time
				>
			</ri-journey-time-stamp>
		`}let n=Br(t),d=a?l("times.arrival","Ankunftszeit"):l("times.departure","Abfahrtszeit");return s`
		<ri-journey-time-stamp .emphasis="${i}">
			<time>
				<span class="a11y-visually-hidden">${d}</span
				>${n}</time
			>
		</ri-journey-time-stamp>
		${o}
	`};var Y=(e,t)=>t?new Date(e)<=t:!1,X=({time:e,timeSchedule:t,timeType:r,index:i,items:a,arrival:o})=>{let n="weak";return(i===0||i===a.length-1)&&(n="strong"),ye({time:e,timeSchedule:t,timeType:r,emphasis:n,arrival:o})},Q=(e,t,r,i)=>r?s`<i data-icon="cross_circle"></i>`:t===0&&!i?s`<i data-icon="start"></i>`:t===e.length-1?s`<i data-icon="map_pin"></i>`:s`<svg
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
	</svg>`;var U=({platformName:e,slot:t,emphasis:r,variant:i})=>{if(!e)return s``;let a=l("platform.trackShort","Gl."),o=l("platform.track","Gleis"),n=l("platform.platformChanged","Gleiswechsel");return s`
		<ri-platform-tag
			slot="${t??p}"
			emphasis="${r??"strong"}"
			variant="${i}"
			title="${o} ${e} ${i==="changed"?n:""}"
		>
			${a} ${e}
		</ri-platform-tag>
	`},xe=e=>{let t=e?.toLowerCase()==="backwards",r=l("platform.departureDirection","Abfahrtsrichtung"),i=t?l("platform.directionLeft","links"):l("platform.directionRight","rechts"),a=`${r} ${i}`;return{departureDirectionString:r,directionString:i,platformDirection:a}};var zr=({leg:e,nowAsDate:t,viasDetailsClick:r})=>{let{via:i}=e;return i.length===0?p:s`<details class="ri-itinerary-via-container">
		<summary
			data-icon="chevron_down"
			data-interactive-focus="true"
			data-variant="ghost"
			data-size="small"
			class="db-button"
			@click="${{handleEvent:()=>r?.(e)}}"
		>
			${i.length} ${l("journey.intermediateStops","Haltestellen")}
		</summary>
		<div>
			<ul aria-label="${l("journey.intermediateStops","Zwischenhalte")}">
				${i.map(a=>{let{departure:o,canceled:n,additional:d}=a;if(!o)return;let{time:c,timeSchedule:f,timeType:h,platformSchedule:b,platform:g,messages:v}=o,S=v?.filter(({text:$,textShort:x})=>$||x);return s`<li>
						<ri-stop .active="${Y(c,t)}">
							<ri-arrival-departure-time slot="time">
								${X({time:c,timeSchedule:f,timeType:h,index:-1,items:i})}
							</ri-arrival-departure-time>
							<div class="ri-stop-line-icon" slot="line">
								${Q(i,-1,n)}
							</div>
							<div class="ri-itinerary-via-details-container">
								<span
									><span class="a11y-visually-hidden"
										>${l("journey.intermediateStop","Zwischenhalt")}</span
									>${a.name}</span
								>
								${d?s`<span class="db-infotext"
											>${l("journey.additionalStop","Zusatzhalt")}</span
										>`:p}
								${S?.length?S.map(({text:$,textShort:x})=>s`<span class="db-infotext"
													>${x??$}</span
												>`):p}
							</div>
							${U({platformName:g||b,slot:"tag",emphasis:"weak",variant:b===g?"set":"changed"})}
						</ri-stop>
					</li>`})}
			</ul>
		</div>
	</details>`};var Ye=({icon:e,tooltips:t,text:r,attributeType:i,vehicleAttributeClick:a,interactiveVehicleAttributes:o})=>{let n="";t&&(t.length>2?n=[t[0],t[1],l("journey.moreStops","{{count}} weitere",{count:t.length-2})].join(`, 
`):t.length>0&&(n=t.join(`, 
`)));let d=`${r}${n.length?`: ${n}`:""}`,c=s` <span class="a11y-visually-hidden"
			>${d}</span
		><span
			title="${n.length?n:p}"
			data-icon="${e}"
			aria-hidden="true"
			>${r}</span
		>`;return o&&(c=s`<button
			title="${n.length?n:p}"
			aria-label="${d}"
			data-interactive-focus="true"
			data-icon="${e}"
			@click="${{handleEvent:()=>a?.(i)}}"
		>
			${r}
		</button>`),s`<div class="db-tag ri-itinerary-vehicle-attribute">
		${c}
	</div>`},Ca=["OC","SI","SM","RG","EF","EH","DC","RO","OG","OA","HS"],Ta=["3D","S1","S2"],wa=["BR"],Aa=["TF","RF","KF","FT","FS","FJ","AB","NF","G","FR","FO","FK","FF","FB"],_a=()=>[{codes:Ca,icon:"person_with_wheelchair",text:l("journey.barrierFree","Barrierefreiheit"),attributeType:"barrier_free"},{codes:Ta,icon:"couchette",text:l("journey.sleeping","Schlafwagen"),attributeType:"sleeping"},{codes:wa,icon:"knife_and_fork",text:l("journey.restaurant","Boardbistro"),attributeType:"restaurant"},{codes:Aa,icon:"bike",text:l("journey.bike","Fahrradmitnahme"),attributeType:"bike"}],Vr=(e,t,r,i)=>{if(!e&&(!t||t.length===0))return p;let a=[],o=_a();if(e?.operatorName.length&&a.push(s`<li>
				${Ye({icon:"bus",text:l("journey.carrier","Bef\xF6rderer"),tooltips:[e.operatorName],vehicleAttributeClick:r,attributeType:"carrier",interactiveVehicleAttributes:i})}
			</li>`),t&&t.length>0){for(let c of o){let f=t.filter(h=>c.codes.includes(h.code));f.length&&a.push(s`<li>
						${Ye({icon:c.icon,text:c.text,tooltips:f.map(h=>h.text),vehicleAttributeClick:r,attributeType:c.attributeType,interactiveVehicleAttributes:i})}
					</li>`)}let n=o.flatMap(c=>c.codes),d=t.filter(c=>!n.includes(c.code));d.length&&a.push(s`<li>
					${Ye({icon:"information_circle",text:l("journey.additionalInfo","Weitere Informationen"),tooltips:d.map(c=>c.text),vehicleAttributeClick:r,attributeType:"additional_info",interactiveVehicleAttributes:i})}
				</li>`)}return s`<ul class="ri-itinerary-vehicle-attributes-container">
		${a.map(n=>n)}
	</ul>`};var Or=({leg:e,index:t,interactiveTransportTags:r,vehicleAttributeClick:i,interactiveVehicleAttributes:a})=>{let{departure:o,duration:n}=e,{transport:d,attributes:c,administration:f}=o,{direction:h,journeyDescription:b,category:g,line:v,type:S,label:$}=d,x=h?.text,E=n?s`<ri-duration-time .duration="${n}"></ri-duration-time>`:p;return s`<ri-stop class="ri-itinerary-vehicle-info-stop">
		<div slot="time">${E}</div>
		<div slot="line"></div>
		<div class="ri-itinerary-vehicle-info-container">
			<ri-transport-container destinationName="${x}">
				<ri-transport-tag
					.journeyDescription="${b??p}"
					.label="${$??p}"
					.category="${g??p}"
					.type="${S??p}"
					.line="${v??p}"
					.staticMode="${!r}"
					.additionalEventDetail="${e}"
					showIcon
				></ri-transport-tag>
			</ri-transport-container>
			<div class="ri-itinerary-vehicle-attributes-slot-container">
				${Vr(f,c,i,a)}
				<slot name="vehicle-attributes-${t}"></slot>
			</div>
			<slot name="vehicle-information-${t}"></slot>
			<slot name="vehicle-action-${t}"></slot>
		</div>
	</ri-stop>`};var Ea=e=>{let t=e,r={Hbf:l("journey.stationNameHbf","Hauptbahnhof")};return Object.entries(r).forEach(([i,a])=>{t=t.replace(i,a)}),t},Xe=({arrival:e,nowAsDate:t,legs:r,departure:i,index:a,timestampIndex:o,forceEnd:n})=>{let d=!!e,c=e?.time??i?.time??"",f=e?.timeSchedule??i?.timeSchedule??"",h=e?.timeType??i?.timeType??"",b=e?.canceled??i?.canceled??!1,g=e?.platformSchedule??i?.platformSchedule??"",v=e?.platform??i?.platform??"",S="";e?S=`arrival-${e?.arrivalID??e?.extDestinationID}`:i&&(S=`departure-${i?.departureID??i?.extOriginID}`);let $=e?.stopPlace.name??i?.stopPlace.name??"",x="strong";return s`<ri-stop .active="${Y(c,t)}">
		<ri-arrival-departure-time slot="time">
			${X({time:c,timeSchedule:f,timeType:h,index:o,items:r,arrival:!!e})}
		</ri-arrival-departure-time>
		<div data-id="${S}" class="ri-stop-line-icon" slot="line">
			${Q(r,o,b,n)}
		</div>
		<div class="ri-itinerary-station-container">
			<ri-station emphasis="${x}">
				<span class="a11y-visually-hidden"
					>${Ea($)}</span
				>
				<span aria-hidden="true">${$}</span>
				<slot
					name="station-${d?"arrival":"departure"}-${a}"
				></slot>
			</ri-station>
		</div>
		${U({platformName:v||g,slot:"tag",emphasis:x,variant:g===v?"set":"changed"})}
	</ri-stop>`};var Mr=({leg:e,nowAsDate:t,index:r,legs:i,interactiveTransportTags:a,viasDetailsClick:o,vehicleAttributeClick:n,interactiveVehicleAttributes:d})=>{let{departure:c,arrival:f}=e;return s`${Xe({departure:c,legs:i,nowAsDate:t,index:r,timestampIndex:0})}
	${Or({nowAsDate:t,legs:i,leg:e,index:r,interactiveTransportTags:a,vehicleAttributeClick:n,interactiveVehicleAttributes:d})}
	${zr({nowAsDate:t,legs:i,leg:e,index:r,viasDetailsClick:o})}
	${Xe({arrival:f,legs:i,nowAsDate:t,index:r,timestampIndex:r===i.length-1?r:0,forceEnd:i.length===1})} `};var Qe=e=>{let t=e.match(/PT(?:(\d+)H)?(?:(\d+)M)?/),r=t?.[1]?parseInt(t[1]):0,i=t?.[2]?parseInt(t[2]):0;return[r,i]},tr=({distance:e,icon:t,duration:r,changeoverName:i,changeoverPlatform:a,transport:o})=>{let n=o??l("journey.walkTransport","Fu\xDFweg"),[d,c]=Qe(r),f=d===1?l("duration.hour","{{count}} Stunde",{count:d}):d>0?l("duration.hours","{{count}} Stunden, ",{count:d}):"",h=c===1?l("duration.minute","{{count}} Minute",{count:c}):c>0?l("duration.minutes","{{count}} Minuten",{count:c}):"",b=i?l("journey.toStation",", nach {{station}}",{station:i}):"",g=a?l("journey.fromPlatform",", von Gleis {{platform}}",{platform:a}):"",v=[`${n}, ${e?`${e} Meter, `:""}`,`Dauer circa: ${f}`,h,`${b}${g}`].join("");return s`<div class="db-infotext" data-icon="${t}">
		<span class="a11y-visually-hidden">${v}</span>
		<span aria-hidden="true">
			${e?`${e}m `:p}${n} (ca.
			${d>0?`${d}h `:p}${c>0?`${c}min`:p})</span
		>
	</div>`},Hr=({legBefore:e,legAfter:t,leg:r,traveller:i,showCheckAlternative:a,hideConnectionEvaluation:o,index:n,alternativeClick:d})=>{let c;o||(c=r.evaluation.occasionalTraveller,(!c||i==="handicapped")&&(c=r.evaluation.handicappedTraveller),(!c||i==="frequent")&&(c=r.evaluation.frequentTraveller));let f,h,b;e&&t&&e.arrival&&t.departure&&(f={departureTime:e.arrival.time,arrivalTime:t.departure.time},h=t.departure.stopPlace.name,b=t.departure.platform);let g=c?.status==="SAFE"?"successful":c?.status==="CRITICAL"||c?.status==="IMPOSSIBLE"?"critical":"neutral",v=b?l("journey.toPlatform","zu Gleis {{platform}}",{platform:b}):void 0,S=s`<span
		class="db-infotext"
		data-icon="changeover"
		>${l("journey.changeover","Umstieg")}${v?` ${v}`:p}</span
	>`;if(c){let{distance:$,status:x,duration:E}=c,_="pedestrian",y;x==="CRITICAL"?(_="walking_fast",y=l("journey.connectionCritical","Das Erreichen Ihres Anschlusszuges ist kritisch")):x==="IMPOSSIBLE"?y=l("journey.connectionImpossible","Ihr Anschlusszug ist nicht erreichbar"):x==="SAFE"&&(y=l("journey.connectionSafe","Ihr Anschlusszug wird erreicht")),S=s`${tr({changeoverPlatform:b,duration:E,distance:$,changeoverName:h,icon:_})}
		${y?s`<span
					class="db-infotext"
					data-icon="${x==="IMPOSSIBLE"?"none":p}"
					data-semantic="${g}"
					>${y}</span
				>`:p}`}return s`<ri-stop class="ri-itinerary-connect-stop">
			<div slot="time">
				${f?s` <ri-duration-time
							changeover="true"
							.variant="${g}"
							.journeyTimes="${f}"
						>
						</ri-duration-time>`:p}
			</div>
			<div
				data-id="${c?.status==="IMPOSSIBLE"?`arrival-impossible-${n}`:p}"
				class="ri-stop-line-icon"
				slot="line"
			>
				${c?.status==="IMPOSSIBLE"?s`<i
							data-icon="exclamation_mark_circle"
							class="ri-itinerary-connection-impossible-icon"
						></i>`:p}
			</div>
			<div class="ri-itinerary-connect-container">
				${S}
			</div>
		</ri-stop>

		${a&&(c?.status==="CRITICAL"||c?.status==="IMPOSSIBLE")?s`<div class="ri-itinerary-connect-alternative-container">
					<button
						class="db-button"
						data-interactive-focus="true"
						data-icon="alternative_connection"
						data-variant="${c?.status==="IMPOSSIBLE"?"brand":"outlined"}"
						@click="${{handleEvent:()=>d?.(r)}}"
					>
						${l("journey.checkAlternative","Alternative pr\xFCfen")}
					</button>
				</div>`:p} `};var La=e=>{if(e.type==="ADDRESS"){let{city:t,street:r,houseNumber:i}=e;return[t,r,i].filter(a=>a?.length).join(", ")}else if(e.type==="COORDINATE"){let{latitude:t,longitude:r}=e;return[t,r].join(", ")}else if(e.type==="STOP_PLACE"){let{name:t}=e;return t}else return""},jr=({nowAsDate:e,index:t,legs:r,leg:i,arrival:a})=>{let o=i,n=La(a?o.destination:o.origin),d=i.type!=="TAXI"?a?o.arrivalTime:o.departureTime:void 0;if(!d){let[f,h]=Qe(o.duration),b=a?r[t-1]:r[t+1];if(b.type==="JOURNEY"){let g=b,v=a?g.arrival:g.departure,S=new Date(v.time).getTime(),$=(f*60+h)*6e4;d=new Date(a?S+$:S-$).toISOString()}else d=""}let c=`${a?"arrival":"departure"}-other-stop-line-icon-${t}`;return s`<ri-stop
		class="ri-itinerary-other-stop"
		.active="${Y(d,e)}"
	>
		<div slot="time">
			<ri-arrival-departure-time slot="time">
				${X({time:d,timeSchedule:d,timeType:"SCHEDULE",index:t,items:r,arrival:a})}
			</ri-arrival-departure-time>
		</div>
		<div data-id="${c}" class="ri-stop-line-icon" slot="line">
			${Q(r,t,!1,a&&r.length===1)}
		</div>
		<div class="ri-itinerary-station-container">
			<ri-station emphasis="strong">
				<span>${n}</span>
				<slot
					name="station-other-${a?"arrival":"departure"}"
				></slot>
			</ri-station>
		</div>
		<slot
			slot="tag"
			name="ri-itinerary-other-action-${a?"arrival":"departure"}"
		></slot>
	</ri-stop>`},Ur=({index:e,leg:t,legs:r,nowAsDate:i})=>{let a=e===0,o=e===r.length-1;if(!a&&!o)return p;let n={WALK:"pedestrian",TAXI:"taxi",BIKE:"bike"},d={WALK:"Fu\xDFweg",TAXI:"Taxifahrt",BIKE:"Fahrradfahrt"},c=t,f=n[t.type],h=d[t.type],b=c.duration,g=[];return a&&g.push(jr({index:e,legs:r,arrival:!1,nowAsDate:i,leg:t})),g.push(s`<ri-stop class="ri-itinerary-other-stop">
			<div slot="time">
				<ri-duration-time .duration="${b}"></ri-duration-time>
			</div>
			<div class="ri-stop-line-icon" slot="line"></div>
			<div class="ri-itinerary-station-container">
				${tr({transport:h,icon:f,duration:b})}
			</div>
		</ri-stop>`),o&&g.push(jr({index:e,legs:r,arrival:!0,nowAsDate:i,leg:t})),s`${g.map(v=>v)}`};var Se=(e,t,r,i)=>{let a=`--ri-vehicle-progress: ${t}%;`,o=e.at(0),n=e.at(-1);if(o&&n){let d=n.top-o.top;d<0&&(d=d*-1),a=`--ri-vehicle-progress: ${t}%;
		--ri-vehicle-route-line-block-size: ${i??d}px;
		--ri-vehicle-route-line-offset: ${r??0}px;
		`}return a},$e=({nowAsDate:e,dots:t,times:r,collapsed:i})=>{let a=0;if(!r||r.length===0||!e||!t||t.length===0)return a;let o=e.getTime(),n=r.at(-1),d=t.at(-1);if(!n||!d)return a;if(o<new Date(r[0]).getTime())a=0;else if(o>=new Date(n).getTime())a=100;else if(t?.length>0){let c=t.filter(h=>h.top!==0).length===2||i,f=c?n:r.find((h,b)=>new Date(h).getTime()>o&&t[b]?.top!==0);if(f&&t.length>0){let h=d.top-t[0].top,b=r.indexOf(f),g=c?0:b-1,v=new Date(r[g]).getTime(),$=new Date(r[b]).getTime()-v,E=(o-v)/$,_=t[b].top-t[g].top;a=(t[g].top-t[0].top+_*E)/h*100}}return a};var Wr=({dots:e,leg:t,nowAsDate:r,index:i,lineChange:a,legs:o,traveller:n,openVias:d})=>{let c=[],f=[],h=p,b,g,v;if(t.type==="JOURNEY"){let{departure:y,via:k,arrival:P,extJourneyID:D}=t;b=`arrival-${P.arrivalID??P.extDestinationID}`,g=`departure-${y.departureID??y.extOriginID}`,v=!d.find(M=>M.extJourneyID===D),c=[y.time],v||c.push(...k.map(M=>M.departure?.time)),c.push(P.time)}else if(h="dot",v=!0,t.type==="CONNECT"){if(o.length>2){let y=t,k=y.evaluation.occasionalTraveller;n==="frequent"?k=y.evaluation.frequentTraveller:n==="handicapped"&&(k=y.evaluation.handicappedTraveller);let P=o[i-1];g=`arrival-${P.arrival?.arrivalID??P.arrival?.extDestinationID}`;let D=o[i+1];b=`departure-${D.departure?.departureID??D.departure?.extOriginID}`,k?.status==="IMPOSSIBLE"&&(b=`arrival-impossible-${i}`),c=[P.arrival.time,D.departure.time]}}else if(o.length===1){if(b=`arrival-other-stop-line-icon-${i}`,g=`departure-other-stop-line-icon-${i}`,t.type!=="TAXI"){let y=t;c=[y.departureTime,y.arrivalTime]}}else if(o.length>1){if(i===0){g=`departure-other-stop-line-icon-${i}`;let y=o[i+1];b=`departure-${y.departure?.departureID??y.departure?.extOriginID}`,t.type!=="TAXI"&&(c=[t.departureTime,y.departure.time])}if(i===o.length-1){b=`arrival-other-stop-line-icon-${i}`;let y=o[i-1];if(g=`arrival-${y.arrival?.arrivalID??y.arrival?.extDestinationID}`,t.type!=="TAXI"){let k=t;c=[y.arrival.time,k.arrivalTime]}}}if(!b||!g)return p;let S=!1;for(let y of e)if(y.id===g)S=!0,f.push(y);else if(y.id===b){f.push(y);break}else S&&!v&&f.push(y);let $=$e({nowAsDate:r,dots:f,times:c.map(y=>y||"").filter(y=>y?.length),collapsed:v}),x=e.length?e[0].top:0,E=f.length?f[0].top:0,_=Se(f,$,E-x,a?0:void 0);return s` <div
		class="ri-vehicle-route-line-container"
		style="${_}"
		aria-hidden="true"
	>
		<i
			class="ri-vehicle-route-line"
			data-active="true"
			data-variant="${h}"
			data-full-rounded="${$>=100}"
		></i>
		<i
			class="ri-vehicle-route-line"
			data-variant="${h}"
			data-full-rounded="${$<=0}"
		></i>
	</div>`};var ka=e=>({type:"CONNECT",evaluation:{occasionalTraveller:{status:"UNKNOWN",duration:e.duration}}}),Pa=e=>{if(e.length===1)return e;let t=[];for(let r of e){let i=e.indexOf(r),a=e.length-1;if(r.type!=="JOURNEY"&&(i===0||i===a))t.push(r);else if(r.type==="CONNECT")t.push(r);else if(r.type==="JOURNEY"){t.push(r);let o=i+1;if(o<=a){let n=e[o];n.type!=="CONNECT"&&n.type==="JOURNEY"&&t.push({type:"CONNECT",evaluation:{}})}}else t.push(ka(r))}return t},Gr=({trip:e,now:t,interactiveTransportTags:r,traveller:i,showCheckAlternative:a,hideConnectionEvaluation:o,dots:n,lineChange:d,viasDetailsClick:c,openVias:f,alternativeClick:h,vehicleAttributeClick:b,interactiveVehicleAttributes:g})=>{if(!e)return s`${l("journey.tripNotFound","Keine Reise gefunden")}`;if(!e.legs||e.legs.length===0)return s`${l("journey.noLegs","Keine Fahrtabschnitte gefunden")}`;let v=t?new Date(t):void 0,S=Pa(e.legs);return s`<div class="ri-itinerary">
		${S.map(($,x)=>Wr({dots:n,leg:$,nowAsDate:v,legs:S,index:x,lineChange:d,traveller:i,openVias:f}))}

		<ul aria-label="${l("journey.travelHistory","Reiseverlauf")}">
			${S.map(($,x)=>{let E;if($.type==="WALK"||$.type==="TAXI"||$.type==="BIKE")E=Ur({leg:$,index:x,legs:S,nowAsDate:v});else if($.type==="CONNECT"){let _=x-1>=0?S[x-1]:void 0,y=x+1===S.length?void 0:S[x+1];E=Hr({legBefore:_,leg:$,legAfter:y,traveller:i,showCheckAlternative:a,hideConnectionEvaluation:o,index:x,alternativeClick:h})}else E=Mr({leg:$,nowAsDate:v,legs:S,index:x,interactiveTransportTags:r,viasDetailsClick:c,vehicleAttributeClick:b,interactiveVehicleAttributes:g});return s`<li>${E}</li>`})}
		</ul>
	</div>`};var qr={};var Ce={};var Te={};var z=class extends L{constructor(){super(...arguments);this.timeline="auto";this._dots=[];this._isUpdating=!1;this._debouncedHandleStopIconDetection=()=>{this._isUpdating||(this._rafId&&cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(async()=>{this._isUpdating=!0,this.handleStopIconDetection(),await this.updateComplete,this.handleStopIconDetection(),this._isUpdating=!1}))}}handleStopIconDetection(){}_startTimer(){this._stopTimer(),this.timeline==="auto"&&(this._setNow(),this._timerId=window.setInterval(()=>this._setNow(),3e4))}_stopTimer(){this._timerId&&(clearInterval(this._timerId),this._timerId=void 0)}_setNow(){this.now=new Date().toISOString()}async firstUpdated(){await new Promise(r=>setTimeout(r,0)),ve(this.shadowRoot),this._debouncedHandleStopIconDetection()}connectedCallback(){super.connectedCallback(),this._startTimer(),window.addEventListener("resize",this._debouncedHandleStopIconDetection),this.shadowRoot&&(this._routeChildObserver=new MutationObserver(()=>{if(!this._intersectionObserver){let r=this.shadowRoot?.firstElementChild;r&&(this._intersectionObserver=new IntersectionObserver(i=>{i[0].isIntersecting&&this._debouncedHandleStopIconDetection()}),this._intersectionObserver.observe(r))}}),this._routeChildObserver.observe(this.shadowRoot,{childList:!0,subtree:!0}))}disconnectedCallback(){this._rafId&&cancelAnimationFrame(this._rafId),this._intersectionObserver?.disconnect(),window.removeEventListener("resize",this._debouncedHandleStopIconDetection),this._routeChildObserver?.disconnect(),this._stopTimer(),super.disconnectedCallback()}};m([u({reflect:!0,type:String})],z.prototype,"now",2),m([u({reflect:!0,type:String})],z.prototype,"timeline",2),m([u({reflect:!0,type:Boolean})],z.prototype,"debug",2),m([H()],z.prototype,"_dots",2),m([H()],z.prototype,"_routeChildObserver",2);var N=class extends z{constructor(){super(...arguments);this.interactiveTransportTags=!1;this.interactiveVehicleAttributes=!1;this.showCheckAlternative=!1;this.hideConnectionEvaluation=!1;this._lineChange=!1;this._openVias=[];this.viasDetailsClick=r=>{this._lineChange=!0,this._openVias.find(i=>i.extJourneyID===r.extJourneyID)?this._openVias=this._openVias.filter(i=>i.extJourneyID!==r.extJourneyID):this._openVias.push(r),new Promise(i=>setTimeout(i,300)).then(()=>{this.handleStopIconDetection()}),this.dispatchEvent(new CustomEvent("vias-details-click",{bubbles:!0,composed:!0,detail:{leg:r,trip:this.trip,now:this.now}}))};this.alternativeClick=r=>{this.dispatchEvent(new CustomEvent("check-alternative-click",{bubbles:!0,composed:!0,detail:{leg:r,trip:this.trip,now:this.now}}))};this.vehicleAttributeClick=r=>{this.dispatchEvent(new CustomEvent("vehicle-attribute-click",{bubbles:!0,composed:!0,detail:{attributeType:r,trip:this.trip,now:this.now}}))}}render(){return Gr({trip:this.trip,now:this.now,dots:this._dots,lineChange:this._lineChange,debug:this.debug,traveller:this.traveller,interactiveTransportTags:this.interactiveTransportTags,interactiveVehicleAttributes:this.interactiveVehicleAttributes,showCheckAlternative:this.showCheckAlternative,hideConnectionEvaluation:this.hideConnectionEvaluation,viasDetailsClick:this.viasDetailsClick,alternativeClick:this.alternativeClick,vehicleAttributeClick:this.vehicleAttributeClick,openVias:this._openVias})}handleStopIconDetection(){this._lineChange=!1;let r=this.shadowRoot?.querySelectorAll(".ri-stop-line-icon");r&&(this._dots=[...r].map(i=>({id:i.dataset.id,top:i.getBoundingClientRect().top})))}static{this.styles=C([qr,T,Ce,Te,j].join(`
`))}};m([u({reflect:!0,type:Object})],N.prototype,"trip",2),m([u({reflect:!0,type:Boolean})],N.prototype,"interactiveTransportTags",2),m([u({reflect:!0,type:Boolean})],N.prototype,"interactiveVehicleAttributes",2),m([u({reflect:!0,type:Boolean})],N.prototype,"showCheckAlternative",2),m([u({reflect:!0,type:Boolean})],N.prototype,"hideConnectionEvaluation",2),m([u({reflect:!0,type:String})],N.prototype,"traveller",2),m([H()],N.prototype,"_lineChange",2),m([H()],N.prototype,"_openVias",2);var Fr=({active:e,breakpointVariant:t})=>s`<div
		class="ri-stop"
		part="root"
		data-breakpoint-variant="${t}"
	>
		<div class="ri-stop-time-container" part="time">
			<slot name="time"></slot>
		</div>
		<div class="ri-stop-line-container" data-active="${e}" part="line">
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
	</div>`;var Jr={};var J=class extends L{};m([u({reflect:!0,type:String})],J.prototype,"breakpointVariant",2);var Dt=class extends J{constructor(){super(...arguments);this.i18n=!1;this.active=!1}render(){return Fr({active:this.active,breakpointVariant:this.breakpointVariant})}async firstUpdated(){ve(this.shadowRoot)}static{this.styles=C([Jr,T].join(`
`))}};m([u({reflect:!0,type:String})],Dt.prototype,"active",2);var Nt=class extends Dt{};Nt.styles=[...w(),...A(Nt.styles)];customElements.get("ri-stop")||customElements.define("ri-stop",Nt);var Kr=({size:e="medium"})=>s`<div class="ri-arrival-departure-time" data-size="${e}">
		<slot></slot>
	</div>`;var Zr={};var Bt=class extends L{constructor(){super(...arguments);this.i18n=!1}render(){return Kr({size:this.size})}static{this.styles=C([Zr,T].join(`
`))}};m([u({reflect:!0,type:String})],Bt.prototype,"size",2);var Yr=({emphasis:e="weak",background:t=!1,variant:r="default"})=>s`<div
		class="ri-journey-time-stamp"
		data-emphasis="${e}"
		data-background="${t}"
		data-variant="${r}"
	>
		<slot></slot>
	</div>`;var Xr={};var bt=class extends L{constructor(){super(...arguments);this.i18n=!1}render(){return Yr({variant:this.variant,background:this.background,emphasis:this.emphasis})}static{this.styles=C([Xr,T].join(`
`))}};m([u({reflect:!0,type:String})],bt.prototype,"variant",2),m([u({reflect:!0,type:String})],bt.prototype,"emphasis",2),m([u({reflect:!0,type:Boolean})],bt.prototype,"background",2);var zt=class extends bt{};zt.styles=[...w(),...A(zt.styles)];customElements.get("ri-journey-time-stamp")||customElements.define("ri-journey-time-stamp",zt);var Vt=class extends Bt{};Vt.styles=[...w(),...A(Vt.styles)];customElements.get("ri-arrival-departure-time")||customElements.define("ri-arrival-departure-time",Vt);var Qr=({variant:e,emphasis:t,title:r})=>{let i=s`${l("platform.missingTitle","Missing title property!")}`;return r&&(i=s`
			<abbr title="${r}">
				<span>${r}</span>
				<span aria-hidden="true"><slot></slot></span>
			</abbr>
		`),s` <div
		part="root"
		class="db-tag ri-platform-tag"
		data-icon="${e==="changed"?"exclamation_mark_circle":p}"
		data-variant="${e}"
		data-emphasis="${t}"
	>
		${i}
	</div>`};var ti={};var ht=class extends L{constructor(){super(...arguments);this.variant="set";this.emphasis="weak"}render(){return Qr({variant:this.variant,emphasis:this.emphasis,title:this.title})}static{this.styles=C([ti,T].join(`
`))}};m([u({reflect:!0,type:String})],ht.prototype,"variant",2),m([u({reflect:!0,type:String})],ht.prototype,"emphasis",2),m([u({reflect:!0,type:String})],ht.prototype,"title",2);var Ot=class extends ht{};Ot.styles=[...w(),...A(Ot.styles)];customElements.get("ri-platform-tag")||customElements.define("ri-platform-tag",Ot);var ei=({directionText:e,destinationName:t})=>{let r=s``;return t?r=s`<p>
			${l("platform.to","nach {{destination}}",{destination:t})}
		</p>`:e&&(r=s`<p>${e}</p>`),s`
		<article class="ri-transport-container">
			<div><slot></slot></div>
			${r}
		</article>
	`};var ri={};var St=class extends L{render(){return ei({destinationName:this.destinationName,directionText:this.directionText})}static{this.styles=C([ri,T].join(`
`))}};m([u({reflect:!0,type:String})],St.prototype,"destinationName",2),m([u({reflect:!0,type:String})],St.prototype,"directionText",2);var Mt=class extends St{};Mt.styles=[...w(),...A(Mt.styles)];customElements.get("ri-transport-container")||customElements.define("ri-transport-container",Mt);var er={ICE:"train",IC:"ic_and_ec",RE:"local_train",S:"s_bahn",U:"subway",STR:"tram",BUS:"local_bus",FAE:"ship",Long_distance_Bus:"long_distance_bus",SEV_Bus:"ev_bus",Ship:"ship",Plane:"airplane",Car_Sharing:"car_sharing",Taxi:"taxi",Bike_Sharing:"call_a_bike",WALK:"pedestrian",RUF:"call_in_bus"},Ad=Object.keys(er);var Ma=e=>s`
	<hr class="ri-transport-tag-divider" />
	${e}
`,Ha=({text:e,replacementTransportText:t})=>s`
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
		${e.trim()}
		${l("platform.replacedBy","wurde ersetzt durch").replace("{{text}} ","")}
	</em>
	<hr aria-hidden="true" class="ri-transport-tag-divider" />
	<span>${t}</span>
`,ii=({label:e,type:t,category:r,line:i,number:a,state:o,noText:n,showIcon:d,interactive:c,anchor:f,riClick:h,staticMode:b,replacementTransportText:g,overflow:v,width:S,journeyDescription:$})=>{let x=Je(r)??Je(t)??"UNKNOWN",E=(d||n)&&!g?.length?er[x||""]:void 0,_=r??t,y=_&&i&&i.includes(_)?i.replace(_,"").trim():i,k=e?.length?e:$?$.replace(` (${a})`,""):`${_??""} ${y??a??""}`,P=l("platform.canceledTransport","Ausgefallenes Verkehrsmittel {{text}}",{text:k}),D=o==="canceled"?s` <span title="${P}"> ${k} </span> `:s`<span>${k}</span>`,M=r==="UNKNOWN"||t==="UNKNOWN"||!E?s`${D}`:Ma(D);g?.length&&(M=Ha({text:Lr(x),replacementTransportText:g}),x="SEV_Bus");let Be=M;return b||(Be=s`<button
			part="button"
			aria-label="${o==="canceled"?P:p}"
			type="button"
			@click="${h}"
		>
			${M}
		</button>`,c==="link"&&f&&(Be=s`<a
				part="link"
				aria-label="${o==="canceled"?P:p}"
				href="${f}"
			>
				${M}
			</a>`)),s`
		<div
			part="root"
			class="db-tag ri-transport-tag"
			data-emphasis="strong"
			data-overflow="${v??p}"
			data-width="${S??p}"
			data-no-text="${n??p}"
			data-variant="${x??p}"
			data-state="${o??p}"
			data-icon="${E??p}"
		>
			${Be}
		</div>
	`};var ai={};var tt=class extends L{};m([u({reflect:!0,type:String})],tt.prototype,"anchor",2),m([u({reflect:!0,type:String})],tt.prototype,"interactive",2);var I=class extends tt{constructor(){super(...arguments);this.width="auto"}riClick(){this.dispatchEvent(new CustomEvent("transport-tag-click",{bubbles:!0,composed:!0,detail:{category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,additionalEventDetail:this.additionalEventDetail}}))}render(){return ii({category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,riClick:this.riClick})}static{this.styles=C([ai,T].join(`
`))}};m([u({reflect:!0,type:String})],I.prototype,"category",2),m([u({reflect:!0,type:String})],I.prototype,"type",2),m([u({reflect:!0,type:String})],I.prototype,"state",2),m([u({reflect:!0,type:String})],I.prototype,"width",2),m([u({reflect:!0,type:String})],I.prototype,"line",2),m([u({reflect:!0,type:String})],I.prototype,"journeyDescription",2),m([u({reflect:!0,type:Number})],I.prototype,"number",2),m([u({reflect:!0,type:String})],I.prototype,"label",2),m([u({reflect:!0,type:String})],I.prototype,"replacementTransportText",2),m([u({reflect:!0,type:Boolean})],I.prototype,"noText",2),m([u({reflect:!0,type:Boolean})],I.prototype,"showIcon",2),m([u({attribute:"static",reflect:!0,type:Boolean})],I.prototype,"staticMode",2),m([u({reflect:!0,type:Boolean})],I.prototype,"overflow",2),m([u({reflect:!0,type:Object})],I.prototype,"additionalEventDetail",2);var Ht=class extends I{};Ht.styles=[...w(),...A(Ht.styles)];customElements.get("ri-transport-tag")||customElements.define("ri-transport-tag",Ht);var jt=class extends N{};jt.styles=[...w(),...A(jt.styles)];customElements.get("ri-itinerary")||customElements.define("ri-itinerary",jt);var Ua=({name:e,index:t,departureEvents:r,stopCancelled:i,additional:a})=>{let o=i?s`<span
				class="db-infotext"
				data-semantic="critical"
				data-icon="cross_circle"
			>
				${l("journey.stopCanceled","Halt entf\xE4llt")}
			</span>`:p,n="weak";return(t===0||t===r.length-1)&&(n="strong"),s`<ri-station emphasis="${n}">
			<span>${e}</span>
			<slot name="station-${t}"></slot>
		</ri-station>
		${o}
		${a?s`<span class="db-infotext"
					>${l("journey.additionalStop","Zusatzhalt")}</span
				>`:p}
		<slot name="vehicle-route-item-detail-${t}"></slot>`},oi=({journey:e,now:t,dots:r,debug:i})=>{if(!e)return s`Missing Journey`;if(!e.events&&!e.eventsCancelled)return s`Missing Events`;let a=[...e.events??[],...e.eventsCancelled??[]],o=a.filter((h,b)=>h.type==="DEPARTURE"||b===a.length-1),n=e.info.journeyCancelled,d=t?new Date(t):void 0,c=$e({nowAsDate:d,dots:r,times:o.map(h=>h.time)}),f=Se(r,c);return i&&console.log("VehicleRoute",{nowAsDate:d,dots:r,progress:c,departureEvents:o}),s`<div class="ri-vehicle-route">
		<div
			class="ri-vehicle-route-line-container"
			style="${f}"
			aria-hidden="true"
		>
			<i
				class="ri-vehicle-route-line"
				data-active="true"
				data-full-rounded="${c>=100}"
			></i>
			<i
				class="ri-vehicle-route-line"
				data-full-rounded="${c<=0}"
			></i>
		</div>
		<ul>
			${o.map((h,b)=>{let{stopPlace:g,platform:v,platformSchedule:S,time:$,timeSchedule:x,timeType:E,arrivalOrDepartureID:_,cancelled:y,additional:k}=h,P=y||n;return s`<li>
					<ri-stop .active="${Y(h.time,d)}">
						<ri-arrival-departure-time slot="time">
							${X({time:$,timeSchedule:x,timeType:E,index:b,items:o,arrival:b===o.length-1})}
						</ri-arrival-departure-time>
						<div
							data-id="${_}"
							class="ri-stop-line-icon"
							slot="line"
						>
							${Q(o,b,P)}
						</div>
						<div class="ri-board-item-content-container">
							${Ua({name:g.name,index:b,departureEvents:o,stopCancelled:P,additional:k})}
						</div>
						${U({platformName:v||S,slot:"tag",emphasis:"weak",variant:S===v?"set":"changed"})}
					</ri-stop>
				</li>`})}
		</ul>
	</div>`};var ni={};var Ut=class extends z{render(){return oi({journey:this.journey,now:this.now,dots:this._dots,debug:this.debug})}handleStopIconDetection(){let t=this.shadowRoot?.querySelectorAll(".ri-stop-line-icon");t&&(this._dots=[...t].map(r=>({id:r.dataset.id,top:r.getBoundingClientRect().top})))}static{this.styles=C([ni,Ce,T,j].join(`
`))}};m([u({reflect:!0,type:Object})],Ut.prototype,"journey",2);var Wt=class extends Ut{};Wt.styles=[...w(),...A(Wt.styles)];customElements.get("ri-vehicle-route")||customElements.define("ri-vehicle-route",Wt);var si=e=>e.arrivals!==void 0,li=e=>e.departures!==void 0,rr=e=>e.replaceAll(/([!&),/:;=?[\\\]{|}])/g,"$1 ").replaceAll(/(\()/g," $1");var Ga=e=>{if(!e)return s``;let{time:t,timeSchedule:r,timeType:i}=e;return ye({time:t,timeSchedule:r,timeType:i,emphasis:"strong"})},ci=(e,t,r)=>{if(!t)return s``;let i,a,o,n,d,c;return t?.replacementTransport||t?.categoryInternal==="Bsv"?c=`${t?.category} ${t?.line?.replace(t?.category,"").trim()}`:(n=t?.journeyDescription,i=t?.category,a=t?.line,o=t?.number,d=t?.label),s`<div slot="transportation">
		<i
			class="ri-board-item-travel-with-line"
			data-variant="${r??p}"
			role="presentation"
		></i>
		<ri-transport-tag
			aria-description="${l("board.line","Linie")}"
			@transport-tag-click="${e}"
			.label="${d??p}"
			.journeyDescription="${n??p}"
			.category="${i??p}"
			.line="${a??p}"
			.type="${t?.type}"
			.number="${o??p}"
			.replacementTransportText="${c??p}"
		></ri-transport-tag>
	</div>`},ir=e=>e.map(t=>s`<li>${t}</li>`),di=(e,t)=>{if(!e.via)return p;let r=e.via.map(({name:o})=>rr(o));if(t&&(r=r.map(o=>o.split(",")[0])),r.length<3)return s`<ul class="ri-board-item-via-container">
			${ir(r)}
		</ul>`;let i=r.slice(0,2),a=r.slice(2,r.length);return s`<details class="ri-board-item-via">
		<summary
			class="ri-board-item-via-container"
			data-interactive-focus="true"
		>
			<ul>
				${ir(i)}
			</ul>
			<div>
				<i
					data-icon="chevron_down"
					data-variant="ghost"
					data-size="small"
					class="db-button"
					data-more="${a.length} ${l("board.moreStops","Haltestellen")}"
					data-less="${l("board.collapse","Einklappen")}"
				></i>
			</div>
		</summary>
		<ul class="ri-board-item-via-container">
			${ir(r)}
		</ul>
	</details>`},pi=(e,t)=>stop?s`<b aria-description="${l("board.destination","Ziel")}">
		${rr(t?e.origin.name:e.destination.name)}
	</b>`:p,mi=({stop:e,background:t,show:r,riClick:i,isArrival:a,breakpointVariant:o})=>{if(!e)return s`Missing stop`;let n=r?.via,d=r?.viaCities,c=e?.platform||e?.platformSchedule,f=e?.platformSchedule===e?.platform?"set":"changed",h=r?.platformTag?U({platformName:c,slot:"tag",emphasis:"weak",variant:f}):p,b=!e.canceled&&e.travelsWith?.length,g=p;return b&&e.travelsWith&&(g=e.travelsWith.map((v,S)=>s`<ri-stop .breakpointVariant="${o}">
					<div slot="time"></div>
					${ci(i,v,S===(e?.travelsWith?.length||0)-1?"end":"middle")}
					<div class="ri-board-item-station-container">
						${pi(v,a)}
						${n?di(v,d):p}
						${v.separationAt?s`<span class="db-infotext">
									${l("journey.trainSeparatesAt","Dieser Zug wird in {{station}} getrennt",{station:v.separationAt.name})}
								</span>`:p}
					</div>
					${h}
				</ri-stop>`)),s`<div
		class="ri-board-item"
		part="root"
		data-background="${t??p}"
	>
		<ri-stop .breakpointVariant="${o}">
			<ri-arrival-departure-time
				slot="time"
				aria-description="${a?l("board.arrival","Ankunftszeit"):l("board.departure","Abfahrtszeit")}"
			>
				${Ga(e)}
			</ri-arrival-departure-time>

			${ci(i,e.transport,b?"start":void 0)}

			<div class="ri-board-item-station-container">
				${pi(e.transport,a)}
				${n?di(e.transport,d):p}
				${e.canceled?s`<span
							class="db-infotext"
							data-semantic="critical"
							data-icon="cross_circle"
						>
							${l("board.tripCanceled","Fahrt f\xE4llt aus")}
						</span>`:p}
				<slot></slot>
			</div>
			${h}
		</ri-stop>
		${g}
	</div>`};var ui={};var et=class extends J{constructor(){super(...arguments);this.show={via:!0,viaCities:!0,platformTag:!0}}riClick(){this.dispatchEvent(new CustomEvent("board-item-click",{bubbles:!0,composed:!0,detail:{stop:this.stop,show:this.show}}))}render(){return mi({stop:this.stop,show:this.show,background:this.background,isArrival:this.isArrival,riClick:this.riClick,breakpointVariant:this.breakpointVariant})}static{this.styles=C([ui,T,Te,j].join(`
`))}};m([u({reflect:!0,type:Object})],et.prototype,"stop",2),m([u({reflect:!0,type:Object})],et.prototype,"show",2),m([u({reflect:!0,type:Boolean})],et.prototype,"background",2),m([u({reflect:!0,type:Boolean})],et.prototype,"isArrival",2);var Gt=class extends et{};Gt.styles=[...w(),...A(Gt.styles)];customElements.get("ri-board-item")||customElements.define("ri-board-item",Gt);var Fa=(e,t,r)=>s`<li
		aria-hidden="true"
		class="ri-board-header"
		data-variant="${e}"
		data-breakpoint-variant="${r}"
	>
		<ri-stop>
			<span slot="time"> ${l("board.time","Zeit")} </span>
			<div slot="transportation">
				<span>${l("board.line","Linie")}</span>
			</div>
			<span>${l("board.destination","Ziel")}</span>
			${t?.platformTag?s`<span slot="tag">
						${l("board.platform","Gleis")}
					</span>`:p}
		</ri-stop>
	</li>`,fi=({board:e,showHeader:t,headerVariant:r,showBoardItems:i,breakpointVariant:a})=>{if(!e)return s``;let o=[],n=!0;si(e)&&(o=e.arrivals),li(e)&&(o=e.departures,n=!1);let d=[],c=[];for(let f of o.sort((h,b)=>new Date(h.timeSchedule).getTime()-new Date(b.timeSchedule).getTime()))if(!c.includes(f.transport.journeyID))if(f.travelsWith&&f.travelsWith?.length){c.push(...f.travelsWith.map(b=>b.journeyID));let h=f.travelsWith.map(b=>({...b,via:o.find(g=>g.transport.journeyID===b.journeyID)?.transport.via}));d.push({...f,travelsWith:h})}else d.push(f);return s` <ul class="ri-board">
		${t?Fa(r,i,a):p}
		${d.map((f,h)=>s`<li>
				<ri-board-item
					.show="${i}"
					.stop="${f}"
					.background="${h%2!==0}"
					.isArrival="${n}"
					.breakpointVariant="${a}"
				></ri-board-item>
			</li>`)}
	</ul>`};var bi={};var rt=class extends J{constructor(){super(...arguments);this.showHeader=!0;this.headerVariant="light";this.showBoardItems={via:!0,viaCities:!0,platformTag:!0}}render(){return fi({board:this.board,showHeader:this.showHeader,headerVariant:this.headerVariant,showBoardItems:this.showBoardItems,breakpointVariant:this.breakpointVariant})}static{this.styles=C([bi,T].join(`
`))}};m([u({reflect:!0,type:Object})],rt.prototype,"board",2),m([u({reflect:!0,type:Boolean})],rt.prototype,"showHeader",2),m([u({reflect:!0,type:String})],rt.prototype,"headerVariant",2),m([u({reflect:!0,type:Object})],rt.prototype,"showBoardItems",2);var qt=class extends rt{};qt.styles=[...w(),...A(qt.styles)];customElements.get("ri-board")||customElements.define("ri-board",qt);var{I:Am}=wr;var hi=e=>e.strings===void 0;var gi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ar=e=>(...t)=>({_$litDirective$:e,values:t}),we=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var Ft=(e,t)=>{let r=e._$AN;if(r===void 0)return!1;for(let i of r)i._$AO?.(t,!1),Ft(i,t);return!0},Ae=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},vi=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Ya(t)}};function Ka(e){this._$AN!==void 0?(Ae(this),this._$AM=e,vi(this)):this._$AM=e}function Za(e,t=!1,r=0){let i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let o=r;o<i.length;o++)Ft(i[o],!1),Ae(i[o]);else i!=null&&(Ft(i,!1),Ae(i));else Ft(this,e)}var Ya=e=>{e.type==gi.CHILD&&(e._$AP??=Za,e._$AQ??=Ka)},_e=class extends we{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,i){super._$AT(t,r,i),vi(this),this.isConnected=t._$AU}_$AO(t,r=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),r&&(Ft(this,t),Ae(this))}setValue(t){if(hi(this._$Ct))this._$Ct._$AI(t,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var Ee=()=>new nr,nr=class{},or=new WeakMap,Le=ar(class extends _e{render(e){return p}update(e,[t]){let r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),p}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){let t=this.ht??globalThis,r=or.get(t);r===void 0&&(r=new WeakMap,or.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?or.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var it=84,at=54,Jt=e=>s`
	<svg
		aria-hidden="true"
		data-shape="wagon"
		width="${it}"
		height="${at}"
		viewBox="0 0 80 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
	>
		<defs>
			<linearGradient
				id="${e}"
				x1="0%"
				x2="50%"
				style="transform: rotate(var(--car-gradient-rotate,0deg));"
			>
				<stop style="stop-color: var(--car-stop-1-color);" offset="1" />
				<stop style="stop-color: var(--car-stop-2-color);" offset="1" />
			</linearGradient>
		</defs>
		<rect
			width="80"
			height="48"
			stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
			stroke-width="2"
			style="fill: url(#${e});"
		/>
	</svg>
`,yi=(e,t)=>{switch(t){case"single":return s`
				<svg
					aria-hidden="true"
					data-shape="controlcar-single"
					width="${it}"
					height="${at}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M11.6279 0.5H68.3818C69.8843 0.500038 71.0085 1.15361 71.8604 2.125C73.095 3.53301 73.7556 5.5731 74.0459 7.24805V7.24902L75.9463 18.5078C77.1575 25.7758 78.0606 31.4146 78.6553 35.4258L78.8906 37.0449L78.9766 37.6523L79.2559 39.7402C79.4119 41.0227 79.4759 41.6712 79.499 42.0938C79.4962 43.5067 78.7952 44.7798 77.7344 45.7461C76.5353 46.8383 74.9218 47.4999 73.4375 47.5H6.57227C5.09874 47.5 3.49514 46.8484 2.29297 45.8076C1.21694 44.8759 0.512176 43.6781 0.500977 42.4131C0.807 38.4682 2.41603 28.1558 5.37402 10.7148L5.93164 7.43848L5.93262 7.43359C6.20206 5.74549 6.85364 3.63228 8.1084 2.17188C8.91186 1.23678 9.96077 0.585627 11.3457 0.507812L11.6279 0.5Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;case"end":return s`
				<svg
					aria-hidden="true"
					data-shape="ice-right"
					width="${it}"
					height="${at}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M57.767 15.8884L57.7731 15.8932L57.7794 15.8977C68.0532 23.3354 75.3339 34.1925 78.0848 38.2948L78.0889 38.3008L78.0934 38.3076C78.2815 38.5881 78.4492 38.8382 78.5951 39.0531C79.6357 40.5865 79.8032 43.0141 78.9711 44.8971C78.6179 45.6964 78.0901 46.3769 77.3843 46.8388C76.7558 47.2501 75.9657 47.5 74.9949 47.5H0.5V0.5H10.2647L17.538 0.504482L18.9105 0.555111C18.9111 0.555139 18.9118 0.555166 18.9124 0.555193C22.1288 0.697827 29.5993 1.17517 34.815 2.68161L35.3495 2.86659C35.3499 2.86676 35.3504 2.86693 35.3509 2.8671C40.347 4.63137 47.8192 8.20735 57.767 15.8884Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;case"start":return s`
				<svg
					aria-hidden="true"
					data-shape="ice-left"
					width="${it}"
					height="${at}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M22.233 15.8884L22.2269 15.8932L22.2206 15.8977C11.9468 23.3354 4.66613 34.1925 1.9152 38.2948L1.91115 38.3008L1.90659 38.3076C1.71851 38.5881 1.55081 38.8382 1.40491 39.0531C0.364281 40.5865 0.196831 43.0141 1.02889 44.8971C1.38206 45.6964 1.9099 46.3769 2.61575 46.8388C3.2442 47.2501 4.03429 47.5 5.00508 47.5H79.5V0.5H69.7353L62.462 0.504482L61.0895 0.555111C61.0889 0.555139 61.0882 0.555166 61.0876 0.555193C57.8712 0.697827 50.4007 1.17516 45.185 2.6816L44.6506 2.86659C44.65 2.86677 44.6495 2.86696 44.649 2.86714C39.653 4.63143 32.1807 8.20741 22.233 15.8884Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;default:return Jt(e)}},xi=(e,t)=>{switch(t){case"single":return s`
				<svg
					aria-hidden="true"
					data-shape="controlcar-single"
					width="${it}"
					height="${at}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M11.6279 0.5H68.3818C69.8843 0.500038 71.0085 1.15361 71.8604 2.125C73.095 3.53301 73.7556 5.5731 74.0459 7.24805V7.24902L75.9463 18.5078C77.1575 25.7758 78.0606 31.4146 78.6553 35.4258L78.8906 37.0449L78.9766 37.6523L79.2559 39.7402C79.4119 41.0227 79.4759 41.6712 79.499 42.0938C79.4962 43.5067 78.7952 44.7798 77.7344 45.7461C76.5353 46.8383 74.9218 47.4999 73.4375 47.5H6.57227C5.09874 47.5 3.49514 46.8484 2.29297 45.8076C1.21694 44.8759 0.512176 43.6781 0.500977 42.4131C0.807 38.4682 2.41603 28.1558 5.37402 10.7148L5.93164 7.43848L5.93262 7.43359C6.20206 5.74549 6.85364 3.63228 8.1084 2.17188C8.91186 1.23678 9.96077 0.585627 11.3457 0.507812L11.6279 0.5Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;case"end":return s`
				<svg
					aria-hidden="true"
					data-shape="controlcar-right"
					width="${it}"
					height="${at}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M74.0779 7.43869L74.0787 7.44389L74.1904 8.09914C77.5847 28.0232 79.3504 39.3343 79.5 42.0985C79.4956 43.5095 78.7941 44.7806 77.7345 45.7459C76.5353 46.8383 74.9216 47.5 73.4371 47.5H0.5V0.5H68.3817C69.9074 0.5 71.0434 1.17443 71.9004 2.17193C73.1552 3.63228 73.8075 5.74503 74.0779 7.43869Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;case"start":return s`
				<svg
					aria-hidden="true"
					data-shape="controlcar-left"
					width="${it}"
					height="${at}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M5.92213 7.43869L5.92125 7.44389L5.80956 8.09914C2.41533 28.0232 0.649536 39.3343 0.500023 42.0985C0.504402 43.5095 1.2059 44.7806 2.26552 45.7459C3.46468 46.8383 5.07839 47.5 6.56284 47.5H79.5V0.5H11.6183C10.0926 0.5 8.95663 1.17443 8.09955 2.17193C6.84476 3.63228 6.19247 5.74503 5.92213 7.43869Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;default:return Jt(e)}},Si=e=>s`
	<svg
		data-shape="double-control-car"
		width="${it}"
		height="${at}"
		viewBox="0 0 80 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		<defs>
			<linearGradient
				id="${e}"
				x1="0%"
				x2="50%"
				style="transform: rotate(var(--car-gradient-rotate,0deg));"
			>
				<stop style="stop-color: var(--car-stop-1-color);" offset="1" />
				<stop style="stop-color: var(--car-stop-2-color);" offset="1" />
			</linearGradient>
		</defs>
		<path
			d="M11.6279 0.5H68.3818C69.8843 0.500038 71.0085 1.15361 71.8604 2.125C73.095 3.53301 73.7556 5.5731 74.0459 7.24805V7.24902L75.9463 18.5078C77.1575 25.7758 78.0606 31.4146 78.6553 35.4258L78.8906 37.0449L78.9766 37.6523L79.2559 39.7402C79.4119 41.0227 79.4759 41.6712 79.499 42.0938C79.4962 43.5067 78.7952 44.7798 77.7344 45.7461C76.5353 46.8383 74.9218 47.4999 73.4375 47.5H6.57227C5.09874 47.5 3.49514 46.8484 2.29297 45.8076C1.21694 44.8759 0.512176 43.6781 0.500977 42.4131C0.807 38.4682 2.41603 28.1558 5.37402 10.7148L5.93164 7.43848L5.93262 7.43359C6.20206 5.74549 6.85364 3.63228 8.1084 2.17188C8.91186 1.23678 9.96077 0.585627 11.3457 0.507812L11.6279 0.5Z"
			style="fill: url(#${e});"
			stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
		/>
	</svg>
`,$i=e=>s`
	<svg
		data-shape="locomotive"
		width="64"
		height="48"
		viewBox="0 0 64 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		<defs>
			<linearGradient
				id="${e}"
				x1="0%"
				x2="50%"
				style="transform: rotate(var(--car-gradient-rotate,0deg));"
			>
				<stop style="stop-color: var(--car-stop-1-color);" offset="1" />
				<stop style="stop-color: var(--car-stop-2-color);" offset="1" />
			</linearGradient>
		</defs>
		<path
			d="M52.3174 8.5H11.6826C10.3314 8.5 9.14293 8.83885 8.24316 9.44434C7.40563 10.0081 6.81367 10.8094 6.57129 11.8115V11.8125C4.54777 21.687 3.02769 29.177 2.01367 34.2832C1.50661 36.8366 1.12542 38.7932 0.87207 40.1523C0.745395 40.832 0.651556 41.3602 0.588867 41.7383C0.557495 41.9275 0.534473 42.0764 0.519531 42.1865C0.512077 42.2415 0.507087 42.2845 0.503906 42.3164C0.500559 42.35 0.500006 42.3618 0.5 42.3594C0.500137 43.6055 1.13388 44.8881 2.11133 45.875C3.08918 46.8622 4.35761 47.4999 5.58691 47.5H58.4131C59.6424 47.4999 60.9108 46.8622 61.8887 45.875C62.8661 44.8881 63.4999 43.6055 63.5 42.3594C63.5 42.3618 63.4994 42.3501 63.4961 42.3164C63.4929 42.2845 63.4879 42.2415 63.4805 42.1865C63.4655 42.0764 63.4425 41.9276 63.4111 41.7383C63.3484 41.3599 63.2538 40.8307 63.127 40.1504C62.8735 38.7905 62.4936 36.8338 61.9863 34.2793C60.9723 29.1731 59.4528 21.6842 57.4297 11.8125C57.1874 10.8118 56.5946 10.009 55.7559 9.44434C54.8564 8.83896 53.6685 8.5 52.3174 8.5Z"
			style="fill: url(#${e});"
			stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
		/>
	</svg>
`;var Xa=e=>!!(e&&(e.levelFirstClass&&e.levelFirstClass!=="UNDEFINED"||e.levelEconomyClass&&e.levelEconomyClass!=="UNDEFINED")),Ci=(e,t)=>{if(!t)return;let r=e?t.levelFirstClass:t.levelEconomyClass;if(r=="OVERCROWDED")return"capacity_indicator_fully_booked";if(r==="HIGH")return"capacity_indicator_high";if(r==="MIDDLE")return"capacity_indicator_moderate";if(r==="LOW")return"capacity_indicator_low"},Qa=e=>{if(e=="capacity_indicator_fully_booked")return"critical";if(e==="capacity_indicator_high"||e==="capacity_indicator_moderate")return"warning"},sr=e=>e.startsWith("SLEEPER_"),lr=e=>e.startsWith("COUCHETTE_"),to=e=>{let t=[],{type:r}=e,i;e.occupancy&&(i=e.occupancy);let{category:a,hasFirstClass:o,hasEconomyClass:n}=r,d=Xa(i),c=Ci(!0,i),f=Ci(!1,i);return o&&n?(t.push("first_class"),sr(a)?t.push("bed"):lr(a)?t.push("couchette"):d&&(i?.levelEconomyClass!=="UNDEFINED"&&f?t.push(f):i?.levelFirstClass!=="UNDEFINED"&&c&&t.push(c)),t.push("second_class"),t):o?(t.push("first_class"),sr(a)?t.push("bed"):lr(a)?t.push("couchette"):d&&(c?t.push(c):f&&t.push(f)),t):(n&&(t.push("second_class"),sr(a)?t.push("bed"):lr(a)?t.push("couchette"):d&&f&&t.push(f)),t)},ke=e=>{let{type:t}=e,{category:r}=t,i=[];if(r==="LOCOMOTIVE")return i;if(r==="DOUBLEDECK_CARCARRIER_PASSENGERTRAIN")return["car"];if(e.status==="CLOSED")return["cross_circle"];if(r==="BAGGAGECAR")return["luggage_rack"];if(r==="DININGCAR")return["knife_and_fork"];let a=to(e);return a.length>0&&i.push(...a),r.startsWith("HALFDININGCAR")&&i.push("knife_and_fork"),i},Ti=({category:e,transportType:t,variant:r,uuid:i})=>{let a=`gradient-${i}`;return!e||e==="UNDEFINED"||t&&t==="UNKNOWN"?Jt(a):e.includes("LOCOMOTIVE")?$i(a):e.startsWith("DOUBLECONTROLCAR")?Si(a):e.includes("POWERCAR")||e.includes("CONTROLCAR")&&t==="HIGH_SPEED_TRAIN"?yi(a,r):e.includes("CONTROLCAR")||e.includes("PASSENGERCARRIAGE")||e.includes("SLEEPER")||e.includes("COUCHETTE")?xi(a,r):Jt(a)},V=(e,t)=>`${e.vehicleID||e.wagonIdentificationNumber}${t?`-${t}`:""}`,ot=(e,t)=>`vehicle-${V(e,t)}`,Pe=({vehicle:e,active:t,fullText:r})=>{if(e&&e.wagonIdentificationNumber){let i=`${l("car.wagon","Wagen")} ${e.wagonIdentificationNumber}`;return s`<span
			class="db-tag ri-car-identification"
			data-emphasis="${t?"strong":"weak"}"
			title="${i}"
		>
			${r?i:e.wagonIdentificationNumber}
		</span>`}return s``},wi=({icon:e,carTagsCount:t,isDoubleDeck:r})=>{let i=Qa(e),a=e==="first_class",o="weak";return r?t&&t>=2&&a&&(o="strong"):a&&(o="strong"),s`<span
		class="db-tag"
		aria-hidden="true"
		data-no-text="true"
		data-icon="${e}"
		data-capacity="${i??p}"
		data-emphasis="${o}"
	>
		${e}
	</span>`},Ie=e=>{if(e?.length===1){let t=e.at(0)?.type.category;return t==="LOCOMOTIVE"||t==="POWERCAR"}return!1};var Ai=({vehicles:e,active:t,single:r,postfix:i,_refs:a})=>{console.log(e,r,t);let o=r?e?.filter(n=>ot(n)===t):e;return o?s`<ul
		aria-label="${l("car.detailsLabel","Details zur Wagenreihung")}"
		class="ri-car-description-list"
	>
		${o?.map(n=>{let d=ot(n,i),c=Ee();return a[d]=c,s`<li ${Le(c)}>
				<ri-car-description
					.vehicle="${n}"
					.active="${d===t||p}"
				></ri-car-description>
			</li>`})}
	</ul>`:p};var _i={};var nt=class extends L{constructor(){super(...arguments);this.refs={};this.handleAnchorChange=({newURL:r})=>{if(r.includes("#")&&this.vehicles){let i=r.split("#")[1],a=this.vehicles.find(o=>ot(o,this.postfix)===i);if(a){let o=ot(a,this.postfix);this.active=o;let n=this.refs[o];n&&n.value?.scrollIntoView({behavior:"smooth"});return}else{this.active="";return}}}}render(){return Ai({vehicles:this.vehicles,active:this.active,postfix:this.postfix,single:this.single,_refs:this.refs})}async firstUpdated(){typeof window!==void 0&&this.handleAnchorChange({newURL:window.location.href})}connectedCallback(){super.connectedCallback(),typeof window!==void 0&&window.addEventListener("hashchange",this.handleAnchorChange)}disconnectedCallback(){typeof window!==void 0&&window.removeEventListener("hashchange",this.handleAnchorChange),super.disconnectedCallback()}static{this.styles=C([_i,T].join(`
`))}};m([u({reflect:!0,type:Array})],nt.prototype,"vehicles",2),m([u({reflect:!0,type:String})],nt.prototype,"active",2),m([u({reflect:!0,type:Boolean})],nt.prototype,"single",2),m([u({reflect:!0,type:String})],nt.prototype,"postfix",2);var ro={BISTRO:"knife_and_fork",AIR_CONDITION:"air_condition",BIKE_SPACE:"bike",TOILET:"wc_sign",WHEELCHAIR_SPACE:"person_with_wheelchair",TOILET_WHEELCHAIR:"restricted_mobility_toilet",BOARDING_AID:"vehicle_entry_aid",CABIN_INFANT:"childrens_compartment",ZONE_QUIET:"quiet_zone",ZONE_FAMILY:"family_compartment",INFO:"information_circle",SEATS_SEVERELY_DISABLED:"traveler_with_reduced_mobility",SEATS_BAHN_COMFORT:"bahnbonus",SEATS_BAHN_BONUS:"bahnbonus",SEATS_LUFTHANSA_EXPRESS_RAIL:"rail_and_fly",WIFI:"wifi",ZONE_MULTI_PURPOSE:void 0},gt=e=>ro[e.type]??"question_mark_circle",vt=(e,t,r)=>{let i="";return r&&(i=i+`${r} `),e==="NOT_AVAILABLE"&&(i=i+l("amenities.status.notAvailable","Nicht Verf\xFCgbar")),e==="RESERVED"&&(i=i+l("amenities.status.reserved","Reserviert")),e==="AVAILABLE"&&(i=i+l("amenities.status.available","Verf\xFCgbar")),`${l(`amenities.icon.${t}`,t)}${i?.length?` - ${i}`:""}`};var io={knife_and_fork:"Speisewagen",air_condition:"Klimaanlage",bike:"Fahrradstellpl\xE4tze",wc_sign:"Toilette",person_with_wheelchair:"Rollstuhlstellpl\xE4tze",restricted_mobility_toilet:"Rollstuhlg\xE4ngige Toilette",vehicle_entry_aid:"Einstiegshilfe",childrens_compartment:"Kleinkindabteil",quiet_zone:"Ruhebereich",family_compartment:"Familienbereich",information_circle:"Info-Abteil",traveler_with_reduced_mobility:"Pl\xE4tze f\xFCr Schwerbehinderte",bahnbonus:"BahnBonus Status",rail_and_fly:"Pl\xE4tze f\xFCr LH-Codeshare",wifi:"WLAN-Hotspot",question_mark_circle:"Unbekannt",bed:"Schlafwagen",car:"Autotransportwagen",luggage_rack:"Gep\xE4ckwagen",couchette:"Liegewagen",first_class:"Erste Klasse",first_and_second_class:"Erste und Zweite Klasse",second_class:"Zweite Klasse",capacity_indicator_fully_booked:"Au\xDFergew\xF6hnlich hohe Auslastung erwartet",capacity_indicator_high:"Hohe Auslastung erwartet",capacity_indicator_moderate:"Mittlere Auslastung erwartet",capacity_indicator_low:"Geringe Auslastung erwartet"},Re=e=>{let t=io[e]??e;return l(`amenities.icon.${e}`,t)};var ao=e=>{switch(e){case"capacity_indicator_fully_booked":return"critical";case"capacity_indicator_high":return"warning";default:return"neutral"}},oo=e=>{if(!e.reservedSeat)return p;let t=e.reservedSeat;return e.wagonIdentificationNumber&&(t+=l("car.inWagon",", in Wagen {{wagon}}",{wagon:e.wagonIdentificationNumber})),e.platformPosition?.sector&&(t+=l("car.inSector",", im Abschnitt {{sector}}",{sector:e.platformPosition.sector})),s`<div class="ri-car-description-reserved-seat-container">
		<div class="ri-car-description-reserved-seat">
			<span
				class="db-tag"
				data-emphasis="strong"
				data-no-text="true"
				data-icon="aisle"
				data-size="small"
				data-semantic="successful"
			></span>
			<span class="ri-car-description-reserved-seat-text">
				${l("car.reservedSeatLabel","Ihr reservierter Sitzplatz")}
				<span>${t}</span>
			</span>
		</div>
		<div
			class="ri-car-description-reserved-seat-additional-information"
			aria-hidden="true"
		>
			<span>${l("car.sectorLabel","Abschnitt")}</span>
			<span>${l("car.wagonLabel","Wagen")}</span>
			<span>${l("car.seatLabel","Sitzplatz")}</span>
			<span
				>${e.platformPosition?.sector??l("car.unknown","Unbekannt")}</span
			>
			<span
				>${e.wagonIdentificationNumber??l("car.unknown","Unbekannt")}</span
			>
			<span>${e.reservedSeat}</span>
		</div>
	</div>`},Ei=({vehicle:e,active:t})=>{if(!e)return s`No vehicle provided`;let r=ke(e);return s`<div class="ri-car-description">
		${Pe({vehicle:e,fullText:!0,active:t})}
		${oo(e)}
		<ul>
			${r.map(i=>s`<li>
						<span
							class="db-infotext"
							data-semantic="${ao(i)}"
							data-icon="${i}"
						>
							${Re(i)}
						</span>
					</li>`)}
			${e.amenities.map(i=>{let a=gt(i),o=i.status==="NOT_AVAILABLE"||i.status==="RESERVED",n=vt(i.status,a,i.amount);return s`<li>
					<span
						class="db-infotext"
						data-icon-trailing="${o?"cross_circle":p}"
						data-icon="${a}"
					>
						${n}
					</span>
				</li>`})}
		</ul>
	</div>`};var Li={};var $t=class extends L{render(){return Ei({vehicle:this.vehicle,active:this.active})}static{this.styles=C([Li,T,j].join(`
`))}};m([u({reflect:!0,type:Object})],$t.prototype,"vehicle",2),m([u({reflect:!0,type:String})],$t.prototype,"active",2);var Kt=class extends $t{};Kt.styles=[...w(),...A(Kt.styles)];customElements.get("ri-car-description")||customElements.define("ri-car-description",Kt);var Zt=class extends nt{};Zt.styles=[...w(),...A(Zt.styles)];customElements.get("ri-car-description-list")||customElements.define("ri-car-description-list",Zt);var De=(e,t)=>{if(e)return e?.details?.sectors?ge(t||"inside",e.details,e.details?.sectors):{containerLength:e.details?.end||0,widthChildren:[]}},Pi=(e,t,r)=>t==="absolute"?`${ft(e.containerLength,r)}px`:"auto",ki=e=>[...new Set(e)],Ii=e=>{let t=e.groups.at(0);if(!t)return;let r=t.vehicles.map(n=>n.platformPosition?.sector??""),i=e.platform.details?.sectors?.filter(n=>r.includes(n.name)).map(n=>n.name);if(!i)return;let a=ki(r),o=ki(i);return a.length===o.length&&a.every((n,d)=>n===o[d])?"backwards":"forwards"};var Ri=(e,t)=>{if(!e)return;let r=[];for(let i of e)if(i.platformPosition)r.push(i.platformPosition);else return;if(r.length>0){let i=r.at(0)?.start,a=r.at(-1)?.end;return ge(t||"inside",{start:i,end:a},r)}},Di=({vehicles:e,variant:t,absoluteScale:r,platformWidth:i})=>{if(!(i&&e))return;let a=xt(t),o=a?"fit-content":"auto",n=e.at(0)?.platformPosition?.start??0,d=e.at(-1)?.platformPosition?.end?i-(e.at(-1)?.platformPosition?.end??0):0,c=a?ft(n,r):n/i*100,f=a?ft(d,r):d/i*100;return{sequenceWidth:o,inlinePaddingStartValue:c,inlinePaddingEndValue:f}},Ni=(e,t)=>{let i=xt(t)?"px":"%";if(!e)return p;let{sequenceWidth:a,inlinePaddingStartValue:o,inlinePaddingEndValue:n}=e,d=`--ri-sequence-width:${a};`;return d+=`--ri-sequence-inline-padding-start: ${o}${i};`,d+=`--ri-sequence-inline-padding-end: ${n}${i};`,d},Bi=({carMeasurements:e,variant:t,absoluteScale:r,platformWidth:i,index:a})=>{if(!(e&&i))return p;let o=e.widthChildren[a];if(!o)return p;let n=xt(t),d=n?`${ft(o,r)}px`:`${o*100}%`;return i&&e?n?`--ri-car-item-width:${d};`:"--ri-car-item-width:100%;":p};var so=({hidePlatformStructure:e,variant:t,sequence:r,departureDirection:i})=>e?p:s`<ri-platform-structure
		.variant="${t}"
		.departureDirection="${i}"
		.platform="${r?.platform}"
	></ri-platform-structure>`,lo=({vehicles:e,variant:t,sequence:r,transportType:i,platformWidth:a,destination:o,trainSplitTransport:n,groupIndex:d,postfix:c})=>r?.groups.length===0?p:s`
		<ri-car-sequence
			.vehicles="${e}"
			.transportType="${i}"
			.variant="${t}"
			.platformWidth="${a}"
			.destination="${o}"
			.trainSplitTransport="${n}"
			.groupIndex="${d}"
			.postfix="${c}"
			interactive="link"
		></ri-car-sequence>
	</div>`,co=(e,t)=>{if(!(!t||!e))return e[t]},po=({groups:e,descriptionList:t,postfix:r})=>e.length===0||t==="hidden"?p:s`<div class="ri-car-description-list-background">
		${e.filter(i=>i.groupIndex).map(({vehicles:i})=>s`
					<ri-car-description-list
						.single="${t==="single"?!0:p}"
						.vehicles="${i}"
						.postfix="${r}"
					></ri-car-description-list>
				`)}
	</div>`,mo=e=>e?.details?.name?l("carSequence.trainOnPlatform","Zug auf Gleis {{platform}}",{platform:e.details.name}):l("carSequence.train","Zug"),uo=(e,t,r)=>{let i="";t&&(i+=r);let a;return e.forEach(o=>o.vehicles?.forEach(n=>{n.reservedSeat?.length&&(a=n)})),a&&(i+=l("carSequence.reservedSeat",", ihr reservierter Sitzplatz {{seat}}",{seat:a.reservedSeat}),a.wagonIdentificationNumber&&(i+=l("carSequence.inWagon",", in Wagen {{wagon}}",{wagon:a.wagonIdentificationNumber})),a.platformPosition?.sector&&(i+=l("carSequence.inSector",", im Abschnitt {{sector}}",{sector:a.platformPosition.sector}))),i||p},zi=({sequence:e,variant:t,transportType:r,hidePlatformStructure:i,descriptionList:a,trainSplitting:o,postfix:n,_ref:d})=>{if(!e?.groups)return s`${l("carSequence.noSequenceFound","Keine Wagenreihung gefunden")}`;let c=De(e?.platform,t),f=c?.containerLength,h=Ii(e);e.groups=e?.groups.sort((_,y)=>(_.vehicles?.at(0)?.platformPosition?.start||0)-(y.vehicles?.at(0)?.platformPosition?.start||0)).map(_=>({..._,vehicles:_.vehicles.sort((y,k)=>(y.platformPosition?.start||0)-(k.platformPosition?.start||0))}));let b=e.groups.flatMap(_=>_.vehicles),g=Di({vehicles:b,variant:t,platformWidth:c?.containerLength}),v=Ni(g,t),S=xt(t),{platformDirection:$}=xe(h),x=[],E=0;for(let _ of e.groups)Ie(_.vehicles)?x.push({..._}):(E++,x.push({..._,groupIndex:E.toString()}));return s`<section
		${Le(d)}
		class="ri-car-sequence-overview"
		style="${S?p:"--ri-car-sequence-width: 100%;"}"
		data-variant="${t}"
	>
		<div class="ri-platform-car-scroll-container">
			${so({variant:t,hidePlatformStructure:i,sequence:e,departureDirection:h})}
			<div
				class="ri-cars-background"
				style="${v??p}"
			>
				<ol
					aria-label="${mo(e.platform)}"
					aria-description="${uo(x,h,$)}"
					class="ri-car-sequence-groups"
				>
					${x.map(({vehicles:_,destination:y,journeyID:k,groupIndex:P})=>s`<li>
								${lo({vehicles:_,variant:t,sequence:e,platformWidth:f,transportType:r,groupIndex:P,postfix:n,destination:y.name,trainSplitTransport:co(o,k)})}
							</li>`)}
				</ol>
			</div>
		</div>
		${po({groups:x,descriptionList:a,postfix:n})}
	</section>`};var Vi={};var W=class extends L{constructor(){super(...arguments);this.variant="inside";this.absoluteScale=1}};m([u({reflect:!0,type:String})],W.prototype,"variant",2),m([u({reflect:!0,type:Number})],W.prototype,"absoluteScale",2);var O=class extends W{constructor(){super(...arguments);this._ref=Ee();this._variant="inline"}render(){return zi({sequence:this.sequence,variant:this._variant,transportType:this.transportType,hidePlatformStructure:this.hidePlatformStructure,descriptionList:this.descriptionList,trainSplitting:this.trainSplitting,postfix:this.postfix,_ref:this._ref})}handleVariantDetection(){if(this._ref.value){let r=this._ref?.value?.getRootNode()?.host?.parentElement?.clientWidth??0,i=this._ref?.value?[...this._ref.value.children].find(a=>a.classList.contains("ri-platform-car-scroll-container")):void 0;if(i){let a=[...i.children].find(o=>o.classList.contains("ri-cars-background"));a&&(this._variant=this.variant==="absolute"||a?.scrollWidth>r?"absolute":"inside")}}else this._variant=this.variant}async firstUpdated(){this.handleVariantDetection()}connectedCallback(){super.connectedCallback(),this.handleVariantDetection()}disconnectedCallback(){super.disconnectedCallback()}static{this.styles=C([Vi,T].join(`
`))}};m([u({reflect:!0,type:Object})],O.prototype,"sequence",2),m([u({reflect:!0,type:String})],O.prototype,"transportType",2),m([u({reflect:!0,type:Boolean})],O.prototype,"hidePlatformStructure",2),m([u({reflect:!0,type:String})],O.prototype,"descriptionList",2),m([u({reflect:!0,type:Array})],O.prototype,"trainSplitting",2),m([u({reflect:!0,type:String})],O.prototype,"postfix",2),m([H()],O.prototype,"_variant",2);var bo=e=>{if(!e)return s``;let t=e?.toLowerCase()==="backwards",{departureDirectionString:r,platformDirection:i}=xe(e);return s`
		<abbr
			data-icon="${t?"arrow_left":p}"
			title="${i}"
			data-icon-trailing="${t?p:"arrow_right"}"
		>
			<span>${i}</span>
			<span aria-hidden="true">${r}</span>
		</abbr>
	`},ho=(e,t,r)=>{let i=l("platform.sector","Abschnitt");return s` <li
		style="--sector-width: ${e}; --cube-position: ${r}"
	>
		<ri-platform-tag
			emphasis="strong"
			title="${i} ${t}"
		>
			${t}
		</ri-platform-tag>
	</li>`},go=e=>l("platform.platform","Bahnsteig {{name}}",{name:e.details?.name??""}),vo=e=>{if(e.details?.sectors&&e.details.sectors.length>1){let t=e.details?.sectors,r=t.at(0),i=t.at(-1);if(r?.name&&i?.name)return l("platform.sectors","Bereiche {{first}} bis {{last}}",{first:r.name,last:i.name})}return p},yo=({platform:e,platformWidth:t,isAbsolute:r,measurements:i,absoluteScale:a})=>s` <ol
		aria-label="${go(e)}"
		aria-description="${vo(e)}"
		aria-hidden="${i.widthChildren.length===0}"
		data-no-sectors="${i.widthChildren.length===0}"
		style="--platform-width: ${t}"
	>
		${e?.details?.sectors?.map((o,n)=>{let d=Ze(i.widthChildren[n],r?a:void 0),c=Ze(kr(o));return ho(d,o.name,c)})}
	</ol>`,Oi=({departureDirection:e,platform:t,absoluteScale:r,variant:i})=>{let a=s``,o=s`<span>No sectors provided!</span>`;(t?.details?.name||e)&&(a=s`<div>
			${U({platformName:t?.details?.name})}${bo(e)}
		</div>`);let n=De(t,i);if(t&&n){let d=Pi(n,i,r);o=yo({platform:t,platformWidth:d,isAbsolute:i==="absolute",measurements:n,absoluteScale:r})}return s`
		<div class="ri-platform-structure">${a} ${o}</div>
	`};var Mi={};var Ct=class extends W{render(){return Oi({departureDirection:this.departureDirection,platform:this.platform,variant:this.variant,absoluteScale:this.absoluteScale})}static{this.styles=C([Mi,T].join(`
`))}};m([u({reflect:!0,type:String})],Ct.prototype,"departureDirection",2),m([u({reflect:!0,type:Object})],Ct.prototype,"platform",2);var Yt=class extends Ct{};Yt.styles=[...w(),...A(Yt.styles)];customElements.get("ri-platform-structure")||customElements.define("ri-platform-structure",Yt);var So=({customAnchors:e,interactive:t,vehicle:r,postfix:i})=>{let a=e?.[V(r,i)];return a||(t==="link"?`#${ot(r,i)}`:p)},$o=(e,t)=>e===0&&t===1?"single":e===0?"start":t-1===e?"end":"middle",Co=(e,t)=>{let r="";return e?.journeyDescription&&(r+=`${e?.journeyDescription}`,t&&(r+=l("carSequence.trainTo"," nach {{destination}}",{destination:t}).replace("{{journey}} ",""))),r},To=e=>{let t=e?l("carSequence.labelPart"," {{index}}. Zugteil",{index:e}):"";return l("carSequence.label","Wagenreihung{{index}}",{index:t})},wo=e=>{let t=e?.filter(r=>r.type.hasFirstClass&&r.platformPosition?.sector&&r.platformPosition.sector!=="CLOSED");if(t&&t.length>0){let r=t.map(i=>i.platformPosition.sector).filter((i,a,o)=>o.indexOf(i)===a&&i!=="CLOSED").join(" und ");return l("carSequence.firstClassSector",", 1. Klasse im Abschnitt {{sectors}}",{sectors:r})}return""},Ao=(e,t)=>{let r="";if(t&&(r+=`${t}`),e?.length&&(r+=l("carSequence.wagons",", {{count}} Wagen",{count:e.length}),e?.length>1)){let i=e.at(0),a=e.at(-1);i?.wagonIdentificationNumber&&a?.wagonIdentificationNumber&&(r+=l("carSequence.wagonNumbers",", Wagennummer {{first}} bis {{last}}",{first:i.wagonIdentificationNumber,last:a.wagonIdentificationNumber}))}return r+=`${wo(e)}`,r},_o=(e,t)=>{if(!t)return s``;let{category:r,journeyDescription:i,label:a}=t;return s`<div class="ri-train-splitting-tag-container">
		<ri-transport-tag
			.label="${a??p}"
			.journeyDescription="${i??p}"
			.category="${r??p}"
			.transportText="${e}"
			title="${e}"
			static
			overflow
		></ri-transport-tag>
	</div>`},Hi=({vehicles:e,transportType:t,trainSplitTransport:r,destination:i,active:a,interactive:o,customAnchors:n,variant:d,platformWidth:c,absoluteScale:f,describedBys:h,groupIndex:b,postfix:g})=>{if(!e||e.length===0)return s`No vehicles provided`;let v=e[0].orientation==="FORWARDS",S=Ri(e,d),$=Co(r,i);return s`<div class="ri-car-sequence-container">
		${Ie(e)?p:_o($,r)}
		<ul
			aria-label="${To(b)}"
			aria-description="${Ao(e,$)}"
			class="ri-car-sequence"
		>
			${e?.map((x,E)=>{let _=Bi({index:E,carMeasurements:S,variant:d,absoluteScale:f,platformWidth:c}),y=h?h[V(x,g)]:void 0,k=$o(E,e.length);return s`<li style="${_}">
					<ri-car-item
						data-car-id="${V(x,g)}"
						.active="${V(x,g)===a}"
						.anchor="${So({vehicle:x,interactive:o,customAnchors:n,postfix:g})}"
						.interactive="${o}"
						.variant="${k}"
						.vehicle="${x}"
						.transportType="${t}"
						.describedBy="${y}"
						.carIndex="${(E+1).toString()}"
					></ri-car-item>
				</li>`})}
		</ul>
	</div>`};var ji={};var Xt=class extends W{};m([u({reflect:!0,type:Number})],Xt.prototype,"platformWidth",2);var R=class extends Xt{constructor(){super(...arguments);this.isInteractive=()=>!!this.interactive;this.handleAnchorChange=({newURL:r})=>{if(r.includes("#")){if(this.customAnchors){let i=Object.entries(this.customAnchors).find(([,a])=>r.includes(a));if(i){this.active=i[0];return}}if(this.interactive&&this.vehicles){let i=r.split("#")[1].replace("vehicle-",""),a=this.vehicles.find(o=>V(o,this.postfix)===i);if(a){this.active=V(a,this.postfix);return}}}this.active=""}}render(){return Hi({vehicles:this.vehicles,transportType:this.transportType,trainSplitTransport:this.trainSplitTransport,destination:this.destination,active:this.active,customAnchors:this.customAnchors,interactive:this.interactive,variant:this.variant,absoluteScale:this.absoluteScale,platformWidth:this.platformWidth,describedBys:this.describedBys,groupIndex:this.groupIndex,postfix:this.postfix})}async firstUpdated(){typeof window!==void 0&&this.isInteractive()&&this.handleAnchorChange({newURL:window.location.href})}connectedCallback(){super.connectedCallback(),typeof window!==void 0&&this.isInteractive()&&window.addEventListener("hashchange",this.handleAnchorChange)}disconnectedCallback(){typeof window!==void 0&&this.isInteractive()&&window.removeEventListener("hashchange",this.handleAnchorChange),super.disconnectedCallback()}static{this.styles=C([ji,T].join(`
`))}};m([u({reflect:!0,type:Array})],R.prototype,"vehicles",2),m([u({reflect:!0,type:String})],R.prototype,"active",2),m([u({reflect:!0,type:String})],R.prototype,"interactive",2),m([u({reflect:!0,type:Object})],R.prototype,"customAnchors",2),m([u({reflect:!0,type:Object})],R.prototype,"describedBys",2),m([u({reflect:!0,type:String})],R.prototype,"transportType",2),m([u({reflect:!0,type:Object})],R.prototype,"trainSplitTransport",2),m([u({reflect:!0,type:String})],R.prototype,"destination",2),m([u({reflect:!0,type:Number})],R.prototype,"platformWidth",2),m([u({reflect:!0,type:String})],R.prototype,"groupIndex",2),m([u({reflect:!0,type:String})],R.prototype,"postfix",2);var Ui=({active:e,vehicle:t,variant:r,anchor:i,transportType:a,interactive:o,carIndex:n,postfix:d})=>s`<div class="ri-car-item" data-active="${e}">
		${Pe({vehicle:t,active:e})}
		<ri-car
			.active="${e}"
			.variant="${r}"
			.vehicle="${t}"
			.anchor="${i}"
			.interactive="${o}"
			.transportType="${a}"
			.carIndex="${n}"
			.postfix="${d}"
		></ri-car>
		<div class="ri-car-item-active-container"></div>
		<ri-car-amenities .amenities="${t?.amenities}"></ri-car-amenities>
	</div>`;var Wi={};var cr="ri-car",ko=({vehicle:e,priorityList:t,isDoubleDeck:r,isCanceled:i})=>{let a=[];return i?a.push(l("car.closed",", Wagen geschlossen")):(t&&a.push(t.map(o=>{if(t.includes("first_class")&&t.includes("second_class")){if(o==="first_class")return"first_and_second_class";if(o==="second_class")return""}return o}).filter(o=>o.length).map(Re).join(", ")),e.reservedSeat&&a.push(l("car.reservedSeat",", ihr reservierter Sitzplatz {{seat}}",{seat:e.reservedSeat})),r&&a.push(l("car.doubleDeck",", Doppelstockwagen")),e.platformPosition?.sector&&a.push(l("car.sector",", im Abschnitt {{sector}}",{sector:e.platformPosition.sector})),e?.amenities?.length>0&&(a.push(l("car.amenities",", Ausstattungsmerkmale: ")),a.push(e.amenities.map(o=>vt(o.status,gt(o),o.amount)).join(", ")))),a.join(`
`)},Po=(e,t)=>{let r=l("car.wagon","Wagen");return e?.wagonIdentificationNumber?r+=` ${e?.wagonIdentificationNumber}`:t&&(r+=` ${t}`),r},Gi=({vehicle:e,active:t,variant:r,anchor:i,interactive:a,transportType:o,riClick:n,carIndex:d,postfix:c})=>{if(!e)return s`No car provided`;let{type:f}=e,{category:h,hasEconomyClass:b,hasFirstClass:g}=f,S=b&&g?"mixed":g?"first":p,$=ke(e),x=$.length,E=h.startsWith("DOUBLEDECK"),_=$.includes("cancel"),y=Ti({category:h,transportType:o,variant:r,uuid:V(e,c)}),k=ko({vehicle:e,isCanceled:_,isDoubleDeck:E,priorityList:$}),P=Po(e,d),D=s`
		<span class="ri-car-label">${P}</span>
		${y}
		<ul
			aria-hidden="true"
			class="ri-car-icon-container"
			data-car-tags="${x}"
			data-double-deck="${E}"
		>
			${$.map(M=>s`<li>
						${wi({icon:M,isDoubleDeck:E,carTagsCount:x})}
					</li>`)}
		</ul>
	`;if(!h.includes("POWERCAR")&&!h.includes("LOCOMOTIVE")){if(a==="link"&&i)return s`<a
				class="${cr}"
				data-variant="${r}"
				aria-current="${t?"step":!1}"
				data-canceled="${_}"
				data-interactive="true"
				data-class-color="${S}"
				data-double-deck="${E}"
				href="${i}"
				aria-description="${k}"
			>
				${D}
			</a>`;if(a==="button")return s` <button
				class="${cr}"
				data-variant="${r}"
				data-canceled="${_}"
				data-interactive="true"
				data-class-color="${S}"
				data-double-deck="${E}"
				aria-description="${k}"
				@click="${n}"
			>
				${D}
			</button>`}return s`<div
		class="${cr}"
		data-category="${h}"
		data-variant="${r}"
		data-canceled="${_}"
		data-interactive="false"
		data-class-color="${S}"
		data-double-deck="${E}"
	>
		${D}
	</div>`};var qi={};var Fi={};var Ji={};var B=class extends tt{constructor(){super(...arguments);this.active=!1;this.variant="middle"}riClick(){this.dispatchEvent(new CustomEvent("car-click",{bubbles:!0,composed:!0,detail:this.vehicle}))}render(){return Gi({vehicle:this.vehicle,active:this.active,variant:this.variant,anchor:this.anchor,interactive:this.interactive,transportType:this.transportType,carIndex:this.carIndex,postfix:this.postfix,riClick:this.riClick})}static{this.styles=C([qi,Fi,Ji,T].join(`
`))}};m([u({reflect:!0,type:Object})],B.prototype,"vehicle",2),m([u({reflect:!0,type:String})],B.prototype,"active",2),m([u({reflect:!0,type:String})],B.prototype,"variant",2),m([u({reflect:!0,type:String})],B.prototype,"transportType",2),m([u({reflect:!0,type:String})],B.prototype,"carIndex",2),m([u({reflect:!0,type:String})],B.prototype,"postfix",2);var Ne=class extends B{constructor(){super(...arguments);this.i18n=!1}render(){return Ui({vehicle:this.vehicle,active:this.active,anchor:this.anchor,variant:this.variant,transportType:this.transportType,interactive:this.interactive,postfix:this.postfix})}static{this.styles=C([Wi,T].join(`
`))}};var Qt=class extends B{};Qt.styles=[...w(),...A(Qt.styles)];customElements.get("ri-car")||customElements.define("ri-car",Qt);var Ki=({amenities:e})=>{if(!e||e.length===0)return s`<div class="ri-car-amenities-background"></div>`;let t=[],r=[];return e.length>4?(t=e.slice(0,3),r=e.slice(4,e.length)):t=e,s`<ul class="ri-car-amenities ri-car-amenities-background">
		${t.map(i=>{let a=gt(i),o=i.status==="NOT_AVAILABLE"||i.status==="RESERVED";return s`<li>
				<span
					class="db-tag"
					data-no-text="true"
					data-icon="${a}"
					data-icon-trailing="${o?"cross_circle":p}"
				>
					${vt(i.status,a,i.amount)}
				</span>
			</li>`})}
		${r.length>0?s`<li>
					<span
						class="db-tag"
						data-no-text="true"
						data-icon="more_horizontal"
					>
						${r.map(i=>vt(i.status,gt(i),i.amount)).join(" & ")}
					</span>
				</li>`:p}
	</ul>`};var Zi={};var te=class extends L{constructor(){super(...arguments);this.i18n=!1}render(){return Ki({amenities:this.amenities})}static{this.styles=C([Zi,T].join(`
`))}};m([u({reflect:!0,type:Array})],te.prototype,"amenities",2);var ee=class extends te{};ee.styles=[...w(),...A(ee.styles)];customElements.get("ri-car-amenities")||customElements.define("ri-car-amenities",ee);var re=class extends Ne{};re.styles=[...w(),...A(re.styles)];customElements.get("ri-car-item")||customElements.define("ri-car-item",re);var ie=class extends R{};ie.styles=[...w(),...A(ie.styles)];customElements.get("ri-car-sequence")||customElements.define("ri-car-sequence",ie);var ae=class extends O{};ae.styles=[...w(),...A(ae.styles)];customElements.get("ri-car-sequence-overview")||customElements.define("ri-car-sequence-overview",ae);})();
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
lit-html/directive.js:
lit-html/async-directive.js:
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

lit-html/directive-helpers.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
